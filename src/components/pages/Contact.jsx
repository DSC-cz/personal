import React from 'react'
import sitename from '../../index'
import { motion } from 'framer-motion/dist/framer-motion'

const Contact = () => {
    document.title = sitename + "Kontakt";

    return(
        <motion.section id="page" className="container page" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.3}}}>
            <h1>Kontakt</h1>
        </motion.section>
    )
}

export default Contact;