var express = require('express');
var swig = require('swig');
var app = express();

var port = 3000;
app.set('views', './views');
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.get('/', (req, res) => {
	res.render('index');
});

app.listen(port, () => {console.log("Listening on port " + port)});