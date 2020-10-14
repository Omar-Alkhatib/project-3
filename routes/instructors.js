const express = require('express');
let router = express.Router();

const instructors = [
    "Samira Saeed",
    "Tweety Bird",
    "Lubna Alsareea",
    "Hassan Al-Asmar",
    "Safaa Saeed",
]

router
  .route("/")
  .get((req, res) =>{
    console.log("instructors")
    res.send("instructors")
  })
  .post((req, res) => {});


module.exports = router;
