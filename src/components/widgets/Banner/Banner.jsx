import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import '../../../assets/components/Banner/banner.css';

const Banner = () => {
    const [languages] = useState([
        {title: "HTML & CSS", desc: "Ovládám HTML5 a CSS3 na dobré úrovni. S CSS využívám Bootstrapu, MaterializeCSS, FontAwesome ikony nebo SCSS."},
        {title: "PHP", desc: "OOP na vlastní MVC, později Nette, Laravel, vlastní pluginy ve WordPressu. S PHP využivám MySQL databázi."},
        {title: "JavaScript", desc: "JavaScript ovládám Vanila, při projektech hodně využívám spíše jQuery. Nyní jsem se začal více zajímat o React a Vue.js"},
        {title: "Ostatní", desc: "Ovládám C na základní úrovni, Python využívám při tvorbě dvou Discord botů nebo se mu právě věnuji na VŠ. Vyzkoušel jsem si práci v Javě nebo C#."}
    ]);
    return(
        <>
        <section id="banner">
                <div className="container">
                    <div id="banner-text">
                        <div className="text-center">
                            Dobrým webem vše začíná<br/>
                            <span className="banner-smaller-text">Podívejte se na technologie, které ovládám</span><br/>
                        </div>
                    </div>
                </div>
            </section>

            <section id="stack" className="container">
                <Row className="stack">
                    {languages.map((item, i) => {
                        return (
                            <Col key={i} className="text-center">
                                <p className="text-bigger font-weight-bold mb-3">
                                    {item.title}
                                </p>
                                <p>
                                    {item.desc}    
                                </p>
                            </Col>
                        )
                    })}
                </Row>
            </section>
            <section id="about" className="container">
                <div className="about row">
                    <div className="col">
                        Chceš zjistit víc o mém příběhu? <Link to="/about">Přečti si o mně zde</Link>.
                    </div>
                </div>
            </section>
            </>
    )
}

export default Banner;