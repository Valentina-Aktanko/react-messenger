import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Message extends Component {

  static propTypes = {
    author: PropTypes.string,
    text: PropTypes.string,
  }

  static defaultProps = {
    author: 'Noname',
    text: 'Epmty message',
  }

  render() {
    const { author, text } = this.props;
    return(
      <li>{author}: {text}</li>
    );
  }

}