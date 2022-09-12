var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static('public'));

var header = fs.readFileSync(__dirname+"/pages/header.html");
var footer = fs.readFileSync(__dirname+"/pages/footer.html");
app.get("/",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/index.html");
    res.end(header + content + footer);
});
app.get("/about",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/about.html");
    res.end(header + content + footer);
});
app.get("/contact",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/contact.html");
    res.end(header + content + footer);
});
app.get("/gallery",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/gallery.html");
    res.end(header + content + footer);
});
app.get("/services",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/services.html");
    res.end(header + content + footer);
});
app.get("/about",(req,res)=>{
    var content = fs.readFileSync(__dirname+"/pages/about.html");
    res.end(header + content + footer);
});


app.listen(8081,'localhost',()=>{
    console.log("port running at http://localhost:8081");
})