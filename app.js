var express = require('express');

var app = express();

app.use(express.logger());
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});
app.use(app.router);

var users = require('./routes/users');

app.get('/users', users.all);

app.get('/users/:id', users.get);

// app.get('/users/:id', function(req, res) {
//   var id = req.params.id;
//   res.send('hello world' + id);
// });

module.exports = app;
