import React from 'react'
import { ChatEngine} from 'react-chat-engine';
import ChatFeed from '../components/ChatFeed.js';
import '../styling/ChatEngine.css';
import LoginForm from '../components/LoginForm.js';

function Forum() {

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine 
        height="100vh"
        projectID="8c9327c6-e26b-43ec-88d1-cb38451fb78d"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default Forum