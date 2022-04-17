import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">-GMS-</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto mx-5">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/destinations">
              Destinations
            </Nav.Link>
            <Nav.Link as={Link} to="/Tour">
              Tours
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              blogs
            </Nav.Link>
          </Nav>
          {user ? (
            <Button onClick={logOut} className="mx-5" variant="secondary">
              logOut
            </Button>
          ) : (
            <Link to="login">
              <Button className="mx-5" variant="secondary">
                login
              </Button>
            </Link>
          )}

          <Navbar.Text>
            Signed in as: <span>{user?.displayName}</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
