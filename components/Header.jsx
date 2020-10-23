import React from "react";
import Head from "next/head";
import Link from 'next/link'

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = ({children}) => {
  return (
    <div>
      <Head>
        <title>IPSSI | SpaceX</title>
      </Head>

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">IPPSI | Space X</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/news">News</Nav.Link>
            <NavDropdown title="Divers" id="basic-nav-dropdown">
              <NavDropdown.Item href="/capsules">Dragon</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </div>
  );
};

export default Header;
