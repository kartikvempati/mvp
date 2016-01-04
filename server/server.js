var express = require('express');
var parser = require('body-parser');
var Client = require('node-rest-client').Client;

var app = express();


app.listen(8000);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header('Access-Control-Allow-Origin', "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.get('/', function (req, res) {
	client = new Client();
	client.get("https://www.reddit.com/r/todayilearned/hot.json?limit=10", function (data, response){
		res.end(data);
	});

});

module.exports = app;