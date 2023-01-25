import React from 'react'
import sitename from '../../index'
import { motion } from 'framer-motion/dist/framer-motion'

const Contact = () => {
    document.title = sitename + "Kontakt";

    return(
        <motion.section id="page" className="container page" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.3}}}>
            <h1>Kontakt</h1>
            <p>Kontaktovat mě můžete zde:</p> 
            <ul>
                <li>Prostřednictvím emailové adresy <a href="mailto:petrondrisek@seznam.cz">petrondrisek@seznam.cz</a></li>
                <li>Facebook účet - <a href="https://facebook.com/pondrisek">Petr Ondříšek</a></li>
                <li>Discord účet - <a href="https://discord.com/users/212190945452621824">DSC#2619</a></li>
            </ul>
        </motion.section>
    )
}

export default Contact;