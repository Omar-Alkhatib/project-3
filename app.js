const express = require('express');
const app = express();
const port = 3000;
const courses = require("./routes/courses.js");
const instructors = require("./routes/instructors.js")
const students = require("./routes/students.js")

app.use(express.json());
app.use("/courses", courses);
app.use("/instructors", instructors);
app.use("/students", students);




app.get('/', (req, res) => {

});





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
