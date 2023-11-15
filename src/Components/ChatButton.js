import React, { useState, useEffect } from "react";
import Chatbot from "./Chatbot";
import { Button } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const dataTransfer = async () => {
  await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("uid:", uid);
        localStorage.setItem("uid", JSON.stringify(uid));
        resolve(); // Megvárja, amíg az aszinkron művelet befejeződik
      } else if (!user) {
        console.log("user is logged out");
        resolve(); // Megvárja, amíg az aszinkron művelet befejeződik
      }
    });
  });

  const uid = localStorage.getItem("uid");

  const result = await fetch("http://localhost:8080/userid", {
    method: "POST",
    mode: "cors",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ key1: uid }),
  });

  console.log(uid);
};

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    dataTransfer();
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div>
      <Button
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
        onClick={handleChatToggle}
      >
        Open Chat
      </Button>
      {isChatOpen && <Chatbot />}
    </div>
  );
};

export default ChatButton;
