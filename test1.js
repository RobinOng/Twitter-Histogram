var server = require('./app');

describe('server', function () {
    before(function () {
        server.listen(3000);
    });

    after(function () {
        server.close();
    });
});

var assert = require('assert');
var http = require('http');

describe('/', function () {
    it('should return 200', function (done) {
        http.get('http://localhost:3000', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('should say "Try /hello/:name"', function (done) {
        http.get('http://localhost:3000', function (res) {
            var str = '';

            res.on('data', function (data) {
                str += data;
            });

            res.on('end', function () {
                assert.equal('Try /hello/:name', str);
                done();
            });
        });
    });
});

describe('/test', function () {
    it('should return 404', function (done) {
        http.get('http://localhost:3000/test', function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

describe('/hello/BigCommerce_123', function () {
    it('should return 200', function (done) {
        http.get('http://localhost:3000/hello/BigCommerce_123', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('should say "Hello BigCommerce_123"', function (done) {
        http.get('http://localhost:3000/hello/BigCommerce_123', function (res) {
            var str = '';

            res.on('data', function (data) {
                str += data;
            });

            res.on('end', function () {
                assert.equal('Hello BigCommerce_123', str);
                done();
            });
        });
    });
});


describe('/hello/BigCommerce@', function () {
    it('should return 404', function (done) {
        http.get('http://localhost:3000/hello/BigCommerce@', function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

describe('/histogram/sportparagon', function () {
    it('should return 200', function (done) {
        http.get('http://localhost:3000/histogram/sportparagon', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('should say "There is no tweet from sportparagon"', function (done) {
        http.get('http://localhost:3000/histogram/sportparagon', function (res) {
            var str = '';

            res.on('data', function (data) {
                str += data;
            });

            res.on('end', function () {
                assert.equal('There is no tweet from sportparagon', str);
                done();
            });
        });
    });
});

describe('/histogram/BigCommerce', function () {
    before(function(done){
        var statusUpdate = testFunction();
        setTimeout(function(){done()}, 30*1000);
    });

    it('should return 200', function (done) {
        http.get('http://localhost:3000/histogram/BigCommerce', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    //Uncomplete test
    it('should say "the JSON"', function (done) {
        http.get('http://localhost:3000/histogram/BigCommerce', function (res) {
            var str = '';

            res.on('data', function (data) {
                str += data;
            });

            res.on('end', function () {
                assert.equal('', str);
                done();
            });
        });
    });
});

function testFunction(){
    var twitter = require('twitter');// Import Twitter npm
    var env = require('dotenv').config({path: 'api.env'}); //Import dotenv npm


    var client = new twitter({
        consumer_key: env.consumer_key,
        consumer_secret: env.consumer_secret,
        access_token_key: env.access_token_key,
        access_token_secret: env.access_token_secret
    });

    var testDuration = 5; //
    var minute = -1;
    var startTime = new Date();
    var startTimeMsec = startTime.getTime();
    var i = 0;
    var testString = [];
    var testObject = {};

    counter();
    postTweet();
    var timer = setInterval(function(){counter()},1000);
    var postTweetTimer = setInterval(function(){postTweet()},Math.floor((Math.random() * 2) + 1)*1000);

    function postTweet(){
        var randomNumber = Math.floor((Math.random() * 100) + 1);

        client.post('statuses/update', {status: 'Testing tweet ' + randomNumber}, function (error, tweet, response) {
            if (!error) {
                postTweetProcess(tweet.created_at);
            }
        });
    }

    function postTweetProcess(date){
        var postTweetTime = new Date(date);
        var postTweetTimeMsec = postTweetTime.getTime();
        testString[i] = postTweetTimeMsec;
        i++;
        console.log(postTweetTime);
    }

    function counter(){
        minute++;
        console.log(minute);

        if (minute == testDuration){
            clearInterval(timer);
            clearInterval(postTweetTimer);
            console.log(testString);
            for (var j = 0; j < testString.length;j++) {
                console.log(j);
                if (j == testString.length-1) {
                    return 999;
                }
            }

        }
    }
}