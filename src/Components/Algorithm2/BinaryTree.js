import React from "react";
import Button from "react-bootstrap/Button";

export default function BinaryTree() {
  var AllArray = [];
  //perfetto mefisto, márcsak otthon bekell vonalazni rendesen

  function Delete() {
    var del_element = document.getElementById("elements").value;

    for (let i = 0; i < AllArray.length - 1; i++) {
      if (AllArray[i] === del_element) {
        AllArray[i] = AllArray[AllArray.length - 1];
        AllArray.pop();
        console.log(AllArray);
      }
    }
    Result();
  }

  function Add() {
    var new_element = document.getElementById("elements").value;
    AllArray.push(new_element);
    console.log("AllArray: " + AllArray);
    Result();
  }

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
        //nincs lekezelve amikor még csak lefele kell neki az adatokat adnia fel nélkül.
        if (
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
          OpArrayLeft_1.length === childmax - 1
        ) {
          OpArrayMiddle_12.push(OpArrayLeft_1[OpArrayLeft_1.length - 1]);
          OpArrayLeft_1.pop();
          OpArrayLeft_2.push(OpArrayLeft_1[0]);
          OpArrayLeft_1.shift();

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
          OpArrayMiddle_26.push(OpArrayRight_1[0]);
          OpArrayRight_1.shift();

          OpArrayMiddle_26.sort(function (a, b) {
            return a - b;
          });
          OpArrayRight_2.sort(function (a, b) {
            return a - b;
          });
        }

        if (
          parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[1]) &&
          OpArrayMiddle.length === childmax - 1 &&
          OpArrayEdge.length === edgemax - 1
        ) {
          OpArrayLeft_1.push(OpArrayEdge[0]);
          OpArrayEdge.shift();
          OpArrayRight_1.push(OpArrayEdge[0]);
          OpArrayEdge.shift();

          OpArrayLeft_1.push(OpArrayMiddle[0]);
          OpArrayMiddle.shift();
          OpArrayRight_1.push(OpArrayMiddle[OpArrayMiddle.length - 1]);
          OpArrayMiddle.pop();
          OpArrayEdge.push(OpArrayMiddle[0]);
          OpArrayMiddle.shift();

          OpArrayEdge.sort(function (a, b) {
            return a - b;
          });
          OpArrayLeft_1.sort(function (a, b) {
            return a - b;
          });
          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });

          if (OpArrayLeft_1.length === childmax) {
            OpArrayLeft_2.push(OpArrayLeft_1[0]);
            OpArrayLeft_1.shift();
            OpArrayEdge.push(OpArrayLeft_1[0]);
            OpArrayLeft_1.shift();
            OpArrayMiddle_12.push(OpArrayLeft_1[OpArrayLeft_1.length - 1]);
            OpArrayLeft_1.pop();
          }
          if (OpArrayRight_1.length === childmax) {
            OpArrayMiddle_26.push(OpArrayRight_1[0]);
            OpArrayRight_1.shift();
            OpArrayEdge.push(OpArrayRight_1[0]);
            OpArrayRight_1.shift();
            OpArrayRight_2.push(OpArrayRight_1[OpArrayRight_1.length - 1]);
            OpArrayRight_1.pop();
          }

          document.getElementById("showTwo").style.display = "none";
          document.getElementById("showEight").style.display = "none";
          document.getElementById("showNine").style.display = "none";

          if (AllArray[i] < OpArrayEdge[0]) {
            if (AllArray[i] < OpArrayLeft_1[0]) {
              OpArrayLeft_2.push(AllArray[i]);
            } else {
              OpArrayMiddle_12.push(AllArray[i]);
            }
            OpArrayLeft_2.sort(function (a, b) {
              return a - b;
            });
            OpArrayMiddle_12.sort(function (a, b) {
              return a - b;
            });
          }
          if (AllArray[i] > OpArrayEdge[OpArrayEdge.length-1]) {
            console.log("belep:"+AllArray[i]);
            if (AllArray[i] < OpArrayRight_1[0]) {
              OpArrayMiddle_26.push(AllArray[i]);
            } else {
              OpArrayRight_2.push(AllArray[i]);
            }
            OpArrayMiddle_26.sort(function (a, b) {
              return a - b;
            });
            OpArrayRight_2.sort(function (a, b) {
              return a - b;
            });
          }
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

        if (
          parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
          OpArrayLeft_2.length === 0 &&
          OpArrayMiddle_1.length === 0 &&
          OpArrayMiddle_12.length === 0
        ) {
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
        if (
          parseInt(AllArray[i]) >
          parseInt(
            OpArrayEdge[1] &&
              OpArrayRight_2.length === 0 &&
              OpArrayMiddle_28.length === 0 &&
              OpArrayMiddle_26.length === 0
          )
        ) {
          OpArrayRight_1.push(AllArray[i]);
          OpArrayRight_1.sort(function (a, b) {
            return a - b;
          });
        }
      }
      if (i > 6) {
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
          OpArrayMiddle_28.push(OpArrayRight_2[0]);
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
      }

      if (
        parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[0]) &&
        OpArrayLeft_2.length < childmax
      ) {
        OpArrayLeft_2.push(AllArray[i]);

        OpArrayLeft_2.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
        parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[0]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[1]) &&
        OpArrayMiddle_1.length < childmax
      ) {
        OpArrayMiddle_1.push(AllArray[i]);

        OpArrayMiddle_1.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) < parseInt(OpArrayEdge[0]) &&
        parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[OpArrayLeft_1.length-1]) &&
        OpArrayMiddle_12.length < childmax
      ) {
        OpArrayMiddle_12.push(AllArray[i]);

        OpArrayMiddle_12.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayEdge[1]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayMiddle[0]) &&
        OpArrayMiddle_14.length !== 0 &&
        OpArrayMiddle_14.length < childmax
      ) {
        OpArrayMiddle_14.push(AllArray[i]);

        OpArrayMiddle_14.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayEdge[1]) &&
        parseInt(AllArray[i]) > parseInt(OpArrayMiddle[OpArrayMiddle.length-1]) &&
        OpArrayMiddle_2.length !== 0 &&
        OpArrayMiddle_2.length < childmax
      ) {
        OpArrayMiddle_2.push(AllArray[i]);

        OpArrayMiddle_2.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[OpArrayEdge.length-1]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayRight_1[0]) &&
        OpArrayMiddle_26.length < childmax
      ) {
        OpArrayMiddle_26.push(AllArray[i]);

        OpArrayMiddle_26.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[OpArrayEdge.length-1]) &&
        parseInt(AllArray[i]) > parseInt(OpArrayRight_1[0]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayRight_1[1]) &&
        OpArrayMiddle_28.length < childmax
      ) {
        OpArrayMiddle_28.push(AllArray[i]);

        OpArrayMiddle_28.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[OpArrayEdge.length-1]) &&
        parseInt(AllArray[i]) >
          parseInt(OpArrayRight_1[OpArrayRight_1.length - 1]) &&
        OpArrayRight_2.length < childmax
      ) {
        OpArrayRight_2.push(AllArray[i]);

        OpArrayRight_2.sort(function (a, b) {
          return a - b;
        });
      }
      //az alsó szinten levőket helyre rakni
    }

    if (OpArrayEdge.length > 0) {
      document.getElementById("showZero").style.display = "block";
    }
    if (OpArrayRight_1.length > 0 || OpArrayLeft_1.length > 0) {
      document.getElementById("showOne").style.display = "block";
      document.getElementById("showOne").style.marginLeft = "0%";
      document.getElementById("showThree").style.display = "block";
      document.getElementById("line1").style.display = "block";
      document.getElementById("line2").style.display = "block";
    }
    if (OpArrayMiddle.length > 0) {
      document.getElementById("showTwo").style.display = "block";
      document.getElementById("line3").style.display = "block";
    }
    if (AllArray.length >= 7) {
      if (OpArrayLeft_2.length > 0) {
        document.getElementById("showFour").style.border = "2px solid gold";
        document.getElementById("line4").style.display = "block";
      }
      if (OpArrayMiddle_1.length > 0) {
        document.getElementById("showFive").style.border = "2px solid gold";
        document.getElementById("line5").style.display = "block";
      }
      if (OpArrayMiddle_12.length > 0) {
        document.getElementById("showSix").style.border = "2px solid gold";
        document.getElementById("line6").style.display = "block";
      }
      if (OpArrayMiddle_14.length > 0) {
        document.getElementById("showSeven").style.border = "2px solid gold";
        document.getElementById("line7").style.display = "block";
      }
      if (OpArrayMiddle_2.length > 0) {
        document.getElementById("showEight").style.border = "2px solid gold";
        document.getElementById("line8").style.display = "block";
      }
      if (OpArrayMiddle_26.length > 0) {
        document.getElementById("showNine").style.border = "2px solid gold";
        document.getElementById("line9").style.display = "block";
      }
      if (OpArrayMiddle_28.length > 0) {
        document.getElementById("showTen").style.border = "2px solid gold";
        document.getElementById("line10").style.display = "block";
      }
      if (OpArrayRight_2.length > 0) {
        document.getElementById("showEleven").style.border = "2px solid gold";
        document.getElementById("line11").style.display = "block";
      }
    }

    //vonalakat rendbe rakni úgy hogy időben jelenjenek meg bug nélkül


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
  }
  return (
    <form style={{ background: "#000027", height: "100vh", color: "white" }}>
      <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
        Bfa
      </h1>
      <div>
        <div className="form-group">
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-2">
                <b style={{ color: "white" }}>Fokszám: </b>
                <select className="form-control" id="fok">
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
              <div className="col-2">
                {" "}
                <b style={{ color: "white" }}>Elem: </b>
                <input type="number" className="form-control" id="elements" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row justify-content-center text-center">
            <Button variant="btn btn-outline-warning" onClick={Add}>
              Hozzáad
            </Button>
            <Button
              style={{ marginLeft: "5%" }}
              variant="btn btn-outline-warning"
              onClick={Delete}
            >
              Töröl
            </Button>
          </div>
        </div>
      </div>
      <br />
      <svg
        id="tree-line"
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "400px",
          width: "1200px",
        }}
      >
        <line
          id="line1"
          x1="485"
          y1="67"
          x2="355"
          y2="97"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />
        <line
          id="line2"
          x1="715"
          y1="67"
          x2="845"
          y2="97"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />
        <line
          id="line3"
          x1="600"
          y1="67"
          x2="600"
          y2="100"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />

        <line
          id="line4"
          x1="152"
          y1="125"
          x2="100"
          y2="155"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />
        <line
          id="line5"
          x1="270"
          y1="125"
          x2="270"
          y2="155"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />
        <line
          id="line6"
          x1="385"
          y1="125"
          x2="420"
          y2="155"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />

        <line
          id="line7"
          x1="565"
          y1="125"
          x2="540"
          y2="155"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />
        <line
          id="line8"
          x1="630"
          y1="125"
          x2="655"
          y2="155"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />

        <line
          id="line9"
          x1="815"
          y1="125"
          x2="800"
          y2="155"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />
        <line
          id="line10"
          x1="930"
          y1="125"
          x2="930"
          y2="155"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />
        <line
          id="line11"
          x1="1045"
          y1="125"
          x2="1060"
          y2="155"
          style={{ stroke: "gold", strokeWidth: "2", display: "none" }}
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          height: "350px",
          width: "1400px",
        }}
      >
        <div style={{ padding: "1%" }}>
          <div className="row justify-content-center ">
            <div
              id="showZero"
              style={{
                border: "solid gold",
                display: "none",
                textAlign: "center",
              }}
              className="col-2"
            >
              <b id="arrayedge"></b>
            </div>
          </div>
        </div>
        <div style={{ padding: "1%" }}>
          <div className="row justify-content-center">
            <div
              className="col-2"
              style={{
                border: "solid gold",
                marginRight: "7%",
                display: "none",
                textAlign: "center",
              }}
              id="showOne"
            >
              <b id="arrayleft_1"></b>
            </div>
            <div
              className="col-2"
              style={{
                border: "solid gold",
                marginRight: "7%",
                display: "none",
                textAlign: "center",
              }}
              id="showTwo"
            >
              <b id="arraymiddle"></b>
            </div>
            <div
              id="showThree"
              style={{
                border: "solid gold",
                display: "none",
                textAlign: "center",
              }}
              className="col-2"
            >
              <b id="arrayright_1"></b>
            </div>
          </div>
        </div>{" "}
        <div style={{ padding: "1%" }}>
          <div className="row justify-content-center">
            <div
              className="col-1"
              style={{
                marginRight: "1%",
                textAlign: "center",
              }}
              id="showFour"
            >
              <b id="arrayleft_2"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
                textAlign: "center",
              }}
              id="showFive"
            >
              <b id="arraymiddle_1"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
                textAlign: "center",
              }}
              id="showSix"
            >
              <b id="arraymiddle_12"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
                textAlign: "center",
              }}
              id="showSeven"
            >
              <b id="arraymiddle_14"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
                textAlign: "center",
              }}
              id="showEight"
            >
              <b id="arraymiddle_2"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
                textAlign: "center",
              }}
              id="showNine"
            >
              <b id="arraymiddle_26"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
                textAlign: "center",
              }}
              id="showTen"
            >
              <b id="arraymiddle_28"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
                textAlign: "center",
              }}
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
