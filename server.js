var express = require("express"); // Dependencies

var PORT = process.env.PORT || 9000; // Port

var app = express(); // Create express server

// These handles data parsing
app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 

// Route files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Start server
app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`)
})