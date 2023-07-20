import React from "react";
import { Button } from "react-bootstrap";

export default function BinaryTreeTest() {
  var array = [];
  var fokszam = 2;

  function Generate() {
    var hossz = Math.floor(Math.random() * 3) + 9;
    var input = document.getElementById("generate");

    for (let i = 0; i < hossz; i++) {
      array.push(Math.floor(Math.random() * 100));
    }

    for (let i = 0; i < 7; i++) {
      if (i === 0 || i === 2) {
        input.innerHTML +=
          ' <input type="text" name="' +
          i +
          '"  className="normalpad" size="2" id="inp' +
          i +
          '">    <br/><br/>    ';
      } else if (i === 1) {
        input.innerHTML +=
          ' <input type="text" name="' +
          i +
          '"  className="normalpad" size="2" id="inp' +
          i +
          '">    <a> </a>    ';
      } else {
        input.innerHTML +=
          ' <input type="text" name="' +
          i +
          '"  className="allinput"  size="2" id="inp' +
          i +
          '">';
      }
    }

    console.log("hossz: " + hossz);
    console.log("array: " + array);

    document.getElementById("inp1").style.marginRight = "35px";
    document.getElementById("inp2").style.marginLeft = "35px";
    return `Adott az alábbi B-fa, amelynek minimális fokszáma ${fokszam}. A következő számsoron alkalmazza a tanultakat. [ ${array} ].`;
  }

  function Check() {
    console.log("array-check: " + array);

    var edgearray = [];
    edgearray = document.getElementById("inp0").value.split(",");

    var leftarrayone = [];
    leftarrayone = document.getElementById("inp1").value.split(",");
    var leftarraytwo = [];
    leftarraytwo = document.getElementById("inp3").value.split(",");
    var leftarraythree = [];
    leftarraythree = document.getElementById("inp4").value.split(",");

    var rightarrayone = [];
    rightarrayone = document.getElementById("inp2").value.split(",");
    var rightarraytwo = [];
    rightarraytwo = document.getElementById("inp5").value.split(",");
    var rightarraythree = [];
    rightarraythree = document.getElementById("inp6").value.split(",");

    parseInt(edgearray);

    var Change = [];
    var edgemax = 2 * fokszam - 2;
    var state = 0;

    var OutputArrayEdge = [];
    var OutputArrayRight_1 = [];
    var OutputArrayLeft_1 = [];
    var OutputArrayRight_2 = [];
    var OutputArrayLeft_2 = [];
    var OutputArrayMiddle_1 = [];
    var OutputArrayMiddle_2 = [];

    for (let i = 0; i < array.length; i++) {
      if (i < 3) {
        if (i < edgemax) {
          OutputArrayEdge.push(array[i]);
        } else if (i === edgemax) {
          OutputArrayEdge.push(array[i]);
          OutputArrayEdge.sort();
          Change.push(OutputArrayEdge[edgemax - 1]);
          OutputArrayLeft_1.push(OutputArrayEdge[0]);
          OutputArrayRight_1.push(OutputArrayEdge[edgemax]);
          OutputArrayEdge = Change;
        }
      } else {
        if (
          array[i] > OutputArrayEdge[0] &&
          array[i] < OutputArrayEdge[OutputArrayEdge.length] &&
          OutputArrayEdge.length > 1
        ) {
          OutputArrayMiddle_1.push(array[i]);
        }
        if (
          OutputArrayLeft_1.length < edgemax + 1 &&
          OutputArrayRight_1.length < edgemax + 1 &&
          state === 0
        ) {
          if (array[i] > OutputArrayEdge[OutputArrayEdge.length - 1]) {
            OutputArrayRight_1.push(array[i]);
            OutputArrayRight_1.sort();
          } else if (array[i] < OutputArrayEdge[0] && state === 0) {
            OutputArrayLeft_1.push(array[i]);
            OutputArrayLeft_1.sort();
          }
        }
      }
      if (OutputArrayLeft_1.length > edgemax) {
        Change = OutputArrayLeft_1.splice(edgemax - 1, 1);
        OutputArrayEdge.push(Change);
        Change = OutputArrayLeft_1.splice(edgemax - 1, 1);
        OutputArrayMiddle_1.push(Change);
        OutputArrayEdge.sort();
        OutputArrayMiddle_1.sort();
      }
      if (OutputArrayRight_1.length > edgemax) {
        Change = OutputArrayRight_1.splice(edgemax - 1, 1);
        OutputArrayEdge.push(Change);
        Change = OutputArrayRight_1.splice(0, 1);
        OutputArrayMiddle_1.push(Change);
        OutputArrayEdge.sort();
        OutputArrayMiddle_1.sort();
      } //ellenorzo feladat 9,2,5,7,6,5,4,1
      if (OutputArrayEdge.length === edgemax + 1) {
        for (let k = 0; k < 2; k++) {
          if (
            OutputArrayRight_1[k] >
              OutputArrayEdge[OutputArrayEdge.length - 1] &&
            OutputArrayRight_1[0] !== " "
          ) {
            OutputArrayRight_2.push(OutputArrayRight_1[k]);
            OutputArrayRight_1.shift();
          } else if (
            OutputArrayRight_1[k] <
              OutputArrayEdge[OutputArrayEdge.length - 1] &&
            OutputArrayRight_1[0] !== " "
          ) {
            OutputArrayMiddle_2.push(OutputArrayRight_1[k]);
            OutputArrayRight_1.shift();
          } else if (
            OutputArrayLeft_1[k] > OutputArrayEdge[0] &&
            OutputArrayLeft_1[0] !== " "
          ) {
            OutputArrayMiddle_1.push(OutputArrayLeft_1[k]);
            OutputArrayLeft_1.shift();
          } else if (
            OutputArrayLeft_1[k] < OutputArrayEdge[0] &&
            OutputArrayLeft_1[0] !== " "
          ) {
            OutputArrayLeft_2.push(OutputArrayLeft_1[k]);
            OutputArrayLeft_1.shift();
          }
        }
        if (OutputArrayEdge.length === edgemax + 1) {
          OutputArrayLeft_1.push(OutputArrayEdge[0]);
          OutputArrayRight_1.push(OutputArrayEdge[OutputArrayEdge.length - 1]);

          OutputArrayEdge.pop();
          OutputArrayEdge.shift();
        }

        state = 1;
      }
      if (state === 1) {
        if (array[i] < OutputArrayLeft_1[0] && array[i] < OutputArrayEdge[0]) {
          OutputArrayLeft_2.push(array[i]);
          OutputArrayLeft_2.sort();
        } else if (
          array[i] > OutputArrayLeft_1[OutputArrayLeft_1.length - 1] &&
          array[i] < OutputArrayEdge[0]
        ) {
          OutputArrayMiddle_1.push(array[i]);
          OutputArrayMiddle_1.sort();
        } else if (
          array[i] < OutputArrayRight_1[0] &&
          array[i] > OutputArrayEdge[OutputArrayEdge.length - 1]
        ) {
          OutputArrayMiddle_2.push(array[i]);
          OutputArrayMiddle_2.sort();
        } else if (
          array[i] < OutputArrayRight_1[OutputArrayRight_1.length - 1] &&
          array[i] > OutputArrayEdge[OutputArrayEdge.length - 1]
        ) {
          OutputArrayRight_2.push(array[i]);
          OutputArrayRight_2.sort();
        }

        if (
          OutputArrayLeft_1[1] !== " " &&
          OutputArrayLeft_2.length < edgemax &&
          OutputArrayLeft_1.length > 1
        ) {
          OutputArrayLeft_2.push(OutputArrayLeft_1[0]);
          OutputArrayLeft_1.shift();
        } else if (
          OutputArrayLeft_1[1] !== " " &&
          OutputArrayMiddle_1.length < edgemax &&
          OutputArrayLeft_1.length > 1
        ) {
          OutputArrayMiddle_1.push(
            OutputArrayLeft_1[OutputArrayLeft_1.length - 1]
          );
          OutputArrayLeft_1.pop();
        }
        OutputArrayLeft_1.sort();
        OutputArrayLeft_2.sort();

        if (
          OutputArrayRight_1[1] !== " " &&
          OutputArrayRight_2.length < edgemax &&
          OutputArrayRight_1.length > 1
        ) {
          OutputArrayRight_2.push(
            OutputArrayRight_1[OutputArrayRight_1.length - 1]
          );
          OutputArrayRight_1.pop();
        } else if (
          OutputArrayRight_1[1] !== " " &&
          OutputArrayMiddle_2.length < edgemax &&
          OutputArrayRight_1.length > 1
        ) {
          OutputArrayMiddle_2.push(OutputArrayRight_1[0]);
          OutputArrayRight_1.shift();
        }

        OutputArrayRight_1.sort();
        OutputArrayMiddle_2.sort();
      }
    }
    for (let m = 0; m < OutputArrayMiddle_1.length; m++) {
      if (OutputArrayMiddle_1[m] > OutputArrayEdge[0]) {
        OutputArrayMiddle_2.push(OutputArrayMiddle_1[m]);
        OutputArrayMiddle_1.splice(m, OutputArrayMiddle_1.length);
      }
    }
    for (let m = 0; m < OutputArrayMiddle_2.length; m++) {
      if (OutputArrayMiddle_2[m] < OutputArrayEdge[OutputArrayEdge.length]) {
        OutputArrayMiddle_1.push(OutputArrayMiddle_2[m]);
        OutputArrayMiddle_1.splice(m, OutputArrayMiddle_1.length);
      }
    }
    OutputArrayEdge.sort();
    OutputArrayRight_1.sort();
    OutputArrayLeft_1.sort();
    OutputArrayRight_2.sort();
    OutputArrayLeft_2.sort();
    OutputArrayMiddle_1.sort();
    OutputArrayMiddle_2.sort();

    parseInt(edgearray);

    var points = 0;
    for (let i = 0; i < OutputArrayEdge.length; i++) {
      if (edgearray[i] === OutputArrayEdge[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OutputArrayLeft_1.length; i++) {
      if (leftarrayone[i] === OutputArrayLeft_1[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OutputArrayLeft_2.length; i++) {
      if (leftarraytwo[i] === OutputArrayLeft_2[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OutputArrayMiddle_1.length; i++) {
      if (leftarraythree[i] === OutputArrayMiddle_1[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OutputArrayMiddle_1.length; i++) {
      if (rightarraytwo[i] === OutputArrayMiddle_1[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OutputArrayRight_1.length; i++) {
      if (rightarrayone[i] === OutputArrayRight_1[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OutputArrayRight_2.length; i++) {
      if (rightarraythree[i] === OutputArrayRight_2[i]) {
        points += 1;
      }
    }

    if (points === array.length && array.length !== 0) {
      console.log(points);
      console.log("Jó megoldás!");
      document.getElementById("final-0").innerHTML = "Jó megoldás!";
    } else {
      console.log("Hibás megoldás, a helyes megoldás!");
      document.getElementById("final-0").innerHTML =
        "Hibás megoldás! A helyes megoldás: <br/>";
      document.getElementById("final-1").innerHTML = OutputArrayEdge;
      document.getElementById("final-2-1").innerHTML = OutputArrayLeft_1;
      document.getElementById("final-2-2").innerHTML = OutputArrayRight_1;
      document.getElementById("final-3-1").innerHTML = OutputArrayLeft_2;
      document.getElementById("final-3-2").innerHTML = OutputArrayMiddle_1;
      document.getElementById("final-3-3").innerHTML = OutputArrayMiddle_2;
      document.getElementById("final-3-4").innerHTML = OutputArrayRight_2;
    }

    console.log(edgearray);

    console.log("Edgemax: " + edgemax);
    console.log("Edge:" + OutputArrayEdge);
    console.log("Left1: " + OutputArrayLeft_1);
    console.log("Left2: " + OutputArrayLeft_2);
    console.log("Right1: " + OutputArrayRight_1);
    console.log("Right2: " + OutputArrayRight_2);
    console.log("Middle1: " + OutputArrayMiddle_1);
    console.log("Middle2: " + OutputArrayMiddle_2);
  }

  return (
    <form>
      <h1>Bfa feladatok</h1>
      <div class="form-group">
        <div class="row justify-content-center text-center"></div>
        <div>{Generate()} </div>

        <div class="container ">
          <div class="row justify-content-center text-center">
            {" "}
            <div class="col-2">
              <div></div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center text-center">
          <div id="generate" />
        </div>
        <div class="row justify-content-center text-center">
          <div>
            <Button variant="success" onClick={Check}>
              Kiszámol
            </Button>
          </div>
        </div>
        <div class="container ">
          <div id="final-0"></div>
          <div class="row justify-content-center text-center">
            <div class="col-2">
              <div id="final-1" class="border border-success"></div>
            </div>
          </div>
          <div class="row justify-content-center text-center ">
            <div class="col-2">
              <div id="final-2-1" class="border border-success"></div>
            </div>
            <div class="col-2">
              <div id="final"></div>
            </div>
            <div class="col-2">
              <div id="final-2-2" class="border border-success"></div>
            </div>
          </div>
          <div class="row justify-content-center text-center ">
            <div class="col-2">
              <div id="final-3-1" class="border border-success"></div>
            </div>
            <div class="col-2">
              <div id="final-3-2" class="border border-success"></div>
            </div>
            <div class="col-2">
              <div id="final-3-3" class="border border-success"></div>
            </div>
            <div class="col-2">
              <div id="final-3-4" class="border border-success"></div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
