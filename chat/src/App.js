import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessageForm from "./composants/MessageForm";
import MessageList from "./composants/MessageList";
import Parse from 'parse';
import Login from "./composants/Login";
import Register from "./composants/Register";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {user: Parse.User.current()};
  }

  handleLogOut(e) {
    Parse.User.logOut().then(() => this.setState({user: Parse.User.current()}));
  }

  userLoggedIn() {
    this.setState({user: Parse.User.current()});
  }

  render() {

    const pageContent = Parse.User.current() ? (<main><button onClick={(e) => this.handleLogOut(e)}>LogOut</button><MessageForm/><MessageList/></main>) : (<main><Login userLoggedIn={() => this.userLoggedIn()}/><Register/></main>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {pageContent}
      </div>
    );
  }
}

export default App;