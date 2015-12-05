var express = require('express');
var mysql = require('./dbcon.js');


var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var request = require('request');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');
app.set('port', 3000);


app.get('/', function(req, res){   
    res.render('home');
});

app.get('/',function(req,res,next){
    var context = {};
mysql.pool.query('SELECT * FROM workouts', function(err, rows,   fields){
    if(err){
        next(err);
        return;
            }
    context.results = JSON.stringify(rows);
    res.render('home', context);
    });
});

app.get('/reset-table',function(req,res,next){
  var context = {};
  mysql.pool.query("DROP TABLE IF EXISTS workouts+", function(err){ 
    var createString = "CREATE TABLE workouts("+
    "id INT PRIMARY KEY AUTO_INCREMENT,"+
    "name VARCHAR(255) NOT NULL,"+
    "reps INT,"+
    "weight INT,"+
    "date DATE,"+
    "lbs BOOLEAN)";
    mysql.pool.query(createString, function(err){
      context.results = "Table reset";
      res.render('home',context);
    })
  });
});

 


app.post('/insert',function(req,res){
    var context = {};
    if(req.body['Exercise'])
        {
            console.log("HOO");
            console.log(req.body);
            mysql.pool.query("INSERT INTO workouts (`name`, `reps`, `weight`, `data`, `lbs`) VALUES (?, ?, ?, ?, ?)",
   [req,body.name, req.body.reps, req.body.weight, req.body.date, req.body.lbs], function(err, result){
        if(err){
           next(err);
            return;
           }
    context.results = "Inserted id " + result.insertId;        
    res.render('home',context);
});
        }
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
