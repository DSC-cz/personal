import React from 'react'
import sitename from '../../index'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import sfkkozel_thumbnail from '../../assets/components/Portfolio/thumbnails/sfkkozel.png'
import mineleague_thumbnail from '../../assets/components/Portfolio/thumbnails/mineleague.png';
import vue_thumbnail from '../../assets/components/Portfolio/thumbnails/vue.png';
import PortfolioModal from '../widgets/Portfolio/Modal';
import PortfolioTable from '../widgets/Portfolio/Table';

const Homepage = () => {
    document.title = sitename + "Hlavní stránka";

    const [ModalItem, setModalItem] = useState(0);
    const [ModalShow, setModalShow] = useState(false);

    const [items] = useState([
        {title: "Vue.js • Learning project", desc: "Učební projekt na Vue.js framework", type: "web", url: "https://dsc-vue-js.vercel.app", thumbnail: vue_thumbnail},
        {title: "Mineleague.cz", desc: "Webová stránka pro Minecraft ligový turnaje. Napsáno v PHP s využitím OOP a vlastní MVC architektury, jQuery, MySQL databáze, využití Discord Auth, PayPal platební brána s JavaScriptem pro dobíjení kreditů. Frontend není součástí mé práce, nicméně někde byl upraven pro lepší zobrazení.", type: "web", url: "https://mineleague.cz", thumbnail: mineleague_thumbnail},
        {title: "SFK Kozel", desc: "Webová stránka pro flobralový klub SFK Kozel, vzniklo v rámci školní praxe. Využití Wordpressu, vlastní šablona v HTML, CSS a jQuery. Vlastní plugin pro zápasy se stránkováním, hráči + kategorie. Při editaci zápasu lze hráčům přidávat statistiky, které se propíší do profilu, to nakonec ale zůstalo nevyužito.", type: "web", url: "https://sfkkozel.cz", thumbnail: sfkkozel_thumbnail} 
    ]);

    return (
        <>
            <p>Jmenuji se Petr Ondříšek, pod přezdívkou DSC vystupuji od roku 2020. Mám vystudovanou střední školu se zaměřením na Informační technologie, nicméně se věnuji samotnému programování od 13 let – ještě v amatérských podmínkách a metodou pokusu omylu. Původně jsem se začal více hrabat ve zdrojových kódech webových stránkách až jsem pochopil základní principy fungovaní HTML a pokoušel si stránky sám upravovat přes Průzkumníka prvků v prohlížeči Google Chrome, později jsem se dostal k tvorbě samotné webové stránky pouze založené na <strong>HTML a CSS</strong>, kdy jsem objevil právě existenci kaskádových stylů CSS a začal se více zaměřovat i právě na CSS.</p>
            <p>Po nějaké době se mi naskytly první možnosti, jak využit své získané dovednosti v těchto dvou základních front-endových jazycích a zakládal jsem první stránky, hlavně pro herní servery her, které jsem tenkrát hrál. První stránka, která kdy vznikla, byla primárně vytvořena z obrázků, textů a odkazů na ostatní stránky pro herní server na Counter-Strike 1.6. Později jsem tvořil webovou stránku i pro Minecraft server, kde jsem se začal více dozvídat i o existenci back-endových programovacích či skriptovacích jazycích, kvůli větší propojenosti a zvídavosti. <strong>Narazil jsem tak na PHP.</strong></p>
            <p className="text-center"><Link to="/about"><button className="btn btn-success">Přečti si o mně více zde</button></Link></p>
            
            <h1 className="mt-3 pb-2 text-center">Rychlé portfolio</h1>
            <PortfolioTable items={items} setModalItem={setModalItem} setModalShow={setModalShow} />

            <PortfolioModal items={items} ModalItem={ModalItem} ModalShow={ModalShow} setModalShow={setModalShow} />
            <p className="text-center"><Link to="/portfolio"><button className="btn btn-success">Zobrazit více z portfolia</button></Link></p>
        
            <h1 className="mt-3 pb-2 text-center">Napiš mi</h1>
            <p>Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Mauris tincidunt sem sed arcu. Nunc auctor. Fusce nibh. Aliquam ante. Etiam egestas wisi a erat. Integer vulputate sem a nibh rutrum consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Pellentesque pretium lectus id turpis. In rutrum. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? In convallis. Aliquam in lorem sit amet leo accumsan lacinia.</p>
            
        </>
    )
}

export default Homepage