import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
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
    <>
      <main>
        <section>
          <div>
            <form style={{ background: "#000027", height: "100vh" }}>
              <div class="form-group ">
                <div class="container ">
                  <h2
                    style={{ color: "white" }}
                    class="row justify-content-center"
                  >
                    {" "}
                    Bejelentkezés{" "}
                  </h2>
                  <form>
                    <div>
                      <br />
                      <div class="row justify-content-center text-center">
                        <div class="col-4 ">
                          <b
                            style={{ color: "white" }}
                            htmlFor="email-address"
                          >
                            Email cím:
                          </b>
                          <input
                            id="email-address"
                            name="email"
                            type="email"
                            class="form-control"
                            required
                            placeholder="Az email címed"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div>
                      <div class="row justify-content-center text-center">
                        <div class="col-4">
                          <b style={{ color: "white" }} htmlFor="password">
                            Jelszó:
                          </b>
                          <input
                            id="password"
                            name="password"
                            type="password"
                            class="form-control"
                            required
                            placeholder="Találj ki egy jelszót"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div>
                      <div class="form-group text-center">
                        <Button
                          variant="btn btn-outline-warning col-2"
                          onClick={onLogin}
                        >
                          Bejelentkezek!
                        </Button>
                      </div>
                    </div>
                    <br />
                    <div class="form-group text-center">
                      <p style={{ color: "white" }}>
                        Még nincs fiókod?{" "}
                        <NavLink to="/signup" style={{ color: "#FFC107" }}>
                          Regisztrálj!
                        </NavLink>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default LogIn;