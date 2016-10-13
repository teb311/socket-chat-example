var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('index');
});

io.on('connection', function(socket){
  console.log("someone entered the chat room -- setup listener for them!");

  socket.on('client-chat-message', function(data) {
    io.emit('server-chat-message', data)
  });
});


const PORT = process.env.PORT || 3000
server.listen(PORT, function(){
  console.log(`listening on localhost:${PORT}`);
});
