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


// Test if part 1 if working
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

// Test if other path returns 404
describe('/test', function () {
    it('should return 404', function (done) {
        http.get('http://localhost:3000/test', function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

// Test if part 2 is working
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

// Test if :name only consists of a-z, A-Z, 0-9 and _(underscore)
describe('/hello/BigCommerce@', function () {
    it('should return 404', function (done) {
        http.get('http://localhost:3000/hello/BigCommerce@', function (res) {
            assert.equal(404, res.statusCode);
            done();
        });
    });
});

// Test if part 3(User without tweet) is working
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

// Test if part 3(User with tweet) is working
describe('/histogram/BigCommerce', function () {
    it('should return 200', function (done) {
        http.get('http://localhost:3000/histogram/BigCommerce', function (res) {
            assert.equal(200, res.statusCode);
            done();
        });
    });
});