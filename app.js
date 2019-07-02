const http = require('http');

const PORT = 8000;

const requestHandler = (request, response) => {
	response.writeHead(200, { 'Content-Type': 'text/plain' });
	response.write('Home page');
	response.end('end');
};

// Create http server
const server = http.createServer(requestHandler);

server.listen(PORT, console.log(`Server running on port: ${PORT}`));
