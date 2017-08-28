var http = require('http');

var fs = require('fs');

var url = require('url');

http.createServer(function (req, res) {

	var q = url.parse(req.url, true).query;

	var URL = url;

	if (q.question == null) {
		console.log("Null");

		fs.readFile("/Users/league/Desktop/Level\ 6/Home_Page.html", function(err, data) {

			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end("404 Not Found");
			}

			res.writeHead(200, {'Content-Type': 'text/html'});

			res.write(data);

			return res.end();
		});
	} else {

		console.log("Not Null");

		var folder = true;

		if (q.A != null) {

			folder = false;

		}


		if (folder) {

			console.log("Accessing File From Folder");

			fs.readFile("/Users/league/Desktop/Level\ 6/" + q.question, function(err, data) {

				if (err) {
					res.writeHead(404, {'Content-Type': 'text/html'});
					return res.end("404 Not Found");
				}

				res.writeHead(200, {'Content-Type': 'text/html'});

				res.write(data);

				return res.end();
			});
		} else {
			console.log("Parsing Query");
			fs.appendFile('Quiz.txt', q.question + "\n", function(err) {
				if (err) {
					throw err;
				}
			});
			fs.appendFile('Quiz.txt', q.A + "\n", function(err) {
				if (err) {
					throw err;
				}
			});
			fs.appendFile('Quiz.txt', q.B + "\n", function(err) {
				if (err) {
					throw err;
				}
			});
			fs.appendFile('Quiz.txt', q.C + "\n", function(err) {
				if (err) {
					throw err;
				}
			});
			fs.appendFile('Quiz.txt', q.D + "\n", function(err) {
				if (err) {
					throw err;
				}
			});
			fs.appendFile('Quiz.txt', q.E + "\n", function(err) {
				if (err) {
					throw err;
				}
			});
			fs.appendFile('Quiz.txt', q.answer + "\n", function(err) {
				if (err) {
					throw err;
				}
			});

			fs.readFile("/Users/league/Desktop/Level\ 6/Home_Page.html", function(err, data) {

			if (err) {
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end("404 Not Found");
			}

			res.writeHead(200, {'Content-Type': 'text/html'});

			res.write(data);

			return res.end();

			});
		}
	}
}).listen(8080);