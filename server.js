//check README.md

//create a web application that uses the express frameworks and socket.io to communicate via http (the web protocol)
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

//when a client connects serve the static files in the public directory ie public/index.html
app.use(express.static('public'));

//when a client connects send a message in the console
io.on('connection', function (socket) {
    //this appears in the terminal
    console.log('a user connected');
    //this is sent to the client
    socket.emit('message', 'You are connected!');
});

//listen to the port 3000
http.listen(3000, function () {
    console.log('listening on *:3000');
});



