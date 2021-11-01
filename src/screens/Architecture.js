//React
import React, { useState } from "react";

//Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { Modal, Carousel } from "react-bootstrap";

//React router
import { useHistory } from "react-router";

//Images
import Arch_1 from "../assets/architecture/arch-1.jpg";
import Arch_2 from "../assets/architecture/arch-2.jpg";
import Arch_3 from "../assets/architecture/arch-3.jpg";
import Arch_4 from "../assets/architecture/arch-4.jpg";
import Arch_5 from "../assets/architecture/arch-5.jpg";

export default function Architecture() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showCarousel, setshowCarousel] = useState(false);
  const handleCloseCarousel = () => setshowCarousel(false);
  const handleShowCarousel = () => setshowCarousel(true);
  const history = useHistory();
  return (
    <section class="main-section">
      <div class="header">Fotogaleria</div>
      <div class="sub-header">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-arrow"
          onClick={() => history.push("/")}
        />
        <span>Architektura</span>
      </div>
      <div class="cards">
        <div class="architecture-card active-card" onClick={handleShowCarousel}>
          <img src={Arch_1} alt="Plane" />
        </div>
        <div class="architecture-card">
          <img src={Arch_2} alt="New York" />
        </div>
        <div class="architecture-card">
          <img src={Arch_3} alt="Lake" />
        </div>
        <div class="architecture-card">
          <img src={Arch_4} alt="Sea" />
        </div>
        <div class="architecture-card">
          <img src={Arch_5} alt="Trees" />
        </div>
        <div class="add-card" onClick={handleShow}>
          <FontAwesomeIcon icon={faPlusSquare} size="2x" className="add-icon" />
          <div>Pridat fotky</div>
        </div>
        <Modal show={show} onHide={handleCloseCarousel} centered>
          <Modal.Body className="add-image-content">
            <div class="pridat-content">
              <div class="pridat-header">
                <h5
                  class="modal-title pridat-header"
                  id="addCategoryModalLabel"
                >
                  Pridať fotky
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div class="add-image-dialog">
                <i class="far fa-image fa-2x"></i>
                <span class="add-image-title">Sem presunte fotky</span>
                <span class="add-image-description">alebo</span>
                <div class="add-image-btn">Vyberte súbory</div>
              </div>
              <div class="pridat-btn" onClick={handleClose}>
                Pridať
              </div>
            </div>
          </Modal.Body>
        </Modal>

        <Modal
          dialogClassName="carousel-dialog"
          contentClassName="carousel-content"
          style={{ background: "transparent" }}
          show={showCarousel}
          onHide={handleCloseCarousel}
          centered
        >
          <Modal.Body
            style={{
              padding: "0",
            }}
          >
            <Carousel>
              <Carousel.Item>
                <img className="d-block" src={Arch_1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={Arch_2} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={Arch_3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={Arch_4} alt="Fourth slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block" src={Arch_5} alt="Five slide" />
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
}
