const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db")
// mongoDB;

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.use(express.json())
app.use('/api',require("./Routes/Createuser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})














































// const express = require('express');
// // const mongoose = require('mongoose');
// const cors = require('cors');
// const app = express();
// const port = 5000;

// // Middleware to allow CORS
// app.use(cors());

// // Parse JSON requests
// app.use(express.json());

// // Routes setup
// app.use('/api', require("./Routes/Createuser")); // Adjust this according to your actual route setup

// // Test route
// app.get('/', (_req, res) => {
//   res.send('Hello World!');
// });

// // Start server 
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
























// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 5000;


// // Middleware to allow CORS
// app.use((_req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", " http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
// app.use(cors());
// // Parse JSON requests
// app.use(express.json());

// // Routes setup
// app.use('/api', require("./Routes/Createuser")); // Adjust this according to your actual route setup
// app.post('/api/createuser', (req, res) => {
//   // Your code to handle the request
// });
// // Test route
// app.get('/', (_req, res) => {
//   res.send('Hello World!');
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


















// const express = require('express');
// const app = express();
// const port = 5000;
// const MongoDB = require("./db");
// // MongoDB();

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });


// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // Use middleware to parse JSON requests
// app.use(express.json());

// // Use the correct casing for the require statement
// app.use('/api', require("./Routes/Createuser"));

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

