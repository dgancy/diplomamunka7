import React from "react";
import Chatbot from "react-chatbot-kit";
import ActionProvider from "./Chatbot/ActionProvider";
import config from "./Chatbot/config";
import MessageParser from "./Chatbot/MessageParser";

export default function ChatbotOne() {
  const dataToSend = { key1: "value1", key2: "value2" };

  const dataTransfer = async () => {
    const result = await fetch("http://localhost:8080/message", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
    console.log("test: " + dataToSend.key1);
  };

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <div
        style={{
          border: "4px solid gold",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          maxWidth: "700px",
          margin: "0 auto",
          background: "gray"
        }}
      >
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </form>
  );
}
