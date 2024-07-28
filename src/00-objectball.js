function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
console.log(gameObject());
  
// function homeTeamName() {
//     let object = gameObject();
//     return object["home"]["teamName"];
// }
  
// console.log(homeTeamName());

function homeTeamName() {
    return gameObject()["home"]["teamName"];
}
  
console.log(homeTeamName());

const game = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        // other players...
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        // other players...
      }
    }
};
  
function numPointsScored(playerName) {
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return null; // If player not found
}

function shoeSize(playerName) {
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return null; // If player not found
}
 
function teamColors(teamName) {
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return null; // If team not found
}
  
function teamNames() {
    return Object.values(game).map(team => team.teamName);
}

function playerNumbers(teamName) {
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
    return null; // If team not found
}

function playerStats(playerName) {
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return null; // If player not found
}

function bigShoeRebounds() {
    let maxShoeSize = 0;
    let playerWithBiggestShoe;
    
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > maxShoeSize) {
          maxShoeSize = game[team].players[player].shoe;
          playerWithBiggestShoe = player;
        }
      }
    }
    
    return game[team].players[playerWithBiggestShoe].rebounds;
}

function mostPointsScored() {
    let maxPoints = 0;
    let topScorer = '';
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          topScorer = player;
        }
      }
    }
  
    return topScorer;
}

function winningTeam() {
    let teamPoints = {};
  
    for (let team in game) {
      let totalPoints = 0;
      for (let player in game[team].players) {
        totalPoints += game[team].players[player].points;
      }
      teamPoints[game[team].teamName] = totalPoints;
    }
  
    let winningTeam = '';
    let maxPoints = 0;
  
    for (let team in teamPoints) {
      if (teamPoints[team] > maxPoints) {
        maxPoints = teamPoints[team];
        winningTeam = team;
      }
    }
  
    return winningTeam;
}

function playerWithLongestName() {
    let longestName = '';
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
  
    return longestName;
}
  
function doesLongNameStealATon() {
    let longestName = '';
    let mostSteals = 0;
    let playerWithMostSteals = '';
  
    // Find the player with the longest name
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
  
    // Find the player with the most steals
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > mostSteals) {
          mostSteals = game[team].players[player].steals;
          playerWithMostSteals = player;
        }
      }
    }
  
    // Check if the player with the longest name is the same as the player with the most steals
    return longestName === playerWithMostSteals;
}
  