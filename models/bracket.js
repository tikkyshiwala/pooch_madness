var Pooch = require('./pooch');

var currentRound = 1;

var data = {
  round_1 : {
    matches: [ {dog1: 'brownie', dog1_image: 'images/1.jpg' , dog2: 'fluffy'} ]
  }
};

exports.get = function() {
  return data["round_" + currentRound];
};

exports.endRound = function() {
  buildNextRound();
  currentRound++;
};

function buildNextRound() {
  var nextRound = currentRound + 1;

  var currentMatches = exports.get();


}
