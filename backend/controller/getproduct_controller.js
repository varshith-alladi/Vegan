const Products = require('../models/product');
const { ObjectId } = require('mongodb');
const getP=async (req,res)=>{
    //const query = { _id:req.params.id };
    id=req.params.id;
    const objectId = new ObjectId(id);
    console.log(req.params.id);
    try{
      const product = await Products.findOne({_id: objectId});
      console.log(product);
        res.status(200).json(product);
    }catch(error){
       res.status(400).json({message:error.message});
    } 
}

const editP= async (req,res)=>{
    const {p} =req.body;
    id=req.params.id;
    const objectId = new ObjectId(id);
    const query = { _id:objectId };
    console.log(req.params.id);
    try{
      const product = await Products.findOneAndUpdate(query,p);
        res.status(200).json(product);
    }catch(error){
       res.status(400).json({message:error.message});
    } 
}
module.exports={getP,editP};


