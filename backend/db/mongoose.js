const mongoose=require("mongoose")

const Connection=async()=>{
    try{
       await mongoose.connect("mongodb://0.0.0.0:27017/FDFEd2", { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database Connected Successfully");
    } catch(err) {
        console.log("Unable to connect to MongoDB. Error: " + err);
      }
}
module.exports= Connection;

// 0.0.0.0:27017
