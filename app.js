var express = require('express') // Import Express framework
var twitter = require('twitter');// Import Twitter npm
var env = require('dotenv').config({path: 'api.env'}); //Import dotenv npm
var port = 3000; // Port number

var app = express();

var client = new twitter({
    consumer_key: env.consumer_key,
    consumer_secret: env.consumer_secret,
    access_token_key: env.access_token_key,
    access_token_secret: env.access_token_secret
});

// Request handler for "/"
app.get('/', function(request,response){
    response.writeHead(200, {"Context-Type":"text/plain"});
    response.write("Try /hello/:name");
    response.end();
})

// Request handler for "/hello/:name"
app.get('/hello/:name(\\w+)', function(request,response){
    response.writeHead(200, {"Context-Type":"text/plain"});
    response.write("Hello " + request.params.name);
    response.end();
});

// Request handler for "/histogram/:twittername"
app.get('/histogram/:twittername(\\w+)', function(request,response) {
    client.get('statuses/user_timeline', { screen_name: request.params.twittername, count: 1000 }, function(error, tweets) {
        if (!error){
            // Check users with no tweet
            if (tweets[0] == undefined){
                console.log("There is no tweet from " + request.params.twittername);
            }else{
                // Process information from Twitter
            }
        }
    });
    response.writeHead(200, {"Context-Type":"text/plain"});
    response.write("Histogram " + request.params.twittername);
    response.end();
});

// Create HTTP Server and listen to port
app.listen(port, function(){
    console.log("Server is now running...");
})

