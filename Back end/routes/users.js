const express = require('express');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const db = require('../db.js');
const Users = require("../schemas/userSchema.js")
let router = express.Router();
router.use(express.json());


  // =================================================================================
  router
  .route("/")
  .get( async (req, res) => {
      console.log( await Users.find())
      res.json( await Users.find())
  })
  .post((req, res) => {
    // to post one or multiple instructors at once
    console.log(req.body)
  for (i = 0; i < req.body.length; i++){
    const user = new Users({
    email: req.body[i].email,
    username: req.body[i].username,
    password: req.body[i].password //bcrypt.hash(req.body[i].password, 10)
    })
    user.save()
      .then((result) => {
        res.send("User/s have been added")
      })
      .catch((err) => {
        console.log(err)
      })

  }
});

router
    .route("/:_id/") // to find a user by email.
    .get((req, res) =>{
        console.log("User _id :", req.params._id)
        Users.findOne({email: req.params._id}, (err , result) => {
          if (err) throw err
          res.send(result)
        })
  
    })
    .put((req, res) => {
        // to change a student's subject
            console.log(req.params._id)
            Users.findOne({email: req.params._id}, (err, result) => {
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

      console.log(req.params._id)
      Users.findOne({_id: req.params._id}, (err, result) => {
        if (err) throw err;
        result.remove();
        res.send(`User with _id ${req.params._id} has been deleted`)
  })
})
  
  module.exports = router;