import React, { Component } from 'react';


export default class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {oneInstructor, num} =this.props
    const {username, email, _id} = oneInstructor
    return (
    <div className ="instructor">
        <span>{num} {' || '} Name : {username} {' || '} Email : {email} Id : {_id}</span>
        <span>
        <button className ="button">UPDATE</button>
        <button className ="button" onClick = {this.props.deleteInstructor.bind(this, _id)}>DELETE</button>
        </span>
    </div>

    )
    }

  }