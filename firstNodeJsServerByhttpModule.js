var http = require('http');

var server = http.createServer(function (request, respond){
      respond.end("Assalaamu alaikum!")
});

server.listen(5050);
console.log("Server is Running")