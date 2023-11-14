import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function NavbarMenu() {
  const [isLoggedIn, setLoggedIn] = useState(false); // Alapértelmezetten nincs bejelentkezve

  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  function handleLogout() {
    setLoggedIn(false);
  }

  function handleLogIn() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("nav uid", uid);
        setLoggedIn(true);
      } else if (!user) {
        console.log("nav user is logged out");
        setLoggedIn(false);
      }
    });
  }

  return (
    <Navbar
      className="justify-content-end"
      style={{ backgroundColor: "#0f1113" }}
    >
      <Nav.Link as={Link} to="/">
        <Nav.Item className="navelement">Kezdőlap</Nav.Item>
      </Nav.Link>
      {isLoggedIn && !isLoginPage && (
        <>
          <Nav.Link as={Link} to="/learning">
            <Nav.Item className="navelement">Jegyzetek</Nav.Item>
          </Nav.Link>
          <Nav.Link as={Link} to="/test">
            <Nav.Item className="navelement">Teszt</Nav.Item>
          </Nav.Link>
          <NavDropdown
            title={<span className="navelement">Algoritmus II</span>}
          >
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/recursion-tree"}
            >
              Recurziós-fa
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/master-theorem"}
            >
              Mester-tétel
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/binary-tree"}
            >
              Bináris kereső fa
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/hash-table"}
            >
              Hash tábla
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/red-black-tree"}
            >
              Piros-fekete fa
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/backtracking"}
            >
              Visszalépéses keresés
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title={<span className="navelement">Feladatok</span>}>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/recursion-tree-assignment"}
            >
              Rekurziós-fa
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/master-theorem-assignment"}
            >
              Mester tétel
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/binary-tree-assignment"}
            >
              Bináris kereső-fa
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/hash-table-assignment"}
            >
              Hash tábla
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/red-black-tree-assignment"}
            >
              Piros-fekete fa
            </NavDropdown.Item>
            <NavDropdown.Item
              style={{ color: "black" }}
              as={Link}
              to={"/backtracking-assignment"}
            >
              Visszalépéses keresés{" "}
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link>
            <Button onClick={handleLogout} variant="btn btn-outline-warning">
              Kijelentkezés
            </Button>
          </Nav.Link>
        </>
      )}

      {!isLoggedIn && (
        <>
          {/* ... (korábbi kód marad) */}

          {/* Bejelentkezési gomb csak, ha nincs bejelentkezve */}
          <Nav.Link as={Link} to={"/login"}>
            <Button onClick={handleLogIn} variant="warning">
              Belépés
            </Button>
          </Nav.Link>
          <Nav.Link as={Link} to={"/signin"}>
            <Button className="btn btn-outline-warning">Regisztráció</Button>
          </Nav.Link>
        </>
      )}
    </Navbar>
  );
}
