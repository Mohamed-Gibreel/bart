import React from "react";
import { Modal, Carousel } from "react-bootstrap";

const CarouselModal = (props) => {
  return (
    <Modal
      dialogClassName="carousel-dialog"
      contentClassName="carousel-content"
      style={{ background: "transparent" }}
      show={props.show}
      onHide={props.onHide}
      centered
    >
      <Modal.Body
        style={{
          background: "transparent !important",
        }}
      >
        <Carousel>
            {props.images.map(image => 
                <Carousel.Item>
                    <img className="d-block" src={image.img} alt="1" />
                </Carousel.Item>    
            )}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
};

export default CarouselModal;
