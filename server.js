// DEPENDENCIES
var express = require("express");

// tells node that we are creating an "express" server
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
// Middleware - code that is executed after the request is made 
// gives us access to req.body
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));

// ROUTER
// Points server to series of "route" files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// starts the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });