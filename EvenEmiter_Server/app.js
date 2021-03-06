var http = require('http');
var events = require('events');
var eventEmitter = new events.EventEmitter();
var requestEventHandler = function () {
    console.log("Przyszedł request z serwera");
}
eventEmitter.on('request', requestEventHandler);

var PORT = 8080;
var server =
    http.createServer(function (request, response) {
        eventEmitter.emit("request");
        response.end('Serwer wywołujący event');
    });
server.listen(PORT, function () {
    console.log("Server listening on:http://localhost:%s", PORT);
});
