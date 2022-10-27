import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaDiscord, FaSteam, FaPencilAlt as FaEmail, FaHome, FaQuestion} from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    DSC &bull; Portfolio
                    <Navbar.Text className="d-block text-small pt-0 pb-0"> Web developer</Navbar.Text>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link"><FaHome/> Home</Link>
                    <Nav.Link href="https://steamcommunity.com/id/_DSC_/"><FaSteam/> Steam</Nav.Link>
                    <Nav.Link href="https://discord.com/users/212190945452621824"><FaDiscord /> Discord</Nav.Link>
                    <Nav.Link href="mailto:doplnim@doplnim.cz"><FaEmail/> E-mail</Nav.Link>
                    
                </Nav>
                <button className="btn btn-secondary float-right"><FaQuestion/> Mám zájem o web</button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header