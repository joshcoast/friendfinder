var bodyParser = require('body-parser');
var tableData = require('../data/friends.js');

module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(tableData);
	});

	app.post('/api/friends', function (req, res) {
		tableData.push(req.body);
		// Setup Variables
		let currentUserScores = req.body.scores;
		let totalDifferenceArray = [];
		// For each user already in the database. 
		tableData.forEach((element, index) => {
			let otherUserScores = element.scores;
			compareUsers(otherUserScores, currentUserScores);

			function compareUsers(user1, user2) {
				let difference = [];
				// Get the difference for each score.
				user1.forEach((element, index) => {
					difference.push(Math.abs(user2[index] - element));
				});
				let totalDifference = 0;
				//Add up all the deference's
				difference.forEach((element, index) => {
					totalDifference += element;
				});
				totalDifferenceArray.push(totalDifference);
			}

		});

    // Remove the current user from array so they don't match with themselves
		totalDifferenceArray.pop(); 

		// Find the index of the lowest number (best match)
		let bestMatchScore = Math.min(...totalDifferenceArray);
		let bestMatchObject = totalDifferenceArray.indexOf(bestMatchScore);

		//Send the match response
		res.json(tableData[bestMatchObject]);
	});
}