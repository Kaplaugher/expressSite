var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send("hellooooo")
  var student1 = "Sean"
  var fruits = ['apple', 'banana', 'orange', 'pear'
];

  res.render('index', { student: student1, fruitArray: fruits });
});

router.get('/canvas', function(req, res, next){
  res.render('canvasGame', {});
});
router.get('/weather', function(req, res, next){
  var apikey = 'e312dbeb8840e51f92334498a261ca1d';
  var weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=Atlanta&units=imperial&APPID="+apikey;

  request.get(weatherUrl, (error, response, weatherData)=>{
    console.log(weatherData);
    weatherData = JSON.parse(weatherData);
    res.render('weather', {weatherObject: weatherData})
  });
});


module.exports = router;
