const log = require("../middlewares/logger");
const User = require("../models/User");

const signupController = async (req, res) => {
  console.log("signup controller called");
  const email = req.body.email;
  const password = req.body.password;
  console.log("in signup", email, password);

  if (!email || !password) {
    res.status(403).send("Email and password are required t0 sign up");
    return;
  }

  // const id = Math.floor(Math.random() * 1000); (mongoDB creates id automatically)
  // Check if user is already present
  // const user = User.find((item) => item.email === email);

  // User.push({
  //   id,
  //   email,
  //   password,
  // });

  const user = User.findOne({ email });
  if (user) {
    res.status(403).send("Email already registered");
    return;
  }

  const newUser = new User({ email, password });
  await newUser.save();

  res.status(200).json(newUser);
};

const loginController = async (req, res) => {
  console.log("login controller  called");

  const email = req.body.email;
  const password = req.body.password;
  console.log("in login", email, password);

  if (!email || !password) {
    res.status(403).send("Email and password are required to login");
    return;
  }

  // const user = User.find((item) => item.email === email);

  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  console.log(user);
  if (user.password !== password) {
    res.status(401).send("Incorrect Password");
    return;
  }

  res.status(200).json({
    email: user.email,
  });
};

const getUserController = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(403).send("user id is required");
    return;
  }

  const user = User.find((item) => item.id == id);

  res.status(200).json(user);
};

module.exports = { signupController, loginController, getUserController };
