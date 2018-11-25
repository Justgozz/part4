var fs=require("fs");
var http=require("http");

//定义读取文件路径
var read=fs.createReadStream("04read.json","utf-8");
//监听文件打开
read.on("open",function(){
	console.log("文件打开");
})

//读取文件
var data="";
read.on("data",function(chunk){
	data+=chunk;
})

//监听数据读取完毕
read.on("end",function(){
	console.log(data);
	console.log("数据读取完毕");
})

//监听关闭
read.on("close",function(){
	console.log("文件关闭");
})


var server=http.createServer(function(req,res){
	res.stateCode==200;
	res.end(data);
})

server.listen(3000,function(){
	console.log("服务器已经启动");
})