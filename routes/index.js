var express = require('express');
var router = express.Router();

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
})

module.exports = router;
