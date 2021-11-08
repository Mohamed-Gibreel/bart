//React
import React, { useState, useEffect } from "react";

//React Router
import { useHistory } from "react-router";

//Images
import NatureThumbnail from "../assets/nature/nature-1.jpg";
import ArchitectureThumbnail from "../assets/architecture/arch-1.jpg";
import PeopleThumbnail from "../assets/people/people-1.jpg";
import MealThumbnail from "../assets/meal/meal-1.jpg";
import AbstractThumbnail from "../assets/abstract/abstract-1.jpg";

//Packages
import axios from "axios";

//Utils
import { BASE_URL } from "../utils/const";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

//Components
import Card from "../components/Card";

//Modals
import AddCategoryModal from "../components/Modals/AddCategoryModal";

//Images
import Arch_1 from "../assets/architecture/arch-1.jpg";
import Arch_2 from "../assets/architecture/arch-2.jpg";
import Arch_3 from "../assets/architecture/arch-3.jpg";
import Arch_4 from "../assets/architecture/arch-4.jpg";
import Arch_5 from "../assets/architecture/arch-5.jpg";

const Homepage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();
  // const goToArchitecturePage = () => {
  //   history.push("/architecture");
  // };
  const goToArchitecturePage = (categoryName, categoryImages) => {
    history.push("/architecture", {
      category: categoryName,
      images: categoryImages,
    });
  };

  const [cardData, setCardData] = useState([
    {
      id: 1,
      img: NatureThumbnail,
      images: [],
      indicator: "10 fotiek",
      locationName: "Príroda",
    },
    {
      id: 2,
      img: ArchitectureThumbnail,
      images: [
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
      ],
      indicator: "5 fotiek",
      locationName: "Architektúra",
    },
    {
      id: 3,
      img: PeopleThumbnail,
      images: [],
      indicator: "2 fotky",
      locationName: "Ľudia",
    },
    {
      id: 4,
      img: MealThumbnail,
      images: [],
      indicator: "10 fotiek",
      locationName: "Jedlo",
    },
    {
      id: 5,
      img: AbstractThumbnail,
      images: [],
      indicator: "10 fotiek",
      locationName: "Abstraktné",
    },
  ]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  };

  const fetchCategories = () => {
    axios
      .get(`${BASE_URL}/getCategories`)
      .then((res) => {
        let lastId = cardData[cardData.length - 1].id;
        var tmpArr = [];
        if (res.status === 200) {
          res.data.forEach((category) => {
            lastId += 1;
            var categoryToAdd = {
              id: lastId,
              img: `https://source.unsplash.com/random?sig=${getRandomNumber()}`,
              indicator: `${category.images.length} fotiek`,
              locationName: category.categoryName,
            };
            tmpArr.push(categoryToAdd);
          });
          setCardData([...cardData, ...tmpArr]);
        }
      })
      .catch((e) => {
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log("Erorr while getting categories");
        console.log(e);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-");
      });
  };

  const handleAdd = (categoryName) => {
    axios
      .post(`${BASE_URL}/createCategory`, { categoryName: categoryName })
      .then((res) => {
        let lastId = cardData[cardData.length - 1].id;
        lastId += 1;
        var categoryToAdd = {
          id: lastId,
          img: `https://source.unsplash.com/random?sig=${getRandomNumber()}`,
          indicator: `0 fotiek`,
          locationName: categoryName,
        };
        setCardData([...cardData, categoryToAdd]);
      })
      .catch((e) => {
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log("Error while adding category");
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-");
      });
  };

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
      <AddCategoryModal
        show={show}
        handleClose={handleClose}
        addToCategory={(categoryName) => handleAdd(categoryName)}
      />
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
              onClick={
                () =>
                  // card.id == 2
                  // ?
                  goToArchitecturePage(card.locationName, card.images)
                // : null
              }
              isActive={
                // card.id == 2 ?
                true
                // : false
              }
            />
          ))}
          <AddCard />
        </div>
      </section>
    </>
  );
};

export default Homepage;
