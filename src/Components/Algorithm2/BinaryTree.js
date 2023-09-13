import React from "react";
import Button from "react-bootstrap/Button";

export default function BinaryTree() {
  var AllArray = [];
  //var Change = [];

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
    var OpArrayMiddle_12 = [];
    var OpArrayMiddle_14 = [];
    var OpArrayMiddle_26 = [];
    var OpArrayMiddle_28 = [];
    var OpArrayMiddle_2 = [];

    var new_element = document.getElementById("elements").value;
    AllArray.push(new_element);
    console.log("AllArray: " + AllArray);

    if (AllArray.length > 0) {
      document.getElementById("showZero").style.display = "block";
    }
    if (AllArray.length > 2) {
      document.getElementById("showOne").style.display = "block";
      document.getElementById("showOne").style.marginLeft = "0%";
      document.getElementById("showThree").style.display = "block";
    }
    if (AllArray.length > 4) {
      document.getElementById("showTwo").style.display = "block";
    }
    if (AllArray.length > 6) {
      document.getElementById("showFour").style.display = "block";
      document.getElementById("showFive").style.display = "block";
      document.getElementById("showSix").style.display = "block";
      document.getElementById("showSeven").style.display = "block";
      document.getElementById("showEight").style.display = "block";
      document.getElementById("showNine").style.display = "block";
      document.getElementById("showTen").style.display = "block";
      document.getElementById("showEleven").style.display = "block";
    }

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
        }
      }
      if (
        OpArrayEdge.length <= edgemax &&
        OpArrayLeft_1.length <= childmax &&
        OpArrayRight_1.length <= childmax &&
        OpArrayMiddle.length <= childmax &&
        i > 2 &&
        i <= 6
      ) {
        if (parseInt(OpArrayEdge[0]) > parseInt(AllArray[i])) {
          OpArrayLeft_1.push(AllArray[i]);
          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          parseInt(OpArrayEdge[OpArrayEdge.length - 1]) < parseInt(AllArray[i])
        ) {
          OpArrayRight_1.push(AllArray[i]);
          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });
        }
        if (OpArrayLeft_1.length === childmax - 1) {
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
        //nincs lekezelve amikor még csak lefele kell neki az adatokat adnia fel nélkül.
        if (
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
          OpArrayLeft_1.length === childmax - 1
        ) {
          OpArrayMiddle_12.push(OpArrayLeft_1[OpArrayLeft_1.length - 1]);
          OpArrayLeft_1.pop();
          OpArrayLeft_2.push(OpArrayLeft_1[0]);
          OpArrayLeft_1.shift();

          if (parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[0])) {
            OpArrayLeft_2.push(AllArray[i]);
          }

          if (parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[0])) {
            OpArrayMiddle_12.push(AllArray[i]);
          }

          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle_12.sort(function (a, b) {
            return a - b;
          });
          OpArrayLeft_2.sort(function (a, b) {
            return a - b;
          });
        }

        if (
          parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
          OpArrayRight_1.length === childmax - 1
        ) {
          OpArrayRight_2.push(OpArrayRight_1[OpArrayRight_1.length - 1]);
          OpArrayRight_1.pop();
          OpArrayLeft_2.push(OpArrayRight_1[0]);
          OpArrayRight_1.shift();

          if (parseInt(AllArray[i]) < parseInt(OpArrayRight_1[0])) {
            OpArrayMiddle_26.push(AllArray[i]);
          }

          if (parseInt(AllArray[i]) > parseInt(OpArrayRight_1[0])) {
            OpArrayRight_2.push(AllArray[i]);
          }

          OpArrayMiddle_12.sort(function (a, b) {
            return a - b;
          });
          OpArrayLeft_2.sort(function (a, b) {
            return a - b;
          });
        }

        

        if (
          parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) <
            parseInt(OpArrayEdge[OpArrayEdge.length - 1]) &&
          OpArrayMiddle.length === childmax - 1 &&
          OpArrayEdge.length === edgemax - 1
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
          OpArrayMiddle_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle_2.sort(function (a, b) {
            return a - b;
          });

          OpArrayLeft_2 = OpArrayLeft_1;
          OpArrayLeft_1 = OpArrayEdge[0];
          OpArrayEdge.shift();

          OpArrayRight_2 = OpArrayRight_1;
          OpArrayRight_1 = OpArrayEdge[OpArrayEdge.length - 1];
          OpArrayEdge.pop();

          OpArrayRight_1.push(OpArrayEdge[OpArrayEdge.length - 1]);
          OpArrayEdge.pop();
          OpArrayLeft_1.push(OpArrayEdge[0]);
          OpArrayEdge.shift();
        }
        if (
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
          OpArrayLeft_1.length === childmax - 1 &&
          OpArrayEdge.length === edgemax - 1
        ) {
          OpArrayMiddle_1.push(OpArrayLeft_1[OpArrayLeft_1.length - 1]);
          OpArrayLeft_1.pop();
          OpArrayEdge.push(OpArrayLeft_1[OpArrayLeft_1.length - 1]);
          OpArrayLeft_1.pop();
          OpArrayLeft_2.push(OpArrayLeft_1[OpArrayMiddle.length - 1]);
          OpArrayLeft_1.pop();

          OpArrayEdge.sort(function (a, b) {
            return a - b;
          });

          OpArrayLeft_1.push(OpArrayEdge[OpArrayEdge[0]]);
          OpArrayEdge.shift();
          OpArrayRight_2.push(OpArrayRight_1[OpArrayRight_1.length - 1]);
          OpArrayRight_1.pop();
          OpArrayRight_1.push(OpArrayEdge[OpArrayEdge.length - 1]);
          OpArrayEdge.pop();

          if (OpArrayMiddle.length > 1) {
            for (let m = 0; m < OpArrayMiddle.length - 1; m++) {
              if (OpArrayMiddle[m] < OpArrayEdge[0]) {
                if (OpArrayMiddle[m] < OpArrayLeft_1[0]) {
                  OpArrayLeft_2.push(OpArrayMiddle[m]);
                  OpArrayMiddle.shift();
                } else if (
                  OpArrayMiddle[m] > OpArrayLeft_1[OpArrayLeft_1.length - 1]
                ) {
                  OpArrayMiddle_1.push(OpArrayMiddle[m]);
                  OpArrayMiddle.shift();
                }
              } else if (
                OpArrayMiddle[m] > OpArrayEdge[OpArrayEdge.length - 1]
              ) {
                if (OpArrayMiddle[m] < OpArrayRight_1[0]) {
                  OpArrayMiddle_2.push(OpArrayMiddle[m]);
                  OpArrayMiddle.pop();
                } else if (
                  OpArrayMiddle[m] > OpArrayRight_1[OpArrayRight_1.length - 1]
                ) {
                  OpArrayRight_2.push(OpArrayMiddle[m]);
                  OpArrayMiddle.pop();
                }
              }
            }
          } else if (OpArrayMiddle.length === 1) {
            if (parseInt(OpArrayMiddle[0]) < parseInt(OpArrayEdge[0])) {
              OpArrayMiddle_1.push(OpArrayMiddle[0]);
              OpArrayMiddle.pop();
            } else if (parseInt(OpArrayMiddle[0]) > parseInt(OpArrayEdge[0])) {
              OpArrayMiddle_2.push(OpArrayMiddle[0]);
              OpArrayMiddle.pop();
            }
          }
        }

        if (
          parseInt(AllArray[i]) >
            parseInt(OpArrayEdge[OpArrayEdge.length - 1]) &&
          OpArrayRight_1.length === childmax - 1 &&
          OpArrayEdge.length === edgemax - 1
        ) {
          OpArrayRight_2.push(OpArrayRight_1[OpArrayRight_1.length - 1]);
          OpArrayRight_1.pop();
          OpArrayEdge.push(OpArrayRight_1[OpArrayRight_1.length - 1]);
          OpArrayRight_1.pop();
          OpArrayMiddle_2.push(OpArrayRight_1[OpArrayRight_1.length - 1]);
          OpArrayRight_1.pop();

          OpArrayEdge.sort(function (a, b) {
            return a - b;
          });

          OpArrayRight_1.push(OpArrayEdge[OpArrayEdge.length - 1]);
          OpArrayEdge.pop();
          OpArrayLeft_2.push(OpArrayLeft_1[OpArrayLeft_1.length - 1]);
          OpArrayLeft_1.shift();
          OpArrayLeft_1.push(OpArrayEdge[0]);
          OpArrayEdge.shift();

          if (OpArrayMiddle.length > 1) {
            for (let m = 0; m < OpArrayMiddle.length - 1; m++) {
              if (parseInt(OpArrayMiddle[m]) < parseInt(OpArrayEdge[0])) {
                if (parseInt(OpArrayMiddle[m]) < parseInt(OpArrayLeft_1[0])) {
                  OpArrayLeft_2.push(OpArrayMiddle[m]);
                } else if (
                  parseInt(OpArrayMiddle[m]) >
                  parseInt(OpArrayLeft_1[OpArrayLeft_1.length - 1])
                ) {
                  OpArrayMiddle_1.push(OpArrayMiddle[m]);
                }
              } else if (
                parseInt(OpArrayMiddle[m]) >
                parseInt(OpArrayEdge[OpArrayEdge.length - 1])
              ) {
                if (parseInt(OpArrayMiddle[m]) < parseInt(OpArrayRight_1[0])) {
                  OpArrayMiddle_2.push(OpArrayMiddle[m]);
                  OpArrayMiddle.pop();
                } else if (
                  parseInt(OpArrayMiddle[m]) >
                  parseInt(OpArrayRight_1[OpArrayRight_1.length - 1])
                ) {
                  OpArrayRight_2.push(OpArrayMiddle[m]);
                  OpArrayMiddle.pop();
                }
              }
            }
          } else if (OpArrayMiddle.length === 1) {
            if (parseInt(OpArrayMiddle[0]) < parseInt(OpArrayEdge[0])) {
              OpArrayMiddle_1.push(OpArrayMiddle[0]);
              OpArrayMiddle.pop();
            } else if (parseInt(OpArrayMiddle[0]) > parseInt(OpArrayEdge[0])) {
              OpArrayMiddle_2.push(OpArrayMiddle[0]);
              OpArrayMiddle.pop();
            }
          }
        }

        if (parseInt(AllArray[i]) < parseInt(OpArrayEdge[0])) {
          OpArrayLeft_1.push(AllArray[i]);
          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[1])
        ) {
          OpArrayMiddle.push(AllArray[i]);
          OpArrayMiddle.sort(function (a, b) {
            return a - b;
          });
        }
        if (parseInt(AllArray[i]) > parseInt(OpArrayEdge[1])) {
          OpArrayRight_1.push(AllArray[i]);
          OpArrayRight_1.sort(function (a, b) {
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
          OpArrayLeft_2.length === childmax - 1 &&
          parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[0])
        ) {
          OpArrayMiddle_1.push(OpArrayLeft_2[OpArrayLeft_2.length - 1]);
          OpArrayLeft_2.pop();
          OpArrayLeft_1.push(OpArrayLeft_2[OpArrayLeft_2.length - 1]);
          OpArrayLeft_2.pop();

          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle_1.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          OpArrayMiddle_1.length === childmax - 1 &&
          parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[0]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[1])
        ) {
          OpArrayMiddle_12.push(OpArrayMiddle_1[OpArrayMiddle_1.length - 1]);
          OpArrayMiddle_1.pop();
          OpArrayLeft_1.push(OpArrayMiddle_1[OpArrayMiddle_1.length - 1]);
          OpArrayMiddle_1.pop();

          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle_12.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          OpArrayMiddle_12.length === childmax - 1 &&
          parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[1]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[2])
        ) {
          OpArrayMiddle_14.push(OpArrayMiddle_12[OpArrayMiddle_12.length - 1]);
          OpArrayMiddle_12.pop();
          OpArrayLeft_1.push(OpArrayMiddle_12[OpArrayMiddle_12.length - 1]);
          OpArrayMiddle_12.pop();

          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle_14.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          OpArrayMiddle_14.length === childmax - 1 &&
          parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[2])
        ) {
          OpArrayMiddle_12.push(OpArrayMiddle_14[0]);
          OpArrayMiddle_14.shift();
          OpArrayLeft_1.push(OpArrayMiddle_14[0]);
          OpArrayMiddle_14.shift();

          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle_12.sort(function (a, b) {
            return a - b;
          });
        }

        if (
          OpArrayMiddle_2.length === childmax - 1 &&
          parseInt(AllArray[i]) < parseInt(OpArrayRight_1[0])
        ) {
          OpArrayMiddle_26.push(OpArrayMiddle_2[OpArrayMiddle_2.length - 1]);
          OpArrayMiddle_2.pop();
          OpArrayRight_1.push(OpArrayMiddle_2[OpArrayMiddle_2.length - 1]);
          OpArrayMiddle_2.pop();

          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle_26.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          OpArrayMiddle_26.length === childmax - 1 &&
          parseInt(AllArray[i]) > parseInt(OpArrayRight_1[0]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayRight_1[1])
        ) {
          OpArrayMiddle_28.push(OpArrayMiddle_26[OpArrayMiddle_26.length - 1]);
          OpArrayMiddle_26.pop();
          OpArrayRight_1.push(OpArrayMiddle_26[OpArrayMiddle_26.length - 1]);
          OpArrayMiddle_26.pop();

          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle_28.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          OpArrayMiddle_28.length === childmax - 1 &&
          parseInt(AllArray[i]) >
            parseInt(
              parseInt(OpArrayRight_1[2]) &&
                parseInt(AllArray[i]) < OpArrayRight_1[3]
            )
        ) {
          OpArrayRight_2.push(OpArrayMiddle_28[OpArrayMiddle_28.length - 1]);
          OpArrayMiddle_28.pop();
          OpArrayRight_1.push(OpArrayMiddle_28[OpArrayMiddle_28.length - 1]);
          OpArrayMiddle_28.pop();

          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayRight_2.sort(function (a, b) {
            return a - b;
          });
        }

        if (
          OpArrayRight_2.length === childmax - 1 &&
          parseInt(AllArray[i]) >
            parseInt(OpArrayRight_1[OpArrayRight_1.length - 1])
        ) {
          OpArrayMiddle_14.push(OpArrayRight_2[0]);
          OpArrayRight_2.shift();
          OpArrayRight_1.push(OpArrayRight_2[0]);
          OpArrayRight_2.shift();

          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayMiddle_14.sort(function (a, b) {
            return a - b;
          });
        }

        if (
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[0])
        ) {
          OpArrayLeft_2.push(AllArray[i]);

          OpArrayLeft_2.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[0]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[1])
        ) {
          OpArrayMiddle_1.push(AllArray[i]);

          OpArrayMiddle_1.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[1]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[2])
        ) {
          OpArrayMiddle_12.push(AllArray[i]);

          OpArrayMiddle_12.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[2])
        ) {
          OpArrayMiddle_14.push(AllArray[i]);

          OpArrayMiddle_14.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayRight_1[0])
        ) {
          OpArrayMiddle_2.push(AllArray[i]);

          OpArrayMiddle_2.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) > parseInt(OpArrayRight_1[0]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayRight_1[1])
        ) {
          OpArrayMiddle_26.push(AllArray[i]);

          OpArrayMiddle_26.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) > parseInt(OpArrayRight_1[1]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayRight_1[2])
        ) {
          OpArrayMiddle_28.push(AllArray[i]);

          OpArrayMiddle_28.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) > parseInt(OpArrayRight_1[2])
        ) {
          OpArrayRight_2.push(AllArray[i]);

          OpArrayRight_2.sort(function (a, b) {
            return a - b;
          });
        }
      }
    }
