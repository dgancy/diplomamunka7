import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleUserMessage = (messageText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: messageText },
    ]);

    let response;
    if (messageText.toLowerCase().includes("hello")) {
      response = "Hello! How can I assist you?";
    } else if (messageText.toLowerCase().includes("goodbye")) {
      response = "Goodbye! Have a great day!";
    } else {
      response = "I'm not sure how to respond to that.";
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "system", content: response },
    ]);
  };

  const handleButtonClick = () => {
    handleUserMessage(inputValue);
    setInputValue("");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "60px",
        right: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        background: "white",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          background: "#007bff",
          color: "white",
          alignSelf: "flex-start",
          position: "relative", // Hozzáadva, hogy a ::before pseudo elemhez igazodjon
        }}
      >
        ChatBot Gancy{" "}
      </div>
      <div
        style={{
          height: "300px",
          border: "1px solid #ccc",
          overflowY: "scroll",
          marginBottom: "0px",
        }}
      >
        {messages.map((message, index) => (
          <div key={index} className={message.role}>
            {message.content}
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleUserMessage(inputValue);
              setInputValue("");
            }
          }}
        />
        <Button variant="warning" onClick={handleButtonClick}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chatbot;
