const renderer = require('../util');
const fs = require('fs');

// Handle root route incoming request
const home = (request, response) => {
	if (request.url === '/' && request.method.toLowerCase() === 'get') {
		response.writeHead(200, { 'Content-Type': 'text/plain' });
		response.write('Home page');
		response.end('end');
	}
};

module.exports.home = home;