console.log("Array hossz: " + AllArray.length)
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
    document.getElementById("arraymiddle_12").innerHTML = OpArrayMiddle_12;
    document.getElementById("arraymiddle_14").innerHTML = OpArrayMiddle_14;
    document.getElementById("arraymiddle_2").innerHTML = OpArrayMiddle_2;
    document.getElementById("arraymiddle_26").innerHTML = OpArrayMiddle_26;
    document.getElementById("arraymiddle_28").innerHTML = OpArrayMiddle_28;

    /**/
  }
  return (
    <form style={{ background: "#000027", height: "100vh", color: "white" }}>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Bfa megoldó
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
            <div
              id="showZero"
              style={{ display: "none" }}
              className="col-2 border border-warning"
            >
              <b id="arrayedge"></b>
            </div>
          </div>
        </div>
        <div style={{ padding: "1%" }}>
          <div className="row justify-content-center">
            <div
              className="col-2 border border-warning"
              style={{ marginRight: "7%", display: "none" }}
              id="showOne"
            >
              <b id="arrayleft_1"></b>
            </div>
            <div
              className="col-2 border border-warning"
              style={{ marginRight: "7%", display: "none" }}
              id="showTwo"
            >
              <b id="arraymiddle"></b>
            </div>
            <div
              id="showThree"
              style={{ display: "none" }}
              className="col-2 border border-warning"
            >
              <b id="arrayright_1"></b>
            </div>
          </div>
        </div>{" "}
        <div style={{ padding: "1%" }}>
          <div className="row justify-content-center">
            <div
              className="col-1 border border-warning"
              style={{ marginRight: "1%", display: "none" }}
              id="showFour"
            >
              <b id="arrayleft_2"></b>
            </div>
            <div
              className="col-1 border border-warning"
              style={{ marginRight: "1%", display: "none" }}
              id="showFive"
            >
              <b id="arraymiddle_1"></b>
            </div>
            <div
              className="col-1 border border-warning"
              style={{ marginRight: "1%", display: "none" }}
              id="showSix"
            >
              <b id="arraymiddle_12"></b>
            </div>
            <div
              className="col-1 border border-warning"
              style={{ marginRight: "1%", display: "none" }}
              id="showSeven"
            >
              <b id="arraymiddle_14"></b>
            </div>
            <div
              className="col-1 border border-warning"
              style={{ marginRight: "1%", display: "none" }}
              id="showEight"
            >
              <b id="arraymiddle_2"></b>
            </div>
            <div
              className="col-1 border border-warning"
              style={{ marginRight: "1%", display: "none" }}
              id="showNine"
            >
              <b id="arraymiddle_26"></b>
            </div>
            <div
              className="col-1 border border-warning"
              style={{ marginRight: "1%", display: "none" }}
              id="showTen"
            >
              <b id="arraymiddle_28"></b>
            </div>
            <div
              className="col-1 border border-warning"
              style={{ marginRight: "1%", display: "none" }}
              id="showEleven"
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
