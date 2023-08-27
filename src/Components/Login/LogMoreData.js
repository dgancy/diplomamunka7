import React from "react";
import { Button } from "react-bootstrap";

export default function LogMoreData() {
  function MoreData() {
    var userLakhely;
    userLakhely = document.getElementById("Lakhely").value;
    console.log(userLakhely);

    localStorage.setItem("lakhely", userLakhely);
  }

  return (
    <form style={{ background: "#000027", height: "100vh" }}>
      <div>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <b style={{ color: "white" }} htmlFor="text">
              Lakhely:
            </b>
            <input
              id="Lakhely"
              type="text"
              className="form-control"
              placeholder="Lakhely"
            />
          </div>
        </div>
        <br />
        <div className="form-group text-center">
          <Button variant="btn btn-outline-warning col-2" onClick={MoreData}>
            Add More Data
          </Button>
        </div>
      </div>
    </form>
  );
}
