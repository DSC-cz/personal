import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import Header from './components/default/header.jsx';
import Footer from './components/default/footer.jsx';
import Banner from './components/widgets/Banner/Banner.jsx';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import React from 'react'

import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector("#root"));

const sitename = "DSC • ";
export default sitename;

root.render(
    <>
    <React.StrictMode>
    <HashRouter basename="/personal">
        <Header />
        <main>
            <article>
                <Banner/>
                <section id="page" className="container page">
                    <Routes>
                        <Route path="/" element={<Homepage/>}></Route>
                        <Route path="/about" element={<About/>}></Route>
                        <Route path="/portfolio" element={<Portfolio/>}></Route>
                        <Route path="/kontakt" element={<Contact/>}></Route>
                        <Route path="*" element={<NotFound/>}></Route>
                    </Routes>
                </section>
            </article>
        </main>
        <Footer />
    </HashRouter>
    </React.StrictMode>
    </>)
