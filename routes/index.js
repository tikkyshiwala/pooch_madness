User = require('../models/user.js');

exports.index = function(req, res){
  var Bracket = require('../models/bracket');
  user_id = req.cookies.user_id;

  name = false
  if(user_id){
    user = User.find(user_id)
    if(user){
      name = User.find(user_id).name;
    }
  }

  res.render('index', {
    title: res.app.get('appName'),
    bracket: Bracket.get(),
    name: name
  });
};
