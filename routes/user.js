
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.signup = function(req, res){
  res.render('signup', { });
};

exports.signout = function(req, res){
  res.clearCookie('name');
  res.redirect('/');
}


exports.create = function(req, res){
  name = req.body.name
  if(name == null || name == ''){
    res.render('signup', { error: 'Name is required' });
  }else{
    res.cookie('name', name);
    res.redirect('/');
  }

}
