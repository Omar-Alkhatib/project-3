import React, { Component } from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import StudentsList from './components/StudentsList';
import InstructorsList from './components/InstructorsList';
import CoursesList from './components/CoursesList';
import UsersList from './components/UsersList';
import './App.css';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructorList : [],
      studentList : [],
      userList : [],
      courseList : []

    };
  }

  getAllInstructors = () => {
    axios
    .get('http://localhost:5000/instructors/')
    .then((response) => {
      console.log('Respose: ', response)
      this.setState({instructorList : response.data})

    })
    .catch((err) => {

    })
  }
  
 
  getAllStudents = () => {
    axios
    .get('http://localhost:5000/students/')
    .then((response) => {
      console.log('Respose: ', response)
      this.setState({studentList : response.data})

    })
    .catch((err) => {

    })
  }

  getAllCourses = () => {
    axios
    .get('http://localhost:5000/courses/')
    .then((response) => {
      console.log('Respose: ', response)
      this.setState({courseList : response.data})

    })
    .catch((err) => {

    })
  }

  getAllUsers = () => {
    axios
    .get('http://localhost:5000/users/')
    .then((response) => {
      console.log('Respose: ', response)
      this.setState({userList : response.data})

    })
    .catch((err) => {

    })
  }

  deleteInstructor = (_id) => {
    console.log("id", _id)
    axios
    .delete(`http://localhost:5000/instructors/${_id}`)
    .then((response) => {
      console.log('Respose: ', response)
      // this.setState({userList : response.data})
      this.getAllInstructors()
    })
    .catch((err) => {

    })

  }

  deleteStudent = (_id) => {
    console.log("id", _id)
    axios
    .delete(`http://localhost:5000/students/${_id}`)
    .then((response) => {
      console.log('Respose: ', response)
      // this.setState({userList : response.data})
      this.getAllStudents()
    })
    .catch((err) => {

    })
  }

  deleteUser = (_id) => {
    console.log("id", _id)
    axios
    .delete(`http://localhost:5000/users/${_id}`)
    .then((response) => {
      console.log('Respose: ', response)
      // this.setState({userList : response.data})
      this.getAllUsers()
    })
    .catch((err) => {

    })
  }


  editStudent = (_id) => {
    console.log("id", _id)
    axios
    .put(`http://localhost:5000/students/${_id}`)
    .then((response) => {
      console.log('Respose: ', response)
      // this.setState({userList : response.data})
      this.getAllStudents()
    })
    .catch((err) => {

    })
  }

  addNewInstructor = (username, email, password) => {
    // console.log("addNewInstructor called")
    axios
    .post(`http://localhost:5000/instructors`, [{username, email, password}])
    .then((response) => {
      console.log('Respose: ', response)
      // this.setState({userList : response.data})
      this.getAllInstructors()
    })
    .catch((err) => {

    })
  }

  addNewStudent = (username, email, password) => {
    // console.log("addNewStudent called")
    axios
    .post(`http://localhost:5000/students`, [{username, email, password}])
    .then((response) => {
      console.log('Respose: ', response)
      // this.setState({userList : response.data})
      this.getAllStudents()
    })
    .catch((err) => {

    })
  }

  
  addNewUser = (username, email, password) => {
    // console.log("addNewStudent called")
    axios
    .post(`http://localhost:5000/users`, [{username, email, password}])
    .then((response) => {
      console.log('Respose: ', response)
      // this.setState({userList : response.data})
      this.getAllUsers()
    })
    .catch((err) => {

    })
  }
 
  render() {
    
    return (
    <Router>
    <div className = "app">

      <h1>WELCOM TO OUR ACADEMY</h1>
      <nav className = "nav">
      <h3>
      <span onClick = {this.getAllInstructors}> <Link to='/instructors'> Our Instructors</Link></span>
      <span onClick = {this.getAllStudents}> <Link to='/students'>Our Students</Link></span>
      <span onClick = {this.getAllUsers}> <Link to='/users'>Our Users</Link></span>
      <span onClick = {this.getAllCourses}> <Link to='/courses'>Our Courses</Link></span>
      </h3>
      </nav>

      <Route path = '/instructors' render = {(props) => <InstructorsList {...props} list = {this.state.instructorList} deleteInstructor = {this.deleteInstructor} addNewInstructor = {this.addNewInstructor}/>}/>
      <Route path = '/students' render = {(props) => <StudentsList {...props} list = {this.state.studentList} deleteStudent = {this.deleteStudent} editStudent = {this.editStudent} addNewStudent = {this.addNewStudent}/>}/>
      <Route path = '/users' render = {(props) => <UsersList {...props} list = {this.state.userList} addNewUser = {this.addNewUser} deleteUser = {this.deleteUser}/>}/>
      <Route path = '/courses' render = {(props) => <CoursesList {...props} list = {this.state.courseList}/>}/>
      
      {/* <Route extact path = '/students/' render = {(props) => <Students{...props}/>}/>
      <Route extact path = '/Courses/' render = {(props) => <Courses{...props}/>}/>
      <Route extact path = '/Users/' render = {(props) => <Users{...props}/>}/> */}
      
    </div>
    </Router>  
    )
  }
}


// import React, { Component } from 'react';


// export default class TodoItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   render() {}


/*, { headers: {"Authorization" : `Bearer ${this.state.token}`} }
//  token : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywicGVybWlzc2lvbnMiOlsiciIsInciXSwidHlwZSI6InVzZXIiLCJpYXQiOjE2MDQzMTc0NzgsImV4cCI6MTYwNDQ5MDI3OH0.EIX9OTedwsuWgG7Efy3Aogfb-oe91Cz6KBSzgVyplEU'*/

{/* <Route extact path = '/Instructors/' render = {(props) => <InstructorsList{...props}/>}/> */}