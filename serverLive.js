var express = require('express');
var morgan = require('morgan');

var hostname = 'localhost';
var port = 3945;

var app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/src'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});