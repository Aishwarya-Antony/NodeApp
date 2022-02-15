var express = require('express');
var router = express.Router();
var students=[];


/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("****************************")
  // students.push({name: "Bala"})
  res.json({"name": "Bala"});
});

module.exports = router;
