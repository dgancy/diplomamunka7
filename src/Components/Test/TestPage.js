import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

export default function TestPage() {
  const navigate = useNavigate();

  function TestBegin() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("nav uid", uid);
        localStorage.setItem("uid", JSON.stringify(uid));
      } else if (!user) {
        console.log("nav user is logged out");
      }
    });

    navigate("/recursion-tree-test");
  }
  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Tesztoldal
      </h1>
      <div className="row justify-content-center text-center">
        <Button onClick={TestBegin} variant="outline-warning">
          Új Feladatsor
        </Button>
      </div>
      <br />
    </form>
  );
}
