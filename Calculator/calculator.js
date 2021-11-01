const express = require("express")
const app = express()
const bodyParser = require("body-parser")

// package use
app.use(bodyParser.urlencoded({extended: true}));
// arithmetic endpoint
app.get("/arithmetic", (req, res)=> {
  res.sendFile(__dirname + "/index.html")
});
app.post("/arithmetic", (req, res) => {
  no1 = req.body.no1
  no2 = req.body.no2
  arith = req.body.arith
  if (arith == "+"){
    result = Number(no1)+Number(no2);
  }
  else if (arith == "-") {
    result = Number(no1)-Number(no2);
  }
  else if (arith == "*") {
    result = Number(no1)*Number(no2);
  }
  else if (arith == "/") {
    result = Number(no1)/Number(no2);
  }
  res.send(no1 + arith + no2 + " = " + result);
});

// Bmi endpoint
app.get("/bmi", (req, res) => {
  res.sendFile(__dirname + "/bmical.html");
});
app.post("/bmi", (req, res) => {
  height = parseFloat(req.body.height);
  weight = parseFloat(req.body.weight);
  result = (weight * 10000)/ Math.pow(height, 2);
  res.send("Your BMI is: " + result);
})
// Welcome page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/welcome.html")
});

// Run server
app.listen("3000", () => {
  console.log("Listening at Port 3000");
});
