import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function TopBar() {
  return (
    <div>
        <Container>
            <Navbar bg="light" expand="lg" >
        
                <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                    <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" /> 
                </Navbar.Brand>
            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav"> 
                        <Nav className="mr-auto"> 
                        </Nav>
                        <Nav>
                            <Nav.Link  href="#LogIn">Log In</Nav.Link>
                            <Button variant="success" style={{fontSize: "18px"}}>Sign Up</Button>{' '}
                        </Nav>
                     </Navbar.Collapse> 
                
            </Navbar>
        </Container>
    </div>
  )
}

export default TopBar