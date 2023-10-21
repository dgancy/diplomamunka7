import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function RedBlackTree() {
  var array = [];

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
    <Line key="line1" x1="600" y1="20" x2="410" y2="70" />, //1
    <Line key="line2" x1="600" y1="20" x2="800" y2="70" />, //2

    <Line key="line3" x1="410" y1="70" x2="310" y2="120" />, //3
    <Line key="line4" x1="410" y1="70" x2="510" y2="120" />, //4

    <Line key="line5" x1="800" y1="80" x2="700" y2="130" />, //5
    <Line key="line6" x1="800" y1="80" x2="900" y2="130" />, //6

    <Line key="line7" x1="300" y1="120" x2="250" y2="180" />, //7
    <Line key="line8" x1="310" y1="120" x2="360" y2="180" />, //8

    <Line key="line9" x1="505" y1="120" x2="450" y2="180" />, //9
    <Line key="line10" x1="500" y1="120" x2="550" y2="180" />, //10

    <Line key="line11" x1="700" y1="130" x2="650" y2="180" />, //11
    <Line key="line12" x1="700" y1="130" x2="750" y2="180" />, //12

    <Line key="line13" x1="880" y1="130" x2="840" y2="180" />, //13
    <Line key="line14" x1="905" y1="130" x2="950" y2="180" />, //14

    <Line key="line15" x1="240" y1="180" x2="220" y2="220" />, //15
    <Line key="line16" x1="260" y1="180" x2="280" y2="220" />, //16

    <Line key="line17" x1="350" y1="180" x2="320" y2="220" />, //17
    <Line key="line18" x1="350" y1="180" x2="380" y2="220" />, //18

    <Line key="line19" x1="440" y1="180" x2="420" y2="220" />, //19
    <Line key="line20" x1="450" y1="180" x2="480" y2="220" />, //20

    <Line key="line21" x1="540" y1="180" x2="520" y2="220" />, //21
    <Line key="line22" x1="550" y1="180" x2="580" y2="220" />, //22

    <Line key="line23" x1="640" y1="180" x2="620" y2="220" />, //23
    <Line key="line24" x1="650" y1="180" x2="680" y2="220" />, //24

    <Line key="line25" x1="740" y1="180" x2="720" y2="220" />, //25
    <Line key="line26" x1="750" y1="180" x2="780" y2="220" />, //26

    <Line key="line27" x1="840" y1="180" x2="820" y2="220" />, //27
    <Line key="line28" x1="850" y1="180" x2="880" y2="220" />, //28

    <Line key="line29" x1="935" y1="180" x2="920" y2="220" />, //29
    <Line key="line30" x1="950" y1="180" x2="975" y2="220" />, //30
  ];

  const [renderedLines, setRenderedLines] = useState([]);

  function Rbtadd() {
    var a = document.getElementById("addnumber").value;
    console.log("Ez jön be: " + a);
    if (a.length < 1) {
      alert("Kérlek adj értéket a mezőbe");
    } else {
      array = a.split(",");
      var parsedarray = [];
      var colorHelperArray = [];
      var color = [];

      for (var i = 0; i < array.length; i++) {
        parsedarray.push(parseInt(array[i]));
      }

      var secondLine = [];
      var thirdLine = [];
      var fourthLine = [];
      var fifthLine = [];

      //var change=0;

      for (let i = 0; i < 2; i++) {
        secondLine.push("NIL");
        for (let j = 0; j < 2; j++) {
          thirdLine.push("NIL");
          for (let n = 0; n < 2; n++) {
            fourthLine.push("NIL");
            for (let m = 0; m < 2; m++) {
              fifthLine.push("NIL");
            }
          }
        }
      }

      var edge = parsedarray[0];

      for (let i = 0; i < parsedarray.length; i++) {
        if (parsedarray[i] < edge && secondLine[0] === "NIL") {
          secondLine[0] = parsedarray[i];
        } else if (parsedarray[i] > edge && secondLine[1] === "NIL") {
          secondLine[1] = parsedarray[i];
        }

        if (parsedarray[i] < edge) {
          if (
            secondLine[0] !== "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] < secondLine[0] &&
            thirdLine[0] === "NIL"
          ) {
            thirdLine[0] = parsedarray[i];
          } else if (
            secondLine[0] !== "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] > secondLine[0] &&
            thirdLine[1] === "NIL"
          ) {
            thirdLine[1] = parsedarray[i];
          }

          if (
            secondLine[0] !== "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] < secondLine[0] &&
            thirdLine[0] !== "NIL"
          ) {
            if (
              parsedarray[i] < thirdLine[0] &&
              fourthLine[0] === "NIL" &&
              thirdLine[1] !== "NIL"
            ) {
              fourthLine[0] = parsedarray[i];
            } else if (
              parsedarray[i] > thirdLine[0] &&
              parsedarray[i] < thirdLine[1] &&
              fourthLine[1] === "NIL" &&
              thirdLine[1] !== "NIL"
            ) {
              fourthLine[1] = parsedarray[i];
            }
          }

          if (
            secondLine[0] !== "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] > secondLine[0] &&
            parsedarray[i] < secondLine[1] &&
            thirdLine[1] !== "NIL"
          ) {
            if (
              parsedarray[i] < thirdLine[1] &&
              parsedarray[i] > thirdLine[0] &&
              fourthLine[2] === "NIL" &&
              thirdLine[0] !== "NIL" &&
              thirdLine[1] !== "NIL"
            ) {
              fourthLine[2] = parsedarray[i];
            } else if (
              parsedarray[i] > thirdLine[1] &&
              parsedarray[i] < thirdLine[2] &&
              fourthLine[3] === "NIL" &&
              thirdLine[2] !== "NIL" &&
              thirdLine[1] !== "NIL"
            ) {
              fourthLine[3] = parsedarray[i];
            }
          }

          if (
            //0
            fifthLine[0] !== "NIL" &&
            fifthLine[1] === "NIL" &&
            (parsedarray[i] > fifthLine[0] || parsedarray[i] < fifthLine[0]) &&
            parsedarray[i] < fourthLine[0]
          ) {
            console.log("finalchange in");
            fifthLine[1] = fourthLine[0];
            fourthLine[0] = fifthLine[0];
            fifthLine[0] = parsedarray[i];
          }
          if (
            //1
            fifthLine[0] === "NIL" &&
            fifthLine[1] !== "NIL" &&
            (parsedarray[i] > fifthLine[1] || parsedarray[i] < fifthLine[1]) &&
            parsedarray[i] > fourthLine[0] &&
            parsedarray[i] < thirdLine[0]
          ) {
            fifthLine[0] = fourthLine[0];
            fourthLine[0] = fifthLine[1];
            fifthLine[1] = parsedarray[i];
          }
          if (
            //2
            fifthLine[2] !== "NIL" &&
            fifthLine[3] === "NIL" &&
            (parsedarray[i] > fifthLine[2] || parsedarray[i] < fifthLine[2]) &&
            parsedarray[i] < fourthLine[1] &&
            parsedarray[i] > thirdLine[0] &&
            parsedarray[i] < secondLine[0]
          ) {
            fifthLine[3] = fourthLine[1];
            fourthLine[1] = fifthLine[2];
            fifthLine[2] = parsedarray[i];
          }
          if (
            //3
            fifthLine[2] === "NIL" &&
            fifthLine[3] !== "NIL" &&
            (parsedarray[i] > fifthLine[3] || parsedarray[i] < fifthLine[3]) &&
            parsedarray[i] > fourthLine[1] &&
            parsedarray[i] > thirdLine[0] &&
            parsedarray[i] < secondLine[0]
          ) {
            fifthLine[2] = fourthLine[1];
            fourthLine[1] = fifthLine[3];
            fifthLine[3] = parsedarray[i];
          }
          if (
            //4
            fifthLine[4] !== "NIL" &&
            fifthLine[5] === "NIL" &&
            (parsedarray[i] > fifthLine[4] || parsedarray[i] < fifthLine[4]) &&
            parsedarray[i] < fourthLine[2] &&
            parsedarray[i] < thirdLine[1] &&
            parsedarray[i] > secondLine[0] &&
            parsedarray[i] < edge
          ) {
            fifthLine[5] = fourthLine[2];
            fourthLine[2] = fifthLine[4];
            fifthLine[4] = parsedarray[i];
          }
          if (
            //5
            fifthLine[4] === "NIL" &&
            fifthLine[5] !== "NIL" &&
            (parsedarray[i] > fifthLine[5] || parsedarray[i] < fifthLine[5]) &&
            parsedarray[i] > fourthLine[2] &&
            parsedarray[i] < thirdLine[1] &&
            parsedarray[i] > secondLine[0] &&
            parsedarray[i] < edge
          ) {
            fifthLine[4] = fourthLine[2];
            fourthLine[2] = fifthLine[5];
            fifthLine[5] = parsedarray[i];
          }
          if (
            //6
            fifthLine[6] !== "NIL" &&
            fifthLine[7] === "NIL" &&
            (parsedarray[i] > fifthLine[6] || parsedarray[i] < fifthLine[6]) &&
            parsedarray[i] < fourthLine[3] &&
            parsedarray[i] > thirdLine[1] &&
            parsedarray[i] > secondLine[0] &&
            parsedarray[i] < edge
          ) {
            fifthLine[7] = fourthLine[3];
            fourthLine[3] = fifthLine[6];
            fifthLine[6] = parsedarray[i];
          }
          if (
            //7
            fifthLine[6] === "NIL" &&
            fifthLine[7] !== "NIL" &&
            (parsedarray[i] > fifthLine[7] || parsedarray[i] < fifthLine[7]) &&
            parsedarray[i] > fourthLine[3] &&
            parsedarray[i] > thirdLine[1] &&
            parsedarray[i] > secondLine[0] &&
            parsedarray[i] < edge
          ) {
            fifthLine[6] = fourthLine[3];
            fourthLine[3] = fifthLine[7];
            fifthLine[7] = parsedarray[i];
          }

          if (parsedarray[i] < secondLine[0] && secondLine[0] !== "NIL") {
            if (parsedarray[i] < thirdLine[0] && thirdLine[0] !== "NIL") {
              if (parsedarray[i] < fourthLine[0] && fourthLine[0] !== "NIL") {
                fifthLine[0] = parsedarray[i];
              }
              if (
                parsedarray[i] > fourthLine[0] &&
                fourthLine[0] !== "NIL" &&
                parsedarray[i] < fourthLine[1] &&
                fourthLine[1] !== "NIL"
              ) {
                fifthLine[1] = parsedarray[i];
              }
            }
            if (
              parsedarray[i] > thirdLine[0] &&
              thirdLine[0] !== "NIL" &&
              parsedarray[i] < thirdLine[1] &&
              thirdLine[1] !== "NIL"
            ) {
              if (parsedarray[i] < fourthLine[1] && fourthLine[1] !== "NIL") {
                fifthLine[2] = parsedarray[i];
              }
              if (
                parsedarray[i] > fourthLine[1] &&
                fourthLine[1] !== "NIL" &&
                parsedarray[i] < fourthLine[2] &&
                fourthLine[2] !== "NIL"
              ) {
                fifthLine[3] = parsedarray[i];
              }
            }
            if (
              parsedarray[i] > thirdLine[1] &&
              thirdLine[1] !== "NIL" &&
              parsedarray[i] < thirdLine[2] &&
              thirdLine[2] !== "NIL"
            ) {
              if (parsedarray[i] < fourthLine[1] && fourthLine[1] !== "NIL") {
                fifthLine[2] = parsedarray[i];
              }
              if (
                parsedarray[i] > fourthLine[1] &&
                fourthLine[1] !== "NIL" &&
                parsedarray[i] < fourthLine[2] &&
                fourthLine[2] !== "NIL"
              ) {
                fifthLine[3] = parsedarray[i];
              }
            }
          }
          if (
            parsedarray[i] > secondLine[0] &&
            secondLine[0] !== "NIL" &&
            parsedarray[i] < secondLine[1] &&
            secondLine[1] !== "NIL"
          ) {
            if (parsedarray[i] < thirdLine[1] && thirdLine[1] !== "NIL") {
              if (parsedarray[i] < fourthLine[2] && fourthLine[2] !== "NIL") {
                fifthLine[4] = parsedarray[i];
              }
              if (
                parsedarray[i] > fourthLine[2] &&
                fourthLine[2] !== "NIL" &&
                parsedarray[i] < fourthLine[3] &&
                fourthLine[3] !== "NIL"
              ) {
                fifthLine[5] = parsedarray[i];
              }
            }
            if (
              parsedarray[i] > thirdLine[1] &&
              thirdLine[1] !== "NIL" &&
              parsedarray[i] < thirdLine[2] &&
              thirdLine[2] !== "NIL"
            ) {
              if (parsedarray[i] < fourthLine[3] && fourthLine[3] !== "NIL") {
                fifthLine[6] = parsedarray[i];
              }
              if (
                parsedarray[i] > fourthLine[3] &&
                fourthLine[3] !== "NIL" &&
                parsedarray[i] < fourthLine[4] &&
                fourthLine[4] !== "NIL"
              ) {
                fifthLine[7] = parsedarray[i];
              }
            }
          }

          if (
            secondLine[0] === "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] < secondLine[0]
          ) {
            secondLine[1] = edge;
            edge = secondLine[0];
            secondLine[0] = parsedarray[i];
          } else if (
            secondLine[0] === "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] > secondLine[0]
          ) {
            secondLine[0] = edge;
            edge = parsedarray[i];
          }

          if (secondLine[0] !== "NIL") {
            if (thirdLine[0] !== "NIL" && thirdLine[1] === "NIL") {
              if (fourthLine[0] !== "NIL") {
                thirdLine[1] = secondLine[0];
                secondLine[0] = thirdLine[0];
                thirdLine[0] = fourthLine[0];
                fourthLine[0] = "NIL";
              }
              if (fourthLine[1] !== "NIL") {
                thirdLine[1] = secondLine[0];
                secondLine[0] = fourthLine[1];
                fourthLine[1] = "NIL";
              }
            }
            if (thirdLine[1] !== "NIL" && thirdLine[0] === "NIL") {
              if (fourthLine[2] !== "NIL") {
                thirdLine[0] = secondLine[0];
                secondLine[0] = fourthLine[2];
                fourthLine[2] = "NIL";
              }
              if (fourthLine[3] !== "NIL") {
                thirdLine[0] = secondLine[0];
                secondLine[0] = thirdLine[1];
                thirdLine[1] = fourthLine[3];
                fourthLine[3] = "NIL";
              }
            }
          }

          if (
            thirdLine[0] !== "NIL" &&
            fourthLine[0] !== "NIL" &&
            fourthLine[1] === "NIL" &&
            fifthLine[0] !== "NIL"
          ) {
            fourthLine[1] = thirdLine[0];
            thirdLine[0] = fourthLine[0];
            fourthLine[0] = fifthLine[0];
            fifthLine[0] = "NIL";
          }

          if (
            thirdLine[0] !== "NIL" &&
            fourthLine[0] !== "NIL" &&
            fourthLine[1] === "NIL" &&
            fifthLine[1] !== "NIL"
          ) {
            fourthLine[1] = thirdLine[0];
            thirdLine[0] = fifthLine[1];
            fifthLine[1] = "NIL";
          }

          if (
            thirdLine[0] !== "NIL" &&
            fourthLine[1] !== "NIL" &&
            fourthLine[0] === "NIL" &&
            fifthLine[2] !== "NIL"
          ) {
            fourthLine[0] = thirdLine[0];
            thirdLine[0] = fifthLine[2];
            fifthLine[2] = "NIL";
          }
          if (
            thirdLine[0] !== "NIL" &&
            fourthLine[1] !== "NIL" &&
            fourthLine[0] === "NIL" &&
            fifthLine[3] !== "NIL"
          ) {
            fourthLine[0] = thirdLine[0];
            thirdLine[0] = fourthLine[1];
            fourthLine[1] = fifthLine[3];
            fifthLine[3] = "NIL";
          }

          if (
            thirdLine[1] !== "NIL" &&
            fourthLine[2] !== "NIL" &&
            fourthLine[3] === "NIL" &&
            fifthLine[4] !== "NIL"
          ) {
            fourthLine[3] = thirdLine[1];
            thirdLine[1] = fourthLine[2];
            fourthLine[2] = fifthLine[4];
            fifthLine[4] = "NIL";
          }

          if (
            thirdLine[1] !== "NIL" &&
            fourthLine[2] !== "NIL" &&
            fourthLine[3] === "NIL" &&
            fifthLine[5] !== "NIL"
          ) {
            fourthLine[3] = thirdLine[1];
            thirdLine[1] = fifthLine[5];
            fifthLine[5] = "NIL";
          }

          if (
            thirdLine[1] !== "NIL" &&
            fourthLine[3] !== "NIL" &&
            fourthLine[2] === "NIL" &&
            fifthLine[6] !== "NIL"
          ) {
            fourthLine[2] = thirdLine[1];
            thirdLine[1] = fifthLine[6];
            fifthLine[6] = "NIL";
          }
          if (
            thirdLine[1] !== "NIL" &&
            fourthLine[3] !== "NIL" &&
            fourthLine[2] === "NIL" &&
            fifthLine[7] !== "NIL"
          ) {
            fourthLine[2] = thirdLine[1];
            thirdLine[1] = fourthLine[3];
            fourthLine[3] = fifthLine[7];
            fifthLine[7] = "NIL";
          }
        }

        if (parsedarray[i] > edge) {
          if (
            secondLine[0] !== "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] < secondLine[1] &&
            thirdLine[2] === "NIL"
          ) {
            thirdLine[2] = parsedarray[i];
          } else if (
            secondLine[0] !== "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] > secondLine[1] &&
            thirdLine[3] === "NIL"
          ) {
            thirdLine[3] = parsedarray[i];
          }
          if (parsedarray[i] < secondLine[1]) {
            if (parsedarray[i] < thirdLine[2] && fourthLine[4] === "NIL") {
              fourthLine[4] = parsedarray[i];
            }
            if (
              parsedarray[i] > thirdLine[2] &&
              parsedarray[i] < thirdLine[3] &&
              fourthLine[5] === "NIL"
            ) {
              fourthLine[5] = parsedarray[i];
            }
          }
          if (parsedarray[i] > secondLine[1]) {
            console.log("bemeno elem3: " + parsedarray[i]);
            if (
              parsedarray[i] < thirdLine[3] &&
              parsedarray[i] > thirdLine[2] &&
              fourthLine[6] === "NIL"
            ) {
              console.log("bemeno elem6: " + parsedarray[i]);
              fourthLine[6] = parsedarray[i];
            } else if (
              parsedarray[i] > thirdLine[3] &&
              fourthLine[7] === "NIL"
            ) {
              console.log("bemeno elem7: " + parsedarray[i]);
              fourthLine[7] = parsedarray[i];
            }
          }

          if (
            //8
            fifthLine[8] !== "NIL" &&
            fifthLine[9] === "NIL" &&
            (parsedarray[i] > fifthLine[8] || parsedarray[i] < fifthLine[8]) &&
            parsedarray[i] < fourthLine[4] &&
            parsedarray[i] > edge
          ) {
            fifthLine[9] = fourthLine[4];
            fourthLine[4] = fifthLine[8];
            fifthLine[8] = parsedarray[i];
          }
          if (
            //9
            fifthLine[8] === "NIL" &&
            fifthLine[9] !== "NIL" &&
            (parsedarray[i] > fifthLine[9] || parsedarray[i] < fifthLine[9]) &&
            parsedarray[i] > fourthLine[4] &&
            parsedarray[i] < thirdLine[2] &&
            parsedarray[i] > edge
          ) {
            fifthLine[8] = fourthLine[4];
            fourthLine[4] = fifthLine[9];
            fifthLine[9] = parsedarray[i];
          }
          if (
            //10
            fifthLine[10] !== "NIL" &&
            fifthLine[11] === "NIL" &&
            (parsedarray[i] > fifthLine[10] ||
              parsedarray[i] < fifthLine[10]) &&
            parsedarray[i] < fourthLine[5] &&
            parsedarray[i] > thirdLine[2] &&
            parsedarray[i] < secondLine[1] &&
            parsedarray[i] > edge
          ) {
            fifthLine[11] = fourthLine[5];
            fourthLine[5] = fifthLine[10];
            fifthLine[10] = parsedarray[i];
          }
          if (
            //11
            fifthLine[10] === "NIL" &&
            fifthLine[11] !== "NIL" &&
            (parsedarray[i] > fifthLine[11] ||
              parsedarray[i] < fifthLine[11]) &&
            parsedarray[i] > fourthLine[5] &&
            parsedarray[i] > thirdLine[2] &&
            parsedarray[i] < secondLine[1] &&
            parsedarray[i] > edge
          ) {
            fifthLine[10] = fourthLine[5];
            fourthLine[5] = fifthLine[11];
            fifthLine[11] = parsedarray[i];
          }
          if (
            //12
            fifthLine[12] !== "NIL" &&
            fifthLine[13] === "NIL" &&
            (parsedarray[i] > fifthLine[12] ||
              parsedarray[i] < fifthLine[12]) &&
            parsedarray[i] < fourthLine[6] &&
            parsedarray[i] < thirdLine[3] &&
            parsedarray[i] > secondLine[1] &&
            parsedarray[i] > edge
          ) {
            fifthLine[13] = fourthLine[6];
            fourthLine[6] = fifthLine[12];
            fifthLine[12] = parsedarray[i];
          }
          if (
            //13
            fifthLine[12] === "NIL" &&
            fifthLine[13] !== "NIL" &&
            (parsedarray[i] > fifthLine[13] ||
              parsedarray[i] < fifthLine[13]) &&
            parsedarray[i] > fourthLine[6] &&
            parsedarray[i] < thirdLine[3] &&
            parsedarray[i] > secondLine[0] &&
            parsedarray[i] > edge
          ) {
            fifthLine[12] = fourthLine[6];
            fourthLine[6] = fifthLine[13];
            fifthLine[13] = parsedarray[i];
          }
          if (
            //14
            fifthLine[14] !== "NIL" &&
            fifthLine[15] === "NIL" &&
            (parsedarray[i] > fifthLine[14] ||
              parsedarray[i] < fifthLine[14]) &&
            parsedarray[i] < fourthLine[7] &&
            parsedarray[i] > thirdLine[3] &&
            parsedarray[i] > secondLine[1] &&
            parsedarray[i] > edge
          ) {
            fifthLine[15] = fourthLine[7];
            fourthLine[7] = fifthLine[14];
            fifthLine[14] = parsedarray[i];
          }
          if (
            //15
            fifthLine[14] === "NIL" &&
            fifthLine[15] !== "NIL" &&
            (parsedarray[i] > fifthLine[15] ||
              parsedarray[i] < fifthLine[15]) &&
            parsedarray[i] > fourthLine[7] &&
            parsedarray[i] > thirdLine[3] &&
            parsedarray[i] > secondLine[1] &&
            parsedarray[i] > edge
          ) {
            fifthLine[14] = fourthLine[7];
            fourthLine[7] = fifthLine[15];
            fifthLine[15] = parsedarray[i];
          }

          if (parsedarray[i] < secondLine[1] && secondLine[1] !== "NIL") {
            if (parsedarray[i] < thirdLine[2] && thirdLine[2] !== "NIL") {
              if (parsedarray[i] < fourthLine[4] && fourthLine[4] !== "NIL") {
                fifthLine[8] = parsedarray[i];
              }
              if (
                parsedarray[i] > fourthLine[4] &&
                fourthLine[4] !== "NIL" &&
                parsedarray[i] < fourthLine[5] &&
                fourthLine[5] !== "NIL"
              ) {
                fifthLine[9] = parsedarray[i];
              }
            }
            if (
              parsedarray[i] > thirdLine[2] &&
              thirdLine[2] !== "NIL" &&
              parsedarray[i] < thirdLine[3] &&
              thirdLine[3] !== "NIL"
            ) {
              if (parsedarray[i] < fourthLine[5] && fourthLine[5] !== "NIL") {
                fifthLine[10] = parsedarray[i];
              }
              if (
                parsedarray[i] > fourthLine[5] &&
                fourthLine[5] !== "NIL" &&
                parsedarray[i] < fourthLine[6] &&
                fourthLine[6] !== "NIL"
              ) {
                fifthLine[11] = parsedarray[i];
              }
            }
            if (
              parsedarray[i] > secondLine[1] &&
              secondLine[1] !== "NIL" &&
              parsedarray[i] > thirdLine[2] &&
              thirdLine[2] !== "NIL" &&
              parsedarray[i] < thirdLine[3] &&
              thirdLine[3] !== "NIL"
            ) {
              if (parsedarray[i] < fourthLine[6] && fourthLine[6] !== "NIL") {
                fifthLine[12] = parsedarray[i];
              }
              if (
                parsedarray[i] > fourthLine[6] &&
                fourthLine[6] !== "NIL" &&
                parsedarray[i] < fourthLine[7] &&
                fourthLine[7] !== "NIL"
              ) {
                fifthLine[13] = parsedarray[i];
              }
            }
            if (parsedarray[i] < secondLine[1] && secondLine[1] !== "NIL") {
              console.log("hiba-1: " + parsedarray[i]);
              if (parsedarray[i] < thirdLine[2] && thirdLine[2] !== "NIL") {
                if (parsedarray[i] < fourthLine[4] && fourthLine[4] !== "NIL") {
                  fifthLine[8] = parsedarray[i];
                }
                if (
                  parsedarray[i] > fourthLine[4] &&
                  fourthLine[4] !== "NIL" &&
                  parsedarray[i] < fourthLine[5] &&
                  fourthLine[5] !== "NIL"
                ) {
                  fifthLine[9] = parsedarray[i];
                }
              }
              if (
                parsedarray[i] > thirdLine[2] &&
                thirdLine[2] !== "NIL" &&
                parsedarray[i] < thirdLine[3] &&
                thirdLine[3] !== "NIL"
              ) {
                if (parsedarray[i] < fourthLine[5] && fourthLine[5] !== "NIL") {
                  fifthLine[10] = parsedarray[i];
                }
                if (
                  parsedarray[i] > fourthLine[5] &&
                  fourthLine[5] !== "NIL" &&
                  parsedarray[i] < fourthLine[6] &&
                  fourthLine[6] !== "NIL"
                ) {
                  fifthLine[11] = parsedarray[i];
                }
              }
            }
          }
          if (parsedarray[i] > secondLine[1]) {
            console.log("hiba0: " + parsedarray[i]);
            if (parsedarray[i] < thirdLine[3] && thirdLine[3] !== "NIL") {
              console.log("belep a hibas reszhez: " + parsedarray[i]);
              if (
                parsedarray[i] > thirdLine[2] &&
                thirdLine[2] !== "NIL" &&
                parsedarray[i] < thirdLine[3] &&
                thirdLine[3] !== "NIL"
              ) {
                if (parsedarray[i] < fourthLine[6] && fourthLine[6] !== "NIL") {
                  fifthLine[12] = parsedarray[i];
                }
                if (
                  parsedarray[i] > fourthLine[6] &&
                  fourthLine[6] !== "NIL" &&
                  parsedarray[i] < fourthLine[7] &&
                  fourthLine[7] !== "NIL"
                ) {
                  fifthLine[13] = parsedarray[i];
                }
              }
            }
            if (parsedarray[i] > thirdLine[3] && thirdLine[3] !== "NIL") {
              console.log("hiba");
              if (parsedarray[i] > thirdLine[3] && thirdLine[3] !== "NIL") {
                console.log("hiba1");
                if (parsedarray[i] < fourthLine[7] && fourthLine[7] !== "NIL") {
                  console.log("hiba2");
                  fifthLine[14] = parsedarray[i];
                }
                if (parsedarray[i] > fourthLine[7] && fourthLine[7] !== "NIL") {
                  fifthLine[15] = parsedarray[i];
                }
              }
            }
          }

          if (
            secondLine[0] === "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] < secondLine[1] &&
            parsedarray[i] > edge
          ) {
            secondLine[0] = edge;
            edge = parsedarray[i];
          } else if (
            secondLine[0] === "NIL" &&
            secondLine[1] !== "NIL" &&
            parsedarray[i] > secondLine[1] &&
            parsedarray[i] > edge
          ) {
            secondLine[0] = edge;
            edge = secondLine[1];
            secondLine[1] = parsedarray[i];
          }

          if (secondLine[1] !== "NIL") {
            if (thirdLine[2] !== "NIL" && thirdLine[3] === "NIL") {
              if (fourthLine[4] !== "NIL") {
                thirdLine[3] = secondLine[1];
                secondLine[1] = thirdLine[2];
                thirdLine[2] = fourthLine[4];
                fourthLine[4] = "NIL";
              }
              if (fourthLine[5] !== "NIL") {
                thirdLine[3] = secondLine[1];
                secondLine[1] = fourthLine[5];
                fourthLine[5] = "NIL";
              }
            }
            if (thirdLine[3] !== "NIL" && thirdLine[2] === "NIL") {
              if (fourthLine[6] !== "NIL") {
                thirdLine[2] = secondLine[1];
                secondLine[1] = fourthLine[6];
                fourthLine[6] = "NIL";
              }
              if (fourthLine[7] !== "NIL") {
                thirdLine[2] = secondLine[1];
                secondLine[1] = thirdLine[3];
                thirdLine[3] = fourthLine[7];
                fourthLine[7] = "NIL";
              }
            }
          }

          if (
            thirdLine[2] !== "NIL" &&
            fourthLine[4] !== "NIL" &&
            fourthLine[5] === "NIL" &&
            fifthLine[8] !== "NIL"
          ) {
            fourthLine[5] = thirdLine[2];
            thirdLine[2] = fourthLine[4];
            fourthLine[4] = fifthLine[8];
            fifthLine[8] = "NIL";
          }

          if (
            thirdLine[2] !== "NIL" &&
            fourthLine[4] !== "NIL" &&
            fourthLine[5] === "NIL" &&
            fifthLine[9] !== "NIL"
          ) {
            fourthLine[5] = thirdLine[2];
            thirdLine[2] = fifthLine[9];
            fifthLine[9] = "NIL";
          }

          if (
            thirdLine[2] !== "NIL" &&
            fourthLine[5] !== "NIL" &&
            fourthLine[4] === "NIL" &&
            fifthLine[10] !== "NIL"
          ) {
            fourthLine[4] = thirdLine[2];
            thirdLine[2] = fifthLine[10];
            fifthLine[10] = "NIL";
          }
          if (
            thirdLine[2] !== "NIL" &&
            fourthLine[5] !== "NIL" &&
            fourthLine[4] === "NIL" &&
            fifthLine[11] !== "NIL"
          ) {
            fourthLine[4] = thirdLine[2];
            thirdLine[2] = fourthLine[5];
            fourthLine[5] = fifthLine[11];
            fifthLine[11] = "NIL";
          }

          if (
            thirdLine[3] !== "NIL" &&
            fourthLine[6] !== "NIL" &&
            fourthLine[7] === "NIL" &&
            fifthLine[12] !== "NIL"
          ) {
            fourthLine[7] = thirdLine[3];
            thirdLine[3] = fourthLine[6];
            fourthLine[6] = fifthLine[12];
            fifthLine[12] = "NIL";
          }

          if (
            thirdLine[3] !== "NIL" &&
            fourthLine[6] !== "NIL" &&
            fourthLine[7] === "NIL" &&
            fifthLine[13] !== "NIL"
          ) {
            fourthLine[7] = thirdLine[3];
            thirdLine[3] = fifthLine[13];
            fifthLine[13] = "NIL";
          }

          if (
            thirdLine[3] !== "NIL" &&
            fourthLine[7] !== "NIL" &&
            fourthLine[6] === "NIL" &&
            fifthLine[14] !== "NIL"
          ) {
            fourthLine[6] = thirdLine[3];
            thirdLine[3] = fifthLine[14];
            fifthLine[14] = "NIL";
          }
          if (
            thirdLine[3] !== "NIL" &&
            fourthLine[7] !== "NIL" &&
            fourthLine[6] === "NIL" &&
            fifthLine[15] !== "NIL"
          ) {
            fourthLine[6] = thirdLine[3];
            thirdLine[3] = fourthLine[7];
            fourthLine[7] = fifthLine[15];
            fifthLine[15] = "NIL";
          }
        }
      }

      function containsNumber(str) {
        return /[0-9]/.test(str);
      }

      var state = 0;

      if (!containsNumber(secondLine) && containsNumber(edge)) {
        colorHelperArray.push(edge);
        colorHelperArray.push("NIL");
        colorHelperArray.push("NIL");
        state = 1;
      }
      if (!containsNumber(thirdLine) && containsNumber(secondLine)) {
        colorHelperArray = colorHelperArray.concat(edge, secondLine, thirdLine);
        state = 3;
      }
      if (!containsNumber(fourthLine) && containsNumber(thirdLine)) {
        colorHelperArray = colorHelperArray.concat(
          edge,
          secondLine,
          thirdLine,
          fourthLine
        );
        state = 4;
      }
      if (containsNumber(fourthLine) && containsNumber(thirdLine)) {
        colorHelperArray = colorHelperArray.concat(
          edge,
          secondLine,
          thirdLine,
          fourthLine,
          fifthLine
        );
        state = 5;
      }
      console.log(colorHelperArray);

      color.push("0");

      for (let i = 1; i < colorHelperArray.length; i++) {
        if (colorHelperArray[i] !== "NIL") {
          color[i] = "1";
        } else {
          color[i] = "0";
        }
      }

      if (state === 3) {
        if ((color[3] === "1" || color[4] === "1") && color[1] === "1") {
          color[1] = "0";
        }
        if ((color[5] === "1" || color[6] === "1") && color[2] === "1") {
          color[2] = "0";
        }
      }
      if (state === 4) {
        if ((color[3] === "1" || color[4] === "1") && color[1] === "1") {
          color[1] = "0";
        }
        if ((color[5] === "1" || color[6] === "1") && color[2] === "1") {
          color[2] = "0";
        }
        if ((color[7] === "1" || color[8] === "1") && color[3] === "1") {
          color[3] = "0";
        }
        if ((color[9] === "1" || color[10] === "1") && color[4] === "1") {
          color[4] = "0";
        }
        if ((color[11] === "1" || color[12] === "1") && color[5] === "1") {
          color[5] = "0";
        }
        if ((color[13] === "1" || color[14] === "1") && color[6] === "1") {
          color[6] = "0";
        }
      }
      if (state === 5) {
        if ((color[3] === "1" || color[4] === "1") && color[1] === "1") {
          color[1] = "0";
        }
        if ((color[5] === "1" || color[6] === "1") && color[2] === "1") {
          color[2] = "0";
        }
        if ((color[7] === "1" || color[8] === "1") && color[3] === "1") {
          color[3] = "0";
        }
        if ((color[9] === "1" || color[10] === "1") && color[4] === "1") {
          color[4] = "0";
        }
        if ((color[11] === "1" || color[12] === "1") && color[5] === "1") {
          color[5] = "0";
        }
        if ((color[13] === "1" || color[14] === "1") && color[6] === "1") {
          color[6] = "0";
        }
        if ((color[15] === "1" || color[16] === "1") && color[7] === "1") {
          color[7] = "0";
        }
        if ((color[17] === "1" || color[18] === "1") && color[8] === "1") {
          color[8] = "0";
        }
        if ((color[19] === "1" || color[20] === "1") && color[9] === "1") {
          color[9] = "0";
        }
        if ((color[21] === "1" || color[22] === "1") && color[10] === "1") {
          color[10] = "0";
        }
        if ((color[23] === "1" || color[24] === "1") && color[11] === "1") {
          color[11] = "0";
        }
        if ((color[25] === "1" || color[26] === "1") && color[12] === "1") {
          color[12] = "0";
        }
        if ((color[27] === "1" || color[28] === "1") && color[13] === "1") {
          color[13] = "0";
        }
        if ((color[29] === "1" || color[30] === "1") && color[14] === "1") {
          color[14] = "0";
        }
      }

      for (var i = 0; i < secondLine.length; i++) {
        if (secondLine[i] === "NIL") {
          color[i * 2 + 3] = 7;
          color[i * 2 + 4] = 7;
        }
      }

      for (var i = 0; i < thirdLine.length; i++) {
        if (thirdLine[i] === "NIL") {
          color[i * 2 + 7] = 7;
          color[i * 2 + 8] = 7;
        }
      }

      for (var i = 0; i < fourthLine.length; i++) {
        if (fourthLine[i] === "NIL") {
          color[i * 2 + 15] = 7;
          color[i * 2 + 16] = 7;
        }
      }

      console.log("state: " + state);
      for (var i = 0; i < colorHelperArray.length; i++) {
        //43,23,76,98,32,65,10,2,12,34,33,89,66,1
        if (edge !== "") {
          var element = document.getElementById("element_" + i);
          var breaks = document.getElementById("breaks_" + i);

          if (!element) {
            element = document.createElement("b");
            element.id = "element_" + i;
          }

          if (!breaks) {
            breaks = document.createElement("br");
            breaks.id = "breaks_" + i;
          }

          if (colorHelperArray[i] === "NIL" || color[i] === "0") {
            element.className = "tree-black";
          } else element.className = "tree-red";

          if (color[i] === 7) {
            element.className = "tree-none";
          }

          element.innerHTML = colorHelperArray[i];
          if (i === 1) {
            element.classList.add("horizontal-space");
          }
          if (i > 2 && i < 6) {
            element.classList.add("horizontal-space-second-line");
          }
          if (i > 6 && i < 15) {
            element.classList.add("horizontal-space-third-line");
          }
          if (i > 14) {
            element.classList.add("horizontal-space-fourth-line");
          }
          if (i === 7) {
            element.classList.add("horizontal-space-third-line-fix");
          }

          if (
            i === 0 ||
            i === 2 ||
            i === 6 ||
            i === 14 ||
            i === colorHelperArray.length
          ) {
            document.getElementById("tree").appendChild(element);
            document.getElementById("tree").appendChild(breaks);
          } else document.getElementById("tree").appendChild(element);
        }
      }
      const newLines = [];
      for (let i = 1; i < color.length; i++) {
        if (color[i] !== 7) {
          console.log("in");
          newLines.push(...lines.filter((line) => line.key === "line" + i));
          setRenderedLines(newLines);
        }
      }

      console.log(color); //0 gray 1 red
      console.log("Edge: " + edge);
      console.log("SecondLine: " + secondLine);
      console.log("ThirdLine: " + thirdLine);
      console.log("FourthLine: " + fourthLine);
      console.log("FifthLine: " + fifthLine);
    }
  }

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Piros-fekete fa
      </h1>
      <div className="form-group">
        <div className="container">
          <div className="row justify-content-center text-center">
            {" "}
            <div className="col-4 ">
              <b style={{ color: "white" }}>Elem hozzáadás :</b>
              <input type="text" className="form-control" id="addnumber" />{" "}
              <small className="form-text text-white">
                (pl.: 1,12,43,23,13)
              </small>
              <br />
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <Button variant="outline-warning col-1" onClick={Rbtadd}>
              Kidolgoz
            </Button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <br />
        <svg
          id="tree-line"
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "400px",
            width: "1200px",
          }}
        >
          {renderedLines}
        </svg>
        <b
          id="tree"
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: "400px",
            width: "1200px",
          }}
        ></b>
      </div>
    </form>
  );
}
//vonalakat rendbe rakni + kezellni megjelenését
