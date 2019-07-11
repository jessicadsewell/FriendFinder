var friends = require("../data/friends");

// ROUTING 

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var user = req.body;

        var userResponses = user.scores;

        var matchName = "";
        var matchImage = "";
        var totalDifference = 500;

        for (var i = 0; i < friends.length; i++) { // attempt -1???
            var diff = 0;

            // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
            //  whatever the difference is, add to the total difference
            for (var j = 0; j < userResponses.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            };
            
            if (diff < totalDifference) {
                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        //add new user
        friends.push(user);

        //send response
        res.json({ status: 'Ok', matchName: matchName, matchImage: matchImage });
    })

};
