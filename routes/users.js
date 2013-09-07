// Users module

module.exports.data = {};

function getAll(callback) {
  callback(null, [{id: 1, name: 'Jason'}]);
}

module.exports.data.all = getAll;


module.exports.all = function(req, res) {
  getAll(function(err, data) {
    if (err) return res.send(500, err.message);
    res.send(data);
  });
};

function fetch(req, res, next) {
  // do stuff
  var id = req.params.id;
  req.user = {id: id, name: "Jason"};
  next();
}

function validate(req, res, next) {
  var user = req.user;
  console.log(user);
  var valid = user.id == 1;
  if (valid) {
    next();
  } else {
    next(new Error("Invalid"));
  }
}

function respond(req, res) {
  res.send(req.user);
}

function errorout (err, req, res, next) {
  res.send(500, err.message);
}
module.exports.get = [fetch, validate, respond, errorout];
