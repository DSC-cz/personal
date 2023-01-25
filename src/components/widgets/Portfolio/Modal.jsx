import React from "react";
import { Modal, Button } from "react-bootstrap";

const PortfolioModal = ({items, ModalItem, ModalShow, setModalShow}) => {
    return (
        <>
        <Modal fullscreen={true} show={ModalShow} onHide={() => setModalShow(false)}>
            <Modal.Header closeButton onClick={()=>{setModalShow(false)}}>
                <Modal.Title>{items[ModalItem].title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>{items[ModalItem].desc}</p>
                <p><strong>GIT: </strong> {items[ModalItem].git.length > 0 ? <a href={items[ModalItem].git} target="_blank">{items[ModalItem].git}</a>:"Nezadáno, aktivní projekt"}</p>

                {items[ModalItem].type === "images" ? (<>{items[ModalItem].images.map((image, i) => {return(<img src={image} key={i} className="d-block mb-2" alt="Obrázek" />)})}</>) : ""}
                {items[ModalItem].type === "video" ? (<>{items[ModalItem].url.map((video, i) => {return(<iframe title={"v"+i} width="100%" key={i} allowfullscreen="allowfullscreen" height="500px" src={"https://youtube.com/embed/"+video}></iframe>)})}</>) : ""}
                {items[ModalItem].type === "web" ? (items[ModalItem].type === "web" && items[ModalItem].url.startsWith("http:") ? <a href={items[ModalItem].url}><button class="btn btn-primary">Přejit na webovou stránku</button></a> : <iframe src={items[ModalItem].url} width="100%" title={items[ModalItem]} height="500px" seamless></iframe>) : ""}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setModalShow(false)}}>Close</Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

export default PortfolioModal;