import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BackTrackingTest() {
  const dataTransfer = async () => {
    const adatokRekurzios = localStorage.getItem("mistakesToDbRekurzios");
    const adatokMester = localStorage.getItem("mistakesToDbMester");
    const adatokHash = localStorage.getItem("mistakesToDbHash");
    const adatokBfa = localStorage.getItem("mistakesToDbBfa");
    const adatokBack = localStorage.getItem("mistakesToDbBack");
    const adatokRbtree = localStorage.getItem("mistakesToDbRbtree");
    const uid = localStorage.getItem("uid");

    const result = await fetch("http://localhost:8080/savemistakes", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key1: adatokRekurzios,
        key2: adatokMester,
        key3: adatokBfa,
        key4: adatokHash,
        key5: adatokRbtree,
        key6: adatokBack,
        key7: uid,
      }),
    });
    console.log(
      adatokRekurzios,
      adatokMester,
      adatokHash,
      adatokBfa,
      adatokBack,
      adatokRbtree,
      uid
    );
  };

  const navigate = useNavigate();
  var type;
  var kezdmo = [];
  var ÖsszesCimlet;

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
    kezdmo = [];
    ÖsszesCimlet = Math.floor(Math.random() * 15) + 10;

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
    localStorage.setItem("mistakesToDbBackMo", JSON.stringify(kezdmo));
    localStorage.setItem("mistakesToDbBackUserMo", JSON.stringify(userresult));

    dataTransfer();

    navigate("/test");
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
          Befejez
        </Button>
      </div>
    </form>
  );
}
