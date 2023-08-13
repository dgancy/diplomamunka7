import React, { useState } from "react"; //
//import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Register() {
  //*const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    username: "",
    password: "",
    passwordonemore: "",
  });

  const { username, password, email, passwordonemore } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const send = () => {
    const result = fetch(
      `http://localhost:80/login/name/${username}/password/${password}`,
      {
        method: "POST",
        // mode: "cors",
        headers: {
          "Content-Type": "text/plain",
        },
      }
    );
    result.then((value) => {
      value.json().then((res) => {
        console.log(res);
      });
    });
  };

  return (
    <form
      style={{ background: "#000027", height: "100vh" }}
      onSubmit={submitHandler}
    >
      <div className="form-group">
        <div className="container">
          <h2
            style={{ color: "white" }}
            className="row justify-content-center "
          >
            Regisztráció
          </h2>
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-4 ">
              <b style={{ color: "white" }} htmlFor="UsernameReg">
                Email:
              </b>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={email}
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-4 ">
              <b style={{ color: "white" }} htmlFor="UsernameReg">
                UserName:
              </b>
              <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-4">
              <b style={{ color: "white" }} htmlFor="PasswordInput">
                Password:
              </b>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={password}
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center text-center">
            <div className="col-4">
              <b style={{ color: "white" }} htmlFor="PasswordInput">
                Password:
              </b>
              <input
                type="password"
                className="form-control"
                placeholder="Password Again"
                name="passwordonemore"
                value={passwordonemore}
                onChange={changeHandler}
              />
            </div>
          </div>
          <br />
          <div className="form-group text-center">
            <Button
              type="submit"
              name="submit"
              variant="btn btn-outline-warning col-1"
              onClick={send}
            >
              Submit
            </Button>
          </div>
          <br />
        </div>
      </div>
    </form>
  );
}
