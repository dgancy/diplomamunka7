import React from "react";
import Button from "react-bootstrap/Button";

export default function BinaryTree() {
  var AllArray = [];
  var Change = [];

  function Result() {
    var a = document.getElementById("fok").value;
    console.log("fok:" + a);
    var edgemax = 2 * a - 2;
    //document.getElementById("edgemax").innerHTML = edgemax;
    //document.getElementById("childmax").innerHTML = (2 * a);

    var OutputArrayEdge = [];
    var OutputArrayRight_1 = [];
    var OutputArrayLeft_1 = [];
    var OutputArrayRight_2 = [];
    var OutputArrayLeft_2 = [];
    var OutputArrayMiddle_1 = [];
    var OutputArrayMiddle_2 = [];

    var new_element = document.getElementById("elements").value;
    AllArray.push(new_element);
    console.log("AllArray: " + AllArray);

    for (let i = 0; i < AllArray.length; i++) {
      if (i <= 2) {
        if (i < edgemax) {
          OutputArrayEdge.push(AllArray[i]);
          OutputArrayEdge.sort(function (a, b) {
            return a - b;
          });
        } else if (i === edgemax) {
          console.log("checkedge: " + OutputArrayEdge);

          OutputArrayEdge.push(AllArray[i]);
          OutputArrayEdge.sort(function (a, b) {
            return a - b;
          });
          console.log("checkedgetwo: " + OutputArrayEdge);

          Change.push(OutputArrayEdge[edgemax - 1]);
          if (Change.length === 2) {
            Change.pop();
          }
          console.log(Change);
          OutputArrayLeft_1.push(OutputArrayEdge[0]);
          OutputArrayRight_1.push(OutputArrayEdge[edgemax]);
          OutputArrayEdge = Change;
          console.log("checkedgethree: " + OutputArrayEdge);
        }
      } else {
        if (
          AllArray[i] > OutputArrayEdge[0] &&
          AllArray[i] < OutputArrayEdge[OutputArrayEdge.length] &&
          OutputArrayEdge.length > 1
        ) {
          OutputArrayMiddle_1.push(AllArray[i]);
        }
        if (
          AllArray[i] > OutputArrayEdge[OutputArrayEdge.length - 1] &&
          OutputArrayRight_1.length < edgemax + 1
        ) {
          OutputArrayRight_1.push(AllArray[i]);
          OutputArrayRight_1.sort(function (a, b) {
            return a - b;
          });
        } else if (
          AllArray[i] < OutputArrayEdge[0] &&
          OutputArrayLeft_1.length < edgemax + 1
        ) {
          OutputArrayLeft_1.push(AllArray[i]);
          OutputArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
        }

        if (OutputArrayLeft_1.length > edgemax) {
          Change = OutputArrayLeft_1.splice(edgemax - 1, 1);
          OutputArrayEdge.push(Change);
          Change = OutputArrayLeft_1.splice(edgemax - 1, 1);
          OutputArrayMiddle_1.push(Change);
          OutputArrayEdge.sort(function (a, b) {
            return a - b;
          });
          OutputArrayMiddle_1.sort(function (a, b) {
            return a - b;
          });
        }
        if (OutputArrayRight_1.length > edgemax) {
          Change = OutputArrayRight_1.splice(edgemax - 1, 1);
          OutputArrayEdge.push(Change);
          Change = OutputArrayRight_1.splice(0, 1);
          OutputArrayMiddle_1.push(Change);
          OutputArrayEdge.sort(function (a, b) {
            return a - b;
          });
          OutputArrayMiddle_1.sort(function (a, b) {
            return a - b;
          });
        }
      }
    }

    console.log("Edgemax: " + edgemax);
    console.log("Edge: " + OutputArrayEdge);
    console.log("Left1: " + OutputArrayLeft_1);
    console.log("Left2: " + OutputArrayLeft_2);
    console.log("Right1: " + OutputArrayRight_1);
    console.log("Right2: " + OutputArrayRight_2);
    console.log("Middle1: " + OutputArrayMiddle_1);
    console.log("Middle2: " + OutputArrayMiddle_2);

    //document.getElementById("array1").innerHTML = AllArray;
    document.getElementById("arrayedge").innerHTML = OutputArrayEdge;
    document.getElementById("arrayright_1").innerHTML = OutputArrayRight_1;
    document.getElementById("arrayright_2").innerHTML = OutputArrayRight_2;
    document.getElementById("arrayleft_1").innerHTML = OutputArrayLeft_1;
    document.getElementById("arrayleft_2").innerHTML = OutputArrayLeft_2;
    document.getElementById("arraymiddle_1").innerHTML = OutputArrayMiddle_1;
    document.getElementById("arraymiddle_2").innerHTML = OutputArrayMiddle_2;

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
      <div className="container">
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
            <div className="col-2"></div>
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
