import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export class ChatList extends Component {
  render() {
    return (
      <List className="chat-list">
        <ListItem>
          <Link to="/chats/1">
            <ListItemText primary="Chat 1" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/chats/2">
            <ListItemText primary="Chat 2" />
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/chats/3">
            <ListItemText primary="Chat 3" />
          </Link>
        </ListItem>
      </List>
    );
  }
}