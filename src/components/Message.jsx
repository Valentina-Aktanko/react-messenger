import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const messageType = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export class Message extends Component {

  render() {
    const { author, text } = this.props;
    
    return(
      <li>{author}: {text}</li>
    );
  }

}