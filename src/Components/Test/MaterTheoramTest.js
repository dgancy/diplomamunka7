import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function MasterTheoramTest() {
  const navigate = useNavigate();
  var a_elem;
  var b_elem;
  var n;
  var nsup;
  function Generate() {
    var eset = Math.floor(Math.random() * 3) + 1;
    var fea;
    var tört;
    nsup = Math.floor(Math.random() * 5);
    n = `n<sup>${nsup}</sup>`;

    if (n === `n<sup>4</sup>`) {
      n = `nlogn`;
    }
    if (n === `n<sup>0</sup>`) {
      n = `1`;
    }
    if (n === `n<sup>1</sup>`) {
      n = `n`;
    }
    if (eset === 1) {
      a_elem = Math.floor(Math.random() * 20) + 2;
      b_elem = Math.floor(Math.random() * 10) + 1;
      fea = "T(n)= " + a_elem + "T(n/" + b_elem + ")+" + n;
    }
    if (eset === 2) {
      a_elem = Math.floor(Math.random() * 20) + 2; //számok közti összefüggés?
      b_elem = Math.floor(Math.random() * 10) + 1;
      tört = Math.floor(Math.random() * 10) + 1;
      fea = "T(n)= " + a_elem + "T(" + tört + "n/" + b_elem + ")+" + n;
    }
    if (eset === 3) {
      a_elem = Math.floor(Math.random() * 10) + 2; //számok közti összefüggés?
      b_elem = Math.floor(Math.random() * 10) + 1;
      fea = "T(n)= " + a_elem + "T(n/" + b_elem + ")+" + n;
    }

    return `Oldja meg a következő feladatot Mester tétel használatával. ${fea}`;
  }
  //
  function Check() {
    var user_a_element = document.getElementById("quest2-a-elem").value;
    var user_b_element = document.getElementById("quest2-b-elem").value;
    var user_n_element = document.getElementById("quest2-f(n)-elem").value;
    var user_keplet = document.getElementById("quest2-keplet").value;
    var user_eset = document.getElementById("type").value;
    var user_E_element = document.getElementById(
      "quest2-E-kiegeszito-erteke"
    ).value;
    var user_master_result = document.getElementById("quest2-final").value;
    var mistakes = [];

    let nlog = (Math.log(a_elem) / Math.log(b_elem)).toFixed(3);
    let e = 0;
    var eset;
    if (nlog < 1) {
      e = 1 - nlog;
    } else {
      e = nlog - 1;
    }
    if (nlog < 2 && nlog > 1 && n === "n2") {
      e = 2 - nlog;
    }

    if (
      (nlog === 0 && n === "n") ||
      (nlog === 1 && n === "n") ||
      (nlog === 2 && n === "n2") ||
      n === "1"
    ) {
      eset = 2;
    }
    if (nlog > 1 && nlog - e === 1 && n === "n") {
      eset = 1;
    }
    if (nlog > 2 && n === "n2") {
      eset = 1;
      e -= 1;
    }

    if (nlog < 1 && nlog + e === 1 && n === "n") {
      eset = 3;
    }
    if (nlog < 1 || (nlog === 1 && n === "n2")) {
      eset = 3;
      e += 1;
    }
    if (nlog < 2 && n === "n2" && nlog > 1) {
      eset = 3;
    }

    if (
      user_a_element !== a_elem ||
      user_b_element !== b_elem ||
      user_n_element !== "n^" + nsup
    ) {
      mistakes.push(
        "Hibás leolvasás!" +
          " A helyes értékek: a: " +
          a_elem +
          " b: " +
          b_elem +
          " f(n): " +
          n
      );
    }
    if (user_keplet !== nlog) {
      mistakes.push(` Hibás képlet felírás! A helyes értékek: ${nlog}`);
    }
    if (user_eset !== eset || user_E_element !== e) {
      mistakes.push(
        " Hibás eset választás!" +
          " A helyes eset: " +
          eset +
          " A helyes E :" +
          e.toFixed(3)
      );
    }
    if (user_master_result !== n) {
      mistakes.push(` Hibás eredmény! A helyes eredmény: O( ${n} )`);
    }
navigate("/binary-tree-test");
  }

  return (
    <form style={{ background: "#1C3A94" }}>
      <div className="form-group" style={{ padding: "15px" }}>
        <div
          style={{ color: "white", textAlign: "center", padding: "10px" }}
          id="questtwo"
        >
          {Generate()}{" "}
        </div>

        <div className="container ">
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            {" "}
            <div className="col-2">
              <div>
                <b style={{ color: "white" }}>A-értéke :</b>
                <input
                  type="number"
                  className="form-control"
                  id="quest2-a-elem"
                />{" "}
              </div>
            </div>
            <div className="col-2">
              <div>
                <b style={{ color: "white" }}>B-értéke :</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest2-b-elem"
                />{" "}
              </div>
            </div>
            <div className="col-2">
              <div>
                <b style={{ color: "white" }}>n-értéke :</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest2-f(n)-elem"
                />{" "}
              </div>
            </div>
          </div>
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            {" "}
            <div className="col-2">
              {" "}
              <b style={{ color: "white" }}>Feladat típusa :</b>
              <select id="type" name="type" className="form-control">
                <option> </option>
                <option value="1-es-eset">Első eset</option>
                <option value="2-es-eset">Második eset</option>
                <option value="3-as-eset">Harmadik eset</option>
              </select>
            </div>
            <div className="col-3">
              <div>
                <b style={{ color: "white" }}>Kiegészítő érték(E):</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest2-E-kiegeszito-erteke"
                />{" "}
              </div>
            </div>
            <div className="col-3">
              <div>
                <b style={{ color: "white" }}>Képletbe helyettesítés:</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest2-keplet"
                />{" "}
              </div>
            </div>
          </div>
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            {" "}
            <div className="col-3">
              <div>
                <b style={{ color: "white" }}>Végeredmény:</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest2-final"
                />{" "}
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="row justify-content-center text-center">
          <Button variant="btn btn-outline-warning" onClick={Check}>
            Kiszámol
          </Button>
        </div>
      </div>
      <br />
    </form>
  );
}
