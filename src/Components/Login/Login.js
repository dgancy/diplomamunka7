import React  from "react";//{ useEffect, useState }
import { Button } from "react-bootstrap";
//import { useNavigate } from "react-router-dom";

export default function Login() {
  //*const navigate = useNavigate();
  return (
    <form style={{ background: "#000027", height:"100vh" }}>
      <div className="form-group ">
        <div className="container " >
          <h2 style={{ color: "white" }} className="row justify-content-center">
            Login
          </h2>
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-4 ">
              <b style={{ color: "white" }} for="exampleInputEmail1">
                Email:
              </b>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="username"
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-4">
              <b style={{ color: "white" }} for="exampleInputPassword1">
                Password:
              </b>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
              />
            </div>
          </div>
          <br />
          <div className="form-group text-center">
            <Button type="submit" name="submit" variant="btn btn-outline-warning col-2">
              Submit
            </Button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}
