import React, { Component } from 'react';

import { MessagesList } from './MessagesList';
import { MessageForm } from './MessageForm';

const messages = ['Привет', 'Как дела?', 'Как настроение?', 'Как погода?'];

export class Messenger extends Component {

  state = {
    messages: [],
  }

  componentDidUpdate() {
    const author = this.state.messages[this.state.messages.length-1].author;

    if (lastMessage.author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{text: `Привет, ${author}! Бот на связи.`, author: 'Bot'}]),
        })
      }, 1000)
    }
  }

  handleMessageSend = (message) => {
    this.setState(({ messages }) => ({
      messages: messages.concat([message]),
    }))
  }

  render() {
    const { messages } = this.state;

    return (
      <div>
        <MessagesList items={messages} />
        <MessageForm onSend={this.handleMessageSend} />
      </div>
    );
  }

}