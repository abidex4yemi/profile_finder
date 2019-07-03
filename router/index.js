const renderer = require('../util');
const fs = require('fs');

// Handle root route incoming request
const home = (request, response) => {
	if (request.url === '/' && request.method === 'GET') {
		response.writeHead(200, { 'Content-Type': 'text/html' });
		renderer.views({ templateName: 'header', response });
		renderer.views({ templateName: 'search', response });
		renderer.views({ templateName: 'footer', response });
		response.end();
	}
};

// Return all lambda students list
const serveStudents = (request, response) => {
	const dataRequestType = request.url.substr(request.url.length - 5);
	if (dataRequestType === '.json') {
		const username = request.url.replace('/', '').replace('.json', '');

		// List of all users
		const users = [
			{
				name: 'Yemi',
				schoolName: 'Lambda',
				graduatingDate: '31/09/2019',
				stack: 'Javascript, Node, Python'
			},
			{
				name: 'Tola',
				schoolName: 'Lambda',
				graduatingDate: '31/09/2019',
				stack: 'Javascript, Node, Python'
			},
			{
				name: 'Jane',
				schoolName: 'Lambda',
				graduatingDate: '31/09/2019',
				stack: 'Javascript, Node, Python'
			}
		];

		// find matching user
		const user = users.filter(user => user.name.toLowerCase() === username.toLowerCase());
		console.log(user);
	}
};

// Handle stylesheet (css) incoming request
const css = (request, response) => {
	if (request.url.indexOf('.css') !== -1 && request.url.indexOf('.css')) {
		const file = fs.readFileSync(`.${request.url}`, 'UTF-8');
		response.writeHead(200, { 'Content-Type': 'text/css' });
		response.write(file);
		response.end();
	}
};

module.exports = { home, css, serveStudents };
