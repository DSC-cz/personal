import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import Header from './components/default/header.jsx';
import Footer from './components/default/footer.jsx';
import Homepage from './components/pages/Homepage';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import React, { useEffect } from 'react'
import { useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion/dist/framer-motion'

const root = ReactDOM.createRoot(document.querySelector("#root"));

const sitename = "Petr Ondříšek • ";
export default sitename;

const AnimatedRoute = () => {
    const location = useLocation()

    return(
        <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Homepage/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/portfolio" element={<Portfolio/>}></Route>
                    <Route path="/kontakt" element={<Contact/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
        </AnimatePresence>
    )
}

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(()=>{setLoading(false)}, 3000);
    }, [])

    return(
        loading ? 
            <main className='d-flex justify-content-center align-items-center'>
                <HashLoader color="#36d7b7" size="150px" loading/>
            </main>
        :
        <>
        <React.StrictMode>
        <HashRouter basename="/personal">
            <Header />
            <main>
                <article>
                    <AnimatedRoute/>
                </article>
            </main>
            <Footer />
        </HashRouter>
        </React.StrictMode>
        </>)
}

root.render(
    <App/>
)
