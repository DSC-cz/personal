import React from "react";
import { Row, Col } from "react-bootstrap";

const PortfolioTable = ({items, setModalItem, setModalShow}) => {
    return (
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
    )
}

export default PortfolioTable;