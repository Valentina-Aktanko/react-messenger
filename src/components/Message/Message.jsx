import './Message.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const messageType = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export class Message extends Component {
  
  get direction() {
    return this.props.author === 'Bot' ? 'start' : 'end';
  }

  render() {
    const { author, text } = this.props;

    return(
      <li className="message" style={{ alignSelf: `flex-${this.direction}`}}>
        <p>{text}</p>
        <p className="sender">{author}</p>
      </li>
    );
  }

}