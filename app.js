
const express = require('express');

// Instantiate an express server instance named `app`
// `app` is the express server that will be handling requests and responses

const app = express();
// Make the static files inside of the `public/` folder publicly accessible
app.use(express.static('public'));

// Our first route:
app.get('/home', (request, response, next) => {
  console.log(request);
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

//our second route
app.get('/cat', (request, response, next) => {
    response.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Cat</title>
          <link rel="stylesheet" href="/stylesheets/style.css" />
        </head>
        <body>
          <h1>Cat</h1>
          <p>This is my second route</p>
          <img src="/images/cool-cat.jpg" />
        </body>
      </html>
    `);
  });

// Start the server
app.listen(3000, () => console.log('My first app listening on port 3000! '));
