import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    
    <Navbar style={{ backgroundColor: "#0f1113" }} >
      <Nav.Link as={Link} to="/home">
        <a>Home</a>
      </Nav.Link>
      <Nav.Link as={Link} to="/learning">
        <a>Learning</a>
      </Nav.Link>
      <Nav.Link as={Link} to="/test">
        <a>Test</a>
      </Nav.Link>

      <NavDropdown title="Algorithm II" style={{ color: "white" }}>
        <NavDropdown.Item as={Link} to={"/rekurzios"}>
          Recursion tree
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/master-theorem"}>
          Master theorem
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/binary-tree"}>
          Binary tree
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/hash"}>
          Hash table
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/rbt"}>
          Red-Black tree
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/backtracking"}>
          Backtracking
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Assignment">
        <NavDropdown.Item as={Link} to={"/rekurziosfea"}>
          Recursion tree
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/master-theorem-exercise"}>
          Master theorem
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/bfafea"}>
          Binary tree
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/hashfea"}>
          Hash table
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/rbtfea"}>
          Red-Black tree
        </NavDropdown.Item>
        <NavDropdown.Item as={Link} to={"/backfea"}>
          Backtracking
        </NavDropdown.Item>
      </NavDropdown>



        <Nav.Link as={Link} to={"/login"}>
          <Button style={{ float: "right" }} variant="outline-warning">
            Login
          </Button>
        </Nav.Link>
        <Nav.Link as={Link} to={"/signin"}>
          <Button class="btn btn-outline-success my-2 my-sm-0"  variant="warning">
            SignIn
          </Button>
        </Nav.Link>
    </Navbar>
  );
}
