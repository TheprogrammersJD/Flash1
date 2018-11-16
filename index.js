var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

/*app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});*/

io.on('connection', function(socket){
	console.log('User connected.');
	
	socket.on('disconnect', function(){
		console.log('User disconnected.');
	});
});

http.listen(port, function(){
	console.log('listening on *:' + port);
});

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}