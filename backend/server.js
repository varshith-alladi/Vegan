// To connect with your mongoDB database
const mongoose = require("mongoose");
const Products = require('./models/product');
const Message=require('./models/messages');
var fs = require('fs');
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());
const connection= require("./db/mongoose")
const PORT = 3001;
var multer = require('multer');
var morgan = require('morgan')
var path = require('path')
var rfs = require('rotating-file-stream')
const Routes=require("./routes/add_product");
const helmet=require("helmet");
const cookieParser = require("cookie-parser");
const BASE_URL = process.env.BASE_URL


// Connecting to database
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST","PUT","DELETE"],
    credentials: true,
  })
);
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
connection();
app.use(express.static('uploads'));

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require('./swagger.json');
const swaggerJSDoc =require("swagger-jsdoc")
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Veganshala API",
      version: "1.0.0",
      description: "A simple Express Library API"
    },
    servers: [
      {
        url: "${BASE_URL}"
      }
    ]
  },
  apis: ["/controllers/.*.js","/routes/*.js"],
};

app.use("/",Routes);
// const SwaggerSpec=swaggerJSDoc(options);
// app.get("./swagger.json",function(req,res){
//   res.setHeader('Content-Type', 'application/json');
//   res.send(SwaggerSpec);
// })
// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'log')
})

// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(cookieParser());
app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})