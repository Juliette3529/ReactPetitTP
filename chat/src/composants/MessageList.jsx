import React, { Component } from 'react';
import Message from '../classes/Message';
import Parse from 'parse';

class MessageList extends Component {

  constructor(props) {
    super(props);
    this.state = {messages: []};
  }

  componentDidMount() {
    let query = new Parse.Query(Message);
    query.descending('createdAt');
    query.find().then(messages => this.setState({messages: messages}));

    this.subscription = query.subscribe();
    this.subscription.on('create', (message) => {
      this.setState({messages: [message, ...this.state.messages]});
    });
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {

    const messages = this.state.messages.map(message => (
      <article key={message.id}>
        <p>{message.attributes.username} : {message.attributes.content}</p>
      </article>
    ));

    return (
      <section>
        {messages}
      </section>
    );
  }

}

export default MessageList;