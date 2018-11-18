var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('home');
});

app.get('/campgrounds', function(req, res) {
    res.render('campgrounds');
});

app.listen(8000, function() {
    console.log('Server Started!!');
});