var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'baobei'
})

/* GET home page. */
router.post('/', function(req, res, next) {
  var texta=req.body.data;
  console.log(texta)
  pool.query(`SELECT * FROM search WHERE name LIKE '%${texta}%' OR detail LIKE '%${texta}%'`,function(err,rows){
    res.header('Access-Control-Allow-Origin','*');
    res.send(rows)
  })
});

module.exports = router;
