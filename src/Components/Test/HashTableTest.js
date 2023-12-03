import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function HashTableTest() {
  const navigate = useNavigate();
  var charakters = [];
  let type;
  var hossz = Math.floor(Math.random() * 4) + 8;
  var elemszam = Math.floor(Math.random() * 3) + 5;
  var numbers = [];
  var numbersh2 = [];
  var c1;
  var c2;
  var c1c2type;

  function hideShow() {
    window.onload = function () {
      for (let i = hossz; i < 12; i++) {
        console.log(hossz);
        var elem = document.getElementById("inp" + i);

        if (elem) {
          elem.style.display = "none";
        } else {
          console.error("Az elem nem található: inp" + i);
        }
      }
    };
  }

  function Generate() {
    var chars = "QWERTZUIOPLKJHGFDSAYXCVBNM";
    var h1 = "";
    var különbözet = 0;

    type = Math.floor(Math.random() * 100) % 3;

    if (type === 1) {
      type = "lineal";
    } else if (type === 2) {
      type = "square";
    } else if (type === 0) {
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

    if (type === "lineal") {
      for (let i = 0; i < elemszam; i++) {
        if (i === elemszam) {
          h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + " ";
        }
        h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", ";
      }
      return `Szúrja be egy ${hossz} hosszúságú hash táblába a következő objektumokat 
          ${type} hasítás alkalmazásával ${h1}.`;
    } else if (type === "square") {
      var oneortwo = Math.floor(Math.random() * 1);
      if (oneortwo === 0) {
        c1 = "c1 = " + 0;
        c2 = "c2 = " + 1;
        c1c2type = 0;
      } else {
        c1 = "c1 = " + 1;
        c2 = "c2 = " + 2;
        c1c2type = 1;
      }
      for (let i = 0; i < elemszam; i++) {
        if (i === elemszam) {
          h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + " ";
        }
        h1 += "h1:( " + charakters[i] + " ) = " + numbers[i] + ", ";
      }
      return `Szúrja be egy ${hossz} hosszúságú hash táblába a következő objektumokat ${type} ( ${c1} , ${c2} ) hasítás alkalmazásával ${h1}.`;
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
      return `Szúrja be egy ${hossz} hosszúságú hash táblába a következő objektumokat ${type} hasítás alkalmazásával. ${h1}.`;
    }
    console.log("H1: " + h1);
    console.log("first:" + charakters);
  }

  function Check() {
    var leftover;
    var arrayfinal = [];

    for (let j = 0; j < hossz; j++) {
      arrayfinal[j] = " ";
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
      if (c1c2type === 0) {
        c1 = 0;
        c2 = 1;
      } else if (c1c2type === 1) {
        c1 = 1;
        c2 = 2;
      }
      var overLapping = 1;
      for (let j = 0; j < elemszam; j++) {
        leftover = numbers[j] % hossz;
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
    }

    console.log("type:" + type);
    console.log("hossz%:" + hossz);
    console.log("third:" + charakters);
    console.log("numbers:" + numbers);
    console.log(charakters);
    console.log(arrayfinal);

    var userresult = [];

    for (let i = 0; i < hossz; i++) {
      if (document.getElementById("inp" + i).value !== " ") {
        userresult[i] = document.getElementById("inp" + i).value;
        if (userresult[i] === "") {
          userresult[i] = " ";
        }
      }
    }
    console.log(userresult);

    var counter = 0;
    var mistakes_temporary;
    for (let i = 0; i < hossz; i++) {
      if (userresult[i] === arrayfinal[i] && !userresult[i].includes("")) {
        counter += 1;
      }
    }
    console.log(counter);
    if (counter === hossz && counter !== 0) {
      console.log("Jó megoldás!");
    } else {
      console.log("Hibás megoldás, a helyes megoldás: [ " + arrayfinal + " ].");
      if (parseInt(counter) < 2) {
        if (type === "lineal") {
          mistakes_temporary = 4000;
        } else if (type === "double") {
          mistakes_temporary = 4001;
        } else if (type === "square") {
          mistakes_temporary = 4002;
        }
      } else if (parseInt(counter) > 2 && parseInt(counter) < 4) {
        if (type === "lineal") {
          mistakes_temporary = 4010;
        } else if (type === "double") {
          mistakes_temporary = 4011;
        } else if (type === "square") {
          mistakes_temporary = 4012;
        }
      } else if (parseInt(counter) > 4 && parseInt(counter) !== hossz) {
        if (type === "lineal") {
          mistakes_temporary = 4020;
        } else if (type === "double") {
          mistakes_temporary = 4021;
        } else if (type === "square") {
          mistakes_temporary = 4022;
        }
      }
    }

    localStorage.setItem(
      "mistakesToDbHash",
      JSON.stringify(mistakes_temporary)
    );
    localStorage.setItem("mistakesToDbHashFeaMo", JSON.stringify(arrayfinal));
    localStorage.setItem(
      "mistakesToDbHashFeaUserMo",
      JSON.stringify(userresult)
    );
    navigate("/red-black-tree-test");
  }

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <div
        className="form-group"
        style={{ paddingBottom: "15px", paddingTop: "15px" }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div style={{ color: "white" }}>{Generate()}</div>
            <div style={{ padding: "20px" }} className="container">
              <div style={{ padding: "20px" }} className="row">
                <input
                  type="text"
                  id="inp0"
                  className="form-control col-1"
                  placeholder="0"
                ></input>
                <input
                  type="text"
                  id="inp1"
                  className="form-control col-1"
                  placeholder="1"
                ></input>
                <input
                  type="text"
                  id="inp2"
                  className="form-control col-1"
                  placeholder="2"
                ></input>
                <input
                  type="text"
                  id="inp3"
                  className="form-control col-1"
                  placeholder="3"
                ></input>
                <input
                  type="text"
                  id="inp4"
                  className="form-control col-1"
                  placeholder="4"
                ></input>
                <input
                  type="text"
                  id="inp5"
                  className="form-control col-1"
                  placeholder="5"
                ></input>
                <input
                  type="text"
                  id="inp6"
                  className="form-control col-1"
                  placeholder="6"
                ></input>
                <input
                  type="text"
                  id="inp7"
                  className="form-control col-1"
                  placeholder="7"
                ></input>
                <input
                  type="text"
                  id="inp8"
                  className="form-control col-1"
                  placeholder="8"
                ></input>
                <input
                  type="text"
                  id="inp9"
                  className="form-control col-1"
                  placeholder="9"
                ></input>
                <input
                  type="text"
                  id="inp10"
                  className="form-control col-1"
                  placeholder="10"
                ></input>
                <input
                  type="text"
                  id="inp11"
                  className="form-control col-1"
                  placeholder="11"
                ></input>
              </div>
            </div>
          </div>{" "}
          <div>
            <div
              style={{ padding: "20px" }}
              className="row justify-content-center text-center"
            >
              <Button id="btncheck" variant="outline-warning" onClick={Check}>
                Következő
              </Button>
            </div>
            <br />
            <b
              style={{
                color: "white",
                textAlign: "center",
                paddingLeft: "40%",
              }}
              id="final"
            />
          </div>
        </div>
      </div>
      {hideShow()}

      <br />
    </form>
  );
}
