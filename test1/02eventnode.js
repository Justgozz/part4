var Event=require('events');
class MyEvent extends Event{}

var myEvent=new MyEvent();
myEvent.on('event',()=>{
	console.log('点我干啥');
});

myEvent.emit('event');