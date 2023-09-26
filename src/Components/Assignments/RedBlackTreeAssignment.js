import React from "react";
import { Button } from "react-bootstrap";

export default function RedBlackTreeTest() {
  var array = [];
  var userarray = [];
  var usercolors = [];

  const Line = ({ x1, y1, x2, y2 }) => (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      style={{ stroke: "gold", strokeWidth: 2 }}
    />
  );

  const lines = [
    <Line key="line1" x1="700" y1="40" x2="400" y2="85" />, //1
    <Line key="line2" x1="700" y1="40" x2="1000" y2="85" />, //2

    <Line key="line3" x1="400" y1="90" x2="230" y2="145" />, //3
    <Line key="line4" x1="400" y1="90" x2="525" y2="145" />, //4

    <Line key="line5" x1="1000" y1="89" x2="830" y2="145" />, //5
    <Line key="line6" x1="1000" y1="89" x2="1150" y2="145" />, //6

    <Line key="line7" x1="230" y1="145" x2="160" y2="210" />, //7
    <Line key="line8" x1="230" y1="145" x2="310" y2="210" />, //8
    
    <Line key="line9" x1="525" y1="145" x2="460" y2="210" />, //9
    <Line key="line10" x1="525" y1="145" x2="625" y2="210" />, //10

    <Line key="line11" x1="830" y1="145" x2="930" y2="210" />, //11
    <Line key="line12" x1="830" y1="145" x2="750" y2="210" />, //12

    <Line key="line13" x1="1150" y1="145" x2="1050" y2="210" />, //13
    <Line key="line14" x1="1150" y1="145" x2="1240" y2="210" />, //14


    <Line key="line15" x1="160" y1="210" x2="100" y2="280" />, //15
    <Line key="line16" x1="160" y1="210" x2="220" y2="280" />, //16

    <Line key="line17" x1="310" y1="210" x2="250" y2="280" />, //17
    <Line key="line18" x1="310" y1="210" x2="370" y2="280" />, //18
    
    <Line key="line19" x1="460" y1="210" x2="400" y2="280" />, //19
    <Line key="line20" x1="460" y1="210" x2="520" y2="280" />, //20
    
    <Line key="line21" x1="610" y1="210" x2="560" y2="280" />, //21
    <Line key="line22" x1="610" y1="210" x2="670" y2="280" />, //22
    
    <Line key="line23" x1="760" y1="210" x2="710" y2="280" />, //23
    <Line key="line24" x1="760" y1="210" x2="810" y2="280" />, //24
    
    <Line key="line25" x1="910" y1="210" x2="860" y2="280" />, //25
    <Line key="line26" x1="910" y1="210" x2="970" y2="280" />, //26
    
    <Line key="line25" x1="1060" y1="210" x2="1010" y2="280" />, //25
    <Line key="line26" x1="1060" y1="210" x2="1110" y2="280" />, //26
    
    <Line key="line25" x1="1210" y1="210" x2="1160" y2="280" />, //25
    <Line key="line26" x1="1210" y1="210" x2="1260" y2="280" />, //26
  ];

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
    document.getElementById(
      "questionOne"
    ).innerHTML = `Oldja meg a piros-fekete fa használtával a feladatot, a következő adatsorra: [ ${array} ].`;
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
      document.getElementById("inp" + IdColors).style.background = "#700000 ";
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
      } else {
        userarray[i] = "NIL";
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
      if (
        errorNumbers === "Hibás megoldás, hiba oka: Hiányos számsor" &&
        errorColor === "Hibás megolodás, hiba oka: Nincs szinezés"
      ) {
        errors = "Hiányos számsor és szinzés";
        alert(errors);
      }
      if (errorColor !== "Jó megoldás" && errorNumbers !== "Jó megoldás") {
      } else if (errorNumbers !== "Jó megoldás") {
        alert(errorNumbers);
      } else if (errorColor !== "Jó megoldás") {
        alert(errorColor);
      }

      if (errorColor === "Jó megoldás" && errorNumbers === "Jó megoldás") {
      }

      console.log(errors);
    }
  }

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <br />
      <div className="form-group">
        <div className="container">
          <h1
            style={{
              color: "white",
              paddingBottom: "15px",
              textAlign: "center",
            }}
          >
            Piros-fekete fa feladat
          </h1>
          <div
            className="row justify-content-center text-center"
            style={{ color: "white" }}
          >
            <Button variant="outline-warning" onClick={Generate}>
              Új feladat
            </Button>
          </div>
          <div className="row justify-content-center text-center">
            <b
              id="questionOne"
              style={{ color: "white", paddingTop: "15px" }}
            ></b>
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
      <svg
        id="tree-line"
        style={{
          position: "absolute",
          marginLeft:"14%",
          height: "350px",
          width: "1400px",
        }}
      >
        {lines}
      </svg>
      <div
        style={{
          paddingBottom: "25px",
          marginLeft:"14%",
          width: "1400px",
          height: "350px",
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
              borderColor: "gold",
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
              borderColor: "gold",
              marginRight: "525px",
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
              borderColor: "gold",
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
              borderColor: "gold",
              marginRight: "230px",
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
              borderColor: "gold",
              marginRight: "230px",
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
              borderColor: "gold",
              marginRight: "230px",
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
              borderColor: "gold",
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
              borderColor: "gold",
              marginRight: "75px",
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
              borderColor: "gold",
              marginRight: "75px",
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
              borderColor: "gold",
              marginRight: "75px",
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
              borderColor: "gold",
              marginRight: "75px",
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
              borderColor: "gold",
              marginRight: "75px",
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
              borderColor: "gold",
              marginRight: "75px",
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
              borderColor: "gold",
              marginRight: "75px",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
              borderColor: "gold",
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
