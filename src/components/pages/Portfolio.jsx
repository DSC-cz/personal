import React from 'react'
import { useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../../assets/components/Portfolio/portfolio.css';
import sfkkozel_thumbnail from '../../assets/components/Portfolio/thumbnails/sfkkozel.png'
import nekurackaspolecnost_thumbnail from '../../assets/components/Portfolio/thumbnails/nekurackaspolecnost.png'
import uveryhypoteky_thumbnail from '../../assets/components/Portfolio/thumbnails/uveryhypoteky.png'
import lexten_thumbnail from '../../assets/components/Portfolio/thumbnails/lexten.png';
import srp_thumbnail from '../../assets/components/Portfolio/thumbnails/srp.png';
import mineleague_thumbnail from '../../assets/components/Portfolio/thumbnails/mineleague.png';
import lednice_thumbnail from '../../assets/components/Portfolio/thumbnails/lednice.png';
import discord_thumbnail from '../../assets/components/Portfolio/thumbnails/discord.jpg';
import tagbroker_thumbnail from '../../assets/components/Portfolio/thumbnails/tagbroker.png';
import blender1 from '../../assets/components/Portfolio/thumbnails/blender1.png';
import blender2 from '../../assets/components/Portfolio/thumbnails/blender2.png';
import blender3 from '../../assets/components/Portfolio/thumbnails/blender3.png';
import sitename from '../../index'
import vue_thumbnail from '../../assets/components/Portfolio/thumbnails/vue.png';

const Portfolio = () => {
    document.title = sitename + "Portfolio";

    const [items] = useState([
        {title: "Vue.js • Learning project", desc: "Učební projekt na Vue.js framework", type: "web", url: "https://dsc-vue-js.vercel.app", thumbnail: vue_thumbnail},
        {title: "Blender • Umístění solárních panelů", desc: "Lorem ipsum", type:"images", images: [blender1, blender2, blender3], thumbnail:blender3},
        {title: "SRP", desc: "Sportisimo zadání, využití Nette, MySQL, MaterializeCSS, jQuery, HTML, CSS", type: "web", url: "http://personal-dsc.infinityfreeapp.com/srp", thumbnail: srp_thumbnail},
        {title: "Nekurackaspolecnost.cz • Plugin", desc:"Plugin pro žádost o certifikát (využivá ARES rejstříku, odkud vyhledává podle IČO), administrace ve WordPressu → schválení a editace certifikátů, přidělení certifikátu - zlatý, stříbrný, bronzový. Seznam certifikátů rozdělený na stránkování. Využití WordPressu a vlastního pluginu.", type: "web", url: "https://nekurackaspolecnost.cz", thumbnail: nekurackaspolecnost_thumbnail},
        {title: "Mineleague.cz • Bot", desc: "Discord bot • Python a využití knihovny discord.py, discord_slash.py. Komunikuje s MySQL databází. Funkce: přidělování rolí pokud si hráč propojí účet s webovým, vytvoření textové místnosti pro zápas s automatickým přidáním uživatelů s propojeným účtem, zobrazení hráčských nebo týmových statistik - /profile, přidělení TOP žebříčkových rolí uživatelům s propojeným účtem, příkaz na zobrazení nápovědy na zadané téma - /guide", type: "others", thumbnail: discord_thumbnail},
        {title: "Mineleague.cz", desc: "Webová stránka pro Minecraft ligový turnaje. Napsáno v PHP s využitím OOP a vlastní MVC architektury, jQuery, MySQL databáze, využití Discord Auth, PayPal platební brána s JavaScriptem pro dobíjení kreditů. Frontend není součástí mé práce, nicméně někde byl upraven pro lepší zobrazení.", type: "web", url: "https://mineleague.cz", thumbnail: mineleague_thumbnail},
        {title: "Uveryhypoteky.eu", desc: "Webová stránka pro Úvěry a Hypotéky. Využití WordPressu, vlastní šablona napsaná v HTML, CSS, jQuery a s využitím Bootstrapu. Zde jsem pomohl i s celkovou administrativou ohledně hostingů - např. založení emailů a přesměrování na soukromé, popř. propojení emailů do Gmail schránek.", type: "web", url: "https://uveryhypoteky.eu", thumbnail: uveryhypoteky_thumbnail},
        {title: "TAGBroker", desc: "Webová stránka původně pro TAG Broker, nicméně si to firma rozmyslela ještě před dodáním projektu. Napsáno v HTML, CSS s využitím Bootstrapu", type: "web", url: "http://personal-dsc.infinityfreeapp.com/tagbroker", thumbnail: tagbroker_thumbnail},
        {title: "ARES rejstřík", desc: "Aplikace v rámci zkušebního zadání, vyhledává v ARES rejstříku a výsledky zaznamenává do historie v databázi se stránkováním. Napsáno v PHP.", type: "web", url: "http://personal-dsc.infinityfreeapp.com/ares"},
        {title: "Lednicka", desc: "Aplikace v rámci zkušebního zadání. Napsáno v Laravelu - jazyk PHP, HTML, CSS, jQuery. Přidání potravin, blížíci se expirace a označení na frontendu zvýrazněním.", type: "web", url: "http://personal-dsc.infinityfreeapp.com/lednicka", thumbnail: lednice_thumbnail},
        {title: "Den otevřených dvěří na OAKM.cz", desc: "Nahrávání videa pro Obchodní akademii Kroměříž v rámci dnu otevřených dveří v době covidu, kdy nebylo možné osobní prohlídka. Zde jsem měl s kolegou na starost kameru, scénař a režii. Pomáhali jsme pak alespoň nějak komunikačně se střihem.", type: "video", url: ["QC52cGDdHRU"]},
        {title: "Lexten.cz bot • Lexik", desc: "Discord bot • Python a discord.py + discord_slash.py. Komunikuje s webovou stránkou Lexten.cz pomocí čtení JSON formátů. Zobrazení hráčských statistik, přidělení VIP (premium) rolí. Na serveru možnost vytvoření si vlastního voice kanálu na omezený čas → kanál se nezruší dokud by tam někdo byl i po vypršení času. Odměnění hráčů přes /boostkarma pokud podpořili Discord server s Nitrem. (Karma = body ve hře, přidá do databáze k hráči +100). Seznam všech VIP hráčů → /vip", type: "others", thumbnail: discord_thumbnail},
        {title: "Lexten.cz", desc: "Webová stránka pro herní server Counter-Strike: Global Offensive Jailbreak. Napsáno v PHP, OOP s vlastní MVC architekturou. HTML / SASS CSS s Bootstrapem, FontAwesome ikony, jQuery. Napojeno SteamAPI auth, Discord auth API, dříve se zde objevovalo i platební brána PayPal. Web obsahuje články, vlastní diskuzní fórum, statistiky hráčů, admin tým. V administraci lze konfigurovat VIP účty na serveru → napojeno obě na databázi.", type: "web", url: "http://personal-dsc.infinityfreeapp.com/lexten", thumbnail: lexten_thumbnail},
        {title: "Závěrečné video studia OAKM", desc: "Vzpomínkové video, sestříháno v Adobe After Effects a Premiere, publikováno jako jedno z nejlepších → zadáno celému ročníku.", type: "video", url: ["6Iw-URFWVY0"]},
        {title: "SWIETELSKY • video", desc: "Propagační video v rámci 3 týdenní školní praxe, využití dronu pro tvorbu fotek a videí ze vzduchu. Střih probíhal v Adobe After Effects a Premiere.", type: "video", url: ["NCxWCko3yNI", "N58ahuxKJ_c", "O0QZ3AIu2NE"]},
        {title: "DotaceEU • video - 3. místo", desc: "Školní projekt, zadání bylo jakýkoliv projekt podpořený dotací EU. Využití dronu a střihových programů Adobe After Effects a Premiere.", type: "video", url: ["kqlA4V3kEZA"]},
        {title: "SFK Kozel", desc: "Webová stránka pro flobralový klub SFK Kozel, vzniklo v rámci školní praxe. Využití Wordpressu, vlastní šablona v HTML, CSS a jQuery. Vlastní plugin pro zápasy se stránkováním, hráči + kategorie. Při editaci zápasu lze hráčům přidávat statistiky, které se propíší do profilu, to nakonec ale zůstalo nevyužito.", type: "web", url: "https://sfkkozel.cz", thumbnail: sfkkozel_thumbnail},
        {title: "Starší Lexten.cz web", desc: "Webová stránka pro herní server Counter-Strike: Global Offensive Jailbreak ze začátku. Využití PHP ale bez OOP - funkcionální, MySQL databáze, API - Steam Auth, Discord Auth. Frontend napsán v HTML a CSS s využitím jQuery na JavaScriptu..", type: "web", url: "http://personal-dsc.infinityfreeapp.com/lexten_oldweb/"}
    ]);

    const [ModalItem, setModalItem] = useState(0);
    const [ModalShow, setModalShow] = useState(false);
    
    return(
        <>
        <Modal fullscreen={true} show={ModalShow} onHide={() => setModalShow(false)}>
            <Modal.Header closeButton onClick={()=>{setModalShow(false)}}>
                <Modal.Title>{items[ModalItem].title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{items[ModalItem].desc}</p>

                {items[ModalItem].type === "images" ? (<>{items[ModalItem].images.map((image, i) => {return(<img src={image} key={i} className="d-block mb-2" alt="Obrázek" />)})}</>) : ""}
                {items[ModalItem].type === "video" ? (<>{items[ModalItem].url.map((video, i) => {return(<iframe title={"v"+i} width="100%" key={i} allowfullscreen="allowfullscreen" height="500px" src={"https://youtube.com/embed/"+video}></iframe>)})}</>) : ""}
                {items[ModalItem].type === "web" ? (<iframe src={items[ModalItem].url} width="100%" title={items[ModalItem]} height="500px" seamless></iframe>) : ""}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setModalShow(false)}}>Close</Button>
            </Modal.Footer>
        </Modal>

        <h1>Portfolio</h1>
        <Row>
        {items.map((item, i) => {
            return(<Col className="portfolio-items mb-3" md={4} key={i}>
                <div className="portfolio-item" onClick={() => {setModalItem(i); setModalShow(true)}}>
                    <div className="portfolio-item__type">{item.type}</div>
                    <img src={item.type === "video" ? ("https://img.youtube.com/vi/"+item.url[0]+"/0.jpg") : (item.thumbnail)} alt="Obrázek" />
                    <div className="portfolio-item__title">{item.title}</div>
                </div>
                </Col>)
        })}
        </Row>

        </>
    )
}

export default Portfolio;