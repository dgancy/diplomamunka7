import React from "react";
import { Button } from "react-bootstrap";

export default function Backtracking() {
  function Result() {
    var megoldaskezd = document.getElementById("addarray").value.split(",");
    var ÖsszesCimlet = document.getElementById("addnumber").value;
    var Tipus = document.getElementById("type").value;

    var c = document.getElementById("tree"); //450*450
    var ctx = c.getContext("2d");

    ctx.font = "bold 18pt Georgia ";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    if (Tipus !== "") {
      for (let i = 0; i < megoldaskezd.length; i++) {
        ctx.fillStyle = "gray";
        ctx.arc(megoldaskezd[i] * 50, 25 + i * 50, 20, 0, 2 * Math.PI); //xyr
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.fillText(megoldaskezd[i], megoldaskezd[i] * 50, 25 + i * 50);
        ctx.closePath();

        for (let j = i + 1; j <= ÖsszesCimlet; j++) {
          if (j > megoldaskezd[i] && i > 0) {
            ctx.fillStyle = "#e6b800";
            ctx.arc(j * 50, 25 + i * 50, 20, 0, 2 * Math.PI); //xyr
            ctx.fill();
            ctx.stroke();

            ctx.beginPath();
            ctx.fillStyle = "white";
            ctx.fillText(j, j * 50, 25 + i * 50);
            ctx.closePath();
          }
        }
      }
    }

    var solve = 0;
    var help = 0;
    if (Tipus === "ElsőFiú") {
      solve = megoldaskezd;
      help = parseInt(megoldaskezd[megoldaskezd.length - 1]);
      help = help + 1;
      solve.push(help);
    } else if (Tipus === "Apa") {
      megoldaskezd.pop();
      solve = megoldaskezd;
    } else if (Tipus === "Testvér") {
      megoldaskezd.pop();
      help = parseInt(megoldaskezd[megoldaskezd.length - 1]);
      help = help + 1;
      solve = megoldaskezd;
      solve.push(help);
    }
    if (Tipus !== "") {
      document.getElementById("resolved").innerHTML =
        Tipus + " : <" + solve + " >.";

      console.log(help);
      console.log(solve);
      console.log(megoldaskezd);
      console.log(ÖsszesCimlet);
      console.log(Tipus);
    }
  }

  return (
    <form style={{ background: "#1C3A94" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Backpropagation
      </h1>
      <div className="form-group">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-2">
              <b style={{ color: "white" }}>Solution Initiative: </b>
              <input type="text" className="form-control" id="addarray" />{" "}
              <small className="form-text text-white">(For e.: 1,2,4)</small>
            </div>
            <div className="col-2">
              {" "}
              <b style={{ color: "white" }}>Note: </b>
              <input type="text" className="form-control" id="addnumber" />
              <small className="form-text text-white">(For e.: 7)</small>
            </div>
            <div className="col-2">
              <b style={{ color: "white" }} for="type">
                Question Type:{" "}
              </b>
              <select id="type" className="form-control" name="type">
                <option> </option>
                <option value="ElsőFiú" id="hash">
                  First Son
                </option>
                <option value="Apa">Father</option>
                <option value="Testvér">Sibling</option>
                <option value="Megoldás">Result</option>
                <option value="LehetségesMegoldás">LehetségesMegoldás</option>
                <option value="Visszaállit">Visszaállit</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <Button variant="btn btn-outline-warning" id="btnadd" onClick={Result}>
          Solve
        </Button>
      </div>
        <div className="container" style={{ marginLeft: "100px" }}>
          <b className="row justify-content-start text-center" style={{ color: "white", fontSize: "20px" }} id="resolved"></b>
        </div>
        <canvas id="tree" width={"750px"} height={"300px"}></canvas>
    </form>
  );
}
