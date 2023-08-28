import React from "react";
import { Button } from "react-bootstrap";

export default function BackTrackAssignment() {
  var type;
  var kezdmo = [];
  var ÖsszesCimlet;
  function Generate() {
    type = Math.floor(Math.random() * 3);
    if (type === 0) {
      type = "ElsőFiú";
    } else if (type === 1) {
      type = "Testvér";
    } else if (type === 2) {
      type = "Apa";
    } else if (type === 3) {
      type = "Megoldás";
    } else if (type === 4) {
      type = "LehetségesMegoldás";
    } else if (type === 5) {
      type = "Visszaállit";
    }
    document.getElementById("hideShow").style.visibility = "visible";

    ÖsszesCimlet = Math.floor(Math.random() * 15) + 1;
    var number = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i <= number; i++) {
      var help = Math.floor(Math.random() * 8) + 1 + "";
      if (!kezdmo.includes(help)) {
        kezdmo.push(help);
      }
    }
    document.getElementById("assignmentType").innerHTML = type + " : ";
    kezdmo.sort();
    document.getElementById("leiras").innerHTML =
      "Visszalépéses keresést alkalmazunk a pénzváltás problémára. Egy megoldáskezdemény áll rendelkezésünkre: < " +
      kezdmo +
      " > <br/> Összesen " +
      ÖsszesCimlet +
      " címlet van. Adja meg az alábbi művelete eredményét. <br/> <br/>";

    console.log(ÖsszesCimlet);
    console.log(kezdmo);
    console.log(type);
    kezdmo = [];
  }

  function Check() {
    var userresult = [];
    userresult = document.getElementById("inp0").value.split(",");
    var solve = 0;
    var help = 0;

    if (type === "ElsőFiú") {
      solve = kezdmo;
      help = parseInt(kezdmo[kezdmo.length - 1]);
      help = help + 1 + "";
      solve.push(help);
    } else if (type === "Apa") {
      kezdmo.pop();
      solve = kezdmo;
    } else if (type === "Testvér") {
      kezdmo.pop();
      help = parseInt(kezdmo[kezdmo.length - 1]);
      help = help + 1 + "";
      solve = kezdmo;
      solve.push(help);
    }

    var point = 0;
    for (let i = 0; i < solve.length; i++) {
      if (userresult[i] === solve[i]) {
        point += 1;
      }
    }
    console.log("Pont:" + point);

    if (point === solve.length) {
      console.log("Jó megoldás!");
      document.getElementById("final").innerHTML = "Jó megoldás!";
    } else {
      console.log("Hibás megoldás, a helyes megoldás: [ " + solve + " ].");
      document.getElementById("final").innerHTML =
        "Hibás megoldás, a helyes megoldás: [ " + solve + " ].";
    }
    console.log(userresult);
    console.log(solve);
  }

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Visszalépéses feladatok
      </h1>
      <div class="form-group">
        <div class="container">
          <div class="row justify-content-center text-center">
            <Button variant="outline-warning" id="btngen" onClick={Generate}>
              Új feladat
            </Button>
          </div>
          <div
            style={{ padding: "10px", color: "white" }}
            class="row justify-content-center text-center"
          >
            <div id="leiras"></div>
          </div>
          <div
            id="generate"
            className="justify-content-center text-center"
            style={{ color: "white" }}
          ></div>
        </div>
      </div>
      <div id="hideShow" style={{ visibility: "hidden" }}>
        <div style={{ color: "white" }} id="generate"></div>
        <div
          style={{ padding: "10px" }}
          className="row justify-content-center text-center"
        >
          <b
            style={{ color: "white", marginRight: "10px", marginTop: "5px" }}
            id="assignmentType"
          ></b>
          <input
            id="inp0"
            className="form-control col-1"
            style={{ marginRight: "4%" }}
          ></input>
        </div>
        <div className="row justify-content-center text-center">
          <Button id="btncheck" variant="outline-warning" onClick={Check}>
            Ellenőriz
          </Button>
        </div>
      </div>
      <b
        className="row justify-content-center text-center"
        id="final"
        style={{ color: "white", paddingTop: "10px" }}
      ></b>
    </form>
  );
}
