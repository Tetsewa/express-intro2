
const express = require('express');
// Require the `morgan` request logger
const logger = require('morgan');

// Instantiate an express server instance named `app`
// `app` is the express server that will be handling requests and responses

const app = express();

// Setup the request logger to run on each request   // <== ADD
app.use(logger('dev'));                       
// Make the static files inside of the `public/` folder publicly accessible
app.use(express.static('public'));


app.use(myMiddleware);

function myMiddleware() {
  console.log('myMiddleware was called!');
   // Access the request information
   console.log('request ->', request);
 
   // Modify request by adding new data to `request` object
   request.secretValue = 'swordfish';
   next();
}


// Our first route:
app.get('/home', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});

//our second route
app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html')
  });
  //our third route-understanding middleware
  app.get('/test', (request, response, next) => {
    response.send('We made it to test!');
  });

// Start the server
app.listen(3000, () => console.log('My first app listening on port 3000! '));
