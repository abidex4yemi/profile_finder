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

// Handle stylesheet (css) incoming request
const css = (request, response) => {
	if (request.url.indexOf('.css') !== -1 && request.url.indexOf('.css')) {
		const file = fs.readFileSync(`.${request.url}`, 'UTF-8');
		response.write(file);
		response.end();
	}
};

module.exports = { home, css };
