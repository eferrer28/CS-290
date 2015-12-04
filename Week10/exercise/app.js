var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
//var credentials = require('./credentials.js');
var unirest = require('unirest');
var request = require('request');
var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3001);
app.use(express.static('public'));

app.get('/', function(req, res){   
    res.render('home');
});


app.get('/unirest', function(req, res){  
	res.render('unirest');
});

app.get('/data', function(req, res){  
	res.render('data');
});



app.get('/example', function(req, res){
    
    
unirest.get("https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[city_cont]=Chino&q[state_cont]=California&radius=25")
.header("X-Mashape-Key", "KMFbmMJvR5mshlzIpvvR6AEKR5TGp1ISCRJjsnd550UPefSzse")
.header("Accept", 'application/json')
.end(function (result) {
         
  console.log(result.status, result.headers, result.body);
	res.render('example', {
        title: "Fruits of Your Labor",
        data: result.body.places,
    });
});
});
    
    
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
