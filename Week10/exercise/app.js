var express = require('express');
var mysql = require('./dbcon.js');
var app = express();
var handlebars = require('express-handlebars').create({
    defaultLayout: 'main'
});
var request = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/static', express.static('public'));
//app.use(express.static('public'));
//app.use(express.static(__dirname + '/public'));



app.engine('handlebars', handlebars.engine);

app.set('view engine', 'handlebars');
app.set('port', 3000);

app.get('/reset-table', function (req, res, next) {
    console.log("resetting shit");
    var context = {};
    mysql.pool.query("DROP TABLE IF EXISTS workouts", function (err) {
        var createString = "CREATE TABLE workouts(" +
            "id INT PRIMARY KEY AUTO_INCREMENT," +
            "name VARCHAR(255) NOT NULL," +
            "reps INT," +
            "weight INT," +
            "date DATE," +
            "lbs BOOLEAN)";
        console.log("fuck me in the ear");
        mysql.pool.query(createString, function (err) {
            context.results = "Table reset";
            res.render('home', context);
            // res.sendFile('public/htmlform.html', {root: __dirname });
        })
    });
});



app.get('/', function (req, res, next) {
    var context = {};
    mysql.pool.query('SELECT * FROM workouts', function (err, rows, fields) {
        if (err) {
            next(err);
            return;
        }
        context.results = JSON.stringify(rows);
        console.log("fuck me in the ear again");
        res.render('home', context);
    });
});


/*
app.post('/', function (req, res, next) {
    var context = {};
    //if (req.body['Exercise']) {
        console.log("HOO");
        console.log(req.body);
        mysql.pool.query("INSERT INTO workouts (`name`, `reps`, `weight`, `date`, `lbs`) VALUES (?, ?, ?, ?, ?)", [req.body.name, req.body.reps, req.body.weight, req.body.date, req.body.lbs], function (err, result) {
            if (err) {
                next(err);
                return;
            }
            var newId = result.insertid;

            mysql.pool.query('SELECT * FROM workouts WHERE id=?', [newId], function (err, rows, fields) {

                if (err) {
                    next(err);
                    return;
                }
                
               //context.results = "Inserted id " + result.insertId;
                context.results = JSON.stringify(rows);
                //res.type('json');
                res.send(context);
               // var data = rows;
                //data = JSON.stringify(data);
                //res.send(data);
            });
        });
   // }
});
*/


app.get('/', function (req, res, next) {
    var context = {};
    mysql.pool.query("INSERT INTO workouts (`name`, `reps`, `weight`, `date`, `lbs`) VALUES (?, ?, ?, ?, ?)", [req.query.name, req.query.reps, req.query.weight, req.query.date, req.query.lbs], function (err, result) {
        if (err) {
            next(err);
            return;
        }
        context.results = "Inserted id " + result.insertId;

        var newId = result.newid;

        mysql.pool.query('SELECT * FROM workouts WHERE id=?', [newId], function (err, rows, fields) {
            if (err) {
                next(err);
                return;
            }
            context = rows;
            res.send(JSON.stringify(rows));
        });


    });
});









app.get('/delete',function(req,res,next){
  var context = {};
  mysql.pool.query("DELETE FROM workouts WHERE id=?", [req.query.id], function(err, result){
    if(err){
      next(err);
      return;
    }
    context.results = "Deleted " + result.changedRows + " rows.";
    res.render('home',context);
  });
});


app.use(function (req, res) {
    res.status(404);
    res.render('404');
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
