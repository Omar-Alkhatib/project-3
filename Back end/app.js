const express = require('express');
const db = require('./db.js');

const app = express();
const port = 3000;
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const TOKEN_EXPIRATION = process.env.TOKEN_EXPIRATION;
const authMiddleWare = require("./AuthMiddleWare");

const courses = require("./routes/courses.js");
const instructors = require("./routes/instructors.js")
const students = require("./routes/students.js")
const users = require("./routes/users.js")

const mongoose = require('mongoose');
const Users = require("./schemas/userSchema.js")

app.use("/courses", authMiddleWare, courses);
app.use("/instructors", authMiddleWare,  instructors);
app.use("/students", authMiddleWare, students);
app.use("/users", authMiddleWare, users);
app.use(express.json());


const generateToken = () => {
 
  const payload = {
    id: 3,
    permissions: ["r", "w"],
    type: "user",
  };

  const options = {
    expiresIn: TOKEN_EXPIRATION,
  };
  return jwt.sign(payload, SECRET, options);
};
console.log(generateToken())

// To login to the system:

app.post("/login", (req, res) => {
console.log("login")
console.log(Users.find({username: req.body.username}))
  if (Users.find({username: req.body.username}) && Users.find({email: req.body.email})) {
    let token = generateToken()
    res.send(token)
  }
  else {"Wrong password or username"}

})







app.get('/', authMiddleWare, (req, res) => {

  res.send("WELCOME TO OUR ACADEMY !")

});


app.listen(port, () => {
  console.log(`Academy app listening at http://localhost:${port}`);
});
