# TeamTreehouse-Express-Basics - Teacher's Notes

## 1.1	An Intro: Express.js is amazing

## 1.2	Install Express.js

## 1.3 	Your First Express App
- HTTP Treehouse Workshop: [https://teamtreehouse.com/library/http-do-you-get-it](https://teamtreehouse.com/library/http-do-you-get-it)
- HTTP Request Methods: http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods
- The listen method: http://expressjs.com/4x/api.html#app.listen
- The get method: http://expressjs.com/4x/api.html#app.get.method
- HTTP Status Codes (e.g. 404 - Page not found): https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

## 1.4 	Improving your first app, some final touches
- The listen method is an extension of node’s http module’s server.
- You can read about it in the express documentation: [http://expressjs.com/4x/api.html#app.listen](http://expressjs.com/4x/api.html#app.listen
)

## 2.1 Adding Routes to the App
- Hipster Ipsum: http://hipsum.co/

## 2.2 Easily Debug Express (and other node apps)
- nodemon documentation: https://github.com/remy/nodemon
- nodemon pronunciation debate: https://github.com/remy/nodemon#pronunciation
- node-inspector documentation: https://github.com/node-inspector/node-inspector

## 2.3 Interactive Debugging and Exploratory Programming
First terminal: node-inspector
Second terminal: nodemon --debug-brk src/app.js

## 3.1 Requests and the request object
- The request object: http://expressjs.com/api.html#req
- HTTP Treehouse Workshop: https://teamtreehouse.com/library/http-do-you-get-it
- HTTP Request Methods: http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

## 3.2 Responses and the Response Object
- HTTP Responses: http://en.wikipedia.org/wiki/List_of_HTTP_status_codes
- Express documentation for the response object: http://expressjs.com/api.html#res
- Detect device type or “bot” through the request object: https://github.com/rguerreiro/express-device

## 4.1 What is Template Rendering?
A comparison of JavaScript Template Engines: https://strongloop.com/strongblog/compare-javascript-templates-jade-mustache-dust/

## 4.2 What is Jade? > Renamed PugJS
The PugJS Website: https://pugjs.org/api/getting-started.html

## 4.3 Using Jade > Pug in your Express App
- Hipster Ipsum: http://hipsum.co/
- Use a template engine other than Jade using the consolidate package: https://www.npmjs.com/package/consolidate
- Express’s app.set method: http://expressjs.com/4x/api.html#app.set

## 4.5 Scaffolding Your Project's Templates
- Jade block content inheritance: http://jade-lang.com/reference/inheritance/

## 4.6 SYPT - adding "partials"
- The include directive: http://jade-lang.com/reference/includes/
- “Partials” as a convention: https://www.google.com/search?q=partials&oq=partials&aqs=chrome..69i57j0l5.1257j0j7&sourceid=chrome&es_sm=91&ie=UTF-8#q=partials+templates

## 5.1 Setting Up the Express Static Server in Development
- The app.use method: http://expressjs.com/4x/api.html#app.use
- Express’s Static Middleware: http://expressjs.com/4x/api.html#express.static
- From the express docs: “An Express application is essentially a series of middleware calls.”

!! Middleware is the logic that tells Express how to handle a request inbetween the time a request is made by the client but before it arrives at a route.

## 5.2 Add Static to the Layout Template
- Google Fonts: https://developers.google.com/fonts/docs/getting_started

## 6.1 Making Lists in Pug Templates
- Jade let’s you iterate over objects: http://jade-lang.com/reference/iteration/ However, in our case, iterating over our “mock” post data as an object would be even less realistic. In a JavaScript application, when data is meant to be iterated through, it will typically be provided in an array format.

- Note the other syntax you can use. For example for post in posts.

## 6.2 Using Logic in Pug Templates
- The res.locals object: http://expressjs.com/4x/api.html#res.locals
- Jade’s boolean/conditional syntax: http://jade-lang.com/reference/conditionals/