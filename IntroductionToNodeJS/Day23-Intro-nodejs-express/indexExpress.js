const express = require("express"); //import express from node_modules

const app = express(); //creating app using express

app.use(express.json()); //middleware for express

app.get("/user", (req, res) => {
  console.log("user was called");
  //res.send("Hello User updated");

  res.send({
    name: "prajna",
    age: 26,
  });
});

app.get("/", (req, res) => {
  // res.send('server is now working');
  //   res.sendFile("./index.html");
  // res.sendFile(__dirname+'/index.html');
  // res.json({
  //     success:true
  // })
});

app.post("/user", (req, res) => {
  console.log(req.body);

  res.json({
    name: "Adi",
    age: 3,
    multiplyResult: req.body.a * req.body.b,
  });
});

// function random() {
//   return ((Math.random() * 6) | 0) + 1;
// }

// app.get("/num", (req, res) => {
//   res.send({
//     randomnumber: () => {
//       random;
//     },
//   });
// });

app.get("/num", (req, res) => {
  // res.sendStatus(Math.random());
  // res.sendStatus(200).json(Math.random());
  res.send({'random' : Math.floor(Math.random() * 6) + 1 });
});

app.listen(4000, () => {
  console.log("Listening to port :4000");
});
