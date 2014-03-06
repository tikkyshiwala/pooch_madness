
/*
 * GET home page.
 */

exports.index = function(req, res){
  var Bracket = require('../models/bracket');
  name = req.cookies.name
  res.render('index', {
    title: res.app.get('appName'),
    bracket: Bracket.get(),
    name: name
  });
};
