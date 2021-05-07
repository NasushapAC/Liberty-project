import React from 'react';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import logo from '../../Images/Logo.png';

import './Navbar.css';

import { Link } from "react-router-dom";

function navbar() {
    return (
      <div className="container nav__wrapper">
        {/* <div classname="row">
          <div className="col-1"></div>
          <div className="col-10"> */}
        <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
            <Navbar.Brand className="brand__name">
              <Link className="brand__link" to="/home">
                Liberty Finance
              </Link>
            </Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/home">Dashboard</Nav.Link>
              {/* <Nav.Link href="#deets">Pool</Nav.Link> */}
              <NavDropdown title="Pool" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/pool1">Pool 1</NavDropdown.Item>
                <NavDropdown.Item href="/ldrpool">LDR Pool</NavDropdown.Item>
                <NavDropdown.Item href="/pool2">Pool 2</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href="#pool4">Pool 4</NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="/migration">Monetary</Nav.Link>
              <Nav.Link href="/migration">Boardroom</Nav.Link>
              <Nav.Link href="/Soon">Governance</Nav.Link>
              {/* <Nav.Link href="/auction">Auction</Nav.Link> */}
              <NavDropdown title="Liberty Market" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/createBadp">Create BADP </NavDropdown.Item>
                <NavDropdown.Item href="/auction">Auction</NavDropdown.Item>
                <NavDropdown.Item href="/display">Display</NavDropdown.Item>
              </NavDropdown>

              {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* </div>
          <div className="col-1"></div>
        </div> */}
      </div>
    );
};
export default navbar;