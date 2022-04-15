var http = require('http');

var server = http.createServer(function (request,respond) {
    respond.end("Assalaamu alaikum\nWelcome to new Journey!")
});
server.listen(5050); // open localhost:5050 to check whether it is running in your server or not!
console.log("Alhamdulillah, Server is running!"); // this will be printed in the console for successful action 
