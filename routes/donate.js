var Pooch = require('../models/pooch');

exports.donate = function(req, res){
  var dogId = req.body.id;
  var amount = req.body.amount;

  Pooch.incrementDonation(dogId, amount);

  res.redirect('/');
};
