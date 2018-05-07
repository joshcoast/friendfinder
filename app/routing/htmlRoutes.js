/* 
3. Your `htmlRoutes.js` file should include two routes:
   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.  
*/

// help direct the user to the right html file
var path = require("path");

module.exports = function (app) {
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'));
	});
	app.use( function(req, res) { //anything other than the above goes here...
		res.sendFile(path.join(__dirname + '/../public/home.html'));
	});
}