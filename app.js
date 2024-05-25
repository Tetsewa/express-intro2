// Import `express` using `require()`
const express = require('express');

// Instantiate an express server instance named `app`
// `app` is the express server that will be handling requests and responses
const app = express();

// Our first route:
app.get('/home', (request, response, next) => {
  console.log(request);
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

// Start the server
app.listen(3000, () => console.log('My first app listening on port 3000! '));
