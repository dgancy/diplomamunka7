import React, { useState } from 'react';
import Chatbot from './Chatbot';
import { Button } from 'react-bootstrap';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("nav uid", uid);
        localStorage.setItem("uid", JSON.stringify(uid));
      } else if (!user) {
        console.log("nav user is logged out");
      }
    });

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
