const mongoose = require('mongoose');
const autoIncrement=require("mongoose-auto-increment")

const messageSchema = mongoose.Schema({
    name : String,
    email : String,
    phonenumber : String,
    message : String
})

autoIncrement.initialize(mongoose.connection)
//messageSchema.plugin(autoIncrement.plugin, "message")

const message = mongoose.model("message", messageSchema)

module.exports=message;