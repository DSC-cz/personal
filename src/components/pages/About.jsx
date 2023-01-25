import React from 'react'
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import sitename from '../../index.js'
import programator from '../../assets/programator.jpg'
import { motion } from 'framer-motion/dist/framer-motion'

const About = () => {
    document.title = sitename + "O mně";

    const [jobs] = useState([
        {year: "leden 2022", post: "Tvorba webové stránky Mineleague.cz", place: "X", type: "Jednorázový přivýdělek"},
        {year: "červenec/srpen 2021", post: "Tvorba webové stránky uveryhypoteky.eu", place: "X", type: "Jednorázový přivýdělek"},
        {year: "podzim 2020", post: "Tvorba webové stránky SFK Kozel", place: "X", type: "Školní praxe"},
        {year: "květen 2020", post: "Tvorba propagačních videí pro SWIETELSKY, využití dronu a střihových programů (After Effects, Premiere)", place: "SWIETELSKY s.r.o.", type: "Školní praxe"},
        {year: "prosinec 2019", post: "Účast na projektu DotaceEU - tvorba videa (výhra 3. místo), využití dronu a střihových programů (After Effects, Premiere)", place: "X", type: "Školní projekt"},
    ])
    return(
        <motion.section id="page" className="container page" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, y: 100}}>
            <p>Jmenuji se Petr Ondříšek, pod přezdívkou DSC vystupuji od roku 2020. Mám vystudovanou střední školu se zaměřením na Informační technologie, nicméně se věnuji samotnému programování od 13 let – ještě v amatérských podmínkách a metodou pokusu omylu. Původně jsem se začal více hrabat ve zdrojových kódech webových stránkách až jsem pochopil základní principy fungovaní HTML a pokoušel si stránky sám upravovat přes Průzkumníka prvků v prohlížeči Google Chrome, později jsem se dostal k tvorbě samotné webové stránky pouze založené na <strong>HTML a CSS</strong>, kdy jsem objevil právě existenci kaskádových stylů CSS a začal se více zaměřovat i právě na CSS.</p>
            <p>Po nějaké době se mi naskytly první možnosti, jak využit své získané dovednosti v těchto dvou základních front-endových jazycích a zakládal jsem první stránky, hlavně pro herní servery her, které jsem tenkrát hrál. První stránka, která kdy vznikla, byla primárně vytvořena z obrázků, textů a odkazů na ostatní stránky pro herní server na Counter-Strike 1.6. Později jsem tvořil webovou stránku i pro Minecraft server, kde jsem se začal více dozvídat i o existenci back-endových programovacích či skriptovacích jazycích, kvůli větší propojenosti a zvídavosti. <strong>Narazil jsem tak na PHP.</strong></p>
            <p>PHP jsem se původně začal věnovat na funkcionální / procedurální úrovni, hodně kódu bylo z počátku spíše převzato a snažil jsem se hlavně o to, aby webová stránka fungovalo bez ohledu na to, jestli kódu rozumím nebo jestli je dostatečně efektivní či čitelný. Až později časem, kdy mě začala zajímat nějaká modifikace kódu, který na webové stránce byl, tak jsem začal pobírat existenci cyklů, proměnných, až jsem se dozvěděl o existenci databází, tj. <strong>MySQL a webové prostředí PHPMyAdmin</strong>.</p>
            <p>Webový projekt pro Minecraft server prošel několika verzemi, úprav, až byl stavěný od základu na vlastním kódu, nicméně se nejednalo o žádný veliký back-endový zázrak. Celkově server fungoval mezi 2 – 3 lety. Mezitím jsem si vyzkoušel tvorbu pluginů v <strong>Javě pro Minecraft</strong> a objevil různé syntaxy při programování v Javě i PHP, nicméně už tenkrát jsem si všiml toho, jak jsou si vlastně programovací jazyky hodně podobné. Úroveň programování v Javě je pro mě každopádně velice nízká a nemám v ní dle mého názoru vůbec juniorní znalosti. Poté přišla pauza, kdy jsem se programování v PHP ani Javě téměř nevěnoval a zabrousil jsem třeba do <strong>Pawna</strong> pro GTA San Andreas v rámci zábavy a opět zvědavosti, ani tam jsem každopádně dlouho nevydržel a nevěnoval se tomu.</p>
            <p>Poté přišel nástup na střední školu, kdy jsem se tomu začal opět trochu více věnovat, zde jsme se věnovali jak úplným <strong>základům tvorby webu – co už jsem uměl (HTML, CSS), ale i C a později i C# v úplných základech</strong>. Díky předchozím zkušenostem pro mě nebylo ani jedno z těchto odvětví vůbec složitá záležitost, akorát mě to posunulo v tom, že jsem zjistil, které kroky dělám kvůli samostudiu špatně. Mezitím jsem objevil existenci <strong>redakčních systémů, např. Wordpress</strong>, dále pak jsem opět se věnoval hernímu projektu webové stránky, tentokrát pro hru Counter-Strike: Global Offensive, kde jsem tvořil web již s přihlašováním a využil tak větší potenciál PHP a troufnu si říci, že mě tento projekt posunul v PHP o hodně velký kus. Využil jsem zde již i objektově orientované programování, vytvořil si vlastní MVC architekturu, protože jsem se vždy snažil pochopit co nejvíce do detailu, jakým způsobem fungují například frameworky. Začal jsem využívat různých API – např. Steam Auth pro přihlašování, později pak i pro propojení Discord účtu Discord Auth, atp. Vyzkoušel jsem si i napojení PayPal platební brány a automatizaci nákupu s přiřazením dat do databáze. Kromě toho jsem pak i v rámci školních projektů tvořil webovou stránku ve WordPressu, kde jsem tvořil jak vlastní šablonu – tzn. Využití HTML a CSS a tvořil jsem pro tuhle webovou stránku i vlastní WordPress plugin. (O tomto více pak v portfoliu) V obou projektech jsem pak získal i zkušenosti s <strong>JavaScriptem</strong>, jak s vanila, tak i s využitím nějakého zjednodušeného JS – <strong>jQuery</strong>. Nyní se snažím zabrousit více do JavaScriptu a front-endu, například <strong>tato stránka je psána v Reactu</strong>.</p>
            <img src={programator} alt="Programator" align="right" className="m-3 mt-0" height="300px"/>
            <p>Během projektu s herním serverem jsem se pak věnoval i <strong>Pythonu a tvorbě Discord botů</strong>, kteří primárně komunikovali buď s webem a back-endem nebo přímo s databází. Mým posledním projektem je Minecraft ligový portál, kde jsem tvořil vlastně celý systém fungování ligy, týmů, uživatelů a propojení s herním serverovým účtem. Tam jsem využil také <strong>OOP s vlastní architekturou</strong>.</p>
            <p>Snaha o to získat více praxe v komerčním světě u mě byla vždy. Snažil jsem se probojovat i do větších společností, kde by si mě nějakým způsobem zaučili, nicméně jsem pak dal přednost spíše ještě samostudiu. Během zadání, které mi firmy daly jsem si vyzkoušel práci s <strong>Nette nebo Laravelem</strong>, ještě více jsem si prohloubil zkušenosti s <strong>Bootstrapem</strong> nebo jsem si vyzkoušel <strong>MaterializeCSS</strong>. Všechny podrobnosti lze najít na stránce s portfoliem.</p>
            <p>Z profesního života by to bylo o mně vše, mezitím jsem pracoval různě, kde se dalo. Nemám tak jen IT zkušenosti, ale i zkušenosti mimo IT. Nyní se věnuji i <strong>studiu vysoké školy Univerzity Palackého v Olomouci na oboru Informační technologie</strong> v kombinované formě.</p>

            <p className="text-bigger">Tabulkový přehled využití v praxi s klientem</p>
            <div className="w-100 overflow-auto">
            <Table striped="row" bordered hover>
                <thead>
                    <tr>
                        <th>Rok</th>
                        <th>Pozice</th>
                        <th>Místo</th>
                    </tr>
                    {jobs.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.year}</td>
                                <td>{value.post}</td>
                                <td>{value.place}</td>
                            </tr>
                        )                        
                    })}
                </thead>
            </Table>
            </div>
        </motion.section>
    )
}

export default About;