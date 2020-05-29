var friends = require("../data/friends"); // Load Data

module.exports = function(app) {
    // API GET requests
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST requests
    app.post("/api/friends", function(req, res) {
        var newScores = req.body.scores;
        var bestie = 0; // Initial index
        var minDiff = 1000; // Initial value for comparison


        // Go through friends list
        for (var i = 0; i < friends.length; i++) {
            var totalDiff = 0;
        
            // Compare scores
            for (var j = 0; j < newScores.length; j++) {
                totalDiff += (Math.abs(parseInt(friends[i].scores[j])) - parseInt((newScores[j])));
            };

            // Setting new vals to variables for the next iterated comparison
            if (totalDiff < minDiff) {
                var bestieNm = friends[i].name;
                var bestieImg = friends[i].photo;
                minDiff = totalDiff;
            };
        };

        // console.log("Total difference: " + diff)

        friends.push(req.body); // Add new friend to friends array
        res.json({ status: 'OK', name: bestieNm, photo: bestieImg }); // Send back response to browser the best friend match
        console.log("Your new best friend is: " + bestieNm, bestieImg);
    });
};

