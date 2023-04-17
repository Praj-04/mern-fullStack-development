const router = require('./routes/index')

const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT;
app.use(express.json());

app.use('/api',router)



// app.get("/user", (req, res) => {
//   console.log("this is the request");
//   //   res.send("Hello User updated");
//   res.json({
//     name: "Prajna",
//     age: 33,
//   });
// });

// app.get("/", (req, res) => {
//   console.log("its working!");
//   res.sendFile();
// });

// app.post("/user", (req, res) => {
//   console.log(req.body);

//   res.json({
//     id: 2,
//     name: "Adi",
//   });
// });

app.listen(PORT, () => {
  console.log("the port is 4000");
});
