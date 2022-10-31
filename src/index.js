import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import Header from './components/default/header.jsx'
import Footer from './components/default/footer.jsx'
import Homepage from './components/Homepage'
import NotFound from './components/NotFound'
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.querySelector("#root"));


root.render(
    <>
    <React.StrictMode>
    <BrowserRouter>
        <Header />
        <main>
                <Routes>
                    <Route path="/" element={<Homepage/>}></Route>
                    <Route path="*" element={<NotFound/>}></Route>
                </Routes>
        </main>
        <Footer />
    </BrowserRouter>
    </React.StrictMode>
    </>)
