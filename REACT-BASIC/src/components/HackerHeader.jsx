import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const HackerHeader = (props) => {
    return (
    <>
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className='nav-link'>Home</Link>
                    <Link to="/hackernews" className='nav-link'>해커뉴스</Link>
                    <Link to="/youtube" className='nav-link'>유튜브</Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    </>
    );
}

export default  HackerHeader;