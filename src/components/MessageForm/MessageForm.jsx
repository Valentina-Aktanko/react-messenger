import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

export class MessageForm extends Component {

  state = {
    author: '',
    text: '',
  };

  static propTypes = {
    onSend: PropTypes.func,
  }

  handleMessageSend = () => {
    const { onSend } = this.props;

    if (typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ text: '' });
    }
  }

  handleEnterDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend();
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    })
  }

  render() {
    const { author, text } = this.state;

    return(
      <div>
        <TextField 
          id="standard-basic" 
          name="author"
          value={author} 
          label="Author"
          onChange={this.handleInputChange}
        />
        {/* <br /> */}
        <TextField 
          name="text" 
          value={text} 
          label = "Text"
          onKeyDown={this.handleEnterDown}
          onChange={this.handleInputChange} 
        />
        {/* <br /> */}
        {/* <Button 
          variant="contained" 
          color="primary"
          onClick={this.handleMessageSend}
        >
          Send
        </Button> */}
        <IconButton 
          aria-label="send" 
          variant="contained" 
          color="primary"
          onClick={this.handleMessageSend}>
          <SendIcon />
        </IconButton>
      </div>
    );
  }

}