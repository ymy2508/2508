var express = require('express');
var router = express.Router();
var mysql=require('mysql')
var pool=mysql.createPool({
	host:'localhost',
	user:'root',
	password:'ymy2508',
	database:'new'
})
router.post('/list',function(req,res,next){
	var a=req.body.uid
	res.header('Access-Control-Allow-Origin','*')
	pool.query('SELECT title,name,uid FROM new',function(err,rows){
		res.send(rows)
	})
})
router.post('/time',function(req,res,next){
	var a1=req.body.title
	var a2=req.body.name
	var a3=req.body.center
	var a4=req.body.uid
	res.header('Access-Control-Allow-Origin','*')
	pool.query('INSERT INTO xin (title,name,center,uid) VALUES ("'+a1+'","'+a2+'","'+a3+'","'+a4+'")',function(err,rows){
		res.send(rows)
	})
})
module.exports = router;
