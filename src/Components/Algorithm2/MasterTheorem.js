import React from "react";
import { Button } from "react-bootstrap";

function MasterTheorem() {
  function Result() {
    var a_element = parseInt(document.getElementById("A_element").value);
    var b_element = parseInt(document.getElementById("B_element").value);
    var n_element = document.getElementById("N_element").value;

    let logarithm_element = (Math.log(a_element) / Math.log(b_element)).toFixed(
      3
    );

    console.log(n_element);

    let epszilon = 0;
    let differencial = 0;

    if (n_element === "n") {
      differencial = 1;
    } else if (n_element === "2") {
      differencial = 2;
    } else if (n_element === "3") {
      differencial = 3;
    } else if (n_element === "1") {
      differencial = 0;
    }
    console.log(differencial + " : " + logarithm_element);
    var eset;
    if (a_element >= 1 && b_element > 1) {
      if (a_element === b_element || n_element === "1") {
        eset = 2;
      }
      if (differencial < logarithm_element) {
        eset = 1;
        epszilon = logarithm_element - differencial;
      }
      if (differencial > logarithm_element) {
        eset = 3;
        epszilon = differencial - logarithm_element;
      }
    }
    epszilon = epszilon.toFixed(3);

    var muvelet;
    var final_result;
    if (eset === 1) {
      muvelet = "-";
      final_result = Number(logarithm_element);
    } else if (eset === 3) {
      muvelet = "+";
      final_result = Number(logarithm_element) + Number(epszilon);
    }
    console.log("eset:" + eset);
    if (eset !== 2) {
      document.getElementById("logarithm").innerHTML =
        "Képlet: n" +
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
      document.getElementById("eset").innerHTML = ", Eset: " + eset;
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
      if (n_element === "2" || n_element === "3") {
        if (eset === 3) {
          document.getElementById("final").innerHTML =
            "Megoldás: T(n)= Θ(" +
            n_element +
            ") </br> Ellenőrzés: </br> Képlet: a * f(n/b)<= c * f(n) </br>" +
            a_element +
            " * (n/" +
            b_element +
            ")<sup>" +
            n_element +
            "</sup> <= c * n<sup>" +
            n_element +
            "</sup> </br> " +
            a_element +
            "/" +
            b_element ** n_element +
            " <= c < 1 ";
        } else {
          document.getElementById("final").innerHTML =
            "Megoldás: T(n)= Θ(n<sup>" + n_element + "</sup>)";
        }
      } else {
        if (eset === 3) {
          document.getElementById("final").innerHTML =
            "Megoldás: T(n)= Θ(" +
            n_element +
            ") </br> Ellenőrzés: </br> Képlet: a * f(n/b)<= c * f(n) </br>" +
            a_element +
            " * (n/" +
            b_element +
            ")<sup>" +
            n_element +
            "</sup> <= c * n<sup>" +
            n_element +
            "</sup> </br> " +
            a_element +
            "/" +
            b_element +
            " <= c < 1 ";
        } else {
          document.getElementById("final").innerHTML =
            "Megoldás: T(n)= Θ(" + n_element + ")";
        }
      }
    }
    if (eset === 2) {
      console.log("befordulok");
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
      document.getElementById("eset").innerHTML = ", Eset: " + eset;
      document.getElementById("seged").innerHTML = "";
      document.getElementById("result").innerHTML = "";
      if (differencial === 2 || differencial === 3) {
        document.getElementById("final").innerHTML =
          "Megoldás: T(n)= Θ(n<sup>" + n_element + "</sup>)";
      } else {
        document.getElementById("final").innerHTML =
          "Megoldás: T(n)= Θ(" + n_element + "logn)";
      }
      console.log("nelem: " + n_element);
    }
  }

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
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
              <select className="form-control" id="N_element">
                <option value="1">1</option>
                <option value="n">n</option>
                <option value="2">n&sup2;</option>
                <option value="3">n&sup3;</option>
              </select>
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
      <div style={{ color: "white", paddingLeft: "40%" }}>
        <br />

        <b id="logarithm"></b>
        <b id="eset" />
        <br />
        <b id="seged" />
        <br />
        <b id="result" />
        <br />
        <b id="final" style={{}} />
      </div>
      <br />
    </form>
  );
}
export default MasterTheorem;
