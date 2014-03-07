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

exports.buildNextRound = function() {
  var nextRound = currentRound + 1;
  var next_matches = [];
  var currentMatches = exports.get().matches;

  if (currentMatches.length == 1) {
    if (currentMatches[0].dog1.donations > currentMatches[0].dog2.donations) {
      data["round_" + nextRound] = {winner: currentMatches[0].dog1};
    } else {
      data["round_" + nextRound] = {winner: currentMatches[0].dog2};
    }
  } else {
    for(var i=0; i<currentMatches.length;i+=2) {
      var dog1 = null;
      var dog2 = null;

      if (currentMatches[i].dog1.donations > currentMatches[i].dog2.donations) {
        dog1 = currentMatches[i].dog1;
      } else {
        dog1 = currentMatches[i].dog2
      }

      if (currentMatches[i+1].dog1.donations > currentMatches[i+1].dog2.donations) {
        dog2 = currentMatches[i+1].dog1;
      } else {
        dog2 = currentMatches[i+1].dog2
      }

      var new_match = {dog1: dog1, dog2: dog2};
      next_matches.push(new_match);
    }

    data["round_"+nextRound] = {matches: next_matches};
  }

  currentRound = nextRound;
}
