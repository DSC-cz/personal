import React from 'react'
import Navigation from '../widgets/Navigation/Navigation'
import { FaDiscord, FaSteam, FaPencilAlt as FaEmail, FaFacebook, FaInstagram, FaLinkedin, FaMobile} from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            <section className="header__address">
                <div className="header__address__container container">
                    <div className="header__address__about">
                        <FaEmail/> petrondrisek@seznam.cz <FaMobile/> +420 737 070 089
                    </div>
                    <div className="header__address__social">
                        <a href="https://steamcommunity.com/id/_DSC_/"><FaSteam/></a>
                        <a href="https://discord.com/users/212190945452621824"><FaDiscord /></a>
                        <a href="https://facebook.com/pondrisek"><FaFacebook/></a>
                        <a href="https://instagram.com/petr_ondrisek"><FaInstagram/></a>
                        <a href="https://cz.linkedin.com/in/petr-ond%C5%99%C3%AD%C5%A1ek-47046421b"><FaLinkedin/></a>
                    </div>
                </div>
            </section>
            <Navigation/>
        </header>
    )
}

export default Header