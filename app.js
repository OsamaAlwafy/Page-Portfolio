const express=require("express");

const app=express();
app.set("view engine","ejs");


app.listen("3000");
app.use(express.static("views/app_style"));
app.use(express.static("views/images"));
app.use(express.static("views/app_js"));
console.log("connect server");
app.get("/",(req,res)=> {
    
    res.render("index");

});
app.get("/#Contact",(req,res)=> {
    //console.log(req);
    console("contact");
    res.render("index");
    

});