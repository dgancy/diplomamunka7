import React from "react";
import { Button } from "react-bootstrap";

export default function RedBlackTreeAssignment() {
  var array = [];
  var direction = [];
  var colors = [];
  var userarray = [];
  var edge;
  var breaks;
  var counterbreak = 0;

  for (let i = 0; i < 30; i++) {
    userarray[i] = "NIL";
  }

  function Generate() {
    var hossz = Math.floor(Math.random() * 3) + 10;

    for (let i = 0; i < hossz; i++) {
      array.push(Math.floor(Math.random() * 100));
    }

    console.log("hossz: " + hossz);
    console.log("array: " + array);
    document.getElementById("generate").innerHTML =
      "Oldja meg a piros-fekete fa használtával a feladatot, a következő adatsorra: " +
      "[ " +
      array +
      " ].";
  }

  function Kirajzol() {
    console.log("new");
    var element = document.getElementById("element").value;
    var color;
    if (document.getElementById("check-red").checked) {
      color = "red";
      colors.push(color);
    } else if (document.getElementById("check-black").checked) {
      color = "black";
      colors.push(color);
    }

    const divelement = document.createElement("b");

    if (color == "red") {
      divelement.classList.add("tree-red");
    } else if (color == "black") {
      divelement.classList.add("tree-black");
    }
    breaks = document.createElement("br");

    if (direction.length == 0 && userarray[0] == "NIL") {
      userarray[0] = element;
    }
    if (direction.length == 1) {
      if (counterbreak == 0) {
        document.getElementById("final").appendChild(breaks);
        counterbreak++;
      }
      if (direction[0] == "balra" && userarray[1] == "NIL") {
        userarray[1] = element;
      } else if (direction[0] == "jobbra" && userarray[2] == "NIL") {
        userarray[2] = element;
      }
    } else if (direction.length == 2) {
      if (counterbreak == 1) {
        document.getElementById("final").appendChild(breaks);
        counterbreak++;
      }
      if (
        direction[0] == "balra" &&
        direction[1] == "balra" &&
        userarray[3] == "NIL"
      ) {
        userarray[3] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "jobbra" &&
        userarray[4] == "NIL"
      ) {
        userarray[4] = element;
      } else if (
        direction[0] == "jobbra" &&
        direction[1] == "balra" &&
        userarray[5] == "NIL"
      ) {
        userarray[5] = element;
      } else if (
        direction[0] == "jobbra" &&
        direction[1] == "jobbra" &&
        userarray[6] == "NIL"
      ) {
        userarray[6] = element;
      }
    } else if (direction.length == 3) {
      if (counterbreak == 2) {
        document.getElementById("final").appendChild(breaks);
        counterbreak++;
      }
      if (
        direction[0] == "balra" &&
        direction[1] == "balra" &&
        direction[2] == "balra" &&
        userarray[7] == "NIL"
      ) {
        userarray[7] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "balra" &&
        direction[2] == "jobbra" &&
        userarray[8] == "NIL"
      ) {
        userarray[8] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "jobbra" &&
        direction[2] == "balra" &&
        userarray[9] == "NIL"
      ) {
        userarray[9] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "jobbra" &&
        direction[2] == "jobbra" &&
        userarray[10] == "NIL"
      ) {
        userarray[10] = element;
      } else if (
        direction[0] == "jobbra" &&
        direction[1] == "balra" &&
        direction[2] == "balra" &&
        userarray[11] == "NIL"
      ) {
        userarray[11] = element;
      } else if (
        direction[0] == "jobbra" &&
        direction[1] == "balra" &&
        direction[2] == "jobbra" &&
        userarray[12] == "NIL"
      ) {
        userarray[12] = element;
      } else if (
        direction[0] == "jobbra" &&
        direction[1] == "jobbra" &&
        direction[2] == "balra" &&
        userarray[13] == "NIL"
      ) {
        userarray[13] = element;
      } else if (
        direction[0] == "jobbra" &&
        direction[1] == "jobbra" &&
        direction[2] == "jobbra" &&
        userarray[14] == "NIL"
      ) {
        userarray[14] = element;
      }
    } else if (direction.length == 4) {
      if (counterbreak == 3) {
        document.getElementById("final").appendChild(breaks);
        counterbreak++;
      }
      if (
        direction[0] == "balra" &&
        direction[1] == "balra" &&
        direction[2] == "balra" &&
        direction[3] == "balra" &&
        userarray[15] == "NIL"
      ) {
        userarray[15] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "balra" &&
        direction[2] == "balra" &&
        direction[3] == "jobbra" &&
        userarray[16] == "NIL"
      ) {
        userarray[16] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "balra" &&
        direction[2] == "jobbra" &&
        direction[3] == "balra" &&
        userarray[17] == "NIL"
      ) {
        userarray[17] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "balra" &&
        direction[2] == "jobbra" &&
        direction[3] == "jobbra" &&
        userarray[18] == "NIL"
      ) {
        userarray[18] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "jobbra" &&
        direction[2] == "balra" &&
        direction[3] == "balra" &&
        userarray[19] == "NIL"
      ) {
        userarray[19] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "jobbra" &&
        direction[2] == "balra" &&
        direction[3] == "jobbra" &&
        userarray[20] == "NIL"
      ) {
        userarray[20] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "jobbra" &&
        direction[2] == "jobbra" &&
        direction[3] == "balra" &&
        userarray[21] == "NIL"
      ) {
        userarray[21] = element;
      } else if (
        direction[0] == "balra" &&
        direction[1] == "jobbra" &&
        direction[2] == "jobbra" &&
        direction[3] == "jobbra" &&
        userarray[22] == "NIL"
      ) {
        userarray[22] = element;
      } else if (
        direction[0] == "jobbra" &&
        direction[1] == "balra" &&
        direction[2] == "balra" &&
        direction[3] == "balra" &&
        userarray[23] == "NIL"
      ) {
        userarray[23] = element;
      } else if (
        direction[0] == "jobbra" &&
        direction[1] == "balra" &&
        direction[2] == "balra" &&
        direction[3] == "jobbra" &&
        userarray[24] == "NIL"
      ) {
        userarray[24] = element;
      } else if (
        direction[0] == "jobbra" &&
        direction[1] == "balra" &&
        direction[2] == "jobbra" &&
        direction[3] == "balra" &&
        userarray[24] == "NIL"
      ) {
        userarray[24] = element;
      }
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "balra" &&
      direction[2] == "jobbra" &&
      direction[3] == "jobbra" &&
      userarray[25] == "NIL"
    ) {
      userarray[25] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "jobbra" &&
      direction[2] == "balra" &&
      direction[3] == "balra" &&
      userarray[26] == "NIL"
    ) {
      userarray[26] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "jobbra" &&
      direction[2] == "balra" &&
      direction[3] == "jobbra" &&
      userarray[27] == "NIL"
    ) {
      userarray[27] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "jobbra" &&
      direction[2] == "jobbra" &&
      direction[3] == "balra" &&
      userarray[28] == "NIL"
    ) {
      userarray[28] = element;
    } else if (
      direction[0] == "jobbra" &&
      direction[1] == "jobbra" &&
      direction[2] == "jobbra" &&
      direction[3] == "jobbra" &&
      userarray[29] == "NIL"
    ) {
      userarray[29] = element;
    }

    divelement.textContent = element;
    divelement.id = "element" + array.length;
    const final = document.getElementById("final");
    final.appendChild(divelement);

    console.log(color);
    console.log("Colors:" + colors);
    console.log(element);
    console.log("Elements:" + userarray);

    document.getElementById("element").value = "";
    document.getElementById("check-black").checked = false;
    document.getElementById("check-red").checked = false;
    direction = [];
  }

  function check() {
    var errorColor = "Jó megoldás";
    var errorNumbers = "Jó megoldás";
    if (colors[0] == "red") {
      errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
    }
    if (colors.length > 3) {
      if (colors[0] == "black" && colors[1] == "black") {
        if (colors[3] == "black" || colors[4] == "black") {
          errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
        }
      } else if (colors[2] == "black") {
        if (colors[5] == "black" || colors[6] == "black") {
          errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
        }
      }
      if (colors[1] == "black") {
        if (colors[3] == "black") {
          if (colors[7] == "black" || colors[8] == "black") {
            errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
          }
        } else if (colors[4] == "black") {
          if (colors[9] == "black" || colors[10] == "black") {
            errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
          }
        }
      }

      if (colors[2] == "black") {
        if (colors[5] == "black") {
          if (colors[11] == "black" || colors[12] == "black") {
            errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
          }
        } else if (colors[6] == "black") {
          if (colors[13] == "black" || colors[14] == "black") {
            errorColor = "Hibás megolodás, hiba oka: Hibás szinzés";
          }
        }
      }

      for (let i = 0; i < 14; i++) {
        if (
          userarray[i] > userarray[i * i + 1] &&
          userarray[i] < userarray[i * 2 + 2]
        ) {
        } else {
          errorNumbers = "Hibás megolodás, hiba oka: Hibás számsor";
        }
      }
      if (errorColor == "Jó megoldás" && errorNumbers == "Jó megoldás") {
        document.getElementById("final-quest-five").innerHTML = "Jó megoldás";
      } else if (errorColor != "Jó megoldás" && errorNumbers == "Jó megoldás") {
        document.getElementById("final-quest-five").innerHTML =
          "Szín hiba, rossz megoldás";
      } else if (errorColor == "Jó megoldás" && errorNumbers != "Jó megoldás") {
        document.getElementById("final-quest-five").innerHTML =
          "Számsor hiba, rossz megoldás";
      } else if (errorColor != "Jó megoldás" && errorNumbers != "Jó megoldás") {
        document.getElementById("final-quest-five").innerHTML =
          "Több hiba, rossz megoldás";
      }
      console.log(errorColor);
      console.log(errorNumbers);
    }
  }

  return (
    <form style={{ background: "#000027", padding: "20px" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Piros-fekete fa feladatok
      </h1>
      <div className="form-group">
        <div className="container">
          <div className="row justify-content-center text-center">
            <Button variant="outline-warning" id="btngen" onClick={Generate}>
              Új feladat
            </Button>
          </div>
          <div className="row justify-content-center text-center">
            <div id="generate"></div>
            <div id="leiras"></div>
          </div>
        </div>
        <div
          style={{ padding: "20px" }}
          className="row justify-content-center text-center"
        >
          <b style={{ color: "white", paddingTop: "7px", paddingRight: "7px" }}>
            Érték :{" "}
          </b>
          <input
            type="number"
            id="element"
            className="form-control col-2"
          ></input>
        </div>
        <div
          style={{ padding: "20px" }}
          className="row justify-content-center text-center"
        >
          <div className="">
            <input type="checkbox" id="check-black" />
            <b style={{ color: "white", padding: "10px" }}>Black</b>
            <input type="checkbox" id="check-red" />
            <b style={{ color: "white", padding: "10px" }}>Red</b>
          </div>
        </div>
        <div className="row justify-content-center text-center">
          <Button style={{margin:"10px"}} variant="outline-warning" onClick={Kirajzol}>
            Létrehoz
          </Button>
          <Button style={{margin:"10px"}} variant="outline-warning">
            Töröl
          </Button>
        </div>
      </div>
      <div>
        <div className="row justify-content-center text-center">
          <Button variant="warning" onClick={check}>
            Befejez
          </Button>
        </div>
        <b id="final" />
        <b id="final-quest-five"></b>
      </div>
    </form>
  );
}
