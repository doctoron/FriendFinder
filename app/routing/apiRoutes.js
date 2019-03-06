// LOAD DATA
// Linking my routes to source of arrays of information on friends, photos and survey scores.
const friends = require("../../data/friends")

// ROUTING
// API GET Requests
// In each of the below cases when a user visits a link
// (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)

// A GET Route to  display a JSON of all possible friends
// module.exports = (app) => {
  // app.get('/friends', (req, res)=> {
  //   res.sendFile(path.join(__dirname, "../data/friends.js"));
  // });

module.exports = (app) => {  
  app.get("/api/friends", (req, res) => {
    res.json(friends)
  });
};

// API POST Requests
// Below code handles the form response that a user submits and submits data to the server.
// The form data (JSON object) is pushed to the appropriate js array.
module.exports = app => {
app.post("/api/friends", (req, res) => {
  let newFriend = req.body;
  console.log(newFriend);

  let newScore = newFriend.scores;

  let newScoreTot;
  let bestFriend = { name: "", photo: "", matchScore: Infinity }

  for (i = 0; i < friends.length; i++) {
    newScoreTot = 0
    let currentFriend = friends[i]

    for (j = 0; j < currentFriend.scores.length; j++) {
      let currentFriendScore = currentFriend.scores[j];
      let currentUserScore = newScore[j];
      //Math.absolute function review
      newScoreTot += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
    }
    // As close to currentUserScore as possible will be the best match
    if (newScoreTot <= bestFriend.matchScore) {
      bestFriend.name = currentFriend.name;
      bestFriend.photo = currentFriend.photo;
      bestFriend.matchScore = newScoreTot;
    }
  }
  friends.push(newFriend);
  res.json(bestFriend);
})
};

