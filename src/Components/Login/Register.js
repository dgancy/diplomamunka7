import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { Button } from "react-bootstrap";

const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <main>
      <section>
        <div>
          <div>
            <form style={{ background: "#000027", height: "100vh" }}>
              <div class="form-group ">
                <div class="container ">
                  <h2
                    style={{ color: "white" }}
                    class="row justify-content-center"
                  >
                    Regisztráció
                  </h2>
                  <br />
                  <div class="row justify-content-center text-center">
                    <div class="col-4 ">
                      <b style={{ color: "white" }} for="exampleInputEmail1">
                        Email cím:
                      </b>
                      <input
                        type="email"
                        class="form-control"
                        label="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Az email címed"
                      />
                    </div>
                  </div>
                  <br />

                  <div class="row justify-content-center text-center">
                    <div class="col-4">
                      <b style={{ color: "white" }} for="exampleInputPassword1">
                        Jelszó:
                      </b>
                      <input
                        type="password"
                        class="form-control"
                        label="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Találj ki egy jelszót"
                      />
                    </div>
                  </div>
                  <br />
                  <div class="form-group text-center">
                    <Button
                      type="submit"
                      variant="btn btn-outline-warning col-2"
                      onClick={onSubmit}
                    >
                      Regisztrálok!
                    </Button>
                  </div>
                  <br />

                  <div class="form-group text-center">
                    <p style={{ color: "white" }}>
                      Már van fiókod?{" "}
                      <NavLink to="/login" style={{ color: "#FFC107" }}>
                        Jelentkezz be!
                      </NavLink>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;