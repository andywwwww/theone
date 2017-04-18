var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res){
	res.send('hello');
});

app.listen(8080);
console.log('Server running on port 8080');
