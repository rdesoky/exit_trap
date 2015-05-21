var express = require("express");
var app = express();

app.use(express.static(__dirname + '/'));

app.use("/api/:id", function(req, res, next){
	console.log("API." + req.params.id);
    res.send({result:0});
});

var server = app.listen();
console.log("Local webserver is running on port: " + server.address().port );

require('open')("http://localhost:" + server.address().port);

