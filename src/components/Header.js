import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap"

const Header = props => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand className="ml-4">Alvaro's data client</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-4">
            <LinkContainer exact to="/productos">
              <Nav.Link>Productos</Nav.Link>
            </LinkContainer>
            <LinkContainer exact to="/usuarios">
              <Nav.Link>Usuarios</Nav.Link>
            </LinkContainer>
            <NavDropdown title={props.name} alignRight id="basic-nav-dropdown">
              <LinkContainer exact to="/logout">
                <NavDropdown.Item>Cerrar sesión</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header;
