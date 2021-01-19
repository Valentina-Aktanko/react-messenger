import './Message.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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

    const classes = classNames('message', {
      'message-owner': author !== 'Bot',
      'message-companion': author === 'Bot',
    })

    return(
      <li className={classes}>
        <p>{text}</p>
        <p className="message-sender">{author}</p>
      </li>
    );
  }

}