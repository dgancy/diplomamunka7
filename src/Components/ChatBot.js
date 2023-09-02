import React from "react";
import { Button } from "react-bootstrap";

export default function ChatBot() {
  const code = "atment";

  const dataTransfer = async () => {
    const result = await fetch("http://localhost:8080/message", {
      method: "POST",
      mode: "no-cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: code,
      }),
    });
    console.log("test: " + code);
  };

  return (
    <form
      style={{
        background: "#000027",
        position: "absolute",
        bottom: "5%",
        right: "2%",
      }}
    >
      <Button
        style={{ height: "75px", width: "75px", borderRadius: "50px" }}
        variant="outline-warning"
        onClick={dataTransfer}
      >
        Chat
      </Button>
    </form>
  );
}
