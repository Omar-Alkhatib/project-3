import React, { Component } from 'react';
import Course from './Course'


export default class CoursesList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const course = this.props.list.map((elem, i) => <Course oneCourse={elem} key={i} num={i+1} deleteItem = {this.props.deleteItem}/>)
    return (<div className="course-list">
        <p>Courses</p>
        {course}
        </div>
    );}

  }