import React from "react"; //, { useState }
//import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Register() {
  //*const navigate = useNavigate();
  return (
    <form style={{ background: "#000027", height:"100vh" }}>
      <div className="form-group">
        <div className="container" >
          <h2 style={{ color: "white" }} className="row justify-content-center ">
            Regisztráció
          </h2>
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-4 ">
              <b style={{ color: "white" }} for="UsernameReg">
                Email:
              </b>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-4 ">
              <b style={{ color: "white" }} for="UsernameReg">
                UserName:
              </b>
              <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-4">
              <b style={{ color: "white" }} for="PasswordInput">
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
          <div className="row justify-content-center text-center">
            <div className="col-4">
              <b style={{ color: "white" }} for="PasswordInput">
                Password:
              </b>
              <input
                type="password"
                className="form-control"
                placeholder="Password Again"
                name="passwordonemore"
              />
            </div>
          </div>
          <br />
          <div className="form-group text-center">
            <Button type="submit" name="submit" variant="btn btn-outline-warning col-1">
              Submit
            </Button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}
