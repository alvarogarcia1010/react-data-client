import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"

const Header = props => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand>Alvaro's data client</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer exact to="/productos">
              <Nav.Link>Productos</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/usuarios">
              <Nav.Link>Usuarios</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/">
              <Nav.Link>
                <img className="rounded-circle mr-2" src="https://secure.gravatar.com/avatar/f36d4d3a6b2d5f6058b7f99b6d698508?s=30&r=x&d=mm" alt="profile"/>
                <span>
                  {"Alvaro García"}
                </span>
              </Nav.Link>
            </LinkContainer>   
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;
