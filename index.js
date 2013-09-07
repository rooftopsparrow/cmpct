var app = require('./app');

var port = process.env.PORT || 8080;
app.listen(port);
console.log("Server listening on port " + port);