var path = require("path"); // Dependencies

// Export Routing
module.exports = function(app) {
    // GET Route to survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
}