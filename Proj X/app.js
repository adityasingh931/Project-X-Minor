// deceleration of relevent modules
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

//Start of Routes Logics

app.get("/", function (req, res) {
    res.render("home");    
});

app.get("/test", function(req, res){
    res.render("test");
});

app.get("*", function(req, res){
    res.render("error");
});

//End of Routes Logic

//starting server and starting listener
app.listen(2000, function(){
    console.log("Started listening to the server @ port 2000...");
});
