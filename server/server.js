var express = require('express');
var parser = require('body-parser');
var request = require('request');
var app = express();



// app.use(function(req, res, next) {
//  res.header("Access-Control-Allow-Origin","*");
//  res.header('Access-Control-Allow-Origin', "Origin, X-Requested-With, Content-Type, Accept");
//  next();
// })

app.use(express.static(__dirname+"/../client/"));

// app.get('/', ///serve index.html)
app.get('/api/facts', function (req, res) {
  request.get('https://www.reddit.com/r/todayilearned/hot.json?limit=25')
    .pipe(res);
});

app.listen(8000);

module.exports = app;