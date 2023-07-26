import React from "react";
import { Button } from "react-bootstrap";

export default function RedBlackTreeTest() {
  var array = [];
  var userarray = [];
  var usercolors = [];

  for (let i = 0; i < 30; i++) {
    userarray[i] = "NIL";
    usercolors[i] = "white";
  }

  function Generate() {
    var hossz = Math.floor(Math.random() * 3) + 10;
    var arrayRandomNumber;
    for (let i = 0; i < hossz; i++) {
      arrayRandomNumber = Math.floor(Math.random() * 100);
      if (!array.includes(arrayRandomNumber)) {
        array.push(arrayRandomNumber);
      }
    }

    console.log("hossz: " + hossz);
    console.log("array: " + array);
    return `Oldja meg a piros-fekete fa használtával a feladatot, a következő adatsorra: [ ${array} ].`;
  }

  function BlackEdge() {
    var IdColors = document.getElementById("idcolor").value;
    document.getElementById("inp" + IdColors).style.background = "black";
    document.getElementById("inp" + IdColors).style.color = "white";
    usercolors[IdColors] = "black";
    console.log(IdColors);
    console.log("UColors: " + usercolors);
  }
  function RedEdge() {
    var IdColors = document.getElementById("idcolor").value;
    document.getElementById("inp" + IdColors).style.background = "red";
    document.getElementById("inp" + IdColors).style.color = "white";
    usercolors[IdColors] = "red";
    console.log(IdColors);
    console.log("UColors: " + usercolors);
  }

  return (
    <form style={{ background: "#000024", paddingTop: "20px" }}>
      <div className="form-group">
        <div className="container">
          <div
            className="row justify-content-center text-center"
            style={{ color: "white" }}
          >
            {Generate()}
          </div>
          <div className="row justify-content-center text-center">
            <div id="generate"></div>
            <div id="leiras"></div>
          </div>
        </div>
        <br />
        <div className="row justify-content-center text-center">
          <input
            id="idcolor"
            type="number"
            className="form-control"
            style={{
              height: "40px",
              width: "70px",
              marginTop: "9px",
              marginRight: "10px",
            }}
            placeholder="ID:"
          ></input>
          <Button
            style={{ color: "white", margin: "10px" }}
            variant="dark"
            onClick={BlackEdge}
          >
            Black
          </Button>
          <Button
            style={{ color: "white", margin: "10px" }}
            variant="danger"
            onClick={RedEdge}
          >
            Red
          </Button>
        </div>
      </div>
      <div
        style={{
          paddingBottom: "25px",
          background: "#ffffff",
        }}
      >
        <div
          className="row justify-content-center text-center col-sm"
          style={{ paddingBottom: "10px", paddingTop: "20px" }}
        >
          <input
            id="inp0"
            type="number"
            placeholder="0"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft:"90px"
            }}
          ></input>
        </div>
        <div
          className="row justify-content-center text-center col-sm"
          style={{ paddingBottom: "10px", paddingTop: "10px" }}
        >
          <input
            id="inp1"
            type="number"
            placeholder="1"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft:"100px",
              marginRight: "160px",
            }}
          ></input>
          <input
            id="inp2"
            type="number"
            placeholder="2"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "300px",
            }}
          ></input>
        </div>
        <div
          className="row justify-content-center text-center col-sm"
          style={{ paddingBottom: "10px", paddingTop: "10px" }}
        >
          <input
            id="inp3"
            type="number"
            placeholder="3"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "100px",
              marginRight: "110px",
            }}
          ></input>
          <input
            id="inp4"
            type="number"
            placeholder="4"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "80px",
              marginRight: "140px",
            }}
          ></input>
          <input
            id="inp5"
            type="number"
            placeholder="5"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "60px",
              marginRight: "70px",
            }}
          ></input>
          <input
            id="inp6"
            type="number"
            placeholder="6"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "120px",
            }}
          ></input>
        </div>
        <div
          className="row justify-content-center text-center col-sm"
          style={{ paddingBottom: "10px", paddingTop: "10px" }}
        >
          <input
            id="inp7"
            type="number"
            placeholder="7"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginRight: "30px",
              marginLeft: "100px",
            }}
          ></input>
          <input
            id="inp8"
            type="number"
            placeholder="8"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          ></input>
          <input
            id="inp9"
            type="number"
            placeholder="9"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          ></input>
          <input
            id="inp10"
            type="number"
            placeholder="10"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          ></input>
          <input
            id="inp11"
            type="number"
            placeholder="11"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          ></input>
          <input
            id="inp12"
            type="number"
            placeholder="12"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          ></input>
          <input
            id="inp13"
            type="number"
            placeholder="13"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "30px",
              marginRight: "30px",
            }}
          ></input>
          <input
            id="inp14"
            type="number"
            placeholder="14"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "30px",
            }}
          ></input>
        </div>
        <div
          className="row justify-content-center text-center col-sm"
          style={{ paddingBottom: "10px", paddingTop: "10px" }}
        >
          <input
            id="inp15"
            type="number"
            placeholder="15"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginRight: "15px",
              marginLeft: "100px",
            }}
          ></input>
          <input
            id="inp16"
            type="number"
            placeholder="16"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp17"
            type="number"
            placeholder="17"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp18"
            type="number"
            placeholder="18"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp19"
            type="number"
            placeholder="19"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp20"
            type="number"
            placeholder="20"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp21"
            type="number"
            placeholder="21"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp22"
            type="number"
            placeholder="22"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
            }}
          ></input>
          <input
            id="inp23"
            type="number"
            placeholder="23"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginRight: "15px",
              marginLeft: "15px",
            }}
          ></input>
          <input
            id="inp24"
            type="number"
            placeholder="24"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp25"
            type="number"
            placeholder="25"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp26"
            type="number"
            placeholder="26"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp27"
            type="number"
            placeholder="27"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp28"
            type="number"
            placeholder="28"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp29"
            type="number"
            placeholder="29"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "15px",
              marginRight: "15px",
            }}
          ></input>
          <input
            id="inp30"
            type="number"
            placeholder="30"
            className="form-control"
            style={{
              borderRadius: "50px",
              width: "75px",
              borderColor: "black",
              marginLeft: "30px",
            }}
          ></input>
          
        </div>
      </div>
      <div>
        <div
          className="row justify-content-center text-center"
          style={{ padding: "20px" }}
        >
          <Button variant="outline-warning">Befejez</Button>
        </div>
      </div>
    </form>
  );
}
