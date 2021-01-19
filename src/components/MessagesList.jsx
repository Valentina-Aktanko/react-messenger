import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Message, messageType } from './Message';

export class MessagesList extends Component {

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape(messageType),
    ),
  }

  render() {
    const { items } = this.props;

    return (
      <ul>
        {items.map((item, idx) => <Message key={idx} {...item} />)}
      </ul>
    );
  }

}