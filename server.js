'use strict';

var express = require("express");
var routes = require("./app/routes/index.js");
var port = process.env.PORT;
var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

routes(app);

app.listen(port, function() {
    console.log("Server is listening on " + port + "...");
})