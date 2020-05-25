var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var moment = require('moment'); // require


 

app.get('/:date_string', function(req, res){
 
  let dx = req.params.date_string;
  // console.log(dx.getDate())
 let pd =  moment.unix(dx).date()
 
  if(pd ==moment().date()){
    res.sendFile(__dirname + '/index.html');
  }
  // 
});

 
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
