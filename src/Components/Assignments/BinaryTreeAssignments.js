import React from "react";
import { Button } from "react-bootstrap";

var fokszam = 2;
export default function BinaryTreeAssignment() {
  var AllArray = [];

  function Generate() {
    var hossz = Math.floor(Math.random() * 3) + 9;

    for (let i = 0; i < hossz; i++) {
      AllArray.push(Math.floor(Math.random() * 100));
    }

    console.log("hossz: " + hossz);
    console.log("AllArray: " + AllArray);

    document.getElementById(
      "question"
    ).innerHTML = `Adott az alábbi B-fa, amelynek minimális fokszáma ${fokszam}. A következő számsoron alkalmazza a tanultakat. [ ${AllArray} ].`;
  }

  function Check() {
    console.log("array-check: " + AllArray);

    var userEdgeArray = [];
    userEdgeArray = document.getElementById("inp0").value.split(",");

    var userLeftArrayOne = [];
    userLeftArrayOne = document.getElementById("inp1").value.split(",");
    var userMiddleArray = [];
    userMiddleArray = document.getElementById("inp2").value.split(",");
    var userRightArrayOne = [];
    userRightArrayOne = document.getElementById("inp3").value.split(",");

    var userLeftArrayTwoZero = [];
    userLeftArrayTwoZero = document.getElementById("inp4").value.split(",");
    var userLeftArrayTwoOne = [];
    userLeftArrayTwoOne = document.getElementById("inp5").value.split(",");
    var userLeftArrayTwoTwo = [];
    userLeftArrayTwoTwo = document.getElementById("inp6").value.split(",");

    var userMiddleArrayTwoZero = [];
    userMiddleArrayTwoZero = document.getElementById("inp7").value.split(",");
    var userMiddleArrayTwoOne = [];
    userMiddleArrayTwoOne = document.getElementById("inp8").value.split(",");

    var userRightArrayTwoZero = [];
    userRightArrayTwoZero = document.getElementById("inp9").value.split(",");
    var userRightArrayTwoOne = [];
    userRightArrayTwoOne = document.getElementById("inp10").value.split(",");
    var userRightArrayTwoTwo = [];
    userRightArrayTwoTwo = document.getElementById("inp11").value.split(",");

    var edgemax = 2 * fokszam - 1;
    var childmax = 2 * fokszam;

    var OpArrayEdge = [];

    var OpArrayLeft_1 = [];
    var OpArrayMiddle = [];
    var OpArrayRight_1 = [];

    var OpArrayLeft_2 = [];
    var OpArrayMiddle_1 = [];
    var OpArrayMiddle_12 = [];

    var OpArrayMiddle_14 = [];
    var OpArrayMiddle_2 = [];

    var OpArrayMiddle_26 = [];
    var OpArrayMiddle_28 = [];
    var OpArrayRight_2 = [];

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
        i < 7
      ) {

        if (OpArrayEdge[0] > AllArray[i]) {
          OpArrayLeft_1.push(AllArray[i]);
          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
        }
        if (OpArrayEdge[OpArrayEdge.length - 1] < AllArray[i]) {
          OpArrayRight_1.push(AllArray[i]);
          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });
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
        i > 6 &&
        OpArrayLeft_2.length === 0 &&
        OpArrayMiddle_2.length === 0
      ) {
        if (
          AllArray[i] > OpArrayEdge[0] &&
          AllArray[i] < OpArrayEdge[OpArrayEdge.length - 1] &&
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
          AllArray[i] < OpArrayEdge[0] &&
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
            if (OpArrayMiddle[0] < OpArrayEdge[0]) {
              OpArrayMiddle_1.push(OpArrayMiddle[0]);
              OpArrayMiddle.pop();
            } else if (OpArrayMiddle[0] > OpArrayEdge[0]) {
              OpArrayMiddle_2.push(OpArrayMiddle[0]);
              OpArrayMiddle.pop();
            }
          }
        }

        if (
          AllArray[i] > OpArrayEdge[OpArrayEdge.length - 1] &&
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
              if (OpArrayMiddle[m] < OpArrayEdge[0]) {
                if (OpArrayMiddle[m] < OpArrayLeft_1[0]) {
                  OpArrayLeft_2.push(OpArrayMiddle[m]);
                } else if (
                  OpArrayMiddle[m] > OpArrayLeft_1[OpArrayLeft_1.length - 1]
                ) {
                  OpArrayMiddle_1.push(OpArrayMiddle[m]);
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
            if (OpArrayMiddle[0] < OpArrayEdge[0]) {
              OpArrayMiddle_1.push(OpArrayMiddle[0]);
              OpArrayMiddle.pop();
            } else if (OpArrayMiddle[0] > OpArrayEdge[0]) {
              OpArrayMiddle_2.push(OpArrayMiddle[0]);
              OpArrayMiddle.pop();
            }
          }
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
      if (
        OpArrayEdge.length <= edgemax &&
        OpArrayLeft_1.length <= childmax &&
        OpArrayRight_1.length <= childmax &&
        OpArrayMiddle.length <= childmax &&
        i > 6
      ) {

        if (
          OpArrayLeft_2.length === childmax - 1 &&
          AllArray[i] < OpArrayLeft_1[0]
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
          AllArray[i] > OpArrayLeft_1[0] &&
          AllArray[i] < OpArrayLeft_1[1]
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
          AllArray[i] > OpArrayLeft_1[1] &&
          AllArray[i] < OpArrayLeft_1[2]
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
          AllArray[i] > OpArrayLeft_1[2]
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
          AllArray[i] < OpArrayRight_1[0]
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
          AllArray[i] > OpArrayRight_1[0] &&
          AllArray[i] < OpArrayRight_1[1]
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
          AllArray[i] > OpArrayRight_1[2] &&
          AllArray[i] < OpArrayRight_1[3]
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
          AllArray[i] > OpArrayRight_1[OpArrayRight_1.length - 1]
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

        if (AllArray[i] < OpArrayEdge[0] && AllArray[i] < OpArrayLeft_1[0]) {
          OpArrayLeft_2.push(AllArray[i]);

          OpArrayLeft_2.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          AllArray[i] < OpArrayEdge[0] &&
          AllArray[i] > OpArrayLeft_1[0] &&
          AllArray[i] < OpArrayLeft_1[1]
        ) {
          OpArrayMiddle_1.push(AllArray[i]);

          OpArrayMiddle_1.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          AllArray[i] < OpArrayEdge[0] &&
          AllArray[i] > OpArrayLeft_1[1] &&
          AllArray[i] < OpArrayLeft_1[2]
        ) {
          OpArrayMiddle_12.push(AllArray[i]);

          OpArrayMiddle_12.sort(function (a, b) {
            return a - b;
          });
        }
        if (AllArray[i] < OpArrayEdge[0] && AllArray[i] > OpArrayLeft_1[2]) {
          OpArrayMiddle_14.push(AllArray[i]);

          OpArrayMiddle_14.sort(function (a, b) {
            return a - b;
          });
        }
        if (AllArray[i] > OpArrayEdge[0] && AllArray[i] < OpArrayRight_1[0]) {
          OpArrayMiddle_2.push(AllArray[i]);

          OpArrayMiddle_2.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          AllArray[i] > OpArrayEdge[0] &&
          AllArray[i] > OpArrayRight_1[0] &&
          AllArray[i] < OpArrayRight_1[1]
        ) {
          OpArrayMiddle_26.push(AllArray[i]);

          OpArrayMiddle_26.sort(function (a, b) {
            return a - b;
          });
        }
        if (
          AllArray[i] > OpArrayEdge[0] &&
          AllArray[i] > OpArrayRight_1[1] &&
          AllArray[i] < OpArrayRight_1[2]
        ) {
          OpArrayMiddle_28.push(AllArray[i]);

          OpArrayMiddle_28.sort(function (a, b) {
            return a - b;
          });
        }
        if (AllArray[i] > OpArrayEdge[0] && AllArray[i] > OpArrayRight_1[2]) {
          OpArrayRight_2.push(AllArray[i]);

          OpArrayRight_2.sort(function (a, b) {
            return a - b;
          });
        }
      }
    }

    var points = 0;
    for (let i = 0; i < OpArrayEdge.length; i++) {
      if (userEdgeArray[i] === OpArrayEdge[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OpArrayLeft_1.length; i++) {
      if (userLeftArrayOne[i] === OpArrayLeft_1[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OpArrayMiddle.length; i++) {
      if (userMiddleArray[i] === OpArrayMiddle[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OpArrayRight_1.length; i++) {
      if (userRightArrayOne[i] === OpArrayRight_1[i]) {
        points += 1;
      }
    }

    for (let i = 0; i < OpArrayLeft_2.length; i++) {
      if (userLeftArrayTwoZero[i] === OpArrayLeft_2[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OpArrayMiddle_1.length; i++) {
      if (userLeftArrayTwoOne[i] === OpArrayMiddle_1[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OpArrayMiddle_12.length; i++) {
      if (userLeftArrayTwoTwo[i] === OpArrayMiddle_12[i]) {
        points += 1;
      }
    }

    for (let i = 0; i < OpArrayMiddle_14.length; i++) {
      if (userMiddleArrayTwoZero[i] === OpArrayMiddle_14[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OpArrayMiddle_2.length; i++) {
      if (userMiddleArrayTwoOne[i] === OpArrayMiddle_2[i]) {
        points += 1;
      }
    }

    for (let i = 0; i < OpArrayMiddle_26.length; i++) {
      if (userRightArrayTwoZero[i] === OpArrayMiddle_26[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OpArrayMiddle_28.length; i++) {
      if (userRightArrayTwoOne[i] === OpArrayMiddle_28[i]) {
        points += 1;
      }
    }
    for (let i = 0; i < OpArrayRight_2.length; i++) {
      if (userRightArrayTwoTwo[i] === OpArrayRight_2[i]) {
        points += 1;
      }
    }

    console.log("Edgemax: " + edgemax);
    console.log("Edge:" + OpArrayEdge);

    console.log("Left1: " + OpArrayLeft_1);
    console.log("Middle1: " + OpArrayMiddle);
    console.log("Right1: " + OpArrayRight_1);

    console.log("Left20: " + OpArrayLeft_2);
    console.log("Left21: " + OpArrayMiddle_1);
    console.log("Left22: " + OpArrayMiddle_12);

    console.log("Middle20: " + OpArrayMiddle_1);
    console.log("Middle21: " + OpArrayMiddle_12);

    console.log("Right20: " + OpArrayMiddle_26);
    console.log("Right21: " + OpArrayMiddle_28);
    console.log("Right22: " + OpArrayRight_2);
  }

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <h1 style={{ color: "white", textAlign: "center", paddingTop: "10px" }}>
        Bináris kereső fa
      </h1>
      <div className="form-group" style={{ padding: "15px" }}>
        <div style={{ color: "white", textAlign: "center", padding: "10px" }}>
          {" "}
          <Button variant="outline-warning" onClick={Generate}>
            Új feladat
          </Button>
        </div>
        <b
          style={{ color: "white", padding: "15px" }}
          className="row justify-content-center"
          id="question"
        ></b>
        <div className="container">
          <div className="row justify-content-center">
            <div style={{ width: "150px", paddingBottom: "15px" }}>
              <input id="inp0" type="text" className="form-control"></input>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ padding: "15px" }}
          >
            <div style={{ width: "200px", marginRight: "6%" }}>
              {" "}
              <input id="inp1" type="text" className="form-control"></input>
            </div>
            <div style={{ width: "200px", marginRight: "6%" }}>
              {" "}
              <input id="inp2" type="text" className="form-control"></input>
            </div>{" "}
            <div style={{ width: "200px" }}>
              {" "}
              <input id="inp3" type="text" className="form-control"></input>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ padding: "15px" }}
          >
            <div style={{ width: "100px", margin: "4px" }}>
              {" "}
              <input id="inp4" type="text" className="form-control"></input>
            </div>
            <div style={{ width: "100px", margin: "4px" }}>
              {" "}
              <input id="inp5" type="text" className="form-control"></input>
            </div>
            <div style={{ width: "100px", margin: "4px" }}>
              {" "}
              <input id="inp6" type="text" className="form-control"></input>
            </div>
            <div style={{ width: "100px", margin: "4px" }}>
              {" "}
              <input id="inp7" type="text" className="form-control"></input>
            </div>
            <div style={{ width: "100px", margin: "4px" }}>
              {" "}
              <input id="inp8" type="text" className="form-control"></input>
            </div>
            <div style={{ width: "100px", margin: "4px" }}>
              {" "}
              <input id="inp9" type="text" className="form-control"></input>
            </div>
            <div style={{ width: "100px", margin: "4px" }}>
              {" "}
              <input id="inp10" type="text" className="form-control"></input>
            </div>
            <div style={{ width: "100px", margin: "4px" }}>
              {" "}
              <input id="inp11" type="text" className="form-control"></input>
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
