'use strict';

var express = require('express'), // Express is installed, imported and ready to use
	  posts = require('./mock/posts.json');

var app = express();

debugger;

app.get("/", (req, res) => {
	res.send("<h1>I am truely loving Treehouse!</h1>");
});

app.get("/blog", (req, res) => {
	res.send(posts);
});

app.listen(3000, () => {
	console.log("The frontend server is running on port 3000!");
});
