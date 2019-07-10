var friends = require("../data/friends");

// ROUTING 

module.exports = function (app) {
    app.get("api/friends", function (req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function (req, res) {
        console.log(req.body.scores);

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        // Default friend match is the first friend but result will be whoever has the minimum difference in scores
        var bestFriendIndex = 0;
        var minimumDifference = 40;

        // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
        //  whatever the difference is, add to the total difference
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }
        }

        if (totalDifference < minimumDifference) {
            bestFriendIndex = i;
            minimumDifference = totalDifference;
        }

        friends.push(user);
        res.json(friends[bestFriendIndex]);
    })

    // app.post("/api/clear", function (req, res) {
    //     friends.empty();
    //     res.json({ ok: true });
    // })
}
