import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return(
    <ChatEngine 
       height="100vh"
       projectID="54a69bd2-a20f-45b1-9102-3b866f840f8c"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/> }

    />
  );
}

export default App;
