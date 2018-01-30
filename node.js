import {
    Buffer
} from 'buffer';

var http = require('http');
var url = require('url');
var fs = require('fs');
var async = require('async');

// restart on crash
// forever start -l forever.log -o out.log -e error.log app.js

// restart on code change
// nodemon app.js

// run apache and node on port 80
// 1. use nginx (both node ans apache as reseved proxy)
// 2. node as reserved proxy to apache
// 3. apache as reserved proxy to node


http.createServer((req, res) => {
    // simple response
    var query = url.parse(req.url, true).query;
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    var name = query.name ? query.name : "alien";
    res.write("Hello " + name);

    // callback hell
    async.waterfall([
        function openfile(callback) {
            fs.open('newtext.txt', 'a+', (err, fd) => {
                callback(err, fd);
            });
        },
        function writefile(fd, callback) {
            var buf = new Buffer("ok ok o k");
            fs.write(fd, buf, 0, buf.length, 0, (err, written, buffer) => {
                callback(err, fd, written);
            });
        },
        function readfile(fd, written, callback) {
            var buf = new Buffer(written);
            fs.read(fd, buf, 0, buf.length, 0, (err, bytes, buffer) => {
                callback(err, buf.toString());
            });
        }
    ], function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    });

    res.end();
}).listen(9123);