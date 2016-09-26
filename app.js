var express = require('express') // Import Express framework
var port = 3000; // Port number

var app = express();

// Request handler for "/"
app.get('/', function(request,response){
    response.writeHead(200, {"Context-Type":"text/plain"});
    response.write("Try /hello/:name");
    response.end();
})

// Request handler for "/hello/:name
app.get('/hello/:name', function(request,response){
    response.writeHead(200, {"Context-Type":"text/plain"});
    response.write("Hello " + request.params.name);
    response.end();
});

// Create HTTP Server and listen to port
app.listen(port, function(){
    console.log("Server is now running...");
})