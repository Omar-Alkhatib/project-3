import React, { Component } from 'react';


export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
    <div className ="student">
        <p>{this.props.num} {' || '} Name : {this.props.oneStudent.username} {' || '} Email : {this.props.oneStudent.email}</p>
    </div>

    )
    }

  }