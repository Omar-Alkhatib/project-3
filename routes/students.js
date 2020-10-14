const express = require('express');
let router = express.Router();
router.use(express.json());

const students = [
  {"Name" : "The Hulk", "Subject" : "Javascript", "id": "1"},
  {"Name" : "Kareem Abdul-Jabber", "Subject" : "Javascript", "id": "2"},
  {"Name" : "Mohammed Ali", "Subject" : "Javascript", "id": "3"},
  {"Name" : "Mike Tyson", "Subject" : "Javascript", "id": "4"},
  {"Name" : "Phill Hall", "Subject" : "Javascript", "id": "5"}
]
router
  .route("/")
  .get((req, res) =>{
      console.log("students")
      res.send(students)
  })
  .post((req, res) => {
      // to post one or multiple students at once
        console.log(req.body)
      for (i = 0; i < req.body.length; i++) {
        students.push(req.body[i])
      }
      res.send("New student/s have been added")
      console.log(students)
  });

router
    .route("/:id/")
    .get((req, res) =>{
        console.log("Instructor id :", req.params.id)

          res.send(students.filter((elem, ind) =>{
              return elem.id == req.params.id
          })[0])
        // res.send()
    })
    .put((req, res) => {
        // to change a student's subject
            console.log(req.params.id)
            const student = students.filter((elem, ind) =>{
                return elem.id == req.params.id
            })

            student[0].Subject = req.body.Subject
            res.send(students)
        
        //   res.send("student's subject has been changed")
        console.log(req.body)
        console.log(students)
    })
    .delete((req, res) => {

        for (i = 0; i < students.length; i++){
            if (students[i].id == req.params.id) {
              students.splice(i, 1)
                break
            }
        }
        res.send(students)
    });



module.exports = router;
