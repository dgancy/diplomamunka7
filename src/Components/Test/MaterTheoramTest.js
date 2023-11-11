import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import mistakes_to_databse from "./RecursionTreeTest";

export default function MasterTheoramTest() {
  const navigate = useNavigate();
  var a_elem;
  var b_elem;
  var n;
  var nsup;
  var eset;
  let logarithm_element = [];
  var helper_number;
  var epsilon = [];

  console.log(mistakes_to_databse[0]);

  function Generate() {
    eset = Math.floor(Math.random() * 3) + 1;
    var fea;
    nsup = Math.floor(Math.random() * 4);
    n = `n<sup>${nsup}</sup>`;

    if (n === `n<sup>0</sup>`) {
      n = `1`;
      helper_number = 0;
    }
    if (n === `n<sup>1</sup>`) {
      n = `n`;
      helper_number = 1;
    }
    if (n === `n<sup>2</sup>`) {
      helper_number = 2;
    }
    if (n === `n<sup>3</sup>`) {
      helper_number = 3;
    }

    if (eset === 1) {
      if (helper_number === 0) {
        a_elem = 2;
        b_elem = 3;
      } else if (helper_number === 1) {
        b_elem = Math.floor(Math.random() * 3) + 3;
        if (b_elem === 3) {
          a_elem = Math.floor(Math.random() * 5) + 4;
        } else if (b_elem === 4) {
          a_elem = Math.floor(Math.random() * 11) + 5;
        } else if (b_elem === 5) {
          a_elem = Math.floor(Math.random() * 19) + 6;
        }
      } else if (helper_number === 2) {
        b_elem = Math.floor(Math.random() * 3) + 2;
        if (b_elem === 2) {
          a_elem = Math.floor(Math.random() * 3) + 5;
        } else if (b_elem === 3) {
          a_elem = Math.floor(Math.random() * 17) + 10;
        } else if (b_elem === 4) {
          a_elem = Math.floor(Math.random() * 63) + 17;
        }
      } else if (helper_number === 3) {
        b_elem = Math.floor(Math.random() * 3) + 2;
        if (b_elem === 2) {
          a_elem = Math.floor(Math.random() * 5) + 9;
        } else if (b_elem === 3) {
          a_elem = Math.floor(Math.random() * 53) + 28;
        } else if (b_elem === 4) {
          a_elem = Math.floor(Math.random() * 191) + 65;
        }
        console.log("eset 2, B: " + b_elem);
        console.log("eset 2, A: " + a_elem);
      }
    }
    if (eset === 2) {
      if (helper_number === 0) {
        n = `n`;
        helper_number = 1;
      }
      if (helper_number === 1) {
        a_elem = Math.floor(Math.random() * 10) + 2;
        b_elem = a_elem;
      } else if (helper_number === 2) {
        b_elem = Math.floor(Math.random() * 3) + 2;
        if (b_elem === 2) {
          a_elem = 4;
        } else if (b_elem === 3) {
          a_elem = 9;
        } else if (b_elem === 4) {
          a_elem = 16;
        }
      } else if (helper_number === 3) {
        b_elem = Math.floor(Math.random() * 3) + 2;
        if (b_elem === 2) {
          a_elem = 8;
        } else if (b_elem === 3) {
          a_elem = 27;
        } else if (b_elem === 4) {
          a_elem = 64;
        }
      }
    }
    if (eset === 3) {
      if (helper_number === 0) {
        n = `n`;
        helper_number = 1;
      }
      if (helper_number === 1) {
        a_elem = Math.floor(Math.random() * 20) + 1;
        b_elem = a_elem + Math.floor(Math.random() * 10) + 1;
      }
      if (helper_number === 2) {
        a_elem = Math.floor(Math.random() * 10) + 10;
        b_elem = Math.floor(Math.random() * 10) + 1;
      }
      if (helper_number === 3) {
        b_elem = Math.floor(Math.random() * 2) + 4;
        if (b_elem === 4) {
          a_elem = Math.floor(Math.random() * 10) + 17;
        } else if (b_elem === 5) {
          a_elem = Math.floor(Math.random() * 10) + 26;
        }
      }
    }

    fea = "T(n)= " + parseInt(a_elem) + "T(n/" + parseInt(b_elem) + ")+" + n;
    console.log(
      "A: " + a_elem + " B: " + b_elem + " f(n): " + n + " eset: " + eset
    );

    logarithm_element[0] = (Math.log(a_elem) / Math.log(b_elem)).toFixed(3);
    epsilon[0] = (
      parseFloat(helper_number) - parseFloat(logarithm_element[0])
    ).toFixed(3);
    for (let i = 0; i < 3; i++) {
      let answer_randomizer = Math.random().toFixed(3);
      if (i === 1) {
        logarithm_element[1 + i] = (
          parseFloat(1) + parseFloat(answer_randomizer)
        ).toFixed(3);
        epsilon[1 + i] = (
          parseFloat(helper_number) - parseFloat(logarithm_element[1 + i])
        ).toFixed(3);
      } else {
        logarithm_element[1 + i] = answer_randomizer;
        epsilon[1 + i] = (
          parseFloat(helper_number) - parseFloat(logarithm_element[1 + i])
        ).toFixed(3);
      }
      console.log("epsilons: " + epsilon);
    }

    return `Oldja meg a következő feladatot Mester tétel használatával. ${fea}`;
  }

  let place_switcher = Math.floor(Math.random() * 4);
  let changer;

  changer = logarithm_element[place_switcher];
  logarithm_element[place_switcher] = logarithm_element[0];
  logarithm_element[0] = changer;

  function epsilon_answer_one() {
    return " Θ(n" + String.fromCharCode(94) + logarithm_element[0] + ")";
  }
  function epsilon_answer_two() {
    return " Θ(n" + String.fromCharCode(94) + logarithm_element[1] + ")";
  }
  function epsilon_answer_three() {
    return " Θ(n" + String.fromCharCode(94) + logarithm_element[2] + ")";
  }
  function epsilon_answer_four() {
    return " Θ(n" + String.fromCharCode(94) + logarithm_element[3] + ")";
  }

  function substitution_one() {
    return (
      "Θ(nlog " +
      String.fromCharCode(94) +
      logarithm_element[0] +
      "+" +
      epsilon[0] +
      ")"
    );
  }
  function substitution_two() {
    return (
      "Θ(nlog " +
      String.fromCharCode(94) +
      logarithm_element[1] +
      "+" +
      epsilon[1] +
      ")"
    );
  }
  function substitution_three() {
    return (
      "Θ(nlog " +
      String.fromCharCode(94) +
      logarithm_element[2] +
      "+" +
      epsilon[2] +
      ")"
    );
  }
  function substitution_four() {
    return (
      "Θ(nlog " +
      String.fromCharCode(94) +
      logarithm_element[3] +
      "+" +
      epsilon[3] +
      ")"
    );
  }

  function result_one() {
    return " Θ(n" + String.fromCharCode(94) + logarithm_element[0] + ")";
  }
  function result_two() {
    return " Θ(n" + String.fromCharCode(94) + logarithm_element[1] + ")";
  }
  function result_three() {
    return " Θ(n" + String.fromCharCode(94) + logarithm_element[2] + ")";
  }
  function result_four() {
    return " Θ(n" + String.fromCharCode(94) + logarithm_element[3] + ")";
  }

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
    <form style={{ background: "#000027", height: "100vh" }}>
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
                  type="number"
                  className="form-control"
                  id="quest2-b-elem"
                />{" "}
              </div>
            </div>
            <div className="col-2">
              <div>
                <b style={{ color: "white" }}>n-értéke :</b>
                <select
                  id="quest2-f(n)-elem"
                  className="form-control"
                  type="text"
                >
                  <option></option>
                  <option>1</option>
                  <option>n</option>
                  <option>n&sup2;</option>
                  <option>n&sup3;</option>
                  <option>nlogn</option>
                </select>
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
                <select id="type" name="epsilon" className="form-control">
                  <option> </option>
                  <option value="1-es-eset">{epsilon_answer_one()}</option>
                  <option value="2-es-eset">{epsilon_answer_two()}</option>
                  <option value="3-as-eset">{epsilon_answer_three()}</option>
                  <option value="4-es-eset">{epsilon_answer_four()}</option>
                </select>
              </div>
            </div>
            <div className="col-3">
              <div>
                <b style={{ color: "white" }}>Képletbe helyettesítés:</b>
                <select id="type" name="epsilon" className="form-control">
                  <option> </option>
                  <option value="1-es-eset">{substitution_one()}</option>
                  <option value="2-es-eset">{substitution_two()}</option>
                  <option value="3-as-eset">{substitution_three()}</option>
                  <option value="4-es-eset">{substitution_four()}</option>
                </select>
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
                <select id="type" name="epsilon" className="form-control">
                  <option> </option>
                  <option value="1-es-eset">{result_one()}</option>
                  <option value="2-es-eset">{result_two()}</option>
                  <option value="3-as-eset">{result_three()}</option>
                  <option value="4-es-eset">{result_four()}</option>
                </select>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="row justify-content-center text-center">
          <Button variant="outline-warning" onClick={Check}>
            Következő
          </Button>
        </div>
      </div>
      <br />
    </form>
  );
}
