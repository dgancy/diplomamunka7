import React, { useState } from 'react';
import Chatbot from './ChatBottest';
import { Button } from 'react-bootstrap';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <Button style={{ position: 'fixed', bottom: '20px', right: '20px' }} onClick={handleChatToggle}>Open Chat</Button>
      {isChatOpen && <Chatbot />}
    </div>
  );
};

export default ChatButton;
