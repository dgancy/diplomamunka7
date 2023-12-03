import React from "react";
import { Button } from "react-bootstrap";

function RecursionTreeTest() {
  var T_elem = Math.floor(Math.random() * 40) + 1;
  var N_elem = Math.floor(Math.random() * 10) + 2;
  var nsup = Math.floor(Math.random() * 3) + 1;
  var n_rekurzios = `n<sup>${nsup}</sup>`;
  var n_number;

  const numbers_of_answers = [];
  numbers_of_answers.push(N_elem);

  var number;
  for (let i = 0; i < 4; i++) {
    number = Math.floor(Math.random() * 10) + 1;
    if (numbers_of_answers.length <= 4) {
      if (!numbers_of_answers.includes(number)) {
        numbers_of_answers.push(number);
      }
      if (numbers_of_answers.includes(number)) {
        number = Math.floor(Math.random() * 10) + 1;
        if (numbers_of_answers.length <= 4) {
          if (!numbers_of_answers.includes(number)) {
            numbers_of_answers.push(number);
          }
        }
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
    return `(n/${numbers_of_answers[0]})`;
  }
  function second_answer_one_edge() {
    return `(n/${numbers_of_answers[1]})`;
  }
  function third_answer_one_edge() {
    return `(n/${numbers_of_answers[2]})`;
  }
  function fourth_answer_one_edge() {
    return `(n/${numbers_of_answers[3]})`;
  }

  const numbers_of_answers_edge_number = [];
  numbers_of_answers_edge_number.push(T_elem);

  for (let i = 0; i < 4; i++) {
    number = 0;
    number = Math.floor(Math.random() * 10) + 1;
    if (numbers_of_answers_edge_number.length <= 4) {
      if (!numbers_of_answers_edge_number.includes(number)) {
        numbers_of_answers_edge_number.push(number);
      }
      if (numbers_of_answers_edge_number.includes(number)) {
        number = Math.floor(Math.random() * 10) + 1;
        if (numbers_of_answers_edge_number.length <= 4) {
          if (!numbers_of_answers_edge_number.includes(number)) {
            numbers_of_answers_edge_number.push(number);
          }
        }
      }
    }
  }

  change_element = numbers_of_answers_edge_number[0];
  numbers_of_answers_edge_number[0] =
    numbers_of_answers_edge_number[change_position];
  numbers_of_answers_edge_number[change_position] = change_element;

  function first_answer_edge_number() {
    return `${numbers_of_answers_edge_number[0]}`;
  }
  function second_answer_edge_number() {
    return `${numbers_of_answers_edge_number[1]}`;
  }
  function third_answer_edge_number() {
    return `${numbers_of_answers_edge_number[2]}`;
  }
  function fourth_answer_edge_number() {
    return `${numbers_of_answers_edge_number[3]}`;
  }

  const numbers_of_answers_tree_height = [];
  numbers_of_answers_tree_height.push(N_elem);

  for (let i = 0; i < 4; i++) {
    number = 0;
    number = Math.floor(Math.random() * 10) + 1;
    if (numbers_of_answers_tree_height.length < 4) {
      if (!numbers_of_answers_tree_height.includes(number)) {
        numbers_of_answers_tree_height.push(number);
      }
      if (numbers_of_answers_tree_height.includes(number)) {
        number = Math.floor(Math.random() * 10) + 1;
        if (numbers_of_answers_tree_height.length <= 4) {
          if (!numbers_of_answers_tree_height.includes(number)) {
            numbers_of_answers_tree_height.push(number);
          }
        }
      }
    }
  }

  change_element = numbers_of_answers_tree_height[0];
  numbers_of_answers_tree_height[0] =
    numbers_of_answers_tree_height[change_position];
  numbers_of_answers_tree_height[change_position] = change_element;

  function first_answer_tree_height() {
    return `log${numbers_of_answers_tree_height[0]}n`;
  }
  function second_answer_tree_height() {
    return `log${numbers_of_answers_tree_height[1]}n`;
  }
  function third_answer_tree_height() {
    return `log${numbers_of_answers_tree_height[2]}n`;
  }
  function fourth_answer_tree_height() {
    return `log${numbers_of_answers_tree_height[3]}n`;
  }

  function first_answer_leaf_number() {
    return `${numbers_of_answers_edge_number[0]} log${numbers_of_answers_tree_height[0]}n = nlog${numbers_of_answers_edge_number[0]} ${numbers_of_answers_tree_height[0]}`;
  }
  function second_answer_leaf_number() {
    return `${numbers_of_answers_edge_number[1]} log${numbers_of_answers_tree_height[1]}n = nlog${numbers_of_answers_edge_number[1]} ${numbers_of_answers_tree_height[1]}`;
  }
  function third_answer_leaf_number() {
    return `${numbers_of_answers_edge_number[2]} log${numbers_of_answers_tree_height[2]}n = nlog${numbers_of_answers_edge_number[2]} ${numbers_of_answers_tree_height[2]}`;
  }
  function fourth_answer_leaf_number() {
    return `${numbers_of_answers_edge_number[3]} log${numbers_of_answers_tree_height[3]}n = nlog${numbers_of_answers_edge_number[3]} ${numbers_of_answers_tree_height[3]}`;
  }

  //theta Θ
  //Π
  //Ω

  let final_answers = [];
  if (parseInt(T_elem) / parseInt(N_elem) < 1) {
    final_answers.push(
      `Θ(n${String.fromCharCode(94)}${Math.pow(
        Math.log(N_elem) / Math.log(T_elem),
        0
      )} )`
    );
  } else if (parseInt(T_elem) / parseInt(N_elem) > 1) {
    final_answers.push(
      `Θ(nlog${String.fromCharCode(94)}0.${N_elem}${T_elem} )`
    );
  } else if (parseInt(T_elem) === parseInt(N_elem)) {
    final_answers.push(`Θ(n${String.fromCharCode(94)}${N_elem / N_elem})`);
  }
  for (let i = 0; i < 5; i++) {
    var random = Math.floor(Math.random() * 3);
    var random_numbers = Math.floor(Math.random() * 5);
    var sub_element_number = Math.floor(Math.random() * 1000) + 1;
    var elotag;
    var belsotag;
    if (random === 0) {
      elotag = "Θ";
    } else if (random === 1) {
      elotag = "Π";
    } else if (random === 2) {
      elotag = "Ω";
    }
    if (random_numbers === 0) {
      if (parseInt(T_elem) / parseInt(N_elem) < 1) {
        belsotag = `n${String.fromCharCode(94)}0.${T_elem}${N_elem}`;
      }
      if (parseInt(T_elem) / parseInt(N_elem) > 1) {
        belsotag = `nlog${String.fromCharCode(94)}0.${T_elem}${N_elem}`;
      }
      if (parseInt(T_elem) / parseInt(N_elem) === 1) {
        random++;
        belsotag = `n${String.fromCharCode(94)}0.${random}`;
        random--;
      }
    } else if (random_numbers !== 0) {
      if (parseInt(T_elem) / parseInt(N_elem) < 1) {
        belsotag = `n${String.fromCharCode(94)}0.${sub_element_number}`;
      }
      if (parseInt(T_elem) / parseInt(N_elem) > 1) {
        belsotag = `nlog${String.fromCharCode(94)}0.${sub_element_number}`;
      }
      if (parseInt(T_elem) / parseInt(N_elem) === 1) {
        random++;
        belsotag = `n${String.fromCharCode(94)}0.${random}`;
        random--;
      }
    }
    final_answers.push(`${elotag}(${belsotag})`);
  }
  var switch_place = Math.floor(Math.random() * 3);
  var changer;
  changer = final_answers[switch_place];
  final_answers[switch_place] = final_answers[0];
  final_answers[0] = changer;

  function first_answer_final() {
    return `${final_answers[0]}`;
  }
  function second_answer_final() {
    return `${final_answers[1]}`;
  }
  function third_answer_final() {
    return `${final_answers[2]}`;
  }
  function fourth_answer_final() {
    return `${final_answers[3]}`;
  }
  function fifth_answer_final() {
    return `${final_answers[4]}`;
  }
  function sixth_answer_final() {
    return `${final_answers[5]}`;
  }

  console.log(numbers_of_answers_tree_height);

  function General() {
    if (n_rekurzios === `n<sup>1</sup>`) {
      n_rekurzios = `n`;
      n_number = 1;
    }
    if (n_rekurzios === `n<sup>2</sup>`) {
      n_rekurzios = `n${String.fromCharCode(178)}`;
      n_number = 2;
    }
    if (n_rekurzios === `n<sup>3</sup>`) {
      n_rekurzios = `n${String.fromCharCode(179)}`;
      n_number = 3;
    }

    return `Oldja meg a következő feladatot Rekurziós fa módszer használatával. T(n)= ${T_elem} T( n/${N_elem} ) + ${n_rekurzios}`;
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
    var user_final = document.getElementById("final").value;

    var mistakes = [];
    if (
      parseInt(user_T_element) !== parseInt(T_elem) ||
      parseInt(user_N_element) !== parseInt(N_elem) ||
      parseInt(user_n_element) !== parseInt(n_number)
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
    } else {
      mistakes.push("Helyes leolvasás!");
    }
    if (parseInt(user_1edge_element) !== parseInt(change_position)) {
      mistakes.push(
        "Hibás helyettesítés! " +
          "Egy csúcs költsége: (n/" +
          numbers_of_answers[change_position] +
          ")<sup>i</sup>"
      );
    } else {
      mistakes.push("Egy csúcs költségét helyesen adta meg!");
    }

    console.log(user_edge_number+" = "+change_position);
    if (parseInt(user_edge_number) !== parseInt(change_position)) {
      mistakes.push(
        "Hibás válasz! Az i-edik szint csúcsainak száma: " +
          numbers_of_answers_edge_number[change_position] +
          "<sup>i</sup>"
      );
    } else {
      mistakes.push("Az i-edik szint csúcs számát helyesen adta meg!");
    }
    if (parseInt(user_all_cost) !== parseInt(change_position)) {
      mistakes.push(
        "Hibás helyettesítés!" +
          " Az i-edik szint összköltsége: (n/" +
          `${numbers_of_answers[change_position]}` +
          ")<sup>i<sup/>"
      );
    } else {
      mistakes.push("Az i-edik szint összköltségét helyesen adta meg!");
    }
    if (parseInt(user_tree_high) !== parseInt(change_position)) {
      mistakes.push(
        "A fa magassága: log<sub>" +
          numbers_of_answers_tree_height[change_position] +
          "</sub>n"
      );
    } else {
      mistakes.push("A fa magasságát helyesen adta meg!");
    }
    if (parseInt(user_leaf_number) !== parseInt(change_position)) {
      mistakes.push(
        "Hibás eredmény! Levelek száma: " +
          numbers_of_answers_edge_number[change_position] +
          " log<sub>" +
          numbers_of_answers_tree_height[change_position] +
          "</sub>n = nlog<sub>" +
          numbers_of_answers_edge_number[change_position] +
          "</sub>" +
          numbers_of_answers_tree_height[change_position] +
          ")"
      );
    } else {
      mistakes.push("Levelek számát helysen adta meg!");
    }
    if (parseInt(user_final) !== parseInt(switch_place)) {
      mistakes.push(
        "Hibás eredmény! A Rekurzió nagyságrendje: " +
          final_answers[switch_place]
      );
    }else {
      mistakes.push("A Rekurzió nagyságrendjét helysen adta meg!");
    }

    document.getElementById("final-0").innerHTML = `<b>${mistakes[0]}</b>`;
    document.getElementById("final-1").innerHTML = `<b>${mistakes[1]}</b>`;
    document.getElementById("final-2").innerHTML = `<b>${mistakes[2]}</b>`;
    document.getElementById("final-3").innerHTML = `<b>${mistakes[3]}</b>`;
    document.getElementById("final-4").innerHTML = `<b>${mistakes[4]}</b>`;
    document.getElementById("final-5").innerHTML = `<b>${mistakes[5]}</b>`;
    document.getElementById("final-6").innerHTML = `<b>${mistakes[6]}</b>`;
  }

  return (
    <form style={{ background: "#000027", height: "115vh" }}>
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
              <b style={{ color: "white" }}>A-értéke :</b>
              <input
                type="number"
                className="form-control"
                id="quest1-T-elem"
              />{" "}
            </div>
            <div className="col-2">
              <b style={{ color: "white" }}>B-értéke :</b>
              <input
                type="number"
                className="form-control"
                id="quest1-N-elem"
              />{" "}
            </div>
            <div className="col-2">
              <b style={{ color: "white" }}>f(n):</b>
              <select
                id="quest1-f(n)-elem"
                className="form-control"
                type="text"
              >
                <option></option>
                <option value="1">n</option>
                <option value="2">n&sup2;</option>
                <option value="3">n&sup3;</option>
              </select>
            </div>
          </div>
          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            {" "}
            <div className="col-3">
              <b style={{ color: "white" }}>
                Egy csúcs költsége, az i-edik szinten:
              </b>

              <select id="quest1-1-csucs" className="form-control" type="text">
                <option></option>
                <option value="0">{first_answer_one_edge()}&#8305;</option>
                <option value="1">{second_answer_one_edge()}&#8305;</option>
                <option value="2">{third_answer_one_edge()}&#8305;</option>
                <option value="3">{fourth_answer_one_edge()}&#8305;</option>
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
                <option value="0">{first_answer_edge_number()}&#8305;</option>
                <option value="1">{second_answer_edge_number()}&#8305;</option>
                <option value="2">{third_answer_edge_number()}&#8305;</option>
                <option value="3">{fourth_answer_edge_number()}&#8305;</option>
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
              <select
                id="quest1-szintkoltseg"
                className="form-control"
                type="text"
              >
                <option></option>
                <option value="0">{first_answer_one_edge()}&#8305;</option>
                <option value="1">{second_answer_one_edge()}&#8305;</option>
                <option value="2">{third_answer_one_edge()}&#8305;</option>
                <option value="3">{fourth_answer_one_edge()}&#8305;</option>
              </select>
            </div>
            <div className="col-2">
              <b style={{ color: "white" }}>A fa magassága:</b>
              <select
                id="quest1-famagassaga"
                className="form-control"
                type="text"
              >
                <option></option>
                <option value="0">{first_answer_tree_height()}</option>
                <option value="1">{second_answer_tree_height()}</option>
                <option value="2">{third_answer_tree_height()}</option>
                <option value="3">{fourth_answer_tree_height()}</option>
              </select>
            </div>
            <div className="col-2">
              <b style={{ color: "white" }}>Levelek száma:</b>

              <select
                id="quest1-levelekszama"
                className="form-control"
                type="text"
              >
                <option></option>
                <option value="0">{first_answer_leaf_number()}</option>
                <option value="1">{second_answer_leaf_number()}</option>
                <option value="2">{third_answer_leaf_number()}</option>
                <option value="3">{fourth_answer_leaf_number()}</option>
              </select>
            </div>
          </div>

          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            {" "}
            <div className="col-3">
              <b style={{ color: "white" }}>A Rekurzió nagyságrendje:</b>

              <select id="final" className="form-control" type="text">
                <option></option>
                <option value="0">{first_answer_final()}</option>
                <option value="1">{second_answer_final()}</option>
                <option value="2">{third_answer_final()}</option>
                <option value="3">{fourth_answer_final()}</option>
                <option value="4">{fifth_answer_final()}</option>
                <option value="5">{sixth_answer_final()}</option>
              </select>
            </div>
          </div>

          <div
            style={{ padding: "10px" }}
            className="row justify-content-center text-center"
          >
            <Button variant="outline-warning" onClick={Check}>
              Ellenőriz
            </Button>
          </div>
        </div>
        <div style={{ paddingLeft: "32%" }}>
          <div style={{ color: "white" }} id="final-0"></div>
          <div style={{ color: "white" }} id="final-1"></div>
          <div style={{ color: "white" }} id="final-2"></div>
          <div style={{ color: "white" }} id="final-3"></div>
          <div style={{ color: "white" }} id="final-4"></div>
          <div style={{ color: "white" }} id="final-5"></div>
          <div style={{ color: "white" }} id="final-6"></div>
        </div>
      </div>
    </form>
  );
}
export default RecursionTreeTest;
