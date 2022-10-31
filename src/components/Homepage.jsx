import React from 'react'
import { useState, useEffect } from 'react';
import Manager_img from '../assets/manager.webp'
import { FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Homepage = () => {
    let [languages] = useState(["HTML - HTML5", "CSS - SCSS, Bootstrap, Materialize", "PHP - vanila, Nette, Laravel", "Javascript - jQuery, React, Vue.js", "Python - základní úroveň", "C, C# - základní úroveň"]);
    let [actualLanguage, setActualLanguage] = useState(0);
    let [actualLetter, setActualLetter] = useState(0);
    let [bannerText, setBannerText] = useState(" ");
    let [intervalTime] = useState(100);

    useEffect(() => {
        let interval = setInterval(() => {
            setBannerText(bannerText + languages[actualLanguage][actualLetter]);

            if(actualLetter + 1 < languages[actualLanguage].length) setActualLetter(actualLetter + 1);
            else{
                if(actualLanguage + 1 < languages.length) setActualLanguage(actualLanguage + 1);
                else setActualLanguage(0);
                setActualLetter(1);
                setTimeout(()=>{setBannerText(languages[actualLanguage + 1 < languages.length ? actualLanguage + 1 : 0][0])}, intervalTime-30);
            }
        }, intervalTime);

        return () => clearInterval(interval);
    });

    return (
        <section id="banner">
            <div className="container">
                <div id="banner-text">
                    <div>
                        Jsem webový vývojář<br/>
                        <span className="banner-smaller-text">{bannerText}</span><br/>

                        <div className="text-center mt-3">
                            <Link to="/about"><button class="btn btn-secondary text-bigger"><FaInfoCircle /> &nbsp; více informací o mně</button></Link><br/>
                            <Link to="/portfolio"><button class="btn btn-primary text-bigger"><FaInfoCircle /> &nbsp; Portfolio projektů</button></Link>
                        </div>
                    </div>
                </div>
                <img src={Manager_img} alt="manager"/>
            </div>
        </section>
    )
}

export default Homepage