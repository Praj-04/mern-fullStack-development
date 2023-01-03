const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const mainrouter = require("./routes/index.js");

const app = express();
app.use(express.json());

const dbConnect = require("./dbConnect");

app.use((req, res, next) => {
  console.log(req.url, req.method, new Date().toTimeString());
  next();

  // if (req.body && req.body.name === "Prajna") {
  //   next();
  // } else {
  //   res.send("User authentication failed");
  // }
});

app.use("/api", mainrouter);

app.get("/", (req, res) => {
  res.send({
    data: "OK",
  });
});

const PORT = process.env.PORT;

dbConnect();

app.listen(PORT, () => {
  console.log("listening to port :", PORT);
});
