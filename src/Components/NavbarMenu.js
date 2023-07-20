import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarMenu() {
  return (
    <Navbar style={{ backgroundColor: "#0f1113" }}>
      <Nav.Link as={Link} to="/">
        <a href="#/">Home</a>
      </Nav.Link>
      <Nav.Link as={Link} to="/learning">
        <a href="#/">Learning</a>
      </Nav.Link>
      <Nav.Link as={Link} to="/test">
        <a href="#/">Test</a>
      </Nav.Link>

      <NavDropdown title="Algorithm II" style={{ color: "white" }}>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/recursion-tree"}>
          Recursion tree
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/master-theorem"}>
          Master theorem
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/binary-tree"}>
          Binary tree
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/hash-table"}>
          Hash table
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/red-black-tree"}>
          Red-Black tree
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/backtracking"}>
          Backtracking
        </NavDropdown.Item>
      </NavDropdown>

      <NavDropdown title="Assignment">
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/recursion-tree-assignment"}>
          Recursion tree assignment
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/master-theorem-assignment"}>
          Master theorem assignment
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/binary-tree-assignment"}>
          Binary tree assignment
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/hash-table-assignment"}>
          Hash table assignment
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/red-black-tree-assignment"}>
          Red-Black tree assignment
        </NavDropdown.Item>
        <NavDropdown.Item style={{color:"black"}} as={Link} to={"/backtracking-assignment"}>
          Backtracking assignment
        </NavDropdown.Item> 
      </NavDropdown>

      <Nav.Link as={Link} to={"/login"}>
        <Button style={{ float: "right" }} variant="outline-warning">
          Login
        </Button>
      </Nav.Link>
      <Nav.Link as={Link} to={"/signin"}>
        <Button className="btn btn-warning my-2 my-sm-0" variant="warning">
          SignIn
        </Button>
      </Nav.Link>

      <Nav.Link as={Link} to="/inwork">
        <a  href="#/">In-work</a>
      </Nav.Link>

    </Navbar>
  );
}
