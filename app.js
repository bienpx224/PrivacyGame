

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
	 

app.set('port', (process.env.PORT || 80));
app.use(express.static(__dirname + '/views'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    res.render('./monsterhitandrun.html');
});


app.get('/monsterhitandrun', function(req,res){
	res.render('./monsterhitandrun.html');
});

app.listen(app.get('port'), function() {
	console.log("Server running on port "+app.get('port'));
});
