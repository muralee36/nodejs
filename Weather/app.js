const express = require("express")
const https = require("https")
const app = express()
const bodyParser = require('body-parser')

 // package use
app.use(bodyParser.urlencoded({extended: true}));
// running server
app.listen("3000", () =>{
  console.log("Server running at port 3000");
});

// endpoints
app.get("/", (req, res)=> {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res)=>{
  // res.sendFile(__dirname + "/index.html");
  city = req.body.city;
  appId = "c6e4a83b324c5c9f4364189740d8873f";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + appId +  "&units=metric";
  https.get(url, (response)=>{
    response.on('data', (d)=>{
      const data = JSON.parse(d);
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const imageId = data.weather[0].icon
      const imageUrl = " http://openweathermap.org/img/wn/" + imageId + "@2x.png"
      res.writeHead(200 , {'Content-Type' : 'text/html'})
      res.write("<style media='screen'> body { background-image: url('https://www.teahub.io/photos/full/169-1690047_full-hd-morning-background.jpg');}</style>");
      res.write("<center>")
      res.write("<h2>The temperature is " + temp + " Celsius.</h2>");
      res.write("<h3>City of "+ city + " has " + desc + " . </h3>");
      res.write("<img src='" + imageUrl +"' alt='weatherIcon'>")
      res.write("</center>")
      res.send();
    });
  });
});

//
