//React
import React, { useState } from "react";

//SASS
import "../styles/style.scss";

//Images
import NatureThumbnail from "../assets/nature/nature-1.jpg";
import ArchitectureThumbnail from "../assets/architecture/arch-1.jpg";
import PeopleThumbnail from "../assets/people/people-1.jpg";
import MealThumbnail from "../assets/meal/meal-1.jpg";
import AbstractThumbnail from "../assets/abstract/abstract-1.jpg";
import { Modal, Button } from "react-bootstrap";

export default function Homepage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="pridat-content">
          <div class="pridat-header">
            <h5 class="modal-title pridat-header" id="exampleModalLabel">
              Pridať kategóriu
            </h5>
            <button
              type="button"
              class="btn-close"
              onClick={handleClose}
            ></button>
          </div>
          <div class="textOnInput">
            <label for="inputText">Názov kategórie *</label>
            <input class="form-control" type="text" />
          </div>
          <div class="pridat-btn" onClick={handleClose}>
            Pridať
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
        </Modal.Footer> */}
      </Modal>
      <section class="main-section">
        <div class="header">Fotogaléria</div>
        <div class="sub-header">Kategórie</div>
        <div class="cards">
          <div class="card">
            <div class="indicator">
              <div class="indicator-card">10 fotiek</div>
            </div>
            <div class="img-wrapper">
              <img src={NatureThumbnail} alt="Príroda" />
            </div>
            <div class="location-name">Príroda</div>
          </div>
          <a href="architecture-page.html">
            <div class="card">
              <div class="indicator">
                <div class="indicator-card">5 fotiek</div>
              </div>
              <div class="img-wrapper">
                <img src={ArchitectureThumbnail} alt="Architektúra" />
              </div>
              <div class="location-name">Architektúra</div>
            </div>
          </a>
          <div class="card">
            <div class="indicator">
              <div class="indicator-card">2 fotky</div>
            </div>
            <div class="img-wrapper">
              <img src={PeopleThumbnail} alt="Ľudia" />
            </div>
            <div class="location-name">Ľudia</div>
          </div>
          <div class="card">
            <div class="indicator">
              <div class="indicator-card">10 fotiek</div>
            </div>
            <div class="img-wrapper">
              <img src={MealThumbnail} alt="Jedlo" />
            </div>
            <div class="location-name">Jedlo</div>
          </div>
          <div class="card">
            <div class="indicator">
              <div class="indicator-card">10 fotiek</div>
            </div>
            <div class="img-wrapper">
              <img src={AbstractThumbnail} alt="Abstraktné" />
            </div>
            <div class="location-name">Abstraktné</div>
          </div>
          <div class="add-card" onClick={handleShow}>
            <i class="far fa-plus-square fa-2x add-icon"></i>
            <div>Pridať kategóriu</div>
          </div>
        </div>
      </section>
    </>
  );
}
