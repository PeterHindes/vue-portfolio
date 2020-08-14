var sass = require('node-sass');
var express = require('express');
var app = express();

var fs = require('fs');
//var util = require('util');

app.set('view engine', 'pug')

app.get('/', function (req, res) {
    sass.render({
    file: "./scss/s.scss",
    }, function(err, resultt) {
        fs.readFile('./script/s.js', 'utf8', function(err, script) {
            console.log(script);
            //console.log(resultt.css);
            res.render('index', { title: 'Hey', message: 'Hello there!', css: resultt.css, scipp: script })
        });
    });
    console.log(req.url);
})

//app.use(express.static('data')); // Serves resources from public folder

app.listen(5000); // Start server