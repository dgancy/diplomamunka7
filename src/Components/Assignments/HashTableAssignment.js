import React from "react";
import { Button } from "react-bootstrap";

export default function HashTableAssignment() {
  var charakters = [];
  let type;
  var hossz;
  var elemszam;
  var numbers = [];
  var numbersh2 = [];
  var c1;
  var c2;
  var c1c2type;
  
  function Generate() {
    document.getElementById("btncheck").style.display="block";
    var chars = "QWERTZUIOPLKJHGFDSAYXCVBNM";
    var h1 = "";
    var különbözet = 0;
    var input = document.getElementById("gen");
    hossz = Math.floor(Math.random() * 8) + 4;
    elemszam = Math.floor(Math.random() * 4) + 4;
    //var cs = hossz * 70;

    type = Math.floor(Math.random() * 100) % 4;

    if (type === 0) {
      type = "simple";
    } else if (type === 1) {
      type = "lineal";
    } else if (type === 2) {
      type = "square";
    } else if (type === 3) {
      type = "double";
    }
    console.log("Típus: " + type);

    if (elemszam >= hossz) {
      különbözet = elemszam - hossz + 2;
      elemszam -= különbözet;
    } else if (elemszam < hossz / 2) {
      elemszam += 1;
    }
    console.log("Elemek: " + elemszam);

    console.log("Hossz: " + hossz);
    for (let i = 0; i < elemszam; i++) {
      numbers.push(Math.floor(Math.random() * 100));
      numbersh2.push(Math.floor(Math.random() * 100));
      charakters.push(chars.charAt(Math.floor(Math.random() * 26)));
    }

    if (type === "simple" || type === "lineal") {
      for (let i = 0; i < elemszam; i++) {
        if (i === elemszam) {
          h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + " ";
        }
        h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", ";
      }
      document.getElementById(
        "hossz"
      ).innerHTML = `Szúrja be egy ${hossz} hosszúságú hash táblába a következő objektumokat 
        ${type} hasítás alkalmazásával.<br/>`;
      document.getElementById("h").innerHTML = h1 + " .";
    } else if (type === "square") {
      var oneortwo = Math.floor(Math.random() * 1);
      if (oneortwo === 0) {
        c1 = "c1 = " + 0;
        c2 = "c2 = " + 1;
        c1c2type=0;
      } else {
        c1 = "c1 = " + 1;
        c2 = "c2 = " + 2;
        c1c2type=1;
      }
      for (let i = 0; i < elemszam; i++) {
        if (i === elemszam) {
          h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + " ";
        }
        h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", ";
      }
      document.getElementById(
        "hossz"
      ).innerHTML = `Szúrja be egy ${hossz} hosszúságú hash táblába a következő objektumokat ${type} ( ${c1} , ${c2} ) hasítás alkalmazásával.`;
      document.getElementById("h").innerHTML = h1 + " .";
    } else if (type === "double") {
      for (let i = 0; i < elemszam; i++) {
        if (i === elemszam) {
          h1 +=
            "h1:( " +
            charakters[i] +
            " ) = " +
            numbers[i] +
            ", " +
            "h2:( " +
            charakters[i] +
            " ) = " +
            numbersh2[i] +
            " ";
        }
        h1 +=
          "h1:( " +
          charakters[i] +
          " ) = " +
          numbers[i] +
          ", " +
          "h2:( " +
          charakters[i] +
          " ) = " +
          numbersh2[i] +
          " ";
      }
      document.getElementById("hossz").innerHTML =
        "Szúrja be egy " +
        hossz +
        " hosszúságú hash táblába a következő objektumokat " +
        type +
        " hasítás alkalmazásával.";
      document.getElementById("h").innerHTML = h1 + " .";
    }
    console.log("H1: " + h1);

    for (var i = 0; i < 11; i++) {
      input.innerHTML +=
        '<input type="text" placeholder="' +
        i +
        '" name="' +
        i +
        '" size="4" id="inp' +
        i +
        '">';
    }

    console.log("first:" + charakters);
    document.getElementById("btngen").disabled = true;
  }

  function Check() {
    var leftover;
    var arrayfinal = [];

    for (let j = 0; j < hossz; j++) {
      arrayfinal[j] = " ";
    }

    if (type === "simple") {
      for (let j = 0; j < elemszam; j++) {
        leftover = numbers[j] % hossz;
        if (arrayfinal[leftover] === " ") {
          arrayfinal[leftover] = charakters[j];
        } else {
          arrayfinal[leftover] += charakters[j];
        }
      }
    }
    if (type === "lineal") {
      for (let j = 0; j < elemszam; j++) {
        leftover = numbers[j] % hossz;
        if (arrayfinal[leftover] === " ") {
          arrayfinal[leftover] = charakters[j];
        } else {
          arrayfinal[leftover + 1] = charakters[j];
        }
      }
    }
    if (type === "double") {
      for (let j = 0; j < elemszam; j++) {
        leftover = numbers[j] % hossz;
        if (arrayfinal[leftover] === " ") {
          arrayfinal[leftover] = charakters[j];
        } else {
          leftover = numbersh2[j] % hossz;
          arrayfinal[leftover] = charakters[j];
        }
      }
    }
    if (type === "square") {
      if(c1c2type===0){
        c1=0;
        c2=1;
      }else if(c1c2type===1){
        c1=1;
        c2=2;
      }
      var overLapping = 1;
      for (let j = 0; j < elemszam; j++) {
        leftover = parseInt(numbers[j]) % hossz;
        if (arrayfinal[leftover] === " ") {
          arrayfinal[leftover] = charakters[j];
        } else if (arrayfinal[leftover] !== " ") {
          console.log(j + " eleje: " + leftover);
          if (
            arrayfinal[leftover + Math.pow(c1 + c2 * overLapping, 2)] === " "
          ) {
            numbers[j] =
              parseInt(numbers[j]) +
              parseInt(Math.pow(c1 + c2 * overLapping, 2));
            leftover = numbers[j] % hossz;
            console.log("Debug: " + numbers[j]);
            arrayfinal[leftover] = charakters[j];
            console.log(j + " vege1: " + leftover);
          }

          if (
            arrayfinal[leftover + Math.pow(c1 + c2 * overLapping, 2)] !== " "
          ) {
            overLapping++;
            leftover =
              (numbers[j] + Math.pow(c1 + c2 * overLapping, 2)) % hossz;
            arrayfinal[leftover] = charakters[j];
            console.log(
              j + " vegeosszeg: " + Math.pow(c1 + c2 * overLapping, 2)
            );
          }
        }
      }
      console.log("sq: "+ arrayfinal);
    }

    console.log("type:" + type);
    console.log("hossz%:" + hossz);
    console.log("third:" + charakters);
    console.log("numbers:" + numbers);
    console.log(charakters);
    console.log(arrayfinal);

    var userresult = [];

    for (let i = 0; i < 11; i++) {
      if (document.getElementById("inp" + i).value !== " ") {
        userresult[i] = document.getElementById("inp" + i).value;
        if (userresult[i] === "") {
          userresult[i] = " ";
        }
      }
    }
    console.log(userresult);

    var counter = 0;
    for (let i = 0; i < hossz; i++) {
      if (userresult[i] === arrayfinal[i] && !userresult[i].includes("")) {
        counter += 1;
      }
    }
    console.log(counter);
    if (counter === hossz && counter!==0) {
      console.log("Jó megoldás!");
      document.getElementById("final").innerHTML = "Jó megoldás!";
    } else {
      console.log("Hibás megoldás, a helyes megoldás: [ " + arrayfinal + " ].");
      document.getElementById(
        "final"
      ).innerHTML = `Hibás megoldás, a helyes megoldás: [ ${arrayfinal} ].`;
    }
  }

  /*
   */
  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Hash tábla feladatok
      </h1>
      <div class="form-group">
        <div class="container">
          <div class="row justify-content-center text-center">
            <Button
              variant="btn btn-outline-warning"
              id="btngen"
              onClick={Generate}
            >
              New Assignment
            </Button>
          </div>
          <div
            class="row justify-content-center text-center"
            style={{ paddingTop: "15px" }}
          >
            <b id="hossz" style={{ color: "white" }}></b>
            <br />
            <b id="h" style={{ color: "white" }}></b>
          </div>
          <div
            style={{
              paddingLeft: "15%",
              paddingTop: "2%",
              paddingBottom: "2%",
              paddingRight: "10%",
            }}
            id="gen"
          ></div>
        </div>
      </div>
      <div>
        <div class="row justify-content-center text-center">
          <Button
          style={{display:"none"}}
            id="btncheck"
            variant="btn btn-outline-warning"
            onClick={Check}
          >
            Solve
          </Button>
        </div>
        <br />
        <b
          style={{ color: "white", textAlign: "center", paddingLeft: "40%" }}
          id="final"
        />
      </div>
      <br />
    </form>
  );
}
