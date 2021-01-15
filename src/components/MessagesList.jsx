import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Message } from './Message';

export class MessagesList extends Component {

  static propTypes = {
    message: PropTypes.array,
  }

  render() {
    const { messages } = this.props;

    return (
      <ul>
        {messages.map((message, idx) => 
          <Message key={idx} author={message.author} text={message.text} />
        )}
      </ul>
    );
  }

}