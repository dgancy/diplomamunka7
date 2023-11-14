import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TestPage() {
  const navigate = useNavigate();

  function TestBegin() {
    var neptunCode = document.getElementById("neptuncode").value;

    localStorage.setItem(
      "neptunCode",
      JSON.stringify(neptunCode)
    );

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
        <div className="col-2" style={{marginBottom:"2%"}}>
          <b style={{ color: "white" }} htmlFor="exampleInputPassword1">
            NeptunKód:
          </b>
          <input
            type="text"
            id="neptuncode"
            className="form-control"
          />
        </div>
      </div>{" "}
      <div className="row justify-content-center text-center">
        <Button onClick={TestBegin} variant="outline-warning">
          Új Feladatsor
        </Button>
      </div>
      <br />
    </form>
  );
}
