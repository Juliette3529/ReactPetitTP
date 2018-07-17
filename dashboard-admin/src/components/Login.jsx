import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main>
        <h1>Login</h1>
        <Link to="/admin">Administration</Link>
      </main>
    );
  }

}

export default Login;