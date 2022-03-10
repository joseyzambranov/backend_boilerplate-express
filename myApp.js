var express = require('express');
var app = express();

var absolutePath = __dirname + "/views/index.html"
var obj = {"message": "Hello json"}

app.use("/public", express.static(__dirname+"/public"))

app.get("/",(rep,res)=>{
    res.json(obj)
})





































 module.exports = app;
