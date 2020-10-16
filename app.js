const express = require('express');
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
const users = require("./data.js")

app.use(express.json());
app.use("/courses", courses);
app.use("/instructors", instructors);
app.use("/students", students);

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

app.post("/login", (req, res) => {

    if (req.body.Username === users[0].Username) {
    console.log("hello world")
    bcrypt.hash(users[0].Password, salt, (err, hash) => {

      bcrypt.compare(req.body.Password, hash, (err, result) => {

        // console.log(result);
        if (result) {
          res.send("Login successful")
        }
        else {res.send("Invalid Password")}  
      }) 

    })
  
  }

  else {res.send("Invalid Username or Password")}

});







app.get('/', authMiddleWare, (req, res) => {

  res.send("omar")

});





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
