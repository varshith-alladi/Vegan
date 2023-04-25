const Products = require('../models/product');
const Message = require('../models/messages');
const delP=async (req,res)=>{
    const query = { id:req.params.id };
    console.log(req.params.id);
    try{
      const result = await Products.deleteOne(query);
      res.status(200).json({message:"product deleted successfully"});
      if (result.deletedCount === 1) {
        console.log('Product deleted successfully');
      } else {
        console.log('Product not found or delete failed');
      }
    }catch(error){
       res.status(400).json({message:error.message});
    } 
}
const getSingleM=async (req,res)=>{
  console.log(req.params.id);
  try{
    const product = await Message.findById(req.params.id);
      res.status(200).json(product);
  }catch(error){
     res.status(400).json({message:error.message});
}
}
module.exports={delP,getSingleM};