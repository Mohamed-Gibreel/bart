//React
import React, { useState, useEffect } from "react";

//Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

//React router
import { useHistory, withRouter } from "react-router";

//Components
import Card from "../components/Card";

//Modals
import UploadImageModal from "../components/Modals/UploadImageModal";
import CarouselModal from "../components/Modals/CarouselModal";

const Gallery = (props) => {
  useEffect(() => {
    console.log();
    console.log(props);
  }, []);

  const { category, images } = props.location.state;

  //Use states
  const [show, setShow] = useState(false);
  const [showCarousel, setshowCarousel] = useState(false);
  const [categoryImages, setCategoryImages] = useState(images);

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
        <span>{category}</span>
      </div>
      <div className="cards">
        {categoryImages != undefined &&
          categoryImages.length > 0 &&
          categoryImages.map((image) => (
            <Card
              key={image.id}
              isCategory={false}
              img={image.img}
              alt={image.alt}
              onClick={handleShowCarousel} //#TODO Make sure the image you click on is the one that opens
              isActive={true} //#TODO Make all active without this prop
            />
          ))}
        <AddCard />
        <UploadImageModal show={show} onHide={handleClose} />
        {categoryImages != undefined && categoryImages.length > 0 && (
          <CarouselModal
            show={showCarousel}
            onHide={handleCloseCarousel}
            images={categoryImages}
          />
        )}
      </div>
    </section>
  );
};

export default withRouter(Gallery);
