import React from "react";
import { Button } from "react-bootstrap";

export default function Hashtable() {
  function Begin() {
    var elementnumber = document.getElementById("elementnumber").value;
    var type = document.getElementById("type").value;
    var range = document.getElementById("range").value;
    var input = document.getElementById("generate");

    console.log(range);
    console.log(type);
    console.log(elementnumber);

    if (type === "simple" || type === "lineral") {
      for (let i = 0; i < elementnumber; i++) {
        input.innerHTML +=
          'h1 : <input type="text" name="' +
          i +
          '" class="col-1" id="inp' +
          i +
          '" placeholder="Elem"> ';
        input.innerHTML +=
          ' <input type="text" name="' +
          i * 4 +
          '" class="col-1" id="inp' +
          (i + 15) +
          '" placeholder="Érték">    <br/>    ';
      }
    } else if (type === "double" || type === "square") {
      if (type === "square") {
        var c1c2 = document.getElementById("c1c2");
        c1c2.style.display = "block";
      }
      for (let i = 0; i < elementnumber; i++) {
        input.innerHTML +=
          'h1 : <input type="text" name="' +
          i +
          '" class="col-1" id="inp' +
          i +
          '" placeholder="Elem"> ';
        input.innerHTML +=
          ' <input type="text" name="' +
          i * 3 +
          '" class="col-1" id="inp' +
          (i + 30) +
          '" placeholder="Érték">        ';
        input.innerHTML +=
          'h2 : <input type="text" name="' +
          i * 2 +
          '" class="col-1" id="inp' +
          (i + 45) +
          '" placeholder="Elem"> ';
        input.innerHTML +=
          ' <input type="text" name="' +
          i * 5 +
          '" class="col-1" id="inp' +
          (i + 60) +
          '" placeholder="Érték">    <br/>    ';
      }
    }
    document.querySelector('#button').disabled = true;
  }

  function Solve() {
    var type = document.getElementById("type").value;
    var elementnumber = document.getElementById("elementnumber").value;

    var arrayelements = []; //betukh1
    var arrayelementsh2 = []; //betukh2
    var arraynumbers = []; //szamokh1
    var arraynumbersh2 = []; //szamokh2
    var arrayindex = []; //tábla felsősora
    var arrayfinal = []; //tábla alsósora

    if (type === "simple" || type === "square" || type === "lineral") {
      for (let i = 0; i < elementnumber; i++) {
        arrayelements[i] = document.getElementById("inp" + i).value;
        arraynumbers[i] = document.getElementById("inp" + (i + 15)).value;
      }
    } else if (type === "double") {
      for (let i = 0; i < elementnumber; i++) {
        arrayelements[i] = document.getElementById("inp" + i).value;
        arraynumbers[i] = document.getElementById("inp" + (i + 30)).value;
        arrayelementsh2[i] = document.getElementById("inp" + (i + 45)).value;
        arraynumbersh2[i] = document.getElementById("inp" + (i + 60)).value;
      }
    }

    var range = document.getElementById("range").value;
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    var finalindex;

    for (let j = 0; j < range; j++) {
      arrayindex[j] = j;
      arrayfinal[j] = ".";
    }

    if (type === "simple") {
      for (let j = 0; j < elementnumber; j++) {
        finalindex = arraynumbers[j] % range;
        if (arrayfinal[finalindex] === ".") {
          arrayfinal[finalindex] = arrayelements[j];
        } else {
          arrayfinal[finalindex] += arrayelements[j];
        }
      }
    }

    if (type === "lineral") {
      for (let j = 0; j < elementnumber; j++) {
        finalindex = arraynumbers[j] % range;
        if (arrayfinal[finalindex] === ".") {
          arrayfinal[finalindex] = arrayelements[j];
        } else {
          arrayfinal[finalindex + 1] = arrayelements[j];
        }
      }
    }
    if (type === "double") {
      for (let j = 0; j < elementnumber; j++) {
        finalindex = arraynumbers[j] % range;
        if (arrayfinal[finalindex] === ".") {
          arrayfinal[finalindex] = arrayelements[j];
        } else {
          finalindex = arraynumbersh2[j] % range;
          arrayfinal[finalindex] = arrayelements[j];
        }
      }
    }
    if (type === "square") {
      var c1 = document.getElementById("c1").value;
      var c2 = document.getElementById("c2").value;

      for (let j = 0; j < elementnumber; j++) {
        finalindex = arraynumbers[j] % range;
        if (arrayfinal[finalindex] === ".") {
          arrayfinal[finalindex] = arrayelements[j];
        } else if (arrayfinal[finalindex] !== ".") {
          finalindex = arraynumbers[j] % range;
          arrayfinal[finalindex + c1] = arrayelements[j];
        } else if (
          arrayfinal[finalindex + c1] !== "." &&
          finalindex + c1 + c2 * c2 < range
        ) {
          finalindex = arraynumbers[j] % range;
          arrayfinal[finalindex + c1 + c2 * c2] = arrayelements[j];
        }
      }//button deactivate
    }

    for (let i = 0; i < 2; i++) {
      const row = document.createElement("tr");//tablecreate with good sense of viauality
      if (i === 0) {
        for (let j = 0; j < range; j++) {
          const cell = document.createElement("td");
          const cellText = document.createTextNode(arrayindex[j]);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        tblBody.appendChild(row);
      } else if (i === 1) {
        for (let j = 0; j < range; j++) {
          const cell = document.createElement("td");
          const cellText = document.createTextNode(arrayfinal[j]);
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
        tblBody.appendChild(row);
      }
    }
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("class", "hashtable");

    console.log("Index: " + arrayindex);
    console.log("H1: " + arrayelements);
    console.log("Érték: " + arraynumbers);
    console.log("H2: " + arrayelementsh2);
    console.log("Értékh2: " + arraynumbersh2);
  }

  /*

*/

  return (
    <form style={{ background: "#000027", height:"100vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Hash tábla
      </h1>
      <div class="form-group">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-2">
              <b style={{ color: "white" }}>Hash tábla hossza :</b>
              <input type="number" class="form-control" id="range" />{" "}
              <small class="form-text text-white">(T elem szorzata)</small>
            </div>
            <div class="col-2">
              {" "}
              <b style={{ color: "white" }}>Feladat típusa :</b>
              <select id="type" name="type" class="form-control">
                <option> </option>
                <option value="simple" id="hash">
                  Szimpla
                </option>
                <option value="lineral">Lineális</option>
                <option value="square">Négyzetes</option>
                <option value="double">Dupla</option>
              </select>
            </div>
            <div class="col-2">
              {" "}
              <b style={{ color: "white" }}>Elem darabszáma : </b>
              <input type="number" class="form-control" id="elementnumber" />
            </div>
          </div>
          <div class="row justify-content-center text-center">
            <Button variant="btn btn-outline-warning col-1" onClick={Begin}>
              Add
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "none" }} id="c1c2">
          <b style={{ color: "white" }}>c1 : </b>
          <input type="text" id="c1" class="col-1"></input>
          <b style={{ color: "white" }}>c2 : </b>
          <input type="text" id="c2" class="col-1"></input>
          <br />
        </div>
        <div style={{ color: "white", textAlign:"center", paddingBottom:"20px" }} id="generate"></div>
        <div class="row justify-content-center text-center">
          <Button variant="btn btn-outline-warning col-1" onClick={Solve}>
            Megold
          </Button>
        </div>
        <b style={{ color: "black", textAlign:"center"}} id="final" />
      </div>
      <br />
    </form>
  );
}
//ezt griddel majd
