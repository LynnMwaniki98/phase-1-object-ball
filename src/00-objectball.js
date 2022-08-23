function gameObject(){
    console.log(gameObject());
  const obj = {
    home: {
       teamName : 'Brooklyn Nets',
       colors : ['Black, White'],
       players:  {
        'Alan Anderson':{
            Number: 0,
            Shoe: 16,
            Points: 22,
            Rebounds: 12,
            Assists: 12,
            Steals: 3,
            Blocks: 1,
            slamDunks: 1,
        },
        'Reggie Evans': {
            Number: 30,
            Shoe: 14,
            Points: 12,
            Rebounds: 12,
            Assists: 12,
            Steals: 12,
            Blocks: 12,
            slamDunks: 7,
        },
        'Brook Lopez': {
            Number: 11,
            Shoe: 17,
            Points: 17,
            Rebounds: 19,
            Assists: 10,
            Steals: 3,
            Blocks: 1,
            slamDunks: 15,
       },
       'Mason Plumlee': {
        Number: 1,
        Shoe: 19,
        Points: 26,
        Rebounds: 12,
        Assists: 6,
        Steals: 3,
        Blocks: 8,
        slamDunks: 5,
       },
       "Jason Terry": {
        number: 31,
        shoe: 15,
        points: 19,
        rebounds: 2,
        assits: 2,
        steals: 4,
        blocks: 11,
        slamDunks: 1,
      },
    },
  },
  away: {
    teamName : 'Charlotte Hornets',
    colors : ['Turquoise, Purple'],
    players:  {
      'Jeff Adrien' : {
        number: 4,
        shoe: 18,
        points: 10,
        rebounds: 1,
        assits: 1,
        steals: 2,
        blocks: 7,
        slamDunks: 2,
      },
      "Bismack Biyombo": {
        number: 0,
        shoe: 16,
        points: 12,
        rebounds: 4,
        assits: 7,
        steals: 7,
        blocks: 15,
        slamDunks: 10,
      },
      "DeSagna Diop": {
        number: 2,
        shoe: 14,
        points: 24,
        rebounds: 12,
        assits: 12,
        steals: 4,
        blocks: 5,
        slamDunks: 5,
      },
      "Ben Gordon": {
        number: 8,
        shoe: 15,
        points: 33,
        rebounds: 3,
        assits: 2,
        steals: 1,
        blocks: 1,
        slamDunks: 0,
      },
      "Brendan Hayword": {
        number: 33,
        shoe: 15,
        points: 6,
        rebounds: 12,
        assits: 12,
        steals: 22,
        blocks: 5,
        slamDunks: 12,
      },
    },
  },
};
return obj;
}

const game = gameObject();
const players = playersObject();
const teams = Object.values(game);

function numPointsScored(playerName) {
  return players[playerName].points;
}

function playersObject() {
  //   return Object.assign({}, game.home.players, game.away.players)
  return { ...game.home.players, ...game.away.players };
}