import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dataTransfer = async () => {
    const result = await fetch("http://localhost:8080/message", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({key1: email}),
    });
    console.log("test: " + email);
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dataTransfer();
        navigate("/home");
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main>
      <section>
        <div>
          <form style={{ background: "#000027", height: "100vh" }}>
            <div className="form-group ">
              <div className="container ">
                <h2
                  style={{ color: "white" }}
                  className="row justify-content-center"
                >
                  {" "}
                  Bejelentkezés{" "}
                </h2>
                <div>
                  <br />
                  <div className="row justify-content-center text-center">
                    <div className="col-4 ">
                      <b style={{ color: "white" }} htmlFor="email-address">
                        Email cím:
                      </b>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        className="form-control"
                        required
                        placeholder="Az email címed"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div>
                  <div className="row justify-content-center text-center">
                    <div className="col-4">
                      <b style={{ color: "white" }} htmlFor="password">
                        Jelszó:
                      </b>
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="form-control"
                        required
                        placeholder="Találj ki egy jelszót"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div>
                  <div className="form-group text-center">
                    <Button
                      variant="btn btn-outline-warning col-2"
                      onClick={onLogin}
                    >
                      Bejelentkezek!
                    </Button>
                  </div>
                </div>
                <br />
                <div className="form-group text-center">
                  <p style={{ color: "white" }}>
                    Még nincs fiókod?{" "}
                    <NavLink to="/signup" style={{ color: "#FFC107" }}>
                      Regisztrálj!
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default LogIn;
