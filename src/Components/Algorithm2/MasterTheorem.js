import React, { useState } from "react";
import { Button } from "react-bootstrap";

function MasterTheorem() {
  function Result() {
    var a_element = document.getElementById("A_element").value;
    var b_element = document.getElementById("B_element").value;
    var n_element = document.getElementById("N_element").value;

    console.log(a_element);
    console.log(b_element);
    console.log(n_element);

    if (a_element !== "" && b_element !== "") {
      document.getElementById("resultTable").style.display = "block";

      let logarithm_element = (
        Math.log(a_element) / Math.log(b_element)
      ).toFixed(3);

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
        if (
          a_element === b_element &&
          parseFloat(differencial) === parseFloat(logarithm_element)
        ) {
          eset = 2;
        }
        if (parseFloat(differencial) < parseFloat(logarithm_element)) {
          eset = 1;
          epszilon = logarithm_element - differencial;
        }
        if (parseFloat(differencial) > parseFloat(logarithm_element)) {
          eset = 3;
          epszilon = differencial - logarithm_element;
        }
      }

      epszilon = epszilon.toFixed(3);

      document.getElementById("feladat").innerHTML = "Feladat : ";
      document.getElementById("feladatleiras").innerHTML =
        "T(n) = " +
        a_element +
        "T(n/" +
        b_element +
        ") + n<sup>" +
        differencial +
        "</sup>";

      var muvelet;
      var final_result;
      if (eset === 1) {
        muvelet = "-";
        final_result = Number(logarithm_element);
      } else if (eset === 3) {
        muvelet = "+";
        final_result = Number(logarithm_element) + Number(epszilon);
      }
      document.getElementById("logarithm").innerHTML =
        "Képlet : n<sup>" + "log" + "<sub>b</sub>" + "a" + "</sup>";
      document.getElementById("logarithmresult").innerHTML =
        " Θ(n" + "<sup>" + logarithm_element + "</sup>" + ")";
      document.getElementById("eset").innerHTML = "Eset : ";
      document.getElementById("esetresult").innerHTML = eset;
      document.getElementById("seged").innerHTML = "Epszilon érték(ε) : ";
      document.getElementById("segedresult").innerHTML =
        epszilon + " => Θ(nlog " + "<sup>" + epszilon + "</sup>" + ")";

      if (eset !== 2) {
        document.getElementById("result").innerHTML =
          "A mester tétel " + eset + ". esetét alkalmazzuk : ";
        document.getElementById("resultresult").innerHTML =
          "Θ(nlog <sup>" +
          logarithm_element +
          "</sup>" +
          "<sup>" +
          muvelet +
          "</sup>" +
          "<sup>" +
          epszilon +
          "</sup>)= Θ(nlog <sup>" +
          final_result +
          "</sup>)";
      } else {
        document.getElementById("result").innerHTML =
          "A mester tétel " +
          eset +
          ". eseténél ezt a lépést nem kell megtenni.";
        document.getElementById("resultresult").innerHTML = "-";
      }
      document.getElementById("solution").innerHTML = "Megoldás : ";

      if (eset === 1) {
        document.getElementById("solutionresult").innerHTML =
          "Θ(n" + "<sup>log" + logarithm_element + "</sup>" + ")";
      } else if (eset === 2) {
        document.getElementById("solutionresult").innerHTML =
          "Θ(n" + "<sup>log" + logarithm_element + "</sup>" + " lgn)";
      } else if (eset === 3) {
        document.getElementById("solutionresult").innerHTML =
          "Θ(n" + "<sup>" + n_element + "</sup>" + ")";
      }
      document.getElementById("final").innerHTML = "Regularitási feltétel: ";
      if (eset === 3) {
        document.getElementById("finalresult").innerHTML =
          "a * f(n/b)<= c * f(n) </br>" +
          a_element +
          " * (n/" +
          b_element +
          ")<sup>" +
          differencial +
          "</sup> <= c * n<sup>" +
          differencial +
          "</sup> </br> " +
          a_element +
          "/" +
          b_element ** differencial +
          " <= c < 1 ";
      } else {
        document.getElementById("finalresult").innerHTML =
          "Ebben az esetben nem kell elvégezni.";
      }
    }
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <form style={{ background: "#000027", height: "110vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Mester-tétel
      </h1>
      <div>
        <Button
          style={{
            position: "absolute",
            top: "18%",
            left: "2%",
            padding: "10px",
            background: "white",
            color: "black",
            border: "none",
            cursor: "pointer",
          }}
          variant="warning"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Súgó
        </Button>
        {isHovered && (
          <b
            style={{
              position: "absolute",
              top: "30%",
              left: "2%",
              padding: "10px",
              background: "white",
              color: "black",
              border: "none",
              cursor: "pointer",
            }}
          >
            Az alábbi feladat megoldót egy példán
            <br /> keresztül szeretném szemléltetni. <br />
            T(n) = 4T(n/5)+n esetében az A elem értéke 4,
            <br /> a B elem értéke: 5, valamint az f(n) értéke: n.
          </b>
        )}
      </div>
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
      <div
        id="resultTable"
        style={{ color: "white", paddingLeft: "31%", display: "none" }}
      >
        <table className="table-style">
          <tbody>
            <tr>
              <td>
                <b id="feladat"></b>
              </td>
              <td style={{ textAlign: "center" }}>
                <b id="feladatleiras"></b>
              </td>
            </tr>
            <tr>
              <td>
                <b id="logarithm"></b>
              </td>
              <td style={{ textAlign: "center" }}>
                <b id="logarithmresult"></b>
              </td>
            </tr>
            <tr>
              <td>
                <b id="eset"></b>
              </td>
              <td style={{ textAlign: "center" }}>
                <b id="esetresult"></b>
              </td>
            </tr>
            <tr>
              <td>
                <b id="seged"></b>
              </td>
              <td style={{ textAlign: "center" }}>
                <b id="segedresult"></b>
              </td>
            </tr>
            <tr>
              <td>
                <b id="result"></b>
              </td>
              <td style={{ textAlign: "center" }}>
                <b id="resultresult"></b>
              </td>
            </tr>
            <tr>
              <td>
                <b id="solution"></b>
              </td>
              <td style={{ textAlign: "center" }}>
                <b id="solutionresult"></b>
              </td>
            </tr>
            <tr>
              <td>
                <b id="final"></b>
              </td>
              <td style={{ textAlign: "center" }}>
                <b id="finalresult"></b>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
    </form>
  );
}
export default MasterTheorem;
