const Message = require('../models/messages');
const addMessage = async (req, res) => {
    const message = req.body
    const newMessage = new Message(message)

    try{
        await newMessage.save()
        res.status(201).json(newMessage)
    }catch (error){
        res.status(409).json({message : error.message})
    }
}

 const getMessages = async (req, res) => {
    try{
      const Messages = await Message.find({});
      res.status(200).json(Messages)
    }catch(error){
        res.status(404).json({message : error.message})
    }
}
module.exports={addMessage,getMessages};