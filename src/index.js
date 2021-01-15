import React from 'react';
import ReactDom from 'react-dom';

// Создание компонента средствами createElement 
const element1 = React.createElement(
  'h1',
  { className: 'react-hello' },
  'Привет! Реакт работает',
);

// Создание компонента с помощью JSX 
const element = <h1 className="hello-react">Привет! JSX тоже работает!</h1>

// Создание функциональных компонентов 
const messages = ['Привет', 'Как дела?', 'Что делаешь?'];

const Message = (props) => <div>{props.text}</div>;
const MessageList = (props) => {
  return props.messages.map((message) => <Message text={message} />);
};

ReactDom.render(
  <MessageList messages={messages}/>,
  document.getElementById('root'),
);