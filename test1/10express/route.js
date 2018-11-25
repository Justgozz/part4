
var express = require("express");
var router = express.Router();
var data = require('./data.json');


// 解决跨域问题
router.all("/teacher",function(req, res, next){
  // 跨域处理
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
})

// get请求
router.get('/teacher',function(req,res){
	res.send(data.teacherInfo)
})

router.get('/student',function(req,res){
	res.send(data.studentInfo)
})


module.exports = router



