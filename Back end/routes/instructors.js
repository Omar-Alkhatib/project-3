const express = require('express');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const db = require('../db.js');
const Instructors = require("../schemas/instructorSchema.js")
let router = express.Router();
router.use(express.json());


  // =================================================================================
  router
  .route("/")
  .get( async (req, res) => {
      console.log( await Instructors.find())
      res.json( await Instructors.find())
  })
  .post((req, res) => {
      // to post one or multiple instructors at once
      console.log(req.body)
    for (i = 0; i < req.body.length; i++){
      const instructor = new Instructors({
      email: req.body[i].email,
      username: req.body[i].username,
      password: req.body[i].password //bcrypt.hash(req.body[i].password, 10)
      })
      instructor.save()
        .then((result) => {
          res.send("Instructor/s have been added")
        })
        .catch((err) => {
          console.log(err)
        })

    }
  });

router
    .route("/:_id/") // to find an instructor by _id.
    .get((req, res) =>{
        console.log("User _id :", req.params._id)
        Instructors.findOne({_id: req.params._id}, (err , result) => {
          if (err) throw err
          res.send(result)
        })
  
    })
    .put((req, res) => {
        
            console.log(req.params._id)
            Instructors.findOne({_id: req.params._id}, (err, result) => {
              if (err) throw err;
              // result._id = req.body._id;
              // result.username =  req.body.username;
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

      console.log(req.params._id)
      Instructors.findOne({_id: req.params._id}, (err, result) => {
        if (err) throw err;
        result.remove();
        res.json("Instructor deleted")
    })
})
  
  module.exports = router;