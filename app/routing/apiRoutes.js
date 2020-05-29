var friends = require("../data/friends"); // Load Data

module.exports = function(app) {
    // API GET requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST requests
    app.post("/api/friends", function(req, res) {
        var newScores = req.body.scores;
        var bestieNm = '';
        var bestieImg = '';
        var totalDiff = 50; // Initial value for comparison


        // Go through friends list
        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
        
            // Compare scores
            for (var j = 0; j < newScores.length; j++) {
                difference += (Math.abs(parseInt(friends[i].scores[j])) - parseInt((newScores[j])));
            };

            if (difference < totalDiff) {
                bestieNm = friends[i].name;
                bestieImg = friends[i].photo;
                totalDiff = difference;
            };
        };

        // console.log("Total difference: " + diff)

        friends.push(req.body); // Add new friend to friends array
        res.json({ status: 'OK', name: bestieNm, photo: bestieImg }); // Send back response to browser the best friend match
        console.log("Your new best friend is: " + bestieNm, bestieImg);
    });
};

