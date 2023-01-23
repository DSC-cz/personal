import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaQuestion } from 'react-icons/fa';
import '../../../assets/components/Navigation/navigation.css';

const Navigation = () => {
    return(
        <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Hlavní stránka</Link>
                    <Link to="/about" className="nav-link" onClick={()=>{document.getElementById("page").scrollIntoView();}}>O mně</Link>
                    <Link to="/portfolio" className="nav-link" onClick={()=>{document.getElementById("page").scrollIntoView();}}>Portfolio</Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Brand>
                    Petr Ondříšek
                    <Navbar.Text className="d-block text-small pt-0 pb-0"> Junior Developer</Navbar.Text>
                </Navbar.Brand>
                <div className="navbar-aside">
                <Link to="/kontakt" className="nav-link" onClick={()=>{document.getElementById("page").scrollIntoView();}}><button className="btn btn-secondary float-right"><FaQuestion/> Kontaktuj mě</button></Link>
                </div>
            </Container>
            </Navbar>
    )
}

export default Navigation;