const express= require("express");
const {addproduct,getProducts}= require("../controller/product_controller");
const {getP,editP} =require("../controller/getproduct_controller");
const {delP,getSingleM}= require("../controller/deleteproduct_controller");
const {addMessage,getMessages}=require("../controller/addmessage_controller");
const Message = require('../models/messages');
const router= express.Router();

const { register, login, getusers, getSingleU, deleteuser } = require("../controller/authControllers");
const { checkUser } = require("../middlewares/authMiddleware");

router.post("/", checkUser); 
router.post("/register", register);
router.post("/login", login);
router.get("/users",getusers);
router.get("/users/:id",getSingleU);
router.delete('/users/:id', deleteuser)
module.exports = router;

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    //   cb(null, '../uploads')
    cb(null, path.resolve(__dirname, '../uploads'));
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });
  
  const upload = multer({ storage: storage });

router.post("/products", upload.single('image'),addproduct);
router.get("/allProducts",getProducts);
router.get("/allProducts/:id",getP);
router.put("/allProducts/:id",editP);
router.delete("/allProducts/:id",delP);

router.post("/contact", addMessage);
router.get("/getmessages", getMessages);
router.get("getmessages/:id", getSingleM);
// router.delete('getmessages/:id', delMessage);
router.delete('/getmessages/:id', (req, res) => {
    Message.findByIdAndDelete(req.params.id).then((blog) => {
        if (!blog) {
            return res.status(404).send();
        }
        res.send(blog);
    }).catch((error) => {
        res.status(500).send(error);
    })
})
module.exports = router;