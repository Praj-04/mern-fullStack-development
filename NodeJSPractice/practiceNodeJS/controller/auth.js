const user = require("../model/user");

const loginController = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  if (!name || !age) {
    res.status(403).send("name and age are required");
    return;
  }

  const found = user.find((item) => item.name == name);

  if (found) {
    res.send("User is presnt in the db");
    return;
  }
  if (!found) {
    res.send("User is not found");
    return;
  }
};

const signupController = async (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const id = Math.floor(Math.random() * 1000);

  if (!name || !age) {
    res.status(403).send("name and age are required");
    return;
  }

  const userPresent = user.find((item) => item.name == name);

  if (userPresent) {
    res.send("User is already Present");
    return;
  }

  if (!userPresent) {
    user.push({
      id,
      name,
      age,
    });
  }
  res.status(201).send("User created");
};



module.exports = { loginController, signupController };
