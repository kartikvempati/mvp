var express = require('express');
var parser = require('body-parser');
var request = require('request');
var app = express();


app.listen(8000);

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header('Access-Control-Allow-Origin', "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

app.get('/', function (req, res) {
	request('https://www.reddit.com/r/todayilearned/hot.json?limit=10',function (err, response, body) {
		if (!err && response.statusCode === 200) {
			console.log(JSON.parse(body).data.children);
			res.send(JSON.parse(body));
		}
	})
});

module.exports = app;