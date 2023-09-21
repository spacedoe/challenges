const express = require("express");
const app = express();
const path = require("path");

// this deals with the CORS problem
const cors = require("cors");
app.use(cors());

app.use(express.json());

// app.get("/", (req, res) => {
//   console.log("log 1");
//   res.send("Home page");
// });

// app.get("/", (req, res) => {
//   console.log("log 2");
//   res.json({ route: "this is home" });
// });

app.get("/numbers", (req, res) => {
  // http://localhost:3000/numbers?value=10
  console.log(req.query);
  res.json([2, 3, 5]);
});

app.get("/words", (req, res) => {
  console.log(req.query);
  res.json(["cucumber"]);
});

// app.get('/:name', (req, res) =>{
//     console.log(req.params);
//     res.send(req.params.anna)
// })

// app.post('/users', (req, res) => {
// 	// this is the request body
// 	console.log(req.body)
// })

// app.get('/posts/:postId/comments/:commentId', (req, res) => {
// 	// access the route parameter
// 	console.log(req.params)
// 	res.send(req.params)
// })

// app.get("/greeting", function (req, res) {
//   console.log("send greeting");
//   res.sendFile(path.join(__dirname, "/index.html"));
// });

// app.get("/", (request, response) => {
//     // Logged in the terminal on the SERVER side
//     console.log("Someone wants the root route!");
//     // Sent to the client (visible in the browser window)
//     response.send("Welcome to our site! 😎");
//   });

app.get("/contact", (req, res) => {
  console.log("serving contact.html...");
  res.sendFile("contactForm.html", {
    root: path.join(__dirname, "./components/"),
  });
});

// app.get("/testing", function(req, res) )

// res.sendFile(path.join(__dirname, '../public', 'index1.html'));
// res.sendFile('index1.html', { root: path.join(__dirname, '../public') });

// index.js

// ...

const staff = ["Sally", "Bob", "Mike", "Rachel", "Andy", "Greg"];

app.get("/staff", (req, res) => {
  console.log("staff log");
  res.json({
    people: staff,
  });
});

app.get("/staff/:person", (req, res) => {
  // Get the actual value sent for the parameter from `req.params`
  const name = req.params.person;
  res.json({
    name: name,
    description: `${name} is a valued employee here are our company!`,
  });
});

app.listen(3000);
