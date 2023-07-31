import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function RedBlackTreeTest() {
  const navigate = useNavigate();
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
    if (IdColors !== "") {
      document.getElementById("inp" + IdColors).style.background = "black";
      document.getElementById("inp" + IdColors).style.color = "white";
      usercolors[IdColors] = "black";
      console.log(IdColors);
      console.log("UColors: " + usercolors);
    }
  }
  function RedEdge() {
    var IdColors = document.getElementById("idcolor").value;
    if (IdColors !== "") {
      document.getElementById("inp" + IdColors).style.background = "red";
      document.getElementById("inp" + IdColors).style.color = "white";
      usercolors[IdColors] = "red";
      console.log(IdColors);
      console.log("UColors: " + usercolors);
    }
  }
  function Check() {
    for (let i = 0; i < userarray.length; i++) {
      var changer = document.getElementById("inp" + i).value;
      if (changer !== "") {
        userarray[i] = changer;
      }
    }
    console.log("user: " + userarray);

    var errorColor = "Jó megoldás";
    var errorNumbers = "Jó megoldás";
    if (usercolors[0] === "red") {
      errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
    }
    if (usercolors.length > 3) {
      if (usercolors[0] === "black" && usercolors[1] === "black") {
        if (usercolors[3] === "black" || usercolors[4] === "black") {
          errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
        }
      } else if (usercolors[2] === "black") {
        if (usercolors[5] === "black" || usercolors[6] === "black") {
          errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
        }
      }
      if (usercolors[1] === "black") {
        if (usercolors[3] === "black") {
          if (usercolors[7] === "black" || usercolors[8] === "black") {
            errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
          }
        } else if (usercolors[4] === "black") {
          if (usercolors[9] === "black" || usercolors[10] === "black") {
            errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
          }
        }
      }

      if (usercolors[2] === "black") {
        if (usercolors[5] === "black") {
          if (usercolors[11] === "black" || usercolors[12] === "black") {
            errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
          }
        } else if (usercolors[6] === "black") {
          if (usercolors[13] === "black" || usercolors[14] === "black") {
            errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
          }
        }
      }

      let non_white_element = 0;
      for (let i = 0; i < usercolors.length; i++) {
        if (usercolors[i] !== "white") {
          non_white_element += 1;
        }
      }

      if (non_white_element === 0) {
        errorColor = "Hibás megolodás, hiba oka: Nincs szinezés";
      }

      let non_nil = 0;
      for (let i = 0; i < userarray.length; i++) {
        if (userarray[i] !== "NIL") {
          non_nil += 1;
        }
      }
      errorNumbers = "Hibás megoldás, hiba oka: Hiányos számsor";

      if (non_nil !== 0) {
        for (let i = 0; i < 14; i++) {
          if (
            userarray[i] > userarray[i * i + 1] &&
            userarray[i] < userarray[i * 2 + 2]
          ) {
          } else {
            errorNumbers = "Hibás megolodás, hiba oka: Hibás számsor";
          }
        }
      }

      var errors;
      if (errorNumbers === "Hibás megoldás, hiba oka: Hiányos számsor" && errorColor === "Hibás megolodás, hiba oka: Nincs szinezés") {
        errors = "Hiányos számsor és szinzés";
      }

      console.log(errors);
      navigate("/test");
    }
  }

  return (
    <form style={{ background: "#000027", paddingTop: "20px" }}>
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
              width: "80px",
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
              marginLeft: "1%",
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
              marginRight: "27%",
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
              marginRight: "12%",
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
              marginRight: "12%",
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
              marginRight: "12%",
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
            }}
          ></input>
        </div>
        <div
          className="row justify-content-center text-center col"
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
              marginRight: "4%",
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
              marginRight: "4%",
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
              marginRight: "4%",
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
              marginRight: "4%",
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
              marginRight: "4%",
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
              marginRight: "4%",
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
              marginRight: "4%",
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
            }}
          ></input>
        </div>
      </div>
      <div>
        <div
          className="row justify-content-center text-center"
          style={{ padding: "20px" }}
        >
          <Button variant="outline-warning" onClick={Check}>
            Befejez
          </Button>
        </div>
      </div>
    </form>
  );
}
