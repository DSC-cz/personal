import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import '../../../assets/components/Banner/banner.css';
import html from '../../../assets/components/Banner/html.jpg'
import js from '../../../assets/components/Banner/js.jpg'
import php from '../../../assets/components/Banner/php.jpg'
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };

    const [languages] = useState([
        {title: "HTML & CSS", desc: "Ovládám HTML5 a CSS3 na dobré úrovni. S CSS využívám Bootstrapu, MaterializeCSS, FontAwesome ikony nebo SCSS."},
        {title: "PHP", desc: "OOP na vlastní MVC, později Nette, Laravel, vlastní pluginy ve WordPressu. S PHP využivám MySQL databázi."},
        {title: "JavaScript", desc: "JavaScript ovládám Vanila, při projektech hodně využívám spíše jQuery. Nyní jsem se začal více zajímat o React a Vue.js"},
        {title: "Ostatní", desc: "Ovládám C na základní úrovni, Python využívám při tvorbě dvou Discord botů nebo se mu právě věnuji na VŠ. Vyzkoušel jsem si práci v Javě nebo C#."}
    ]);
    return(
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img src={html} className="carousel-img" alt="Banner"/>
                    <Carousel.Caption>
                        <div>
                            <h3>HTML & CSS</h3>
                            <span className="banner-smaller-text">Vůbec první technologie, kterou ovládám. Používám jí ve svých projektech téměř u všech.</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={php} className="carousel-img" alt="Banner"/>
                    <Carousel.Caption>
                        <div>
                            <h3>PHP</h3>
                            <span className="banner-smaller-text">Věnuji se mu povětšinou na vlastní MVC OOP architektuře, vyzkoušel jsem už ale i Nette framework.</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={js} className="carousel-img" alt="Banner"/>
                    <Carousel.Caption>
                        <div>
                            <h3>Javascript</h3>
                            <span className="banner-smaller-text">Poslední technologie, kterou jsem se začal zabývat. Využívám jQuery nebo Vanila, pomalu se učím React a Vue.</span>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

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