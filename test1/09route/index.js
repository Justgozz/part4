var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('get请求')
})

app.post('/',function(req,res){
	res.send("post请求")

})
app.put('/',function(req,res){
	res.send("put请求")
})
app.delete('/user',function(req,res){
	res.send("delete请求")
})

app.listen(3000,function(){
      console.log("服务器运行在3000端口上");
    })