User = require('../models/user.js');
var Bracket = require('../models/bracket');

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
    bracket: Bracket.get(),
    name: name
  });
};

exports.nextRound = function(req, res) {
  Bracket.buildNextRound();
  console.log(JSON.stringify(Bracket.get()));
  res.redirect('/');
}
