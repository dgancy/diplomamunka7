import React from "react";
import { Button } from "react-bootstrap";

export default function ChatBot() {
  return (
    <form style={{ background: "#000027",position:"absolute" ,bottom:"5%", right:"2%"  }}>
      <Button style={{height:"75px", width:"75px", borderRadius:"50px"}} variant="outline-warning">Chat</Button>
    </form>
  );
}
