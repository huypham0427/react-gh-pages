import React from 'react'
import { ChatEngine} from 'react-chat-engine';
import ChatFeed from '../components/ChatFeed.js';

function Forum() {
  return (
    <ChatEngine 
        height="100vh"
        projectID="8c9327c6-e26b-43ec-88d1-cb38451fb78d"
        userName="admin"
        userSecret="admin"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default Forum