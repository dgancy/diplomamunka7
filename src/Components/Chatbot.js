import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

let userName = "";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleUserMessage = (messageText) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: messageText },
    ]);

    let response;

    if (userName === "") {
      userName = messageText;
      response = `Üdvözöllek ${messageText}! Milyen témában segíthetek?`;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "system", content: response },
      ]);
      console.log(userName);
    } else {
      if (
        messageText.toLowerCase().includes("tárgy") ||
        messageText.toLowerCase().includes("tárgyról") ||
        messageText.toLowerCase().includes("téma") ||
        messageText.toLowerCase().includes("témában")
      ) {
        response = "Algo2";
      }
      if (
        messageText.toLowerCase().includes("feladatokat") ||
        messageText.toLowerCase().includes("feladatot")
      ) {
        if (
          !messageText.toLowerCase().includes("mester") ||
          !messageText.toLowerCase().includes("rekurzió") ||
          !messageText.toLowerCase().includes("rekurziós") ||
          !messageText.toLowerCase().includes("bináris") ||
          !messageText.toLowerCase().includes("hash") ||
          (!messageText.toLowerCase().includes("piros") &&
            !messageText.toLowerCase().includes("fekete")) ||
          !messageText.toLowerCase().includes("visszalépéses")
        ) {
          response =
            "Kérlek írd le, mely feladatot nem érted a felsorolásból: Rekurziós módszer, Mester tétel, Bináris keresőfa, Hash tábla, Piros fekete fa, Visszalépéses keresés.";
        }
      }
      if (messageText.toLowerCase().includes("mester")) {
        response = "Mester tétel általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
      if (messageText.toLowerCase().includes("általános") && (messageText.toLowerCase().includes("magyarázata") || messageText.toLowerCase().includes("magyarázat"))){
        response = "Mester tétel általános magyarázata a következő: ";
      }
      }
      if (
        messageText.toLowerCase().includes("rekurzió") ||
        messageText.toLowerCase().includes("rekurziós")
      ) {
        response = "Rekurziós módszer általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
      }
      if (messageText.toLowerCase().includes("bináris")) {
        response = "Bináris keresőfa általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
      }
      if (messageText.toLowerCase().includes("hash")) {
        response = "Hash tábla általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
      }
      if (
        messageText.toLowerCase().includes("piros") &&
        messageText.toLowerCase().includes("fekete")
      ) {
        response = "Piros fekete fa általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
      }
      if (messageText.toLowerCase().includes("visszalépéses")) {
        response = "Visszalépéses keresés általános magyarázat érdekel vagy pedig a legutóbbi feladatmegoldásod, kérlek egész mondatban válaszolj.";
      }

      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "system", content: response },
      ]);
    }
  };

  const handleButtonClick = () => {
    handleUserMessage(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    alert("Üdvözöllek! A kezdéshez kérlek gépeld, hogyan is szólíthatlak.");
  }, []);

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
          height: "360px",
          width: "300px",
          border: "2px solid #ccc",
          overflowY: "scroll",
          marginBottom: "0px",
          background: "#000027",
          color: "white",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`${message.role}Message`}
            style={{
              textAlign: message.role === "user" ? "right" : "left",
            }}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", width: "300px" }}>
        <input
          style={{ width: "250px", borderBottomLeftRadius: "10px" }}
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
