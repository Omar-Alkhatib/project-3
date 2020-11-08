import React, { Component } from 'react';


export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const {oneStudent, num} =this.props
    const {username, email, _id} = oneStudent

    return (
    <div className ="student">
        <span>{num} {' || '} Name : {username} {' || '} Email : {email}</span>
        <button onClick = {this.props.editStudent.bind(this, _id)}>UPDATE</button><button onClick = {this.props.deleteStudent.bind(this, _id)}>DELETE</button>
    </div>

    )
    }

  }