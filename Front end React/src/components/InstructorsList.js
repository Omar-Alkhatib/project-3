import React, { Component } from 'react';
import Instructor from './Instructor'


export default class InstructorsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const instructor = this.props.list.map((elem, i) => <Instructor oneInstructor={elem} key={i} num={i+1} deleteItem = {this.props.deleteItem}/>)
    return (<div className="instructor-list">
        <p>Instructors</p>
        {instructor}
        </div>
    );}

  }