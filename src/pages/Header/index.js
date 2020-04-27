import React from 'react';
import { 
    Navbar, 
    Nav, 
    Button } from 'react-bootstrap';

import './styles.css';

const Header = () => {
  return (
    <Navbar collapseOnSelect bg='light' variant='blue'>
      <div className='container'>
        <Navbar.Brand href='/session' className='main-title'>Naja Store</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
          </Nav>
          <Nav>
            <Button href='/' >Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;