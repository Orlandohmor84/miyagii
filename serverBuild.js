var StaticServer = require('static-server');

var server = new StaticServer ({
	rootPath: './src/', 
	port: 3099
});

server.start(function() {
	console.log('Server started on port ' + server.port);
});