var User = require('../models/user.js');

var login = function (user, res) {
  res.cookie('user_id', user.id);
  res.redirect('/');
};

exports.signup = function (req, res) {
  res.render('signup', { });
};

exports.signout = function (req, res) {
  res.clearCookie('user_id');
  res.redirect('/');
};

exports.signin = function (req, res) {
  var user = User.login(req.body.name, req.body.password);

  if (user.error) {
    res.render('signup', { signin: { error: user.error } });
  } else {
    login(user, res);
  }
};

exports.create = function (req, res) {
  var user = User.create(req.body.name, req.body.password);

  if (user.error) {
    res.render('signup', { signup: { error: user.error } });
  } else {
    login(user, res);
  }
};
