const express = require('express');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const db = require('../db.js');
const Students = require("../schemas/studentSchema.js")
let router = express.Router();
router.use(express.json());


  // =================================================================================
  router
  .route("/")
  .get( async (req, res) => {
      console.log( await Students.find())
      res.json( await Students.find())
  })
  .post((req, res) => {
      // to post one or multiple students at once
      console.log(req.body)
    for (i = 0; i < req.body.length; i++){
      const student = new Students({
      email: req.body[i].email,
      username: req.body[i].username,
      password: req.body[i].password //bcrypt.hash(req.body[i].password, 10)
      })
      student.save()
        .then((result) => {
          res.send("Student/s have been added")
        })
        .catch((err) => {
          console.log(err)
        })

    }
  });

router
    .route("/:email/") // to find a student by email.
    .get((req, res) =>{
        console.log("Student email :", req.params.email)
        Students.findOne({email: req.params.email}, (err , result) => {
          if (err) throw err
          res.send(result)
        })
  
    })
    .put((req, res) => {
            console.log(req.params.email)
            Students.findOne({email: req.params.email}, (err, result) => {
              if (err) throw err;
              result.email = req.body.email;
              result.username =  req.body.username;
              result.password =  req.body.password; //await bcrypt.hash(req.params.password, 10)
              result.save()
              .then((newResult) => {
                res.send(newResult)
              })
              .catch((err) => {
                console.log(err)
              })
        })
    })
    .delete((req, res) => {

      console.log(req.params.email)
      Students.findOne({email: req.params.email}, (err, result) => {
        if (err) throw err;
        result.remove();
        res.send(`Student with email ${req.params.email} has been deleted`)
  })
})
  
  module.exports = router;