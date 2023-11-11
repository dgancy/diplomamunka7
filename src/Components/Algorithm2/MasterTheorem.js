import React from "react";
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
      console.log("eset:" + eset);
      if (eset !== 2) {
        document.getElementById("logarithmresult").innerHTML =
          " Θ(n" + "<sup>" + logarithm_element + "</sup>" + ")";
        document.getElementById("logarithm").innerHTML =
          "Képlet : n<sup>" + "log" + "<sub>b</sub>" + "a" + "</sup>";
        document.getElementById("eset").innerHTML = "Eset : ";
        document.getElementById("esetresult").innerHTML = eset;
        document.getElementById("segedresult").innerHTML =
          epszilon + " => Θ(nlog " + "<sup>" + epszilon + "</sup>" + ")";
        document.getElementById("seged").innerHTML = "Epszilon érték(ε) : ";
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
        document.getElementById("result").innerHTML =
          "A mester tétel " + eset + ". esetét alkalmazzuk : ";
        if (n_element === "2" || n_element === "3") {
          if (eset === 3) {
            document.getElementById("solution").innerHTML = "Megoldás : ";
            document.getElementById("solutionresult").innerHTML =
              "T(n)= Θ(" + n_element + ")";
            document.getElementById("final").innerHTML =
              "Regularitási feltétel: ";

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
          } else if (eset === 1) {
            document.getElementById("solution").innerHTML = "Megoldás: ";
            document.getElementById("solutionresult").innerHTML =
              " Θ(n" + "<sup>" + logarithm_element + "</sup>" + ")";

            document.getElementById("final").innerHTML =
              "Regularitási feltétel nem szükséges";
            document.getElementById("finalresult").innerHTML = "-";
          }
        } else {
          if (eset === 3) {
            document.getElementById("finalresult").innerHTML =
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
            document.getElementById("solution").innerHTML = "Megoldás: ";
            document.getElementById("solutionresult").innerHTML =
              "T(n)= Θ(" + n_element + ") ";
            document.getElementById("final").innerHTML =
              "Regularitási feltétel : ";
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
            document.getElementById("solution").innerHTML = "Megoldás: ";
            document.getElementById("solutionresult").innerHTML =
              " T(n)= Θ(" + n_element + ")";
            document.getElementById("final").innerHTML =
              "Regularitási feltétel nem szükséges";
            document.getElementById("finalresult").innerHTML = "-";
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
        document.getElementById("eset").innerHTML = "Eset: " + eset;
        document.getElementById("seged").innerHTML =
          "Ebben az esetben nem szükséges";
        document.getElementById("result").innerHTML =
          "Ebben az esetben nem szükséges";
        if (differencial === 2 || differencial === 3) {
          document.getElementById("final").innerHTML =
            "Megoldás: T(n)= Θ(n<sup>" + n_element + "</sup>)";
        } else {
          document.getElementById("final").innerHTML =
            "Megoldás: T(n)= Θ(" + n_element + "logn)";
        }
        console.log("nelem: " + n_element);
      }
    } else {
      if (a_element === "" && b_element === "") {
        alert("Az 'a' és 'b' elemnek nagyobbnak kell lennie, mint 0!");
      } else if (b_element === "") {
        alert("A 'b' elemnek nagyobbnak kell lennie, mint 0!");
      } else if (a_element === "") {
        alert("Az 'a' elemnek nagyobbnak kell lennie, mint 0!");
      }
    }
  }

  return (
    <form style={{ background: "#000027", height: "110vh" }}>
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
