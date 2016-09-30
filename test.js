var server = require('./app');

// To test path other than the 3 HTTP endpoints
var testName = 'testing'; //Enter path that are outside the 3 HTTP endpoints specified.
var testURL = 'http://localhost:3000/' + testName;

// To test valid Part 2 URL
var name1 = 'BigCommerce_123'; //Enter a valid name consists of a-z,A-Z,0-9,_(underscore)
var testURL21 = 'http://localhost:3000/hello/' + name1;

//To test invalid Part 2 URL
var name2 = 'BigCommerce@'; //Enter an invalid name that consists of character other than a-z,A-Z,0-9,_(underscore)
var testURL22 = 'http://localhost:3000/hello/' + name2;

//To test twitterID without tweet
var twitterID1 = 'sportparagon'; //Enter a twitterID who have 0 tweet
var testURL31 = 'http://localhost:3000/histogram/' + twitterID1;

//To test twitterID with tweet
var twitterID2 = 'BigCommerce'; //Enter a twitterID who have at least 1 tweet
var testURL32 = 'http://localhost:3000/histogram/' + twitterID2;

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


// Test if part 1 if working
describe('http://localhost:3000/', function () {
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

// Test if other path returns 404
describe(testURL, function () {
    it('should return 404', function (done) {
        http.get(testURL, function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

// Test if part 2 is working
describe(testURL21, function () {
    it('should return 200', function (done) {
        http.get(testURL21, function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('should say "Hello ' + name1 +'"', function (done) {
        http.get(testURL21, function (res) {
            var str = '';

            res.on('data', function (data) {
                str += data;
            });

            res.on('end', function () {
                assert.equal('Hello ' + name1, str);
                done();
            });
        });
    });
});

// Test if :name only consists of a-z, A-Z, 0-9 and _(underscore)
describe(testURL22, function () {
    it('should return 404', function (done) {
        http.get(testURL22, function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

// Test if part 3(User without tweet) is working
describe(testURL31, function () {
    it('should return 200', function (done) {
        http.get(testURL31, function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });

    it('should say "There is no tweet from ' + twitterID1 + '"', function (done) {
        http.get(testURL31, function (res) {
            var str = '';

            res.on('data', function (data) {
                str += data;
            });

            res.on('end', function () {
                assert.equal('There is no tweet from ' + twitterID1, str);
                done();
            });
        });
    });
});

// Test if part 3(User with tweet) is working
describe(testURL32, function () {
    it('should return 200', function (done) {
        http.get(testURL32, function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});