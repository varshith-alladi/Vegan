const Products = require('../models/product');

const addproduct=async (req,res)=>{
   const {id,title,desc,category,price,image}=req.body;

    const newproduct=new Products({
        id:id,title:title,desc:desc,category:category,price:price,image
        // id:id,title:title,desc:desc,category:category,price:price,image: {
        //     data: image.buffer,
        //     contentType: image.mimetype
        //   }
    });
    if (!title || !desc || !category || !price || !image) {
        return res.status(422).json({ message: 'Missing required fields' });
      }
    try{
        await newproduct.save();
        res.status(200).json(newproduct);
    }catch(error){
       res.status(400).json({message:error.message});
    }
}

const getProducts=async (req,res)=>{
    try{
      const products=await Products.find({});
        res.status(200).json(products);
    }catch(error){
       res.status(400).json({message:error.message});
    } 
}



module.exports= {addproduct,getProducts};