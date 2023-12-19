import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const MyNav = () => {
  return (
    <Navbar collapseOnSelect expand='lg' className='bg-body-tertiary'>
      <Container fluid>
        <Navbar.Brand href='#home'>React - Epibooks</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#home'>Home</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#browse'>Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
