const express = require('express');
let router = express.Router();

const students = [
    "Mohammad Salah",
    "Kareem Abdul-Jabber",
    "Mohammed Ali",
    "Mike Tyson",
    "Phill Hall",
]
router
  .route("/")
  .get((req, res) =>{
    console.log("students")
    res.send("students")
  })
  .post((req, res) => {});


module.exports = router;
