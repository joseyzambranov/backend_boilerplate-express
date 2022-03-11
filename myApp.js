var express = require('express');
var app = express()
require('dotenv').config()

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