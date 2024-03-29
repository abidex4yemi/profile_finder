const http = require('http');
const router = require('./router');

const PORT = 8000;

// Create http server
const server = http.createServer((request, response) => {
	router.css(request, response);
	router.home(request, response);
	router.user(request, response);
});

server.listen(PORT, console.log(`Server running on port: ${PORT}`));
