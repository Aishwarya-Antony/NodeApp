var express = require('express');
var router = express.Router();
var students=[];
/* GET users listing. */
router.get('/', function(req, res, next) {
students.push({name:"Raja"})
  res.json(students);
});

module.exports = router;
