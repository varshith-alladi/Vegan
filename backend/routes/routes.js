const express = require('express');
const Product=require("../models/product")
const Message = require('../models/messages');
const router = express.Router()
router.post('/products', async (req, res) => {
    const data = new Product({
        id:req.body.id,
        title:req.body.name,
        desc:req.body.desc,
        category:req.body.category,
        price:req.body.price,
        image:"none"
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
module.exports = router;