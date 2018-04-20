// deceleration of relevent modules
var express = require("express"),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    passLocal = require("passport-local"),
    passLocalMongoose = require("passport-local-mongoose"),
    express_session = require("express-session"),
    bussUser = require("./models/bussUser");

var app = express();
mongoose.connect("mongodb://localhost/projectDB");


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express_session({
    secret: "@Abzs09110",
    resave: false,
    saveUninitialized: false
}));

// initializing passport & its sessions
app.use(passport.initialize());
app.use(passport.session());
//used for reading the data from session and encoding & decoding it.
passport.serializeUser(bussUser.serializeUser());
passport.deserializeUser(bussUser.deserializeUser());
passport.use(new passLocal(bussUser.authenticate()));


//Start of Routing Logics
//========================

app.get("/", function (req, res) {
    res.render("home");
});

//signup auth routes
app.post("/signup", function (req, res) {
    // var data = new bussUser({ firstName: req.body.firstName, lastName: req.body.lastName, username: req.body.email, rePassword: req.body.rePassword, terms: req.body.terms });
    bussUser.register({ firstName: req.body.firstName, lastName: req.body.lastName, username: req.body.email, rePassword: req.body.rePassword}, req.body.password, function (err, returnUser) {
        if (err) {
            console.log("Authentication error");
            console.log(err);
            return res.redirect("/test");
        }
        passport.authenticate("local")(req, res, function () {
            console.log(returnUser);
            res.redirect("/signup");
        });
        console.log(returnUser);
    });
});

app.get("/signup", function (req, res) {
    res.render("signup");
});

//login auth routes
app.get("/login", function (req, res) {
    console.log(req.body.email);
    res.redirect("/dashboard");
});
app.post("/login", passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/test"
}), function (req, res) {
});

//dashboard -> opens only when loged in or just now signed up
app.get("/dashboard", isLoggedIn, function (req, res) {
    res.render("dashboard");
});

//logged-in checker
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next;
    }
    res.redirect("/test");
}

//extra routes
app.get("/test", function (req, res) {
    res.render("test");
});

app.get("*", function (req, res) {
    res.render("error");
});

//End of Routes Logic

//starting server and starting listener
app.listen(2000, function () {
    console.log("Started listening to the server @ port 2000...");
});
