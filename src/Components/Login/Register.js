import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Register() {
  const navigate = useNavigate();
  return (
    <form>
      <div class="form-group ">
        <div class="container" style={{ background: "#1C3A94" }}>
          <h2 style={{ color: "white" }} class="row justify-content-center ">
            Regisztráció
          </h2>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4 ">
              <b style={{ color: "white" }} for="UsernameReg">
                Email:
              </b>
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                name="email"
              />
            </div>
          </div>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4 ">
              <b style={{ color: "white" }} for="UsernameReg">
                UserName:
              </b>
              <input
                type="text"
                class="form-control"
                placeholder="UserName"
                name="username"
              />
            </div>
          </div>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4">
              <b style={{ color: "white" }} for="PasswordInput">
                Password:
              </b>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                name="password"
              />
            </div>
          </div>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4">
              <b style={{ color: "white" }} for="PasswordInput">
                Password:
              </b>
              <input
                type="password"
                class="form-control"
                placeholder="Password Again"
                name="passwordonemore"
              />
            </div>
          </div>
          <br />
          <div class="form-group text-center">
            <Button type="submit" name="submit" class="btn btn-outline-warning col-2">
              Submit
            </Button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}
