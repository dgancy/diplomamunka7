import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BinaryTreeTest() {
const navigate=useNavigate();

  var array = [];
  var fokszam = 2;

  function Generate() {
    var hossz = Math.floor(Math.random() * 3) + 9;

    for (let i = 0; i < hossz; i++) {
      array.push(Math.floor(Math.random() * 100));
    }

    console.log("hossz: " + hossz);
    console.log("array: " + array);

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

    console.log(edgearray);

    console.log("Edgemax: " + edgemax);
    console.log("Edge:" + OutputArrayEdge);
    console.log("Left1: " + OutputArrayLeft_1);
    console.log("Left2: " + OutputArrayLeft_2);
    console.log("Right1: " + OutputArrayRight_1);
    console.log("Right2: " + OutputArrayRight_2);
    console.log("Middle1: " + OutputArrayMiddle_1);
    console.log("Middle2: " + OutputArrayMiddle_2);
  
  navigate("/hash-table-test");
  }

  return (
    <form style={{ background: "#000027", height: "300px" }}>
      <div className="form-group" style={{ padding: "15px" }}>
        <div style={{ color: "white", textAlign: "center", padding: "10px" }}>
          {" "}
          {Generate()}
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-2">
              <input id="inp0" type="text" className="form-control"></input>
            </div>
          </div>
          <div className="row justify-content-center" style={{ padding: "15px" }}>
            <div className="col-2" >
              {" "}
              <input id="inp1" type="text" className="form-control"></input>
            </div>
            <div className="col-2">
              {" "}
            </div>
            <div className="col-2">
              {" "}
              <input id="inp2" type="text" className="form-control"></input>
            </div>
          </div>
          <div className="row justify-content-center" style={{ padding: "15px" }}>
            <div className="col-2">
              {" "}
              <input id="inp3" type="text" className="form-control"></input>
            </div>
            <div className="col-2">
              {" "}
              <input id="inp4" type="text" className="form-control"></input>
            </div>
            <div className="col-2">
              {" "}
              <input id="inp5" type="text" className="form-control"></input>
            </div>
            <div className="col-2">
              {" "}
              <input id="inp6" type="text" className="form-control"></input>
            </div>
          </div>
        </div>

        <div className="row justify-content-center text-center">
          <div>
            <Button variant="outline-warning" onClick={Check}>
              Következő
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
