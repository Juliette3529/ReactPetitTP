import React, { Component } from 'react';
import Parse from "parse";

const initialeState = {username: '', password: '', error: ''};

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = initialeState;
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    Parse.User.logIn(this.state.username, this.state.password)
      .then(user => {
        this.setState(initialeState);
        this.props.userLoggedIn();
      })
      .catch(error => this.setState({error: error.message}));
  }

  render() {
    return (
      <section>
        <h2>Login</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>{this.state.error}</div>
          <input type="text" name="username" value={this.state.username} onChange={(e) => this.handleChange(e)} placeholder="Username"/>
          <input type="password" name="password" value={this.state.password} onChange={(e) => this.handleChange(e)} placeholder="Password"/>
          <input type="submit"/>
        </form>
      </section>
    );
  }

}

export default Login;