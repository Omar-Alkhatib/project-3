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
      // to post one or multiple users at once
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
    .route("/:email/") // to find a user by email.
    .get((req, res) =>{
        console.log("User email :", req.params.email)
        Users.findOne({email: req.params.email}, (err , result) => {
          if (err) throw err
          res.send(result)
        })
  
    })
    .put((req, res) => {
        // to change a student's subject
            console.log(req.params.email)
            Users.findOne({email: req.params.email}, (err, result) => {
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
      Users.findOne({email: req.params.email}, (err, result) => {
        if (err) throw err;
        result.remove();
        res.send(`User with email ${req.params.email} has been deleted`)
  })
})
  
  module.exports = router;