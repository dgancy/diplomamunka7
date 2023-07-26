import React from "react";
import { Button } from "react-bootstrap";

function MasterTheorem() {
  function Result() {
    var a_element = document.getElementById("A_element").value;
    var b_element = document.getElementById("B_element").value;
    var n_element = document.getElementById("N_element").value;

    let logarithm_element = (Math.log(a_element) / Math.log(b_element)).toFixed(
      3
    );
    let epszilon = 0;
    let differencial = 0;
    if (n_element === "n") {
      differencial = 1;
    } else if (n_element === "n^2") {
      differencial = 2;
    } else if (n_element === "n^3") {
      differencial = 3;
    } else if (n_element === "1") {
      differencial = 0;
    }

    if (logarithm_element < differencial) {
      epszilon = differencial - logarithm_element;
    } else {
      epszilon = logarithm_element - differencial;
    }

    if (a_element >= 1 && b_element > 1) {
      var eset;
      if (logarithm_element === differencial || n_element === "1") {
        eset = 2;
      }
      if (
        logarithm_element > differencial &&
        logarithm_element - epszilon === differencial
      ) {
        eset = 1;
      }
      if (logarithm_element < differencial) {
        eset = 3;
      }
    }
    epszilon = epszilon.toFixed(3);

    var muvelet;
    var final_result;
    if (eset === 1) {
      muvelet = "-";
      final_result = Number(logarithm_element) - Number(epszilon);
    } else if (eset === 3) {
      muvelet = "+";
      final_result = Number(logarithm_element) + Number(epszilon);
    }

    if (a_element && b_element && n_element && eset !== "2") {
      document.getElementById("logarithm").innerHTML =
        "Képlet: " +
        "n" +
        "<sup>" +
        "log" +
        "<sub>" +
        "b" +
        "</sub>" +
        "a" +
        "</sup>" +
        " = Θ(n" +
        "<sup>" +
        logarithm_element +
        "</sup>" +
        ")";
      document.getElementById("eset").innerHTML = "Eset: " + eset;
      document.getElementById("seged").innerHTML =
        "Epszilon érték(ε): : " + epszilon;
      document.getElementById("seged").innerHTML =
        "Epszilon érték(ε): " +
        epszilon +
        " => Θ(nlog " +
        "<sup>" +
        epszilon +
        "</sup>" +
        ")";
      document.getElementById("result").innerHTML =
        "A mester tétel " +
        eset +
        ". esetét alkalmazzuk : " +
        "Θ(nlog " +
        "<sup>" +
        logarithm_element +
        "</sup>" +
        "<sup>" +
        muvelet +
        "</sup>" +
        "<sup>" +
        epszilon +
        "</sup>" +
        ")=" +
        "Θ(nlog " +
        "<sup>" +
        final_result +
        "</sup>" +
        ")";
      document.getElementById("final").innerHTML = "T(n)= Θ(" + n_element + ")";
    }
    if (a_element && b_element && n_element && eset === "2") {
      document.getElementById("logarithm").innerHTML =
        "Képlet: " +
        "n" +
        "<sup>" +
        "log" +
        "<sub>" +
        "b" +
        "</sub>" +
        "a" +
        "</sup>" +
        " = Θ(n" +
        "<sup>" +
        logarithm_element +
        "</sup>" +
        ")";
      document.getElementById("eset").innerHTML = "Eset: " + eset;
      document.getElementById("final").innerHTML =
        "Megoldás: T(n)= Θ(" + n_element + ")";
    }
  }
  return (
    <form style={{ background: "#000027" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Mester-tétel
      </h1>
      <div className="form-group">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-2">
              <b style={{ color: "white" }}>A:</b>
              <input
                type="text"
                className="form-control"
                id="A_element"
                placeholder="A elem"
              />{" "}
              <small className="form-text text-white">(T elem szorzata)</small>
            </div>
            <div className="col-2">
              {" "}
              <b style={{ color: "white" }}>B:</b>
              <input
                type="text"
                className="form-control"
                id="B_element"
                placeholder="B elem"
              />
              <small className="form-text text-white">(n elem szorzata)</small>
            </div>
            <div className="col-2">
              {" "}
              <b style={{ color: "white" }}>f(n): </b>
              <input
                type="text"
                className="form-control"
                id="N_element"
                placeholder="n elem"
              />
              <small className="form-text text-white">(n kitevős tag)</small>
            </div>
          </div>
          <br />
          <div className="row justify-content-center text-center">
            <Button variant="btn btn-outline-warning" onClick={Result}>
              Kiszámol
            </Button>
          </div>
        </div>
      </div>
      <div style={{ color: "white", paddingLeft: "29%" }}>
        <br />

        <b id="logarithm"></b> 
        , <b id="eset" />
        <br />
        <b id="seged" />
        <br />
        <b id="result" />
        <br />
        <b id="final" style={{textDecorationLine:"underline", textDecorationStyle:"double"}} />
      </div>
      <br />
    </form>
  );
}
export default MasterTheorem;
