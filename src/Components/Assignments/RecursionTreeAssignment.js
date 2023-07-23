import React from "react";
import { Button } from "react-bootstrap";

function RecursionTreeAssignment() {
  var T_elem;
  var N_elem;
  var n_rekurzios;
  var check_N;
  function General() {
    var nsup = Math.floor(Math.random() * 4) + 1;
    n_rekurzios = `n<sup>${nsup}</sup>`;
    check_N = `n^${nsup}`;
    var quest_recursion_tree;
    if (n_rekurzios === `n<sup>4</sup>`) {
      n_rekurzios = `nlog<sup>n</sup>`;
    }
    if (n_rekurzios === `n<sup>1</sup>`) {
      n_rekurzios = `n`;
    }
    T_elem = Math.floor(Math.random() * 40) + 1;
    N_elem = Math.floor(Math.random() * 10) + 1;
    quest_recursion_tree =
      "T(n)= " + T_elem + "T(n/" + N_elem + ")+" + n_rekurzios;

    document.getElementById(
      "feladat"
    ).innerHTML = `<b>Oldja meg a következő feladatot Rekurziós fa módszer használatával. ${quest_recursion_tree}</b>`;
  }

  function Check() {
    var user_T_element = document.getElementById("quest1-T-elem").value;
    var user_N_element = document.getElementById("quest1-N-elem").value;
    var user_n_element = document.getElementById("quest1-f(n)-elem").value;

    var user_1edge_element = document.getElementById("quest1-1-csucs").value;
    var user_edge_number = document.getElementById("quest1-csucsszam").value;
    var user_all_cost = document.getElementById("quest1-szintkoltseg").value;
    var user_tree_high = document.getElementById("quest1-famagassaga").value;
    var user_leaf_number = document.getElementById("quest1-levelekszama").value;

    var one_edge_element = `(n/ ${N_elem} )<sup>i</sup>`;
    var magassag = `log<sub>${N_elem}</sub>n`;
    var levelszameredmeny = `nlog<sub>${N_elem}</sub>${T_elem}`;
    var one_edge_element_result;
    var edge_number = T_elem + `<sup>i</sup>`;
    var all_cost = `(n/ + ${N_elem} )<sup>i</sup> * ${edge_number}`;

    if (n_rekurzios === "n") {
      one_edge_element_result = one_edge_element;
    }
    if (n_rekurzios === `n<sup>2</sup>`) {
      one_edge_element_result =
        `(${one_edge_element})<sup>2</sup>`;
    }
    if (n_rekurzios === `n<sup>3</sup>`) {
      one_edge_element_result =
        `(${one_edge_element})<sup>3</sup>`;
    }
    if (n_rekurzios === `nlog<sup>n</sup>`) {
      one_edge_element_result = `(${one_edge_element})<sup>n</sup>`;
    }

    var mistakes = [];
    if (
      user_T_element !== T_elem ||
      user_N_element !== N_elem ||
      user_n_element !== check_N
    ) {
      mistakes.push(
        "Hibás leolvasás!" +
          " A helyes értékek: a: " +
          T_elem +
          ", b: " +
          N_elem +
          ", f(n): " +
          n_rekurzios
      );
    }
    if (
      user_1edge_element !== one_edge_element_result ||
      user_edge_number !== edge_number
    ) {
      mistakes.push(
        "Hibás helyettesítés! " +
          "Egy csúcs költsége: " +
          one_edge_element_result +
          " , Az i-edik szint csúcs száma: " +
          edge_number
      );
    }
    if (user_all_cost !== all_cost || user_tree_high !== magassag) {
      mistakes.push(
        "Hibás helyettesítés!" +
          " Az i-edik szint összköltsége: " +
          all_cost +
          " , A fa magassága: " +
          magassag +
          ", "
      );
    }
    if (user_leaf_number !== levelszameredmeny) {
      mistakes.push(`Hibás eredmény! Levelek száma: ${levelszameredmeny}`);
    }
    document.getElementById("final-0").innerHTML = `<b>${mistakes[0]}</b>`;
    document.getElementById("final-1").innerHTML = `<b>${mistakes[1]}</b>`;
    document.getElementById("final-2").innerHTML = `<b>${mistakes[2]}</b>`;
    document.getElementById("final-3").innerHTML = `<b>${mistakes[3]}</b>`;
  }

  return (
    <form style={{ background: "#1C3A94" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Rekurzios fa feladat generátor
      </h1>
      <div className="form-group">
        <div className="row justify-content-center text-center">
          <Button variant="btn btn-outline-warning" onClick={General}>
            Új feladat
          </Button>
          <br />
        </div>
        <p
          style={{ color: "white", textAlign: "center", padding: "10px" }}
          id="feladat"
        />
        <div className="container ">
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            {" "}
            <div className="col-2">
              <div>
                <b style={{ color: "white" }}>T-értéke :</b>
                <input
                  type="number"
                  className="form-control"
                  id="quest1-T-elem"
                />{" "}
              </div>
            </div>
            <div className="col-2">
              <div>
                <b style={{ color: "white" }}>N-értéke :</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest1-N-elem"
                />{" "}
              </div>
            </div>
            <div className="col-2">
              <div>
                <b style={{ color: "white" }}>n-értéke :</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest1-f(n)-elem"
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
              <div>
                <b style={{ color: "white" }}>1 csúcs költsége:</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest1-1-csucs"
                />{" "}
              </div>
            </div>
            <div className="col-4">
              <div>
                <b style={{ color: "white" }}>
                  Az i-edik szinten található csúcsok száma:
                </b>
                <input type="text" className="form-control" id="quest1-csucsszam" />{" "}
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
                <b style={{ color: "white" }}>Az i-edik szint összköltsége:</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest1-szintkoltseg"
                />{" "}
              </div>
            </div>
            <div className="col-2">
              <div>
                <b style={{ color: "white" }}>A fa magassága:</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest1-famagassaga"
                />{" "}
              </div>
            </div>
            <div className="col-2">
              <div>
                <b style={{ color: "white" }}>Levelek száma:</b>
                <input
                  type="text"
                  className="form-control"
                  id="quest1-levelekszama"
                />{" "}
              </div>
            </div>
          </div>
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            <Button variant="btn btn-outline-warning" onClick={Check}>
              Kiszámol
            </Button>
          </div>
        </div>
        <div style={{ paddingLeft: "27%" }}>
          <div style={{ color: "white" }} id="final-0"></div>
          <div style={{ color: "white" }} id="final-1"></div>
          <div style={{ color: "white" }} id="final-2"></div>
          <div style={{ color: "white" }} id="final-3"></div>
        </div>
      </div>
      <br />
    </form>
  );
}
export default RecursionTreeAssignment;
