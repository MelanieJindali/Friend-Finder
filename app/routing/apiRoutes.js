var friends = require("../data/friends"); // Load Data

module.exports = function(app) {
    // API GET requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    })
}