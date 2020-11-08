import React, { Component } from 'react';
import Student from './Student'


export default class StudentsList extends Component {
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
    this.props.addNewStudent(this.state.userNameInput, this.state.emailInput, this.state.passWordInput)
  }


  render() {

    const student = this.props.list.map((elem, i) => <Student oneStudent={elem} key={i} num={i+1} deleteStudent = {this.props.deleteStudent} editStudent = {this.props.editStudent}/>)
    return (<div className="students-list">
        <p>Add Students</p>
        <input placeholder = "Username" onChange = {this.userHandler}></input>
        <input placeholder = "Email" onChange = {this.emailHandler}></input>
        <input placeholder = "Password" onChange = {this.passHandler}></input>
        <button onClick = {this.addNew}>Add</button>
        {student}
        </div>
    );}

  }