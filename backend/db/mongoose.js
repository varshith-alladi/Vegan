const mongoose=require("mongoose")

const Connection=async()=>{
    try{
       await mongoose.connect("mongodb+srv://yashaswinig20:tvgMUlYasvT6aHHB@cluster0.kofby2f.mongodb.net/WBD", { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Database Connected Successfully");
    } catch(err) {
        console.log("Unable to connect to MongoDB. Error: " + err);
      }
}
module.exports= Connection;

// 0.0.0.0:27017
