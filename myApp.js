var express = require('express');
var app = express();

var absolutePath = __dirname + "/views/index.html"

app.use("/public", express.static(__dirname+"/public"))

app.get("/json",(rep,res)=>{
    res.json({
        message:"Hello json"
    })
})





































 module.exports = app;
