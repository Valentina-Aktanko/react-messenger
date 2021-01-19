import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        <input 
          type="text" 
          name="author" 
          value={author} 
          placeholder="Author" 
          onChange={this.handleInputChange}
        />
        <br/>
        <textarea 
          name="text" 
          value={text} 
          placeholder = "Text"
          onChange={this.handleInputChange} 
        ></textarea>
        <br/>
        <button onClick={this.handleMessageSend}>Send</button>
      </div>
    );
  }

}