import React from "react";
import { Button } from "react-bootstrap";

export default function RedBlackTree() {
  var array = [];

  function Rbtadd() {
    var a = document.getElementById("addnumber").value;
    array = a.split(",");

    var parsedarray = [];
    var edge = 0;
    var firstline = [];
    var secondlineleft = [];
    var secondlineright = [];
    var thirdlineleftleft = [];
    var thirdlineleftright = [];
    var thirdlinerightleft = [];
    var thirdlinerightright = [];
    var fourthline = [16];
    var leftn = 0;
    var rightn = 0;
    var change = 0;

    var color = [];

    for (var i = 0; i < array.length; i++) {
      parsedarray.push(parseInt(array[i]));
      color.push("0"); //0 gray 1 red
    }

    edge = array[0];

    for (let i = 1; i < array.length; i++) {
      if (i < 3 && firstline.length <= 2) {
        if (array[i] < edge && leftn < 3) {
          leftn += 1;
          firstline.push(array[i]);
        }
        if (array[i] > edge || (array[i] === edge && rightn < 3)) {
          rightn += 1;
          firstline.push(array[i]);
        }
        firstline.sort();
        if (rightn === 2 && leftn === 0) {
          change = edge;
          edge = firstline[0];
          firstline[0] = change;
          rightn -= 1;
          leftn += 1;
        }
        if (leftn === 2 && rightn === 0) {
          change = edge;
          edge = firstline[1];
          firstline[1] = change;
          leftn -= 1;
          rightn += 1;
        }
        change = 0;
      } else if (i >= 3) {
        if (array[i] < edge && secondlineleft.length < 2) {
          if (array[i] < firstline[0] && leftn > 0) {
            leftn += 1;
            secondlineleft.push(array[i]);
          } else if (array[i] > firstline[0] && leftn > 0) {
            secondlineleft.push(array[i]);
          }
        }
        if (array[i] > edge && secondlineright.length < 2) {
          if (array[i] < firstline[1] && rightn > 0) {
            secondlineright.push(array[i]);
          } else if (array[i] > firstline[1] && rightn > 0) {
            rightn += 1;
            secondlineright.push(array[i]);
          }
        }

        secondlineleft.sort();
        secondlineright.sort();

        if (
          firstline[1] < secondlineright[0] &&
          firstline[1] < secondlineright[1]
        ) {
          change = firstline[1];
          firstline[1] = secondlineright[0];
          secondlineright[0] = change;
        }
        if (
          firstline[1] > secondlineright[0] &&
          firstline[1] > secondlineright[1]
        ) {
          change = firstline[1];
          firstline[1] = secondlineright[1];
          secondlineright[1] = change;
        }

        if (
          firstline[0] < secondlineleft[0] &&
          firstline[0] < secondlineleft[1]
        ) {
          change = firstline[0];
          firstline[0] = secondlineleft[0];
          secondlineleft[0] = change;
        }
        if (
          firstline[0] > secondlineleft[0] &&
          firstline[0] > secondlineleft[1]
        ) {
          change = firstline[0];
          firstline[0] = secondlineleft[1];
          secondlineleft[1] = change;
        }
        secondlineleft.sort();
        secondlineright.sort();
        if (secondlineleft.length === 2 || secondlineright === 2) {
          if (array[i] < edge && array[i] < firstline[0]) {
            if (array[i] < secondlineleft[0] && thirdlineleftleft.length < 2) {
              thirdlineleftleft.push(array[i]);
            } else if (
              array[i] > secondlineleft[0] &&
              thirdlineleftleft.length < 2
            ) {
              thirdlineleftleft.push(array[i]);
            }
          }

          if (array[i] < edge && array[i] > firstline[0]) {
            if (array[i] < secondlineleft[1] && thirdlineleftright.length < 2) {
              thirdlineleftright.push(array[i]);
            } else if (
              array[i] > secondlineleft[1] &&
              thirdlineleftright.length < 2
            ) {
              thirdlineleftright.push(array[i]);
            }
          }

          if (array[i] > edge && array[i] < firstline[1]) {
            if (
              array[i] < secondlineright[0] &&
              thirdlinerightleft.length < 2
            ) {
              thirdlinerightleft.push(array[i]);
            } else if (
              array[i] > secondlineright[0] &&
              thirdlinerightleft.length < 2
            ) {
              thirdlinerightleft.push(array[i]);
            }
          }

          if (array[i] > edge && array[i] > firstline[1]) {
            if (
              array[i] < secondlineright[1] &&
              thirdlinerightright.length < 2
            ) {
              thirdlinerightright.push(array[i]);
            } else if (
              array[i] > secondlineright[1] &&
              thirdlinerightright.length < 2
            ) {
              thirdlinerightright.push(array[i]);
            }
          }
        }
        if (
          array[i] < edge &&
          array[i] < firstline[0] &&
          array[i] < secondlineleft[0] &&
          array[i] < thirdlineleftleft[0]
        ) {
          fourthline[0] = array[i];
        } else fourthline[0] = "NIL";

        if (
          array[i] < edge &&
          array[i] < firstline[0] &&
          array[i] < secondlineleft[0] &&
          array[i] > thirdlineleftleft[0]
        ) {
          fourthline[1] = array[i];
        } else fourthline[1] = "NIL";

        if (
          array[i] < edge &&
          array[i] < firstline[0] &&
          array[i] > secondlineleft[0] &&
          array[i] < thirdlineleftright[0]
        ) {
          fourthline[2] = array[i];
        } else fourthline[2] = "NIL";

        if (
          array[i] < edge &&
          array[i] < firstline[0] &&
          array[i] > secondlineleft[1] &&
          array[i] > thirdlineleftright[0]
        ) {
          fourthline[3] = array[i];
        } else fourthline[3] = "NIL";

        if (
          array[i] < edge &&
          array[i] > firstline[0] &&
          array[i] < secondlineleft[1] &&
          array[i] < thirdlineleftright[0]
        ) {
          fourthline[4] = array[i];
        } else fourthline[4] = "NIL";

        if (
          array[i] < edge &&
          array[i] > firstline[0] &&
          array[i] < secondlineleft[1] &&
          array[i] > thirdlineleftright[1]
        ) {
          fourthline[5] = array[i];
        } else fourthline[5] = "NIL";

        if (
          array[i] < edge &&
          array[i] > firstline[0] &&
          array[i] > secondlineleft[1] &&
          array[i] < thirdlineleftright[1]
        ) {
          fourthline[6] = array[i];
        } else fourthline[6] = "NIL";

        if (
          array[i] < edge &&
          array[i] > firstline[0] &&
          array[i] > secondlineleft[1] &&
          array[i] > thirdlineleftright[1]
        ) {
          fourthline[7] = array[i];
        } else fourthline[7] = "NIL";

        if (
          array[i] > edge &&
          array[i] < firstline[1] &&
          array[i] < secondlineright[0] &&
          array[i] < thirdlinerightleft[0]
        ) {
          fourthline[8] = array[i];
        } else fourthline[8] = "NIL";

        if (
          array[i] > edge &&
          array[i] < firstline[1] &&
          array[i] < secondlineright[0] &&
          array[i] > thirdlinerightleft[0]
        ) {
          fourthline[9] = array[i];
        } else fourthline[9] = "NIL";

        if (
          array[i] > edge &&
          array[i] < firstline[1] &&
          array[i] > secondlineright[0] &&
          array[i] < thirdlinerightleft[1]
        ) {
          fourthline[10] = array[i];
        } else fourthline[10] = "NIL";

        if (
          array[i] > edge &&
          array[i] < firstline[1] &&
          array[i] > secondlineright[0] &&
          array[i] > thirdlinerightleft[1]
        ) {
          fourthline[11] = array[i];
        } else fourthline[11] = "NIL";

        if (
          array[i] > edge &&
          array[i] > firstline[1] &&
          array[i] < secondlineright[1] &&
          array[i] < thirdlinerightright[0]
        ) {
          fourthline[12] = array[i];
        } else fourthline[12] = "NIL";

        if (
          array[i] > edge &&
          array[i] > firstline[1] &&
          array[i] < secondlineright[1] &&
          array[i] > thirdlinerightright[0]
        ) {
          fourthline[13] = array[i];
        } else fourthline[13] = "NIL";

        if (
          array[i] > edge &&
          array[i] > firstline[1] &&
          array[i] > secondlineright[1] &&
          array[i] < thirdlinerightright[1]
        ) {
          fourthline[14] = array[i];
        } else fourthline[14] = "NIL";

        if (
          array[i] > edge &&
          array[i] > firstline[1] &&
          array[i] > secondlineright[1] &&
          array[i] > thirdlinerightright[1]
        ) {
          fourthline[15] = array[i];
        } else fourthline[15] = "NIL";
      }
      change = 0;

      firstline.sort();
      secondlineleft.sort();
      thirdlineleftleft.sort();
      thirdlineleftright.sort();
      thirdlinerightleft.sort();
      thirdlinerightright.sort();
    }
    var resultarray = [];

    if (edge !== "") {
      resultarray.push(edge);
      if (firstline.length < 1) {
        firstline[0] = "NIL";
        firstline[1] = "NIL";
      } else if (firstline.length === 1) {
        if (firstline[0] < edge) {
          firstline[1] = "NIL";
        } else {
          change = firstline[0];
          firstline[0] = "NIL";
          firstline[1] = change;
        }
      }
    }
    if (firstline[0] !== "") {
      resultarray.push(firstline[0]);
      if (secondlineleft.length < 1) {
        secondlineleft[0] = "NIL";
        secondlineleft[1] = "NIL";
      } else if (secondlineleft.length === 1) {
        if (secondlineleft[0] < firstline[0] && secondlineleft[0] < edge) {
          secondlineleft[1] = "NIL";
        } else {
          change = secondlineleft[0];
          secondlineleft[0] = "NIL";
          secondlineleft[1] = change;
        }
      }
    }
    if (firstline[1] !== "") {
      resultarray.push(firstline[1]);
      if (secondlineright.length < 1) {
        secondlineright[0] = "NIL";
        secondlineright[1] = "NIL";
      } else if (secondlineright.length === 1) {
        if (secondlineright[0] < firstline[1] && secondlineright[0] > edge) {
          secondlineright[1] = "NIL";
        } else {
          change = secondlineright[0];
          secondlineright[0] = "NIL";
          secondlineright[1] = change;
        }
      }
    }
    if (secondlineleft[0] !== "" && firstline[0] !== "NIL") {
      resultarray.push(secondlineleft[0]);
      if (thirdlineleftleft.length < 1) {
        thirdlineleftleft[0] = "NIL";
        thirdlineleftleft[1] = "NIL";
      } else if (thirdlineleftleft.length === 1) {
        if (
          thirdlineleftleft[0] < secondlineleft[0] &&
          thirdlineleftleft[0] < firstline[0]
        ) {
          thirdlineleftleft[1] = "NIL";
        } else {
          change = thirdlineleftleft[0];
          thirdlineleftleft[0] = "NIL";
          thirdlineleftleft[1] = change;
        }
      }
    }
    if (secondlineleft[1] !== "" && firstline[0] !== "NIL") {
      resultarray.push(secondlineleft[1]);
      if (thirdlineleftright.length < 1) {
        thirdlineleftright[0] = "NIL";
        thirdlineleftright[1] = "NIL";
      } else if (thirdlineleftright.length === 1) {
        if (
          thirdlineleftright[0] < secondlineleft[1] &&
          thirdlineleftright[0] > firstline[0]
        ) {
          thirdlineleftright[1] = "NIL";
        } else {
          change = thirdlineleftright[0];
          thirdlineleftright[0] = "NIL";
          thirdlineleftright[1] = change;
        }
      }
    }
    if (secondlineright[0] !== "" && firstline[1] !== "NIL") {
      resultarray.push(secondlineright[0]);
      if (thirdlinerightleft.length < 1) {
        thirdlinerightleft[0] = "NIL";
        thirdlinerightleft[1] = "NIL";
      } else if (thirdlinerightleft.length === 1) {
        if (
          thirdlinerightleft[0] < secondlineright[0] &&
          thirdlinerightleft[0] < firstline[1]
        ) {
          thirdlinerightleft[1] = "NIL";
        } else {
          change = thirdlinerightleft[0];
          thirdlinerightleft[0] = "NIL";
          thirdlinerightleft[1] = change;
        }
      }
    }
    if (secondlineright[1] !== "" && firstline[1] !== "NIL") {
      resultarray.push(secondlineright[1]);
      if (thirdlinerightright.length < 1) {
        thirdlinerightright[0] = "NIL";
        thirdlinerightright[1] = "NIL";
      } else if (thirdlinerightright.length === 1) {
        if (
          thirdlinerightright[0] < secondlineright[1] &&
          thirdlinerightright[0] > firstline[1]
        ) {
          thirdlinerightright[1] = "NIL";
        } else {
          change = thirdlinerightright[0];
          thirdlinerightright[0] = "NIL";
          thirdlinerightright[1] = change;
        }
      }
    }

    if (secondlineleft[0] !== "NIL") {
      resultarray.push(thirdlineleftleft[0]);
      resultarray.push(thirdlineleftleft[1]);
    }
    if (secondlineleft[1] !== "NIL") {
      resultarray.push(thirdlineleftright[0]);
      resultarray.push(thirdlineleftright[1]);
    }
    if (secondlineright[0] !== "NIL") {
      resultarray.push(thirdlinerightleft[0]);
      resultarray.push(thirdlinerightleft[1]);
    }
    if (secondlineright[1] !== "NIL") {
      resultarray.push(thirdlinerightright[0]);
      resultarray.push(thirdlinerightright[1]);
    }

    console.log(array);
    console.log("left: " + leftn);
    console.log("right: " + rightn);
    console.log("edge: " + edge);
    console.log("firstline: " + firstline);
    console.log("secondlineleft: " + secondlineleft);
    console.log("secondlineright: " + secondlineright);
    console.log("thirdlineleftleft: " + thirdlineleftleft);
    console.log("thirdlineleftright: " + thirdlineleftright);
    console.log("thirdlinerightleft: " + thirdlinerightleft);
    console.log("thirdlinerightright: " + thirdlinerightright);
    console.log("fourth: " + fourthline);

    var colors = [];
    colors.push("black");
    for (var q = 1; q < resultarray.length; q++) {
      colors.push("red");
    }

    for (var i = 1; i < resultarray.length; i++) {
      if (i > 6 && i <= 14 && resultarray[i] !== "NIL") {
        if (i % 2 === 0 && colors[i] === "red") {
          //console.log("beléptem1" + i);
          if (colors[i / 2 - 1] === "red" && colors[i / 2] === "red") {
            //console.log("beléptem2");
            if (colors[1] === "black" && i < 10) {
              //console.log("beléptem3");
              colors[1] = "red";
              colors[i / 2 - 1] = "black";
              colors[i / 2] = "black";
            } else if (colors[2] === "black" && i > 10) {
              colors[2] = "red";
              colors[i / 2 - 1] = "black";
              colors[i / 2] = "black";
            }
          }
        }
        if (i % 2 === 1 && colors[i] === "red") {
          //console.log("beléptem4" + i);
          if (
            colors[(i - 1) / 2] === "red" &&
            colors[(i - 1) / 2 - 1] === "red"
          ) {
            //console.log("beléptem5");
            if (colors[1] === "black" && i < 10) {
              //console.log("beléptem6");
              colors[1] = "red";
              colors[(i - 1) / 2 - 1] = "black";
              colors[(i - 1) / 2] = "black";
            } else if (colors[2] === "black" && i > 10) {
              colors[2] = "red";
              colors[(i - 1) / 2 - 1] = "black";
              colors[(i - 1) / 2] = "black";
            }
          }
        }
      }
      if (i % 2 === 0 && colors[i] === "red" && i <= 6 && i >= 3) {
        if (colors[i / 2 - 1] === "red" && resultarray[i / 2 - 1] !== "NIL") {
          colors[i / 2 - 1] = "black";
          console.log("váltok");
        }
      }
      if (i % 2 === 1 && colors[i] === "red" && i <= 6 && i >= 3) {
        if (colors[(i - 1) / 2] === "red" && resultarray[(i - 1) / 2] !== "NIL") {
          colors[(i - 1) / 2] = "black";
          console.log("váltok");
        }
      }
    }

    if (colors[0] === "red") {
      colors[0] = "black";
    }

    for (var i = 0; i < resultarray.length; i++) {
      //43,23,76,98,32,65,10,2,12,34,33,89,66,1
      if (edge !== "") {
        var element;
        var breaks;
        element = document.createElement("b");
        breaks = document.createElement("br");

        if (resultarray[i] === "NIL" || colors[i] === "black") {
          element.className = "tree-black";
        } else element.className = "tree-red";
        element.innerHTML = resultarray[i];
        if (i === 0 || i === 2 || i === 6 || i === 14 || i === resultarray.length) {
          document.getElementById("tree").appendChild(element);
          document.getElementById("tree").appendChild(breaks);
        } else document.getElementById("tree").appendChild(element);
      }
    }
    console.log("ResultArray:" + resultarray);
    console.log("Colors: " + colors);
  }

  /*

 */

  return (
    <form style={{ background: "#000027", height:"100vh" }}>
      <h1 style={{ color: "white", textAlign: "left", padding: "20px" }}>
        Red-Black tree
      </h1>
      <div class="form-group">
        <div class="container">
          <div class="row justify-content-start text-center">
            {" "}
            <div class="col-4">
              <b style={{ color: "white" }}>Add Elements :</b>
              <input type="text" class="form-control" id="addnumber" />{" "}
              <small class="form-text text-white">(pl.: 1,12,43,23,13)</small>
              <br />
            </div>
          </div>
          <Button variant="btn btn-outline-warning col-1" onClick={Rbtadd}>
            Solve
          </Button>
        </div>
      </div>
      <div>
        <br />
        <b id="tree"></b>
      </div>
    </form>
  );
}
//van hiba vizsgáld
