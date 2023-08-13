import React from "react";
import Button from "react-bootstrap/Button";

export default function BinaryTree() {
  var AllArray = [];
  var Change = [];

  function Result() {
    var a = document.getElementById("fok").value;
    console.log("fok:" + a);
    var edgemax = 2 * a - 1;
    var childmax = 2 * a;

    var OpArrayEdge = [];
    var OpArrayRight_1 = [];
    var OpArrayLeft_1 = [];
    var OpArrayRight_2 = [];
    var OpArrayLeft_2 = [];
    var OpArrayMiddle = [];
    var OpArrayMiddle_1 = [];
    var OpArrayMiddle_2 = [];

    var new_element = document.getElementById("elements").value;
    AllArray.push(new_element);
    console.log("AllArray: " + AllArray);

    for (let i = 0; i < AllArray.length; i++) {
      if (
        OpArrayEdge.length <= edgemax &&
        OpArrayLeft_1.length < 1 &&
        OpArrayRight_1.length < 1 &&
        i < 3
      ) {
        OpArrayEdge.push(AllArray[i]);
        OpArrayEdge.sort(function (a, b) {
          return a - b;
        });
        if (OpArrayEdge.length === edgemax) {
          OpArrayLeft_1.push(OpArrayEdge[0]);
          OpArrayRight_1.push(OpArrayEdge[edgemax - 1]);
          OpArrayEdge.pop();
          OpArrayEdge.shift();
          console.log("lefutok");
        }
      }
      if (
        OpArrayEdge.length <= edgemax &&
        OpArrayLeft_1.length <= childmax &&
        OpArrayRight_1.length <= childmax &&
        OpArrayMiddle.length <= childmax &&
        i > 2 &&
        i < 7
      ) {
        if (OpArrayEdge[0] > AllArray[i]) {
          OpArrayLeft_1.push(AllArray[i]);
          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
          console.log("meginbalra");
        }
        if (OpArrayEdge[OpArrayEdge.length - 1] < AllArray[i]) {
          OpArrayRight_1.push(AllArray[i]);
          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });
          console.log("meginjobbra");
        }
        if (OpArrayLeft_1.length === childmax) {
          OpArrayMiddle.push(OpArrayLeft_1[OpArrayLeft_1.length - 1]);
          OpArrayLeft_1.pop();
          OpArrayEdge.push(OpArrayLeft_1[OpArrayLeft_1.length - 1]);
          OpArrayLeft_1.pop();
          OpArrayEdge.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle.sort(function (a, b) {
            return a - b;
          });
        }
        if (OpArrayRight_1.length === childmax) {
          OpArrayMiddle.push(OpArrayRight_1[0]);
          OpArrayRight_1.shift();
          OpArrayEdge.push(OpArrayRight_1[0]);
          OpArrayRight_1.shift();
          OpArrayEdge.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle.sort(function (a, b) {
            return a - b;
          });
        }
      }
      if (
        OpArrayEdge.length <= edgemax &&
        OpArrayLeft_1.length <= childmax &&
        OpArrayRight_1.length <= childmax &&
        OpArrayMiddle.length <= childmax &&
        i > 6
      ) {
        if (
          AllArray[i] > OpArrayEdge[0] &&
          AllArray[i] < OpArrayEdge[1] &&
          OpArrayMiddle.length === childmax - 1
        ) {
          OpArrayMiddle_2.push(OpArrayMiddle[OpArrayMiddle.length - 1]);
          OpArrayMiddle.pop();
          OpArrayEdge.push(OpArrayMiddle[OpArrayMiddle.length - 1]);
          OpArrayMiddle.pop();
          OpArrayMiddle_1.push(OpArrayMiddle[OpArrayMiddle.length - 1]);
          OpArrayMiddle.pop();

          OpArrayEdge.sort(function (a, b) {
            return a - b;
          });

          OpArrayLeft_2 = OpArrayLeft_1;
          OpArrayLeft_1=OpArrayEdge[0];
          OpArrayEdge.shift();

          OpArrayRight_2=OpArrayRight_1;
          OpArrayRight_1=OpArrayEdge[OpArrayEdge.length-1];
          OpArrayEdge.pop();

          OpArrayRight_1.push(OpArrayEdge[OpArrayEdge.length - 1]);
          OpArrayEdge.pop();
          OpArrayLeft_1.push(OpArrayEdge[0]);
          OpArrayEdge.shift();
        }
        if (
          AllArray[i] > OpArrayEdge[0] &&
          AllArray[i] < OpArrayEdge[1] &&
          OpArrayLeft_1.length === childmax - 1
        ) {
          OpArrayMiddle_1.push(OpArrayMiddle[OpArrayMiddle.length - 1]);
          OpArrayMiddle.pop();

          OpArrayMiddle_1.push(OpArrayMiddle[OpArrayMiddle.length - 1]);
          OpArrayMiddle.pop();
          OpArrayLeft_2.push(OpArrayLeft_1[OpArrayLeft_1.length - 1]);
          OpArrayLeft_1.pop();
          OpArrayRight_2.push(OpArrayRight_1[OpArrayRight_1.length - 1]);
          OpArrayRight_1.pop();
          OpArrayRight_1.push(OpArrayEdge[OpArrayEdge.length - 1]);
          OpArrayEdge.pop();
          OpArrayLeft_1.push(OpArrayEdge[0]);
          OpArrayEdge.shift();
        }
        if (
          OpArrayEdge.length === edgemax &&
          OpArrayRight_1.length === childmax
        ) {
        }

        if (AllArray[i] < OpArrayEdge[0]) {
          OpArrayLeft_1.push(AllArray[i]);
          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
        }
        if (AllArray[i] > OpArrayEdge[0] && AllArray[i] < OpArrayEdge[1]) {
          OpArrayMiddle.push(AllArray[i]);
          OpArrayMiddle.sort(function (a, b) {
            return a - b;
          });
        }
        if (AllArray[i] > OpArrayEdge[1]) {
          OpArrayRight_1.push(AllArray[i]);
          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });
        }
      }
    }

    console.log("Edgemax: " + edgemax);
    console.log("Edge: " + OpArrayEdge);
    console.log("Left1: " + OpArrayLeft_1);
    console.log("Left2: " + OpArrayLeft_2);
    console.log("Right1: " + OpArrayRight_1);
    console.log("Right2: " + OpArrayRight_2);
    console.log("Middle: " + OpArrayMiddle);
    console.log("Middle1: " + OpArrayMiddle_1);
    console.log("Middle2: " + OpArrayMiddle_2);

    //document.getElementById("array1").innerHTML = AllArray;
    document.getElementById("arrayedge").innerHTML = OpArrayEdge;
    document.getElementById("arrayright_1").innerHTML = OpArrayRight_1;
    document.getElementById("arrayright_2").innerHTML = OpArrayRight_2;
    document.getElementById("arrayleft_1").innerHTML = OpArrayLeft_1;
    document.getElementById("arrayleft_2").innerHTML = OpArrayLeft_2;
    document.getElementById("arraymiddle").innerHTML = OpArrayMiddle;
    document.getElementById("arraymiddle_1").innerHTML = OpArrayMiddle_1;
    document.getElementById("arraymiddle_2").innerHTML = OpArrayMiddle_2;

    /**/
  }
  return (
    <form style={{ background: "#000027", height: "100vh", color: "white" }}>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Binary tree solver
      </h1>
      <div>
        <div className="form-group">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-2">
                <b style={{ color: "white" }}>Fokszam: </b>
                <select className="form-control" id="fok">
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-2">
                {" "}
                <b style={{ color: "white" }}>Elements: </b>
                <input type="number" className="form-control" id="elements" />
                <small className="form-text text-white">(Input items)</small>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row justify-content-center text-center">
            <Button variant="btn btn-outline-warning" onClick={Result}>
              Kiszámol
            </Button>
          </div>
        </div>
      </div>
      <br />
      <div className="container" style={{ textAlign: "center" }}>
        <div style={{ padding: "1%" }}>
          <div className="row justify-content-center ">
            <div className="col-2 border border-warning">
              <b id="arrayedge"></b>
            </div>
          </div>
        </div>
        <div style={{ padding: "1%" }}>
          <div className="row justify-content-center">
            <div
              className="col-2 border border-warning"
              style={{ marginRight: "2%" }}
            >
              <b id="arrayleft_1"></b>
            </div>
            <div
              className="col-2 border border-warning"
              style={{ marginRight: "2%" }}
            >
              <b id="arraymiddle"></b>
            </div>
            <div className="col-2 border border-warning">
              <b id="arrayright_1"></b>
            </div>
          </div>
        </div>{" "}
        <div style={{ padding: "1%" }}>
          <div className="row justify-content-center">
            <div
              className="col-2 border border-warning"
              style={{ marginRight: "1%" }}
            >
              <b id="arrayleft_2"></b>
            </div>
            <div
              className="col-2 border border-warning"
              style={{ marginRight: "1%" }}
            >
              <b id="arraymiddle_1"></b>
            </div>
            <div
              className="col-2 border border-warning"
              style={{ marginRight: "1%" }}
            >
              <b id="arraymiddle_2"></b>
            </div>
            <div
              className="col-2 border border-warning"
              style={{ marginRight: "1%" }}
            >
              <b id="arrayright_2"></b>
            </div>
          </div>
        </div>
      </div>
      <br />
    </form>
  );
}
