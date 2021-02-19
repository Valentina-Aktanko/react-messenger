import './Layout.css';  

import React, { Fragment, Component } from 'react';

import { Header } from 'components/Header';
import { Messenger } from 'components/Messenger';
import { ChatList } from 'components/ChatList';

export class Layout extends Component {
  render() {
    const id = this.props.match.params.id;

    return (
      <Fragment>
        <Header />
        <ChatList />
        <Messenger chatId={id}/>
      </Fragment>
    );
  }
}