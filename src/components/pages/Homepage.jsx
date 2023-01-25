import React from 'react'
import sitename from '../../index'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import sfkkozel_thumbnail from '../../assets/components/Portfolio/thumbnails/sfkkozel.png'
import mineleague_thumbnail from '../../assets/components/Portfolio/thumbnails/mineleague.png';
import vue_thumbnail from '../../assets/components/Portfolio/thumbnails/vue.png';
import PortfolioModal from '../widgets/Portfolio/Modal';
import PortfolioTable from '../widgets/Portfolio/Table';
import { motion } from 'framer-motion/dist/framer-motion'
import Banner from '../widgets/Banner/Banner.jsx';

const Homepage = () => {
    document.title = sitename + "Hlavní stránka";

    const [ModalItem, setModalItem] = useState(0);
    const [ModalShow, setModalShow] = useState(false);

    const [items] = useState([
        {title: "Vue.js • Learning project", git: "https://github.com/DSC-cz/vue-js-learn", desc: "Učební projekt na Vue.js framework", type: "web", url: "https://dsc-vue-js.vercel.app", thumbnail: vue_thumbnail, stack: ["Vue.js", "Boostrap", "CSS"]},
        {title: "Mineleague.cz", git:"", desc: "Webová stránka pro Minecraft ligový turnaje. Napsáno v PHP s využitím OOP a vlastní MVC architektury, jQuery, MySQL databáze, využití Discord Auth, PayPal platební brána s JavaScriptem pro dobíjení kreditů. Frontend není součástí mé práce, nicméně někde byl upraven pro lepší zobrazení.", type: "web", url: "https://mineleague.cz", thumbnail: mineleague_thumbnail, stack: ["PHP", "Custom OOP", "jQuery"]},
        {title: "SFK Kozel", git:"", desc: "Webová stránka pro flobralový klub SFK Kozel, vzniklo v rámci školní praxe. Využití Wordpressu, vlastní šablona v HTML, CSS a jQuery. Vlastní plugin pro zápasy se stránkováním, hráči + kategorie. Při editaci zápasu lze hráčům přidávat statistiky, které se propíší do profilu, to nakonec ale zůstalo nevyužito.", type: "web", url: "https://sfkkozel.cz", thumbnail: sfkkozel_thumbnail, stack: ["WordPress", "CSS", "jQuery"]} 
    ]);

    return (
        <motion.div intial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 100}}>
        <Banner/>
        <section id="page" className="container page">
            <p>Jmenuji se Petr Ondříšek, pod přezdívkou DSC vystupuji od roku 2020. Mám vystudovanou střední školu se zaměřením na Informační technologie, nicméně se věnuji samotnému programování od 13 let – ještě v amatérských podmínkách a metodou pokusu omylu. Původně jsem se začal více hrabat ve zdrojových kódech webových stránkách až jsem pochopil základní principy fungovaní HTML a pokoušel si stránky sám upravovat přes Průzkumníka prvků v prohlížeči Google Chrome, později jsem se dostal k tvorbě samotné webové stránky pouze založené na <strong>HTML a CSS</strong>, kdy jsem objevil právě existenci kaskádových stylů CSS a začal se více zaměřovat i právě na CSS.</p>
            <p>Po nějaké době se mi naskytly první možnosti, jak využit své získané dovednosti v těchto dvou základních front-endových jazycích a zakládal jsem první stránky, hlavně pro herní servery her, které jsem tenkrát hrál. První stránka, která kdy vznikla, byla primárně vytvořena z obrázků, textů a odkazů na ostatní stránky pro herní server na Counter-Strike 1.6. Později jsem tvořil webovou stránku i pro Minecraft server, kde jsem se začal více dozvídat i o existenci back-endových programovacích či skriptovacích jazycích, kvůli větší propojenosti a zvídavosti. <strong>Narazil jsem tak na PHP.</strong></p>
            <p className="text-center"><Link to="/about"><button className="btn btn-success">Přečti si o mně více zde</button></Link></p>
            
            <h1 className="mt-4 pb-2 text-center">Rychlé portfolio</h1>
            <PortfolioTable items={items} setModalItem={setModalItem} setModalShow={setModalShow} />

            <PortfolioModal items={items} ModalItem={ModalItem} ModalShow={ModalShow} setModalShow={setModalShow} />
            <p className="text-center"><Link to="/portfolio"><button className="btn btn-success">Zobrazit více z portfolia</button></Link></p>
        </section>
        </motion.div>
    )
}

export default Homepage