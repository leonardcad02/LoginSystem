const { render } = require('ejs');
const express = require('express');
const app = express();


app.set('view engine', 'ejs')

app.get("/", (req, res)=>{
    //


    //
});

app.get("/login", (req, res)=>{
    //
    res.render("login")
});

app.post("/login", (req, res)=>{
    //


    //
});

app.listen(3000, ()=> console.log("Server Started PORT 3000"))