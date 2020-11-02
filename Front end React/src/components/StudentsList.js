import React, { Component } from 'react';
import Student from './Student'


export default class StudentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const student = this.props.list.map((elem, i) => <Student oneStudent={elem} key={i} num={i+1} deleteItem = {this.props.deleteItem}/>)
    return (<div className="students-list">
        <p>Students</p>
        {student}
        </div>
    );}

  }