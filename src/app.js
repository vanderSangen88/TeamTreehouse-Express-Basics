'use strict';

var express = require('express'), // Express is installed, imported and ready to use
	  posts = require('./mock/posts.json');

var app = express();

app.use('/static', express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/templates');

app.get("/", (req, res) => {
	res.render('index');
});

app.get("/blog/:title?", (req, res) => {
	var title = req.params.title;
	if(title === undefined){
		res.status(503);
		res.send("This page is under construction!");
	} else {
		var post = posts[title] || {};
		res.render('post', { post: post });
	}
});

app.listen(3000, () => {
	console.log("The frontend server is running on port 3000!");
});
