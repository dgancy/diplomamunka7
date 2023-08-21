import React from "react";
import { Button } from "react-bootstrap";

export default function RedBlackTree() {
  var array = [];

  function Rbtadd() {
    var a = document.getElementById("addnumber").value;
    array = a.split(",");

    var parsedarray = [];
    var color = [];

    for (var i = 0; i < array.length; i++) {
      parsedarray.push(parseInt(array[i]));
      color.push("1"); //0 gray 1 red
    }
    color[0] = 0;

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

          /*if (parsedarray[i] < thirdLine[0] && thirdLine[1] === "NIL") {
            thirdLine[1] = secondLine[0];
            secondLine[0] = thirdLine[0];
            thirdLine[0] = parsedarray[i];
          }
          if (
            parsedarray[i] > thirdLine[0] &&
            parsedarray[i] < thirdLine[1] &&
            thirdLine[1] === "NIL"
          ) {
            thirdLine[0] = secondLine[0];
            secondLine[0] = thirdLine[1];
            thirdLine[1] = parsedarray[i];
          }*/
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

          /*if (parsedarray[i] < thirdLine[1] && thirdLine[0] === "NIL") {
            thirdLine[0] = secondLine[0];
            secondLine[0] = thirdLine[2];
            thirdLine[2] = parsedarray[i];
          }
          if (
            parsedarray[i] > thirdLine[1] &&
            parsedarray[i] < secondLine[1] &&
            thirdLine[0] === "NIL"
          ) {
            thirdLine[0] = secondLine[0];
            secondLine[0] = thirdLine[3];
            thirdLine[3] = parsedarray[i];
          }*/
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
          /*if (
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
          }*/
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
          if (
            parsedarray[i] < thirdLine[2] &&
            fourthLine[4] === "NIL" &&
            thirdLine[2] !== "NIL"
          ) {
            fourthLine[4] = parsedarray[i];
          } else if (
            parsedarray[i] > thirdLine[2] &&
            parsedarray[i] < thirdLine[3] &&
            fourthLine[5] === "NIL" &&
            thirdLine[2] !== "NIL" &&
            thirdLine[3] !== "NIL"
          ) {
            fourthLine[5] = parsedarray[i];
          }
        }
        if (parsedarray[i] > secondLine[1]) {
          if (
            parsedarray[i] < thirdLine[3] &&
            fourthLine[6] === "NIL" &&
            thirdLine[4] !== "NIL" &&
            thirdLine[3] !== "NIL"
          ) {
            fourthLine[6] = parsedarray[i];
          } else if (
            parsedarray[i] > thirdLine[3] &&
            fourthLine[7] === "NIL" &&
            thirdLine[2] !== "NIL" &&
            thirdLine[3] !== "NIL"
          ) {
            fourthLine[7] = parsedarray[i];
          }
        }
        //eleeje
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
          if (parsedarray[i] > thirdLine[3] && thirdLine[3] !== "NIL") {
            if (parsedarray[i] < fourthLine[7] && fourthLine[7] !== "NIL") {
              fifthLine[14] = parsedarray[i];
            }
            if (              
              parsedarray[i] > fourthLine[7] &&
              fourthLine[7] !== "NIL"
            ) {
              fifthLine[15] = parsedarray[i];
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
        } //itt a vege

        if (
          secondLine[0] === "NIL" &&
          secondLine[1] !== "NIL" &&
          parsedarray[i] < secondLine[1]
        ) {
          secondLine[0] = edge;
          edge = parsedarray[i];
        } else if (
          secondLine[0] === "NIL" &&
          secondLine[1] !== "NIL" &&
          parsedarray[i] > secondLine[1]
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
      }
    }

    console.log("Edge: " + edge);
    console.log("SecondLine: " + secondLine);
    console.log("ThirdLine: " + thirdLine);
    console.log("FourthLine: " + fourthLine);
    console.log("FifthLine: " + fifthLine);
  }

  /*

 */

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <h1
        style={{ color: "white", textAlign: "center", paddingBottom: "20px" }}
      >
        Red-Black tree
      </h1>
      <div className="form-group">
        <div className="container">
          <div className="row justify-content-center text-center">
            {" "}
            <div className="col-4 ">
              <b style={{ color: "white" }}>Add Elements :</b>
              <input type="text" className="form-control" id="addnumber" />{" "}
              <small className="form-text text-white">
                (pl.: 1,12,43,23,13)
              </small>
              <br />
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <Button variant="outline-warning col-1" onClick={Rbtadd}>
              Solve
            </Button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center">
        <br />
        <b id="tree"></b>
      </div>
    </form>
  );
}
//van hiba vizsgáld
