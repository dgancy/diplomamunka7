import React from "react";
import Button from "react-bootstrap/Button";

export default function BinaryTree() {
  var AllArray = [];
  //perfetto mefisto, márcsak otthon bekell vonalazni rendesen
  const Line = ({ x1, y1, x2, y2 }) => (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      style={{ stroke: "gold", strokeWidth: 2 }}
    />
  );

  const lines = [
    <Line key="line1" x1="480" y1="37" x2="390" y2="62" />, //1
    <Line key="line2" x1="660" y1="37" x2="750" y2="62" />, //2
    <Line key="line3" x1="570" y1="37" x2="570" y2="62" />, //3

    <Line key="line4" x1="250" y1="89" x2="200" y2="112" />, //4
    <Line key="line5" x1="305" y1="89" x2="305" y2="112" />, //5
    <Line key="line6" x1="350" y1="89" x2="400" y2="112" />, //6

    <Line key="line7" x1="525" y1="89" x2="500" y2="112" />, //7
    <Line key="line8" x1="600" y1="89" x2="625" y2="112" />, //8

    <Line key="line9" x1="800" y1="89" x2="750" y2="112" />, //9
    <Line key="line10" x1="840" y1="89" x2="840" y2="112" />, //10
    <Line key="line11" x1="900" y1="89" x2="950" y2="112" />, //11
  ];

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
          if (AllArray[i] > OpArrayEdge[0]) {
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
        console.log("beleptem ezzel : " + AllArray[i]);
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
        parseInt(AllArray[i]) > parseInt(OpArrayLeft_1[1]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayLeft_1[2]) &&
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
        parseInt(AllArray[i]) > parseInt(OpArrayMiddle[0]) &&
        OpArrayMiddle_2.length !== 0 &&
        OpArrayMiddle_2.length < childmax
      ) {
        OpArrayMiddle_2.push(AllArray[i]);

        OpArrayMiddle_2.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
        parseInt(AllArray[i]) > parseInt(OpArrayRight_1[0]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayRight_1[1]) &&
        OpArrayMiddle_26.length < childmax
      ) {
        OpArrayMiddle_26.push(AllArray[i]);

        OpArrayMiddle_26.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
        parseInt(AllArray[i]) > parseInt(OpArrayRight_1[1]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayRight_1[2]) &&
        OpArrayMiddle_28.length < childmax
      ) {
        OpArrayMiddle_28.push(AllArray[i]);

        OpArrayMiddle_28.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[0]) &&
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
    }
    if (OpArrayMiddle.length > 0) {
      document.getElementById("showTwo").style.display = "block";
    }
    if (AllArray.length >= 7) {
      if (OpArrayLeft_2.length > 0) {
        document.getElementById("showFour").style.border = "2px solid gold";
      }
      if (OpArrayMiddle_1.length > 0) {
        document.getElementById("showFive").style.border = "2px solid gold";
      }
      if (OpArrayMiddle_12.length > 0) {
        document.getElementById("showSix").style.border = "2px solid gold";
      }
      if (OpArrayMiddle_14.length > 0) {
        document.getElementById("showSeven").style.border = "2px solid gold";
      }
      if (OpArrayMiddle_2.length > 0) {
        document.getElementById("showEight").style.border = "2px solid gold";
      }
      if (OpArrayMiddle_26.length > 0) {
        document.getElementById("showNine").style.border = "2px solid gold";
      }
      if (OpArrayMiddle_28.length > 0) {
        document.getElementById("showTen").style.border = "2px solid gold";
      }
      if (OpArrayRight_2.length > 0) {
        document.getElementById("showEleven").style.border = "2px solid gold";
      }
    }

    console.log("Array hossz: " + AllArray.length);
    console.log("Edgemax: " + edgemax);
    console.log("Edge: " + OpArrayEdge);
    console.log("Left1: " + OpArrayLeft_1);
    console.log("Left2: " + OpArrayLeft_2);
    console.log("Right1: " + OpArrayRight_1);
    console.log("Right2: " + OpArrayRight_2);
    console.log("Middle: " + OpArrayMiddle);
    console.log("Middle1: " + OpArrayMiddle_1);
    console.log("Middle12: " + OpArrayMiddle_1);
    console.log("Middle14: " + OpArrayMiddle_1);
    console.log("Middle2: " + OpArrayMiddle_2);
    console.log("Middle26: " + OpArrayMiddle_2);
    console.log("Middle28: " + OpArrayMiddle_2);

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
        Bináris kereső-fa
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
                <small className="form-text text-white">(Input items)</small>
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
    top: "65%", /* Add this line */
    transform: "translateY(-50%)", /* Add this line */
    left: "50%",
    transform: "translateX(-50%)",
    paddingBottom: "25px",
    height: "350px",
    width: "1400px",
  }}
>
  {lines}
</svg>
<div
  style={{
    position: "absolute",
    top: "65%", /* Add this line */
    transform: "translateY(-50%)", /* Add this line */
    left: "50%",
    transform: "translateX(-50%)",
    paddingBottom: "25px",
    width: "1400px",
    height: "350px",
  }}
>
        <div style={{ padding: "1%" }}>
          <div className="row justify-content-center ">
            <div
              id="showZero"
              style={{ border: "solid gold", display: "none" }}
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
              }}
              id="showTwo"
            >
              <b id="arraymiddle"></b>
            </div>
            <div
              id="showThree"
              style={{ border: "solid gold", display: "none" }}
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
              }}
              id="showFour"
            >
              <b id="arrayleft_2"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
              }}
              id="showFive"
            >
              <b id="arraymiddle_1"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
              }}
              id="showSix"
            >
              <b id="arraymiddle_12"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
              }}
              id="showSeven"
            >
              <b id="arraymiddle_14"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
              }}
              id="showEight"
            >
              <b id="arraymiddle_2"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
              }}
              id="showNine"
            >
              <b id="arraymiddle_26"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
              }}
              id="showTen"
            >
              <b id="arraymiddle_28"></b>
            </div>
            <div
              className="col-1"
              style={{
                marginRight: "1%",
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
