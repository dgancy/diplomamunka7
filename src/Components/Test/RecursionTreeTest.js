import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function RecursionTreeTest() {
  const navigate = useNavigate();
  var T_elem = Math.floor(Math.random() * 40) + 1;
  var N_elem = Math.floor(Math.random() * 10) + 1;
  var nsup = Math.floor(Math.random() * 4) + 1;
  var check_N = `n^${nsup}`;
  var n_rekurzios = `n<sup>${nsup}</sup>`;

  const numbers_of_answers = [];
  numbers_of_answers.push(N_elem);

  for (let i = 0; i < 4; i++) {
    var number = Math.floor(Math.random() * 10) + 1;
    if (numbers_of_answers.length < 4) {
      if (!numbers_of_answers.includes(number)) {
        numbers_of_answers.push(number);
      }
    }
  }
  var change_position = Math.floor(Math.random() * 3) + 1;
  console.log("change:" + change_position);
  var change_element = numbers_of_answers[0];
  numbers_of_answers[0] = numbers_of_answers[change_position];
  numbers_of_answers[change_position] = change_element;
  console.log("numbers:" + numbers_of_answers);

  function first_answer_one_edge() {
    return `(n/${numbers_of_answers[0]})<sup>i</sup>`;
  }
  function second_answer_one_edge() {
    return `(n/${numbers_of_answers[1]})<sup>i</sup>`;
  }
  function third_answer_one_edge() {
    return `(n/${numbers_of_answers[2]})<sup>i</sup>`;
  }
  function fourth_answer_one_edge() {
    return `(n/${numbers_of_answers[3]})<sup>i</sup>`;
  }

  const numbers_of_answers_edge_number = [];
  numbers_of_answers_edge_number.push(T_elem);

  for (let i = 0; i < 4; i++) {
    var number = 0;
    number = Math.floor(Math.random() * 10) + 1;
    if (numbers_of_answers_edge_number.length < 4) {
      if (!numbers_of_answers_edge_number.includes(number)) {
        numbers_of_answers_edge_number.push(number);
      }
    }
  }

  function first_answer_edge_number() {
    return `${numbers_of_answers_edge_number[0]}<sup>i</sup>`;
  }
  function second_answer_edge_number() {
    return `${numbers_of_answers_edge_number[1]}<sup>i</sup>`;
  }
  function third_answer_edge_number() {
    return `${numbers_of_answers_edge_number[2]}<sup>i</sup>`;
  }
  function fourth_answer_edge_number() {
    return `${numbers_of_answers_edge_number[3]}<sup>i</sup>`;
  }

  function General() {
    if (n_rekurzios === `n<sup>4</sup>`) {
      n_rekurzios = `nlog<sup>n</sup>`;
    }
    if (n_rekurzios === `n<sup>1</sup>`) {
      n_rekurzios = `n`;
    }

    return `Oldja meg a következő feladatot Rekurziós fa módszer használatával. T(n)= ${T_elem} T( n/${N_elem} ) ${n_rekurzios}`;
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
      one_edge_element_result = `(${one_edge_element})<sup>2</sup>`;
    }
    if (n_rekurzios === `n<sup>3</sup>`) {
      one_edge_element_result = `(${one_edge_element})<sup>3</sup>`;
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
    navigate("/master-theorem-test");
  }

  return (
    <form style={{ background: "#000027",height:"425px" }}>
      <div className="form-group" style={{ padding: "15px" }}>
        <p style={{ color: "white", textAlign: "center", padding: "10px" }}>
          {General()}
        </p>
        <div className="container ">
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            {" "}
            <div className="col-2">
              <b style={{ color: "white" }}>T-értéke :</b>
              <input
                type="number"
                className="form-control"
                id="quest1-T-elem"
              />{" "}
            </div>
            <div className="col-2">
              <b style={{ color: "white" }}>N-értéke :</b>
              <input
                type="text"
                className="form-control"
                id="quest1-N-elem"
              />{" "}
            </div>
            <div className="col-2">
              <b style={{ color: "white" }}>n-értéke :</b>
              <select
                id="quest1-f(n)-elem"
                className="form-control"
                type="text"
              >
                <option></option>
                <option>n</option>
                <option>n&sup2;</option>
                <option>n&sup3;</option>
                <option>nlogn</option>
              </select>
            </div>
          </div>
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            {" "}
            <div className="col-2">
              <b style={{ color: "white" }}>Egy csúcs költsége:</b>

              <select id="quest1-1-csucs" className="form-control" type="text">
                <option></option>
                <option>{first_answer_one_edge()}</option>
                <option>{second_answer_one_edge()}</option>
                <option>{third_answer_one_edge()}</option>
                <option>{fourth_answer_one_edge()}</option>
              </select>
            </div>
            <div className="col-4">
              <b style={{ color: "white" }}>
                i.-k szinten található csúcsok száma:
              </b>

              <select
                id="quest1-csucsszam"
                className="form-control"
                type="text"
              >
                <option></option>
                <option>{first_answer_edge_number()}</option>
                <option>{second_answer_edge_number()}</option>
                <option>{third_answer_edge_number()}</option>
                <option>{fourth_answer_edge_number()}</option>
              </select>
            </div>
          </div>
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            {" "}
            <div className="col-3">
              <b style={{ color: "white" }}>i.-k szint összköltsége:</b>
              <input
                type="text"
                className="form-control"
                id="quest1-szintkoltseg"
              />{" "}
            </div>
            <div className="col-2">
              <b style={{ color: "white" }}>A fa magassága:</b>
              <input
                type="text"
                className="form-control"
                id="quest1-famagassaga"
              />{" "}
            </div>
            <div className="col-2">
              <b style={{ color: "white" }}>Levelek száma:</b>
              <input
                type="text"
                className="form-control"
                id="quest1-levelekszama"
              />{" "}
            </div>
          </div>
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            <Button variant="outline-warning" onClick={Check}>
              Következő
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default RecursionTreeTest;
