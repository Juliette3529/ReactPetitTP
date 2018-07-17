import React, { Component } from 'react';
import Message from '../classes/Message';
import Parse from 'parse';

class MessageForm extends Component {

  constructor(props) {
    super(props);
    this.state = {content: ''};
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    let msg = new Message();
    msg.save({username: Parse.User.current().attributes.username, content: this.state.content})
      .then(data => this.setState({content: ''}))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input type="text" name="content" value={this.state.content} onChange={(e) => this.handleChange(e)} placeholder="Votre message"/>
        <input type="submit"/>
      </form>
    );
  }

}

export default MessageForm;