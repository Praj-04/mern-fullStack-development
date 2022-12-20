const express = require("express");

const app = express();

app.use(express.json());

app.get("/randomnum", (req, res) => {
  res.send({ Number: Math.floor(Math.random() * 6) + 1 });
});

app.listen(4001, () => {
  console.log("Listening to port :4001");
});
