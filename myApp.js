var express = require('express');
//const res = require('express/lib/response');
var app = express()
var bGround = require("fcc-express-bground")
require('dotenv').config()

bGround.log("hello world")

app.get("/", (rep, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.use(express.static(__dirname + "/public"))
app.use("/public", express.static(__dirname + "/public"))

/*app.get("/json",(rep,res)=>{
    res.json({
        "message":"Hello json"
    })
})*/

app.get("/json", (rep, res) => {
    var response = {"message": "Hello json"}
    if (process.env.MESSAGE_STYLE === "uppercase") {
        response.message = response.message.toUpperCase()
    }else{
        response.message = response.message.toLowerCase()
    }
        res.json(response)
})






































module.exports = app;