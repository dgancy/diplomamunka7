import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BackTrackingTest() {
  const navigate = useNavigate();
  var type;
  var kezdmo = [];
  var ÖsszesCimlet;

  const adatokString = localStorage.getItem("mistakesToDbHash");
  const adatok = adatokString ? JSON.parse(adatokString) : [];

  console.log("Mistakes to backend from recursiontree: " + adatok);

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
  function Generate() {
    ÖsszesCimlet = Math.floor(Math.random() * 4) + 9;

    var number = Math.floor(Math.random() * 3) + 2;
    for (let i = 0; i <= number; i++) {
      var help = Math.floor(Math.random() * 8) + 1 + "";
      if (!kezdmo.includes(help)) {
        kezdmo.push(help);
      }
    }

    kezdmo.sort();
    console.log(ÖsszesCimlet);
    console.log(kezdmo);
    console.log(type);

    return `Visszalépéses keresést alkalmazunk a pénzváltás problémára. Egy megoldáskezdemény áll rendelkezésünkre: < ${kezdmo} >. Összesen
      ${ÖsszesCimlet} címlet van. Adja meg az alábbi művelete eredményét. `;
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

    var mistakes_temporary;

    if (point === solve.length) {
      console.log("Jó megoldás!");
    } else {
      console.log("Hibás megoldás, a helyes megoldás: [ " + solve + " ].");
      if (type === "ElsőFiú") {
        mistakes_temporary = 6000;
      } else if (type === "Testvér") {
        mistakes_temporary = 6001;
      } else if (type === "Apa") {
        mistakes_temporary = 6002;
      } else if (type === "Megoldás") {
        mistakes_temporary = 6003;
      } else if (type === "LehetségesMegoldás") {
        mistakes_temporary = 6004;
      } else if (type === "Visszaállit") {
        mistakes_temporary = 6005;
      }
    }
    console.log(userresult);
    console.log(solve);

    localStorage.setItem(
      "mistakesToDbBack",
      JSON.stringify(mistakes_temporary)
    );

    navigate("/red-black-tree-test");
  }

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <div style={{ padding: "15px" }} className="form-group">
        <div className="container">
          <div className="row justify-content-center text-center"></div>
          <div
            style={{ padding: "10px", color: "white" }}
            className="row justify-content-center text-center"
          >
            {Generate()}
          </div>
        </div>
        <div
          className="row justify-content-center text-center"
          style={{ padding: "10px" }}
        >
          <b style={{ color: "white", padding: "5px" }}>{type} : </b>
          <input id="inp0" className="form-control col-1"></input>
        </div>
      </div>
      <div
        style={{ paddingBottom: "20px" }}
        className="row justify-content-center text-center"
      >
        <Button id="btncheck" variant="outline-warning" onClick={Check}>
          Következő
        </Button>
      </div>
    </form>
  );
}
