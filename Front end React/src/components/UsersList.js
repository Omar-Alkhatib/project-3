import React, { Component } from 'react';
import User from './User'


export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    const user = this.props.list.map((elem, i) => <User oneUser={elem} key={i} num={i+1} deleteItem = {this.props.deleteItem}/>)
    return (<div className="user-list">
        <p>Users</p>
        {user}
        </div>
    );}

  }