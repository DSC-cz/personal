import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaDiscord, FaSteam, FaPencilAlt as FaEmail, FaQuestion, FaFacebook, FaInstagram, FaLinkedin, FaMobile} from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            <section className="header__address">
                <div className="header__address__container container">
                    <div className="header__address__about">
                        <FaEmail/> mail@mail.to <FaMobile/> +420 000 000 000
                    </div>
                    <div className="header__address__social">
                        <a href="https://steamcommunity.com/id/_DSC_/"><FaSteam/></a>
                        <a href="https://discord.com/users/212190945452621824"><FaDiscord /></a>
                        <a href="mailto:doplnim@doplnim.cz"><FaFacebook/></a>
                        <a href="mailto:doplnim@doplnim.cz"><FaInstagram/></a>
                        <a href="mailto:doplnim@doplnim.cz"><FaLinkedin/></a>
                    </div>
                </div>
            </section>
            <Navbar expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Link to="/" className="nav-link">Hlavní stránka</Link>
                    <Link to="/about" className="nav-link">O mně</Link>
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                    <Link to="/kontakt" className="nav-link">Kontakt</Link>
                </Nav>
                </Navbar.Collapse>
                <Navbar.Brand>
                    DSC
                    <Navbar.Text className="d-block text-small pt-0 pb-0"> Web developer</Navbar.Text>
                </Navbar.Brand>
                <div className="navbar-aside">
                    <button className="btn btn-secondary float-right"><FaQuestion/> Mám zájem o web</button>
                </div>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header