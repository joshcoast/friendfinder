//Redoing the assignment by following along with the walk through.

var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');

var app = express();
// This port will take what ever is assigned by the 
// deployment env (Heroku) and default to 8080 if 
// not assigned (like your local).
const PORT = process.env.PORT || 8080;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 

require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});
