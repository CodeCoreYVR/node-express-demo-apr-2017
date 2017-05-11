// Step 1: Create project `yarn init`
// Step 2: Add Express package `yarn add express`
// Step 3: Create `app.js` file
// Step 4: Require Express in `app.js`
// Step 5: Create a get route to server `/helloWorld`
// Step 6: Have server listen on PORT

// require is a function that's part of node that is
// use load modules. it returns the object exported by
// the module.
const express = require('express');

const app = express();

// unline app.get, app.use will work for all HTTP Verbs
// if we do not give a URL for the first argument, it will match for every
// URL
app.use((request, response, next) => {
  console.log(`📝${request.method} – ${request.path} – ${new Date().toString()}`);
  next(); // next, a function and third argument of a middleware callback,
  // tells Express to move on to the next middleware
});

// URL: http://localhost:4545/helloWorld VERB: Get
app.get('/helloWorld', (request, response) => {
  // This callback (which receives a request & response) is usually named
  // Middleware
  // The arguments passed to this callback are in order: request, response & next
  // - request is an object that contains the entire message from the client (usually
  //   a browser)
  // - response is an object that contains the message our server will reply with
  //   to the client
  response.send('Hello World!');
});

const PORT = 4545;
app.listen(
  PORT,
  () => { console.log(`💻 Server listening on http://localhost:${PORT}`); }
);
