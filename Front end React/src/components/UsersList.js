import React, { Component } from 'react';
import User from './User'


export default class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userNameInput : '', 
      emailInput : '', 
      passWordInput : ''
    };
  }

  userHandler = (e) => {
    // console.log("value :", e.target.value)
    this.setState({userNameInput : e.target.value})
  }

  emailHandler = (e) => {
    // console.log("value :", e.target.value)
    this.setState({emailInput : e.target.value})
  }

  passHandler = (e) => {
    // console.log("value :", e.target.value)
    this.setState({passWordInput : e.target.value})
  }

  addNew = () => {
    this.props.addNewUser(this.state.userNameInput, this.state.emailInput, this.state.passWordInput)
  }

  render() {

    const user = this.props.list.map((elem, i) => <User oneUser={elem} key={i} num={i+1} deleteUser = {this.props.deleteUser}/>)
    return (<div className="user-list">
        <p>Add Users</p>
        <input placeholder = "Username" onChange = {this.userHandler}></input>
        <input placeholder = "Email" onChange = {this.emailHandler}></input>
        <input placeholder = "Password" onChange = {this.passHandler}></input>
        <button onClick = {this.addNew}>Add</button>
        {user}
        </div>
    );}

  }