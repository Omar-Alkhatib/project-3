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
    console.log("get request for students recieved")
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
    .route("/:_id/") // to find a student by _id.
    .get((req, res) =>{
        console.log("Student _id :", req.params._id)
        Students.findOne({_id: req.params._id}, (err , result) => {
          if (err) throw err
          res.send(result)
        })
  
    })
    .put((req, res) => {
            console.log(req.params._id)
            console.log(req.body)
            Students.findOne({_id: req.params._id}, (err, result) => {
              if (err) throw err;
              // result.username =  req.body.username;
              result.password =  req.body.password; //await bcrypt.hash(req.params.password, 10)
              // result.email = req.body.email;
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

      console.log(req.params._id)
      Students.findOne({_id: req.params._id}, (err, result) => {
        if (err) throw err;
        result.remove();
        res.json("Student deleted")
    })
    
})
  
  module.exports = router;

  // [
  //   {"email": "student_1@hotmail.com", "username" : "student-1", "password" : "studentPass-1"},
  //   {"email": "student_2t@hotmail.com", "username" : "student-2", "password": "studentPass-2"},
  //   {"email": "student_3@hotmail.com", "username" : "student-3", "password" : "studentPass-3"},
  //   {"email": "student_4@hotmail.com", "username" : "student-4", "password" : "studentPass-4"},
  //   {"email": "student_5@hotmail.com", "username" : "student-5", "password" : "studentPass-5"},
  //   {"email": "student_6@hotmail.com", "username" : "student-6", "password" : "studentPass-6"},
  //   {"email": "student_7@hotmail.com", "username" : "student-7", "password" : "studentPass-7"},
  //   {"email": "student_8@hotmail.com", "username" : "student-8", "password" : "studentPass-8"}
  // ]