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


let salt = 10;



app.get('/', authMiddleWare, (req, res) => {

  res.send("WELCOME TO OUR ACADEMY !")

});


app.listen(port, () => {
  console.log(`Academy app listening at http://localhost:${port}`);
});
