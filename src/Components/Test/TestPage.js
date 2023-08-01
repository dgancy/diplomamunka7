import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TestPage() {
    const navigate=useNavigate();

    function TestBegin(){
        navigate("/recursion-tree-test");
    }
  return (
    <form style={{ background: "#000027", height:"100vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        TestPage
      </h1>
      <div className="row justify-content-center text-center">
        <Button onClick={TestBegin} variant="outline-warning">Új Feladatsor</Button>
      </div>
      <br/>
    </form>
  );
}
