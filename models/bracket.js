var Pooch = require('./pooch');

var currentRound = 1;

var data = {
  round_1: buildFirstRound()
};

exports.get = function() {
  return data["round_" + currentRound];
};

exports.endRound = function() {
  buildNextRound();
  currentRound++;
};

function buildFirstRound() {
  dog_list = Pooch.all();
  matches = [];

  for (var i=0;i < dog_list.length; i += 2) {
    matches.push({
     dog1: dog_list[i],
     dog2: dog_list[i+1]
   });
  }

  return { matches: matches };
}


function buildNextRound() {
  var nextRound = currentRound + 1;

  var currentMatches = exports.get();
  console.log(currentMatches);

  for(match in currentMatches) {

  }

}
