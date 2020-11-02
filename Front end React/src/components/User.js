import React, { Component } from 'react';


export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {

    return (
    <div className ="user">
        <p>{this.props.num} {' || '} Name : {this.props.oneUser.username} {' || '} Email : {this.props.oneUser.email}</p>
    </div>

    )
    }

  }