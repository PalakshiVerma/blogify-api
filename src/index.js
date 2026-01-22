const express=require('express');
const app=express();
const PORT=3000;
//import router
const postsRouter=require('./routes/posts.routes');
//root route
app.get('/',(req,res)=>{
    res.send('Welcome to the Blogify API! This is the main entry point.');
}); 
//mount router
app.use('/api/v1/posts',postsRouter);
app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
});










// // Log to indicate the application has started
// console.log("Blogify API is running...");

// // Import the HTTP module to create a server
// var http = require('http');

// // Define the port number on which the server will listen
// const port=1234;

// // Create an HTTP server that handles incoming requests
// http.createServer((req,res)=>{
//     // Send a response message to the client
//     res.write("successfullly created server");
//     // End the response
//     res.end();
// // Start listening on the specified port
// }).listen(port);

// // Log to confirm the server is running
// console.log('server is running');
// const express = require('express');
// const app = express();
// const PORT = 3000;

// // Update this route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Blogify API! This is the main entry point.');
// });

// // Add this new route
// app.get('/api/v1/posts', (req, res) => {
//   // For now, we'll just send a confirmation message.
//   // In a future module, this will fetch posts from a database.
//   res.send('Fetching all blog posts...');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });