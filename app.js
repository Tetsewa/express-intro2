
const express = require('express');
// Require the `morgan` request logger
const logger = require('morgan');

// Instantiate an express server instance named `app`
// `app` is the express server that will be handling requests and responses

const app = express();

function myMiddleware(req, res, next) {
  console.log('myMiddleware was called!');
  req.secretValue = 'swordfish';
  next();
}
// MIDDLEWARE
// Setup the request logger to run on each request   
app.use(logger('dev'));                       
// Make the static files inside of the `public/` folder publicly accessible
app.use(express.static('public'));

// JSON middleware parses (decodes) the incoming HTTP request bodies that contain JSON data and makes the data accessible on the req.body property as a JavaScript object.
app.use(express.json()); 

// Custom middleware example
//app.use(myMiddleware);


//routes
// Our first route: GET /home route
app.get('/home', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});

//our second route: GET /cat route
app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html')
  });
//our third route- GET /test route-understanding the middleware flow
app.get('/test', (request, response, next) => {
    response.send('We made it to test!');
  });
//our fourth route: GET /data route
app.get('/data', (req, res) => {
  const user = {
    name: "Jane Doe",
    age: 33,
    profession: "Developer"
  };
 
// Send JSON data in the response
  res.json(user);
});


// Start the server
app.listen(3000, () => console.log('My first app listening on port 3000! '));
