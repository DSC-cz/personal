import React, { useEffect } from 'react';
import { useState } from 'react';
import '../../assets/components/Portfolio/portfolio.css';
import sitename from '../../index';

import PortfolioModal from '../widgets/Portfolio/Modal';
import PortfolioTable from '../widgets/Portfolio/Table';
import { motion } from 'framer-motion/dist/framer-motion';
import { useParams } from 'react-router-dom';


const Portfolio = () => {
    const [allowed, setAllowed] = useState(false);
    document.title = sitename + "Portfolio";
    const { invite } = useParams();

    const [items, setItems] = useState([]);

    useEffect( () => {
        
        try{
            if(invite === undefined){
                throw new Error("No invite provided");
            }

            fetch("https://petrondrisek-projects.jednoduse.cz/personal-portfolio-access/checkAccess.php?accessToken="+invite)
            .then(response => response.json())
            .then(data => {
                if(data.allowed === true){                    
                    setItems(data.portfolio);

                    setAllowed(true);
                } 
            })

        } catch (error){
            console.log(error);
        }
        

    }, [invite]);

    const [ModalItem, setModalItem] = useState(0);
    const [ModalShow, setModalShow] = useState(false);
    
    return(
        <motion.section id="page" className="container page" intial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, y: 100}}>
            {allowed && (<>
                <PortfolioModal items={items} ModalItem={ModalItem} ModalShow={ModalShow} setModalShow={setModalShow} />
                <h1>Portfolio</h1>
                <PortfolioTable items={items} setModalItem={setModalItem} setModalShow={setModalShow} />
                </>)}
            
            {!allowed && (<><h1>Portfolio</h1><p>Nebyl jste pozván vidět toto portfolio.</p></>)}
        </motion.section>
    )
}

export default Portfolio;