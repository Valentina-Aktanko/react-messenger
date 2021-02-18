import './Layout.css';  

import React, { Fragment, Component } from 'react';

import { Messenger } from 'components/Messenger';
import { Header } from 'components/Header';

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Messenger />
      </Fragment>
    );
  }
}