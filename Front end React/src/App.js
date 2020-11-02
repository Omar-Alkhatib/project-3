import React, { Component } from 'react';
import axios from 'axios';
// import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
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
  

  render() {
    
    return (

    <div>

      <h1>WELCOM TO OUR ACADEMY</h1>
      <h2></h2>
      <h2 onClick = {this.getAllInstructors}> Our Instructors</h2>
      <h2 onClick = {this.getAllStudents}> Our Students</h2>
      <h2 onClick = {this.getAllCourses}> Our Courses</h2>
      <h2 onClick = {this.getAllUsers}> Users</h2>
      <InstructorsList list = {this.state.instructorList}/>
      <StudentsList list = {this.state.studentList}/>
      <UsersList list = {this.state.userList}/>
      <CoursesList list = {this.state.courseList}/> 
      
      {/* <Route extact path = '/students/' render = {(props) => <Students{...props}/>}/>
      <Route extact path = '/Courses/' render = {(props) => <Courses{...props}/>}/>
      <Route extact path = '/Users/' render = {(props) => <Users{...props}/>}/> */}
      
    </div>
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