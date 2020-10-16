const express = require('express');
let router = express.Router();
router.use(express.json());
// const authMiddleWare = require("./AuthMiddleWare")


let courses = [
    {"Name" : "Java", "Duration" : "6 months", "id": "1"},
    {"Name" : "Javascript", "Duration" : "5 months", "id": "2"},
    {"Name" : "C++", "Duration" : "4 months", "id": "3"},
    {"Name" : "Python", "Duration" : "3 months", "id": "4"},
    {"Name" : "Http & CSS", "Duration" : "2 months", "id": "5"}
]
// console.log("pre courses")
router
  .route("/")
  .get((req, res) =>{
      console.log("courses")
      res.send(courses)
  })
  .post((req, res) => {
      // to post one or multiple courses at once
        console.log(req.body)
      for (i = 0; i < req.body.length; i++) {
      courses.push(req.body[i])
      }
      res.send("New course/s have been added")
      console.log(courses)
  });

router
    .route("/:id/")
    .get((req, res) =>{
        console.log("Course id :", req.params.id)

          res.send(courses.filter((elem, ind) =>{
              return elem.id == req.params.id
          })[0])
        // res.send()
    })
    .put((req, res) => {
        // to change a course duration
            console.log(req.params.id)
            const course = courses.filter((elem, ind) =>{
                return elem.id == req.params.id
            })

            course[0].Duration = req.body.Duration
            res.send(course)
        
        //   res.send("Course duration has been changed")
        console.log(req.body)
        console.log(courses)
    })
    .delete((req, res) => {

        for (i = 0; i < courses.length; i++){
            if (courses[i].id == req.params.id) {
                courses.splice(i, 1)
                break
            }
        }
        res.send(courses)
    });
    








module.exports = router;
