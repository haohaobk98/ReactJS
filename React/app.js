var express = require("express");
var bodyParse = require("body-parser");
var parse = bodyParse.urlencoded({extended:false});
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
app.set("views","./views");
app.listen(3000);

var mang=["reactjs","jquery","php"];
app.get("/",(req,res)=>{
    res.render("trangchu");
})

app.post("/getNotes",function(req,res){
    res.send(mang);
});

app.post("/add",parse,function(req,res){
    var note = req.body.note;
    mang.push(note);
    res.send(mang);
})

app.post("/delete",parse,function(req,res){
    var note = req.body.note;
    mang.pop(note);
    res.send(mang);
})

app.post("/save",parse,function(req,res){
    var id = req.body.id;
    var noidung = req.body.noidung;
    var index = mang.indexOf(id);
    mang[index] = noidung;
    res.send(mang);


})