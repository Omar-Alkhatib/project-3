import React, { Component } from 'react';
import Instructor from './Instructor'


export default class InstructorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameInput : '', 
      emailInput : '', 
      passWordInput : ''
    };
  }

  userHandler = (e) => {
    // console.log("value :", e.target.value)
    this.setState({userNameInput : e.target.value})
  }

  emailHandler = (e) => {
    // console.log("value :", e.target.value)
    this.setState({emailInput : e.target.value})
  }

  passHandler = (e) => {
    // console.log("value :", e.target.value)
    this.setState({passWordInput : e.target.value})
  }

  addNew = () => {
    this.props.addNewInstructor(this.state.userNameInput, this.state.emailInput, this.state.passWordInput)
  }


  render() {

    const instructor = this.props.list.map((elem, i) => <Instructor oneInstructor={elem} key={i} num={i+1} deleteInstructor = {this.props.deleteInstructor}/>)
    return (
      <div className="instructor-list">
        <p>Add Instructors</p>
        <input placeholder = "Username" onChange = {this.userHandler}></input>
        <input placeholder = "Email" onChange = {this.emailHandler}></input>
        <input placeholder = "Password" onChange = {this.passHandler}></input>
        <button onClick = {this.addNew}>Add</button>
        
        {instructor}
      </div>
    );}

  }