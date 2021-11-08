//React
import React, { useState } from "react";

//React Router
import { useHistory } from "react-router";

//Images
import NatureThumbnail from "../assets/nature/nature-1.jpg";
import ArchitectureThumbnail from "../assets/architecture/arch-1.jpg";
import PeopleThumbnail from "../assets/people/people-1.jpg";
import MealThumbnail from "../assets/meal/meal-1.jpg";
import AbstractThumbnail from "../assets/abstract/abstract-1.jpg";

//Packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

//Components
import Card from "../components/Card";

//Modals
import AddCategoryModal from "../components/Modals/AddCategoryModal";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  const goToArchitecturePage = () => {
    history.push("/architecture");
  };

  const [cardData] = useState([
    {
      id: 1,
      img: NatureThumbnail,
      indicator: "10 fotiek",
      locationName: "Príroda",
    },
    {
      id: 2,
      img: ArchitectureThumbnail,
      indicator: "5 fotiek",
      locationName: "Architektúra",
    },
    {
      id: 3,
      img: PeopleThumbnail,
      indicator: "2 fotky",
      locationName: "Ľudia",
    },
    {
      id: 4,
      img: MealThumbnail,
      indicator: "10 fotiek",
      locationName: "Jedlo",
    },
    {
      id: 5,
      img: AbstractThumbnail,
      indicator: "10 fotiek",
      locationName: "Abstraktné",
    },
  ]);

  const AddCard = () => {
    return (
      <div className="add-card" onClick={handleShow}>
        <FontAwesomeIcon icon={faPlusSquare} size="2x" className="add-icon" />
        <div>Pridať kategóriu</div>
      </div>
    );
  };

  return (
    <>
      <AddCategoryModal show={show} handleClose={handleClose} />
      <section className="main-section">
        <div className="header">Fotogaléria</div>
        <div className="sub-header">Kategórie</div>
        <div className="cards">
          {cardData.map((card) => (
            <Card
              img={card.img}
              indicator={card.indicator}
              isCategory={true}
              locationName={card.locationName}
              onClick={card.id == 2 ? goToArchitecturePage : null}
              isActive={card.id == 2 ? true : false}
            />
          ))}
          <AddCard />
        </div>
      </section>
    </>
  );
};

export default Homepage;
