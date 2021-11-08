//React
import React, { useState } from "react";

//Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

//React router
import { useHistory } from "react-router";

//Images
import Arch_1 from "../assets/architecture/arch-1.jpg";
import Arch_2 from "../assets/architecture/arch-2.jpg";
import Arch_3 from "../assets/architecture/arch-3.jpg";
import Arch_4 from "../assets/architecture/arch-4.jpg";
import Arch_5 from "../assets/architecture/arch-5.jpg";

//Components
import Card from "../components/Card";

//Modals
import UploadImageModal from "../components/Modals/UploadImageModal";
import CarouselModal from "../components/Modals/CarouselModal";

export default function Architecture() {
  //Use states
  const [show, setShow] = useState(false);
  const [showCarousel, setshowCarousel] = useState(false);
  const [images] = useState([
    {
      id: 1,
      img: Arch_1,
      alt: "Plane",
    },
    {
      id: 2,
      img: Arch_2,
      alt: "New York",
    },
    {
      id: 3,
      img: Arch_3,
      alt: "Lake",
    },
    {
      id: 4,
      img: Arch_4,
      alt: "Sea",
    },
    {
      id: 5,
      img: Arch_5,
      alt: "Trees",
    },
  ]);

  //Handler
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Carousel Handler
  const handleCloseCarousel = () => setshowCarousel(false);
  const handleShowCarousel = () => setshowCarousel(true);

  const history = useHistory();
  const goToHomepage = () => {
    history.push("/");
  };

  const AddCard = () => {
    return (
      <div className="add-card" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlusSquare} size="2x" className="add-icon" />
        <div>Pridat fotky</div>
      </div>
    );
  };

  return (
    <section className="main-section">
      <div className="header">Fotogaleria</div>
      <div className="sub-header">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-arrow"
          onClick={goToHomepage}
        />
        <span>Architektura</span>
      </div>
      <div className="cards">
        {images.map((image) => (
          <Card
            isCategory={false}
            img={image.img}
            alt={image.alt}
            onClick={image.id == 1 ? handleShowCarousel : null}
            isActive={image.id == 1 ? true : false}
          />
        ))}
        <AddCard />
        <UploadImageModal show={show} onHide={handleClose} />
        <CarouselModal
          show={showCarousel}
          onHide={handleCloseCarousel}
          images={images}
        />
      </div>
    </section>
  );
}
