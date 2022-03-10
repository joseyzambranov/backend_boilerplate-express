var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html"
app.use("/public", express.static(__dirname+"/public"))
app.get("/",(rep,res)=>{
    res.sendFile(absolutePath)
})





































 module.exports = app;
