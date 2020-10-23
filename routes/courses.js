const express = require('express');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const db = require('../db.js');
const Courses = require("../schemas/courseSchema.js")
let router = express.Router();
router.use(express.json());


  // =================================================================================
  router
  .route("/")
  .get( async (req, res) => {
      console.log( await Courses.find())
      res.json( await Courses.find())
  })
  .post((req, res) => {
      // to post one or multiple courses at once
      console.log(req.body)
    for (i = 0; i < req.body.length; i++){
      const course = new Courses({
      ref: req.body[i].ref,
      name: req.body[i].name,
      duration: req.body[i].duration //bcrypt.hash(req.body[i].password, 10)
      })
      course.save()
        .then((result) => {
          res.send("Course/s have been added")
        })
        .catch((err) => {
          console.log(err)
        })

    }
  });

router
    .route("/:ref/") // to find a course by ref.
    .get((req, res) =>{
        console.log("Course ref :", req.params.ref)
        Courses.findOne({ref: req.params.ref}, (err , result) => {
          if (err) throw err
          res.send(result)
        })
  
    })
    .put((req, res) => {
        
            console.log(req.params.ref)
            Courses.findOne({email: req.params.ref}, (err, result) => {
              if (err) throw err;
              result.ref = req.body.ref;
              result.name =  req.body.name;
              result.duration =  req.body.duration; //await bcrypt.hash(req.params.password, 10)
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

      console.log(req.params.ref)
      Courses.findOne({ref: req.params.ref}, (err, result) => {
        if (err) throw err;
        result.remove();
        res.send(`Course with subject ${req.params.ref} has been deleted`)
  })
})
  
  module.exports = router;