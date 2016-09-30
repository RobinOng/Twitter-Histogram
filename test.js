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