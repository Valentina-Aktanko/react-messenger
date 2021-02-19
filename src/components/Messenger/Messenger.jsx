import './Messenger.css';

import React, { Fragment, Component } from 'react';

import { MessagesList } from 'components/MessagesList';
import { MessageForm } from 'components/MessageForm';

export class Messenger extends Component {

  state = {
    chats: {
      '1': {
        id: 1,
        messages: [
          { text: 'Привет! Это чат № 1 =)', author: 'Bot'}
        ],
        name: 'Chat 1',
      },
      '2': {
        id: 1,
        messages: [
          { text: 'Привет! Вы в чате №2.', author: 'Bot'}
    
        ],
        name: 'Chat 2',
      },
      '3': {
        id: 1,
        messages: [
          { text: 'Botichelly приветствует вас в чате № 3!', author: 'Bot'}
    
        ],
        name: 'Chat 3',
      },
    }
  }

  componentDidUpdate() {
    // if(this.state.messages.length) {
    //   const author = this.state.messages[this.state.messages.length-1].author;
  
    //   if (author !== 'Bot') {
    //     setTimeout(() => {
    //       this.setState({
    //         messages: this.state.messages.concat([{text: `Привет, ${author}! Бот на связи.`, author: 'Bot'}]),
    //       })
    //     }, 1000)
    //   }
    // }
  }

  handleMessageSend = (message) => {
    this.setState(({ messages }) => ({
      messages: messages.concat([message]),
    }))
  }

  get messages() {
    const { chats } = this.state;
    const { chatId } = this.props;

    let messages = null;

    if (chatId && chats[chatId]) {
      messages = chats[chatId].messages;
    }

    return messages;
  }

  render() {

    return (
      <div className="messenger">
        {this.messages ? 
          <Fragment>
            <MessagesList items={this.messages} /> 
            <MessageForm onSend={this.handleMessageSend} />
          </Fragment>
          : 'Пожалуйста, выберите чат, чтобы продолжить общение' }
        
      </div>
    );
  }

}