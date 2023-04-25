const User = require("../models/authModel");
const jwt = require("jsonwebtoken");
const redisClient=require("../middlewares/redis");
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "kishan sheth super secret key", {
    expiresIn: maxAge,
  });
};

const handleErrors = (err) => {
  let errors = { email: "", password: "" };

  console.log(err);
  if (err.message === "incorrect email") {
    errors.email = "That email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "Email is already registered";
    return errors;
  }

  if (err.message.includes("Users validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.register = async (req, res, next) => {
  try {
    const { username,email, password } = req.body;
    const user = await User.create({ username, email, password });
    const token = createToken(user._id);

    res.cookie("jwt", token, {
      withCredentials: true,
      httpOnly: false,
      maxAge: maxAge * 1000,
    });

    res.status(201).json({ user: user._id, created: true });
  } catch (err) {
    console.log(err);
    const errors = handleErrors(err);
    res.json({ errors, created: false });
  }
};

module.exports.login = async (req, res) => {
  try{
    const { email, password } =req.body
    let data= await redisClient.get(email)
    if(data){
      console.log("Already cached")
      // const user = await User.findOne({ email: email });
      console.log(data)
      const user=JSON.parse(data)
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
      res.status(200).json({ user: user._id, status: true });
      console.log(user)
      // if(user==undefined){
      //   res.json({ errors, status: false });
      //}
    }
    else{
      try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id, status: true });
        redisClient.set(email,JSON.stringify(user));
      } catch (err) {
        const errors = handleErrors(err);
        res.json({ errors, status: false });
      }
    }

  }
  catch(err){
    console.log(err)
  }
};

module.exports.getusers=async(req,res)=>{
  try{
    const users = await User.find({});
    res.status(200).json(users)
  }catch(error){
      res.status(404).json({message : error.message})
  }
}
module.exports.getSingleU=async (req,res)=>{
  console.log(req.params.id);
  try{
    const user = await User.findById({_id: req.params.id });
      res.status(200).json(user);
  }catch(error){
     res.status(400).json({message:error.message});
}
}
module.exports.deleteuser=async(req,res)=>{
  const query = { _id:req.params.id };
    console.log(req.params.id);
    try{
      const result = await User.findByIdAndDelete(query);
      res.status(200).json({message:"User deleted successfully"});
      if (result.deletedCount === 1) {
        console.log('User deleted successfully');
      } else {
        console.log('User not found or delete failed');
      }
    }catch(error){
       res.status(400).json({message:error.message});
    } 
}