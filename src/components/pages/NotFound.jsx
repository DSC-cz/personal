import React from 'react'
import sitename from '../../index'

const NotFound = () => {
    document.title = sitename + "Stránka nenalezena";
    
    return (
        <article>
            <section class="page container mt-3 mb-3 pt-3 pb-3">
                <h1>Stránka nenalezena</h1>
                <p>Zkuste vyhledávání později nebo kontaktujte administrátora stránky.</p>
            </section>
        </article>
    )
}

export default NotFound;