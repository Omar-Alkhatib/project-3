import React, { Component } from 'react';


export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {oneUser, num} = this.props
    const {username, email, _id} = oneUser

    return (
    <div className ="user">
        <span>{num} {' || '} Name : {username} {' || '} Email : {email}</span>
        <button>UPDATE</button><button onClick = {this.props.deleteUser.bind(this, _id)}>DELETE</button> 
    </div>

    )
    }

  }