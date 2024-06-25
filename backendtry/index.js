const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.send("Welcome to home page");
});

app.get("/about", function(req, res){
    res.send("Welcome to about page")
});

app.get("/contact", function(req, res){
    res.send("pratima.3099@gmail.com")
});

app.get("/calculator", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/calculator", function(req, res){
    console.log(req.body);
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);

    let sum = n1 + n2;
    res.send("sum:"+sum);
});

app.listen(8000, function(req, res){
    console.log("server is at 5000")
});