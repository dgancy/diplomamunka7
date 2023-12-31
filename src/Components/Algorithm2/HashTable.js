import React from "react";
import { Button } from "react-bootstrap";

export default function Hashtable() {
  function Begin() {
    document.getElementById("solvebtn").style.visibility = "visible";

    var elementnumber = document.getElementById("elementnumber").value;
    var type = document.getElementById("type").value;
    var range = document.getElementById("range").value;
    var input = document.getElementById("generate");

    console.log(range);
    console.log(type);
    console.log(elementnumber);

    if (type === "lineral" || type === "square") {
      if (type === "square") {
        var c1c2 = document.getElementById("c1c2");
        c1c2.style.display = "flex";
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
          i * 4 +
          '" class="col-1" id="inp' +
          (i + 15) +
          '" placeholder="Érték">    <br/>    ';
      }
    } else if (type === "double") {
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
          '" placeholder="Érték">     ';

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

    if (type === "square" || type === "lineral") {
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
    var finalindex;

    for (let j = 0; j < range; j++) {
      arrayindex[j] = j;
      arrayfinal[j] = ".";
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
      var overLapping = 1;
      for (let j = 0; j < elementnumber; j++) {
        finalindex = arraynumbers[j] % range;
        if (arrayfinal[finalindex] === ".") {
          arrayfinal[finalindex] = arrayelements[j];
        } else if (arrayfinal[finalindex] !== ".") {
          console.log(j + " eleje: " + finalindex);
          if (
            arrayfinal[finalindex + Math.pow(c1 + c2 * overLapping, 2)] === "."
          ) {
            arraynumbers[j] =
              parseInt(arraynumbers[j]) +
              parseInt(Math.pow(c1 + c2 * overLapping, 2));
            finalindex = arraynumbers[j] % range;
            console.log("Debug: " + arraynumbers[j]);
            arrayfinal[finalindex] = arrayelements[j];
            console.log(j + " vege1: " + finalindex);
          }

          if (
            arrayfinal[finalindex + Math.pow(c1 + c2 * overLapping, 2)] !== "."
          ) {
            overLapping++;
            finalindex =
              (arraynumbers[j] + Math.pow(c1 + c2 * overLapping, 2)) % range;
            arrayfinal[finalindex] = arrayelements[j];
            console.log(
              j + " vegeosszeg: " + Math.pow(c1 + c2 * overLapping, 2)
            );
          }
        }
      }
    }

    const tableContainer = document.createElement("div");
    tableContainer.setAttribute("class", "table-container");

    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (let i = 0; i < 2; i++) {
      const row = document.createElement("tr");
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
    document.getElementById("generate").appendChild(tbl);
    tbl.setAttribute("class", "table-container");

    console.log("Index: " + arrayindex);
    console.log("H1: " + arrayelements);
    console.log("Érték: " + arraynumbers);
    console.log("H2: " + arrayelementsh2);
    console.log("Értékh2: " + arraynumbersh2);
  }

  return (
    <form style={{ background: "#000027", height: "90vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Hash tábla
      </h1>
      <div className="form-group">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-2">
              <b style={{ color: "white" }}>Hash tábla hossza :</b>
              <input type="number" className="form-control" id="range" />{" "}
              <small className="form-text text-white">(T elem szorzata)</small>
            </div>
            <div className="col-2">
              {" "}
              <b style={{ color: "white" }}>Feladat típusa :</b>
              <select id="type" name="type" className="form-control">
                <option> </option>
                <option value="lineral">Lineális</option>
                <option value="square">Négyzetes</option>
                <option value="double">Dupla</option>
              </select>
            </div>
            <div className="col-2">
              {" "}
              <b style={{ color: "white" }}>Elem darabszáma : </b>
              <input
                type="number"
                className="form-control"
                id="elementnumber"
              />
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <Button variant="btn btn-outline-warning col-1" onClick={Begin}>
              Megad
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "none",
            justifyContent: "center",
            alignItems: "center",
          }}
          id="c1c2"
        >
          <b style={{ color: "white", marginRight: "5px" }}> c1 : </b>
          <input type="text" id="c1" className="col-1"></input>
          <b style={{ color: "white", marginRight: "5px", marginLeft: "5px" }}>
            {" "}
            c2 :{" "}
          </b>
          <input type="text" id="c2" className="col-1"></input>
          <br />
          <br />
        </div>
        <div
          style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
          id="generate"
        ></div>
        <div className="row justify-content-center text-center">
          <Button
            variant="btn btn-outline-warning col-1"
            id="solvebtn"
            onClick={Solve}
            style={{ visibility: "hidden" }}
          >
            Kidolgoz
          </Button>
        </div>
        <div
          style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
          id="generate"
        >
          {/* Tartalom */}
        </div>
      </div>
      <br />
    </form>
  );
}
//ezt griddel majd
