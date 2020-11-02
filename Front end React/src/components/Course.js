import React, { Component } from 'react';


export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
    <div className ="course">
        <p>{this.props.num} {' || '} Name : {this.props.oneCourse.name} {' || '} duration : {this.props.oneCourse.duration}</p>
    </div>

    )
    }

  }