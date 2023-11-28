import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BinaryTreeTest() {
  const navigate = useNavigate();

  var mistakes_temporary;
  var AllArray = [];
  var hossz;
  var fokszam = 2;
  function Generate() {
    hossz = Math.floor(Math.random() * 3) + 9;

    for (let i = 0; i < hossz; i++) {
      AllArray.push(Math.floor(Math.random() * 100));
    }
    console.log("hossz: " + hossz);
    console.log("AllArray: " + AllArray);

    return `Adott az alábbi B-fa, amelynek minimális fokszáma ${fokszam}. A következő számsoron alkalmazza a tanultakat. [ ${AllArray} ].`;
  }

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
    <Line key="line1" x1="580" y1="37" x2="450" y2="75" />, //1
    <Line key="line2" x1="820" y1="37" x2="950" y2="75" />, //2
    <Line key="line3" x1="700" y1="37" x2="700" y2="75" />, //3

    <Line key="line4" x1="340" y1="100" x2="290" y2="140" />, //4
    <Line key="line5" x1="410" y1="100" x2="410" y2="140" />, //5
    <Line key="line6" x1="490" y1="100" x2="540" y2="140" />, //6

    <Line key="line7" x1="680" y1="100" x2="620" y2="140" />, //7
    <Line key="line8" x1="730" y1="100" x2="780" y2="140" />, //8

    <Line key="line9" x1="940" y1="100" x2="880" y2="140" />, //9
    <Line key="line10" x1="990" y1="100" x2="990" y2="140" />, //10
    <Line key="line11" x1="1050" y1="100" x2="1100" y2="140" />, //11
  ];

  function Check() {
    console.log("array-check: " + AllArray); //ha nem empty

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
          if (AllArray[i] > OpArrayEdge[OpArrayEdge.length - 1]) {
            console.log("belep:" + AllArray[i]);
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
        parseInt(AllArray[i]) >
          parseInt(OpArrayLeft_1[OpArrayLeft_1.length - 1]) &&
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
        parseInt(AllArray[i]) >
          parseInt(OpArrayMiddle[OpArrayMiddle.length - 1]) &&
        OpArrayMiddle_2.length !== 0 &&
        OpArrayMiddle_2.length < childmax
      ) {
        OpArrayMiddle_2.push(AllArray[i]);

        OpArrayMiddle_2.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[OpArrayEdge.length - 1]) &&
        parseInt(AllArray[i]) < parseInt(OpArrayRight_1[0]) &&
        OpArrayMiddle_26.length < childmax
      ) {
        OpArrayMiddle_26.push(AllArray[i]);

        OpArrayMiddle_26.sort(function (a, b) {
          return a - b;
        });
      }
      if (
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[OpArrayEdge.length - 1]) &&
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
        parseInt(AllArray[i]) > parseInt(OpArrayEdge[OpArrayEdge.length - 1]) &&
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

    var points = 0;
    if (userEdgeArray.length > 0) {
      for (let i = 0; i < userEdgeArray.length; i++) {
        const userEdgeInt = parseInt(userEdgeArray[i]);

        if (OpArrayEdge.includes(userEdgeInt)) {
          points++;
        }
      }
    }
    if (userLeftArrayOne.length > 0) {
      for (let i = 0; i < userLeftArrayOne.length; i++) {
        const userLeftArrayInt = parseInt(userLeftArrayOne[i]);

        if (OpArrayLeft_1.includes(userLeftArrayInt)) {
          points++;
        }
      }
    }
    if (userMiddleArray.length > 0) {
      for (let i = 0; i < userMiddleArray.length; i++) {
        const userMiddleInt = parseInt(userMiddleArray[i]);

        if (OpArrayMiddle.includes(userMiddleInt)) {
          points++;
        }
      }
    }
    if (userRightArrayOne.length > 0) {
      for (let i = 0; i < userRightArrayOne.length; i++) {
        const userRightArrayInt = parseInt(userRightArrayOne[i]);

        if (OpArrayRight_1.includes(userRightArrayInt)) {
          points++;
        }
      }
    }
    if (userLeftArrayTwoZero.length > 0) {
      for (let i = 0; i < userLeftArrayTwoZero.length; i++) {
        const userLeftArrayTwoZeroInt = parseInt(userLeftArrayTwoZero[i]);

        if (OpArrayLeft_2.includes(userLeftArrayTwoZeroInt)) {
          points++;
        }
      }
    }
    if (userLeftArrayTwoOne.length > 0) {
      for (let i = 0; i < userLeftArrayTwoOne.length; i++) {
        const userLeftArrayTwoOneInt = parseInt(userLeftArrayTwoOne[i]);

        if (OpArrayMiddle_1.includes(userLeftArrayTwoOneInt)) {
          points++;
        }
      }
    }
    if (userLeftArrayTwoTwo.length > 0) {
      for (let i = 0; i < userLeftArrayTwoTwo.length; i++) {
        const userLeftArrayTwoTwoInt = parseInt(userLeftArrayTwoTwo[i]);

        if (OpArrayMiddle_12.includes(userLeftArrayTwoTwoInt)) {
          points++;
        }
      }
    }
    if (userMiddleArrayTwoZero.length > 0) {
      for (let i = 0; i < userMiddleArrayTwoZero.length; i++) {
        const userMiddleArrayTwoZeroInt = parseInt(userMiddleArrayTwoZero[i]);
        if (OpArrayMiddle_14.includes(userMiddleArrayTwoZeroInt)) {
          points++;
        }
      }
    }
    if (userMiddleArrayTwoOne.length > 0) {
      for (let i = 0; i < userMiddleArrayTwoOne.length; i++) {
        const userMiddleArrayTwoOneInt = parseInt(userMiddleArrayTwoOne[i]);

        if (OpArrayMiddle_2.includes(userMiddleArrayTwoOneInt)) {
          points++;
        }
      }
    }
    if (userRightArrayTwoZero.length > 0) {
      for (let i = 0; i < userRightArrayTwoZero.length; i++) {
        const userRightArrayTwoZeroInt = parseInt(userRightArrayTwoZero[i]);

        if (OpArrayMiddle_26.includes(userRightArrayTwoZeroInt)) {
          points++;
        }
      }
    }
    if (userRightArrayTwoOne.length > 0) {
      for (let i = 0; i < userRightArrayTwoOne.length; i++) {
        const userRightArrayTwoOneInt = parseInt(userRightArrayTwoOne[i]);
        if (OpArrayMiddle_28.includes(userRightArrayTwoOneInt)) {
          points++;
        }
      }
    }
    if (userRightArrayTwoTwo.length > 0) {
      for (let i = 0; i < userRightArrayTwoTwo.length; i++) {
        const userRightArrayTwoTwoInt = parseInt(userRightArrayTwoTwo[i]);
        if (OpArrayRight_2.includes(userRightArrayTwoTwoInt)) {
          points++;
        }
      }
    }
    console.log("pontok szama: " + points);
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

    if (parseInt(points)< 2) {
      mistakes_temporary = 3000;
    } else if (parseInt(points)>= 2 && parseInt(points)< 4) {
      mistakes_temporary = 3001;
    } else if (parseInt(points)>= 4 && parseInt(points)< 8) {
      mistakes_temporary = 3002;
    } else if (parseInt(points)>= 8 && parseInt(points)< parseInt(hossz)) {
      mistakes_temporary = 3003;
    }
    console.log(mistakes_temporary);

    localStorage.setItem("mistakesToDbBfa", JSON.stringify(mistakes_temporary));
    //átadom mindkettő mo-t és a chatbot a kettőt megmutatja és összehasonlitattja a userrel. pl: edge:[][]

    var solvedTask = [];
    var userResult = [];

    solvedTask.push(
      OpArrayEdge,
      OpArrayLeft_1,
      OpArrayMiddle,
      OpArrayRight_1,
      OpArrayLeft_2,
      OpArrayMiddle_1,
      OpArrayMiddle_12,
      OpArrayMiddle_14,
      OpArrayMiddle_2,
      OpArrayMiddle_26,
      OpArrayMiddle_28,
      OpArrayRight_2
    );
    userResult.push(
      userEdgeArray,
      userLeftArrayOne,
      userMiddleArray,
      userRightArrayOne,
      userLeftArrayTwoZero,
      userLeftArrayTwoOne,
      userLeftArrayTwoTwo,
      userMiddleArrayTwoZero,
      userMiddleArrayTwoOne,
      userRightArrayTwoZero,
      userRightArrayTwoOne,
      userRightArrayTwoTwo
    );

    localStorage.setItem(
      "mistakesToDbBfaFeladatMo",
      JSON.stringify(solvedTask)
    );

    localStorage.setItem(
      "mistakesToDbBfaFeladatUserMo",
      JSON.stringify(userResult)
    );

    navigate("/hash-table-test");
  }

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <div className="form-group" style={{ padding: "15px" }}>
        <div style={{ color: "white", textAlign: "center", padding: "10px" }}>
          {" "}
          {Generate()}
        </div>
        <b
          style={{ color: "white", padding: "15px" }}
          className="row justify-content-center"
          id="question"
        ></b>
        <svg
          id="tree-line"
          style={{
            position: "absolute",
            top: "35%",
            transform: "translateY(-50%)",
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
            top: "35%",
            transform: "translateY(-50%)",
            left: "50%",
            transform: "translateX(-50%)",
            paddingBottom: "25px",
            width: "1400px",
            height: "350px",
          }}
        >
          <div
            className="row justify-content-center"
            style={{ paddingBottom: "15px" }}
          >
            <div className="col-3">
              <input id="inp0" type="text" className="form-control"></input>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ padding: "15px" }}
          >
            <div className="col-2">
              {" "}
              <input id="inp1" type="text" className="form-control"></input>
            </div>
            <div
              className="col-2"
              style={{ marginRight: "4%", marginLeft: "4%" }}
            >
              {" "}
              <input id="inp2" type="text" className="form-control"></input>
            </div>
            <div className="col-2">
              {" "}
              <input id="inp3" type="text" className="form-control"></input>
            </div>
          </div>
          <div
            className="row justify-content-center"
            style={{ padding: "15px" }}
          >
            <div className="col-1">
              {" "}
              <input id="inp4" type="text" className="form-control"></input>
            </div>
            <div className="col-1">
              {" "}
              <input id="inp5" type="text" className="form-control"></input>
            </div>
            <div className="col-1">
              {" "}
              <input id="inp6" type="text" className="form-control"></input>
            </div>
            <div className="col-1">
              {" "}
              <input id="inp7" type="text" className="form-control"></input>
            </div>
            <div className="col-1">
              {" "}
              <input id="inp8" type="text" className="form-control"></input>
            </div>
            <div className="col-1">
              {" "}
              <input id="inp9" type="text" className="form-control"></input>
            </div>
            <div className="col-1">
              {" "}
              <input id="inp10" type="text" className="form-control"></input>
            </div>
            <div className="col-1">
              {" "}
              <input id="inp11" type="text" className="form-control"></input>
            </div>
          </div>
        </div>

        <div className="row justify-content-center text-center">
          <div
            style={{
              position: "absolute",
              top: "70%",
              transform: "translateY(-50%)",
            }}
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
