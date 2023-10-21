import React from "react";
import { Button } from "react-bootstrap";

export default function RecursionTree() {
  function Result() {
    var A = document.getElementById("A_element").value; //T
    var B = document.getElementById("B_element").value; //N
    var n = document.getElementById("N_element").value;

    var n_elem = `n/${B}<sup>i</sup>`; //hiba javitas
    var magassag = `log<sub>${B}</sub> n`;
    var levelszameredmeny = `nlog<sub>${B}</sub><sup>${A}</sup>`;

    if (n === "n2") {
      n_elem = `${n_elem}<sup>2</sup>`;
    }
    if (n === "n3") {
      n_elem = `${n_elem}<sup>3</sup>`;
    }
    if (n === "n4") {
      n_elem = `${n_elem}<sup>4</sup>`;
    }
    if (n === "n5") {
      n_elem = `${n_elem}<sup>5</sup>`;
    }

    var typeChoose;
    console.log(parseInt(A)/parseInt(B))
    if(parseInt(A)/parseInt(B)<1){
      typeChoose=`1-${A}/${B}`;
      document.getElementById(
        "finalStepTwo"
      ).innerHTML = ` n * [(${A}/${B})<sup>${magassag}</sup> -1/ (${typeChoose})] + ${levelszameredmeny} = n * [${Math.pow(A/B, 0)}/ (${typeChoose})] + ${levelszameredmeny}`;
  
      document.getElementById(
        "finalStepThree"
      ).innerHTML = `${Math.pow(A/B, 0)*B}n + ${levelszameredmeny} = Θ(${levelszameredmeny}) = Θ( n<sup>${Math.pow(Math.log(B) / Math.log(A),0)}</sup> )`;
    }
    if(parseInt(A)/parseInt(B)>1){
      typeChoose=`${parseInt(A)-1*B}/${B}`

      document.getElementById(
        "finalStepTwo"
      ).innerHTML = ` n * [(${A}/${B})<sup>${magassag}</sup> -1/ (${typeChoose})] + ${levelszameredmeny} = ${B}/${parseInt(A)-1*B} n * [(${A}/${B})<sup>${magassag}</sup>/ (${typeChoose})) -1] + ${levelszameredmeny}`;
  
      document.getElementById(
        "finalStepThree"
      ).innerHTML = `${B}/${parseInt(A)-1*B} n * [((${A}/${B})<sup>${magassag}</sup>/ (${B}<sup>${magassag}</sup>)) -1] + ${levelszameredmeny} = ${B}/${parseInt(A)-1*B} n * [((${A}/${B})<sup>${magassag}</sup>/ (n)) -1] + ${levelszameredmeny}`;
    
      document.getElementById(
        "finalStepFour"
      ).innerHTML = `${B}/${parseInt(A)-1*B} * ${A}<sup>${magassag}</sup> + ${B}/${parseInt(A)-1*B} n + ${levelszameredmeny} = ${B}/${parseInt(A)-1*B} * ${levelszameredmeny}+ ${levelszameredmeny} = Θ( ${levelszameredmeny} )`;
    }
    if(parseInt(A)/parseInt(B)===1){
      typeChoose=``;
      document.getElementById(
        "finalStepTwo"
      ).innerHTML = `= n * 1 + n = Θ( n * ${magassag} )`;
  
      document.getElementById(
        "finalStepThree"
      ).innerHTML = ``;
    
      document.getElementById(
        "finalStepFour"
      ).innerHTML = ``;
    }

    document.getElementById(
      "one-edge"
    ).innerHTML = `Egy csúcs költsége: ${n_elem}`;
    document.getElementById(
      "edge-number"
    ).innerHTML = `Az i-edik szinten a csúcsok száma: ${A}<sup>i</sup>`;
    document.getElementById(
      "tree-high"
    ).innerHTML = `Az i-edik szint összköltsége: ${A}<sup>i</sup> * n/${B}<sup>i</sup>`;
    document.getElementById("leaf-number").innerHTML = `Levelek száma:
      ${A}
      <sup>
      ${magassag}
      </sup> = ${levelszameredmeny}`;
    document.getElementById(
      "leaf-high"
    ).innerHTML = `A fa magassága: ${magassag}`;

    document.getElementById(
      "logn"
    ).innerHTML = `<sup>log<sub>${B}</sub></sup><sup> i-1</sup>`;
    document.getElementById("iequal").innerHTML = `<sub>i=0</sub> `;

    document.getElementById(
      "finalStepOne"
    ).innerHTML = ` ${A}<sup>i</sup> * ${n_elem} + ${levelszameredmeny} =  n * (${A}/${B})<sup>i</sup> + ${levelszameredmeny}`;
    


  }

  return (
    <form style={{ background: "#000027", height: "110vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Rekurziós fa módszer
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
              <input
                type="text"
                className="form-control"
                id="N_element"
                placeholder="n elem"
              />
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
        style={{
          color: "white",
          paddingLeft: "45%",
          transform: "translate(-10%, -10%)",
        }}
      >
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
        <b>Összegképlet: T(n) =</b>
        <br />
        <span
          id="logn"
          style={{ display: "inline-block", textAlign: "center" }}
        ></span>
        <br />∑
        <span
          id="iequal"
          style={{ display: "inline-block", textAlign: "center", Left: "10px" }}
        ></span>
        <span style={{ paddingLeft: "10px" }} id="finalStepOne" />
        <br />
        <br />
        <span id="finalStepTwo" />
        <br />
        <br />
        <span id="finalStepThree" />
        <br />
        <br />
        <span id="finalStepFour" />
      </div>
      <br />
    </form>
  );
}
