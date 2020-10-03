//jshint esversion:6

var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));





app.get('/',function(request,response){
  response.sendFile(__dirname+"/index.html");

});
app.post('/facts1',function(req,res){

  res.sendFile(__dirname+"/facts.html");
});

app.post('/PS1',function(req,res){

  res.sendFile(__dirname+"/LastSeason.html");
});
app.post('/CS1',function(req,res){

  res.sendFile(__dirname+"/currentseason.html");
});


app.post('/data',function(req,res){

  res.sendFile(__dirname+"/data.html");
});




app.get('/facts',function(request,response){
response.sendFile(__dirname+"/facts.html");

});
app.post('/data',function(req,res){

  res.sendFile(__dirname+"/data.html");
});

app.post('/home1',function(req,res){

  res.sendFile(__dirname+"/index.html");
});

app.post('/PS1',function(req,res){

  res.sendFile(__dirname+"/LastSeason.html");
});
app.post('/CS1',function(req,res){

  res.sendFile(__dirname+"/currentseason.html");
});









app.get('/PreviousSeason',function(request,response){
  response.sendFile(__dirname+"/LastSeason.html");

});

app.post('/home1',function(req,res){

  res.sendFile(__dirname+"/index.html");
});

app.post('/facts1',function(req,res){

  res.sendFile(__dirname+"/facts.html");
});
app.post('/CS1',function(req,res){

  res.sendFile(__dirname+"/currentseason.html");
});





app.get('/Success',function(request,response){
  response.sendFile(__dirname+"/Success.html");

});

app.post('/home1',function(req,res){

  res.sendFile(__dirname+"/index.html");
});



app.get('/failed',function(request,response){
  response.sendFile(__dirname+"/failure.html");

});
app.post('/data',function(req,res){

  res.sendFile(__dirname+"/data.html");
});
app.post('/home1',function(req,res){

  res.sendFile(__dirname+"/index.html");
});





app.get('/currentseason',function(request,response){
  response.sendFile(__dirname+"/currentseason.html");

});
app.post('/home1',function(req,res){

  res.sendFile(__dirname+"/index.html");
});

app.post('/facts1',function(req,res){

  res.sendFile(__dirname+"/facts.html");
});
app.post('/PS1',function(req,res){

  res.sendFile(__dirname+"/LastSeason.html");
});
app.post('/data',function(req,res){

  res.sendFile(__dirname+"/data.html");
});
//this
var mongoose = require("mongoose");
var uniqueValidator = require('mongoose-unique-validator');;
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://Jayanth:22121998@cluster0.9rpkf.mongodb.net/LetsFPL");

var nameSchema = new mongoose.Schema({

    Name: String,
    Team: {type : String, required: true, unique: true},
    Points: Number
});

nameSchema.plugin(uniqueValidator);
var GW1 = mongoose.model("GW1", nameSchema);
app.get('/data',function(request,response){
  response.sendFile(__dirname+"/data.html");

});
app.post("/Success", (req, res) => {
    var myData = new GW1(req.body);
    myData.save()
        .then(item => {

            res.redirect("/Success");
        })
        .catch(err => {
            res.status(400).redirect("/failed");
        });
});

app.get("/CS1", function (req, res) {
GW1.find({}, function (err, allDetails) {
    if (err) {
        console.log(err);
    } else {
        res.render("index", { details:  allDetails });
    }
}).sort({Points:'desc'});
});













//thissssss
app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });
