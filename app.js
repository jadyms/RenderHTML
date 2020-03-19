var express = require("express");
var app = express();

app.get("/", function(req,res){
//	res.send("Welcome");
	res.render("home.ejs")
});

app.get("/favflower/:flower", function(req,res){
	var flower = req.params.flower;
	res.render("flower.ejs", {favFlower : flower});
});


// Listening the requests
app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server has started!");
});