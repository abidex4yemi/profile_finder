const http = require('http');
const https = require('https');

function Profile(username) {
	const url = `http://localhost:8000/${username}`;

	http.get(url, response => {
		console.log(response);
	});
}

module.exports = Profile;
