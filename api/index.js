const express    = require('express');
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const crypto     = require('crypto');
const nodemailer = require('nodemailer');
const cors       = require('cors');
const jwt        = require("jsonwebtoken");

const app         = express();
const port        = 8000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect("",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log("error connecting to mongodb", err);
});

app.listen(port,()=>{
    console.log("server is running at port 8000");
});

