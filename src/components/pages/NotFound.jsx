import React from 'react'
import sitename from '../../index'
import { motion } from 'framer-motion/dist/framer-motion'

const NotFound = () => {
    document.title = sitename + "Stránka nenalezena";
    
    return (
        <motion.section id="page" className="container page" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, y: 100}}>
        <article>
            <section class="page container mt-3 mb-3 pt-3 pb-3">
                <h1>Stránka nenalezena</h1>
                <p>Zkuste vyhledávání později nebo kontaktujte administrátora stránky.</p>
            </section>
        </article>
        </motion.section>
    )
}

export default NotFound;