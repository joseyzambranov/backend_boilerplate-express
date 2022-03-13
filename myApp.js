var express = require('express');
var app = express()
require('dotenv').config()

app.get("/name",function(req,res){
    var name = req.query.first
    var names = req.query.last
    //var {first: name ,last: names }= req.query
    res.json({name : `${name} ${names}`})
})

app.get("/:word/echo", function (req,res){
  var  {word} = req.params
   res.json({ echo: word})
})

const getCurrentTimeData=()=>{
    return new Date().toString()
}

app.get("/now",function(req,res,next){
    req.time = getCurrentTimeData()
    next()
},function(req,res){
    res.json({"time" : req.time})
})

app.use(function(req,res,next){
    
    console.log(req.method + " " + req.path + " - " + req.ip)
    next()
    
})

app.get("/", (rep, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.use(express.static(__dirname + "/public"))
app.use("/public", express.static(__dirname + "/public"))

app.get("/json", (rep, res) => {
    var response = {"message": "Hello json"}
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response.message = response.message.toUpperCase()
    }
        res.json(response)
})











































module.exports = app;