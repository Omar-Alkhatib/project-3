const express = require('express');
let router = express.Router();
router.use(express.json());

const instructors = [
  {"Name" : "Samira Saeed", "Specialization" : "Java", "id": "1"},
  {"Name" : "Tweety Bird", "Specialization" : "Javascript", "id": "2"},
  {"Name" : "Lubna Alsareea", "Specialization" : "C++", "id": "3"},
  {"Name" : "Hassan Al-Asmar", "Specialization" : "Python", "id": "4"},
  {"Name" : "Safaa Saeed", "Specialization" : "Http & CSS", "id": "5"}
]

router
  .route("/")
  .get((req, res) =>{
      console.log("instructors")
      res.send(instructors)
  })
  .post((req, res) => {
      // to post one or multiple instructors at once
        console.log(req.body)
      for (i = 0; i < req.body.length; i++) {
        instructors.push(req.body[i])
      }
      res.send("New instructor/s have been added")
      console.log(instructors)
  });

router
    .route("/:id/")
    .get((req, res) =>{
        console.log("Instructor id :", req.params.id)

          res.send(instructors.filter((elem, ind) =>{
              return elem.id == req.params.id
          })[0])
        // res.send()
    })
    .put((req, res) => {
        // to change an instructor's specialization
            console.log(req.params.id)
            const instructor = instructors.filter((elem, ind) =>{
                return elem.id == req.params.id
            })

            instructor[0].Specialization = req.body.Specialization
            res.send(instructors)
        
        //   res.send("Instructor's specialization has been changed")
        console.log(req.body)
        console.log(instructors)
    })
    .delete((req, res) => {

        for (i = 0; i < instructors.length; i++){
            if (instructors[i].id == req.params.id) {
              instructors.splice(i, 1)
                break
            }
        }
        res.send(instructors)
    });


module.exports = router;
