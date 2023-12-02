import React, { useState, useEffect } from "react";
import Chatbot from "./Chatbot";
import { Button } from "react-bootstrap";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const useDataTransfer = (shouldFetchData) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetchData) {
        await new Promise((resolve) => {
          onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              console.log("uid:", uid);
              localStorage.setItem("uid", JSON.stringify(uid));
              resolve();
            } else if (!user) {
              console.log("user is logged out");
              resolve();
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

        try {
          const data = await result.json();
          console.log("Kapott adatok:", data);
          setMessage(data.message);
          const userMistakes = JSON.stringify(data);
          localStorage.setItem("usermistakes", userMistakes);
        } catch (error) {
          console.error("Fetch error:", error);
        }
      }
    };

    fetchData();
  }, [shouldFetchData]);

  return message;
};

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [shouldFetchData, setShouldFetchData] = useState(false);
  const message = useDataTransfer(shouldFetchData);

  const handleChatToggle = () => {
    setShouldFetchData(true);
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
      {isChatOpen && <Chatbot message={message} />}
    </div>
  );
};

export default ChatButton;
