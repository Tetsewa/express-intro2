
const express = require('express');

// Instantiate an express server instance named `app`
// `app` is the express server that will be handling requests and responses

const app = express();
// Make the static files inside of the `public/` folder publicly accessible
app.use(express.static('public'));

// Our first route:
app.get('/home', (request, response, next) => {
  console.log(request);
  response.sendFile(__dirname + '/views/home-page.html');
});

//our second route
app.get('/cat', (request, response, next) => {
    response.sendFile(__dirname + '/views/cat-page.html')
  });

// Start the server
app.listen(3000, () => console.log('My first app listening on port 3000! '));
