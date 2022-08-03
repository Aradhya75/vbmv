import React from 'react'
import { Navbar, Nav, Container,Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
const Navigation = () => {
  return (
    <>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDPjvBfzWc-wfJ8QaSlnIUApb6OAlaqsdamw&usqp=CAU"
              alt="logo"
              style={{ height: "120px", width: "400px" }}
            ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/login">
                <Nav.Link>Log In</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart></FaShoppingCart>
                </Nav.Link>
              </LinkContainer>
          </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation