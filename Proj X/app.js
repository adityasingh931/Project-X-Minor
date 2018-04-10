// deceleration of relevent modules
var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

//routes logics
app.get("/", function (req, res) {
    res.render("home");    
});


//starting server and starting listener
app.listen(process.env.PORT, process.env.ID, function(){
    console.log("Starting listening to the server...");
});
