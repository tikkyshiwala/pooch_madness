User = require('../models/user.js');
Pooch = require('../models/pooch.js');

exports.index = function(req, res){
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
    dogs: Pooch.all(),
    name: name
  });
}

