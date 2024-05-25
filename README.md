Code explanation:
// First, we have to require Express so we can use it in our app.
const express = require('express');

// Create an express server instance named `app`
// `app` is the Express server that will be handling requests and responses
const app = express();

//we define a route using the app.get() method. The route /home is specified as the first argument. Whenever a GET request is made to the /home path, the callback function provided as the second argument will be executed.

//Inside the callback function, we log the request object to the console, which contains information about the incoming request including HTTP headers, request body, and more, created by Express. We use it to access the incoming request and the payload, called the request body, it might include.. Then, we use the response.send() method to send a response back to the client. In this case, we send an HTML string <h1>Welcome Ironhacker. :)</h1> as the response.

app.get('/home', (request, response, next) => {
    //next: An optional parameter that represents the next middleware function in the middleware chain to pass the request to. This argument is optional and can be skipped if not being used. (If you are unfamiliar with the term “middleware”, don’t worry, we will cover it later in the lesson.)
    console.log(request);
    response.send('<h1>Welcome Ironhacker. :)</h1>')
});
//we start the server by calling the app.listen() method. It takes two arguments: the port number to listen on (here, 3000) and a callback function that is executed once the server starts listening.
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
