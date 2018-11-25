
//引入express文件
var express = require("express");
//定义express()方法
var app = express();
var route = require("./route.js")

app.use('/',route)

app.listen(3000,function(){
	console.log("服务器运行在3000端口上")
})
