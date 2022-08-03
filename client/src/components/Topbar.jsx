import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {MdLocalOffer} from 'react-icons/md'
const Topbar = () => {
  return (
    <>
     <Navbar bg="dark" variant="dark" expand="lg">
     <Container fluid>
        <h7 className="text-light">
           <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; free home
            Free Home Delivery On Order Above 500/- Rupees</h7>
        <Nav className="Ms-auto">
            <LinkContainer to="/"activeClassName>
                <Nav.Link> HOME </Nav.Link> 
            </LinkContainer>
            <LinkContainer to="/about"activeClassName>
                <Nav.Link> About </Nav.Link>
            </LinkContainer>
             <LinkContainer to="/contact"activeClassName>
                <Nav.Link> Contact.us </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/policy"activeClassName>
                <Nav.Link> policy </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
     </Navbar>
    </>
  )
}

export default Topbar