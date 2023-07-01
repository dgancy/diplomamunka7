import { hover } from "@testing-library/user-event/dist/hover";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <form>
      <div class="form-group ">
        <div class="container " style={{ background: "#1C3A94" }}>
          <h2 style={{ color: "white" }} class="row justify-content-center">
            Login
          </h2>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4 ">
              <b style={{ color: "white" }} for="exampleInputEmail1">
                Email:
              </b>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                name="username"
              />
            </div>
          </div>
          <br />
          <div class="row justify-content-center text-center">
            <div class="col-4">
              <b style={{ color: "white" }} for="exampleInputPassword1">
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
          <div class="form-group text-center">
            <Button type="submit" name="submit" class="btn btn-outline-warning">
              Submit
            </Button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}
