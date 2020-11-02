import React, { Component } from 'react';


export default class Instructor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
    <div className ="instructor">
        <p>{this.props.num} {' || '} Name : {this.props.oneInstructor.username} {' || '} Email : {this.props.oneInstructor.email}</p>
    </div>

    )
    }

  }