//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req,res) {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let result = weight / Math.pow(height, 2);

  res.send("Your BMI is " + result);
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
