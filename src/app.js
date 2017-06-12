'use strict';

var express = require('express'); // Express is installed, imported and ready to use

var app = express();

app.get("/", (req, res) => {
	res.send("I Love Treehouse!");
});

app.listen(3000);
