import React from "react";
import { Button } from "react-bootstrap";

export default function RecursionTree() {
  function Result() {
    var T = document.getElementById("A_element").value;
    var N = document.getElementById("B_element").value;
    var n = document.getElementById("N_element").value;

    var n_elem = `(n/ ${N}) <sup>i</sup>`; //hiba javitas
    var magassag = `log<sub>${N}</sub> n`;
    var levelszameredmeny = `nlog<sub>${N}</sub> ${T}`;

    if (n === "n2") {
      n_elem = `(${n_elem})<sup>2</sup>`;
    }
    if (n === "n3") {
      n_elem = `(${n_elem})<sup>3</sup>`;
    }
    if (n === "n4") {
      n_elem = `(${n_elem})<sup>4</sup>`;
    }
    if (n === "n5") {
      n_elem = `(${n_elem})<sup>5</sup>`;
    }

    document.getElementById(
      "one-edge"
    ).innerHTML = `Egy csúcs költsége: ${n_elem}`;
    document.getElementById(
      "edge-number"
    ).innerHTML = `Az i-edik szinten a csúcsok száma: ${T}<sup>i</sup>`;
    document.getElementById(
      "tree-high"
    ).innerHTML = `Az i-edik szint összköltsége: ( n/${N} )<sup>i</sup>`;
    document.getElementById("leaf-number").innerHTML = `Levelek száma:
      ${T}
      <sup>
      ${magassag}
      </sup> = ${levelszameredmeny}`;
    document.getElementById(
      "leaf-high"
    ).innerHTML = `A fa magassága: ${magassag}`;
    document.getElementById(
      "final"
    ).innerHTML = `Összeképlet: T(n) = <sub>i=0</sub> Σ <sup>log<sub>${N}</sub></sup><sup> i-1</sup> ${T}<sup>i</sup> * ${n_elem} * ${levelszameredmeny}`;
  }

  return (
    <form style={{ background: "#000027" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Rekurziós fa módszer
      </h1>
      <div class="form-group">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-2">
              <b style={{ color: "white" }}>A:</b>
              <input
                type="text"
                class="form-control"
                id="A_element"
                placeholder="A elem"
              />{" "}
              <small class="form-text text-white">(T elem szorzata)</small>
            </div>
            <div class="col-2">
              {" "}
              <b style={{ color: "white" }}>B:</b>
              <input
                type="text"
                class="form-control"
                id="B_element"
                placeholder="B elem"
              />
              <small class="form-text text-white">(n elem szorzata)</small>
            </div>
            <div class="col-2">
              {" "}
              <b style={{ color: "white" }}>f(n): </b>
              <input
                type="text"
                class="form-control"
                id="N_element"
                placeholder="n elem"
              />
              <small class="form-text text-white">(n kitevős tag)</small>
            </div>
          </div>
          <br />
          <div class="row justify-content-center text-center">
            <Button variant="btn btn-outline-warning" onClick={Result}>
              Kiszámol
            </Button>
          </div>
        </div>
      </div>
      <div style={{ color: "white" }}>
        <br />
        <b id="one-edge"></b>
        <br />
        <b id="edge-number" />
        <br />
        <b id="tree-high" />
        <br />
        <b id="leaf-high" />
        <br />
        <b id="leaf-number" />
        <br />
        <b id="final" />
      </div>
      <br />
    </form>
  );
}