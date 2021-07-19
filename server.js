const passport = require('passport')
const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passportLocal = require('passport-local').Strategy


const app = express();



//midelware
app.use(express.urlencoded({extended:true}));
app.use(cookieParser('lsjfeirjrwp2842387wke9273y'));

app.use(session({
    secret: 'lsjfeirjrwp2842387wke9273y',
    resave: true,
    saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal(function(username, password,done){
    
    if(username === "Fredy" && password === "12345"){
        return done(null,{id: 1, name:"user"});
    }
    done(null, false);

}));

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id,done){
    done(null, {id :1, name:"user"});
});



app.set('view engine', 'ejs')
app.use(express.static("views"));

app.get("/",(req, res, next)=>{
    if(req.isAuthenticated()) return next();
    res.redirect('/login')    
}, (req, res)=>{
    res.send("hola");
});

app.get("/login", (req, res)=>{
    res.render("login")
});

app.post("/login", passport.authenticate('local',{
    //
    successRedirect: "/",
    failureRedirect: "/login"
    //
}));

app.listen(3000, ()=> console.log("Server Started PORT 3000"))