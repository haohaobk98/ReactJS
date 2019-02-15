var express = require("express");
var bodyParse = require("body-parser");
var parse = bodyParse.urlencoded({extended:false});
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("/views","./views");
app.listen(3001);

app.get("/",function(req,res){
    res.render("trangchu");
});

var mang = ["nodejs","reactjs","php"];

app.post("/getNotes",function(req,res){
    res.send(mang);
})

app.post("/addNotes",parse,function(req,res){
    var note = req.body.note;
    mang.push(note);
    res.send(mang);
})

app.post("/deleteNote",parse,function(req,res){
    var note = req.body.note;
    mang.splice(note,1);
    res.send(mang);
})

app.post("/saveNote",parse,function(req,res){
    var id= req.body.id;
    console.log(id);
    mang[id] = req.body.noidung;
    res.send(mang);
})