var express =require("express");
var cors = require("cors");
var bodyParser = require("body-parser");


var app = express();
require('dotenv').config();
var port = process.env.PORT;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

//var Users = require('./routes/Users')

//app.use('/users', Users)

app.get('/',(req,res)=>{
    res.send("Hello World");
})

require('./routes/auth.route')(app);
app.listen(port,()=>{
    console.log("Server is running on port: "+ port)
})