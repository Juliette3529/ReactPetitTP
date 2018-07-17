import React, { Component } from 'react';
import Parse from 'parse';

const initialeState = {username: '', email: '', password: '', error: ''};

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = initialeState;
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = new Parse.User();
    user.set("username", this.state.username);
    user.set("password", this.state.password);
    user.set("email", this.state.email);
    user.signUp()
      .then(user => this.setState(initialeState))
      .catch(error => this.setState({error: error.message}));
  }

  render() {
    return (
      <section>
        <h2>Register</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>{this.state.error}</div>
          <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} placeholder="Username"/>
          <input type="email" name="email" value={this.state.email} onChange={(e) => this.handleChange(e)} placeholder="Email"/>
          <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} placeholder="Password"/>
          <input type="submit"/>
        </form>
      </section>
    );
  }

}

export default Register;