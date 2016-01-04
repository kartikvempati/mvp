var express = require('express');
var parser = require('body-parser');

var app = express();


app.listen(8000);

app.get('/', function (req, res) {

});

module.exports = app;