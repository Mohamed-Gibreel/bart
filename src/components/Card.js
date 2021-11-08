import React from "react";

const Card = (props) => {
  return (
    <>
      {props.isCategory && (
        <div
          className={props.isActive ? "card active-card" : "card"}
          onClick={props.isActive ? props.onClick : null}
        >
          <div className="indicator">
            <div className="indicator-card">{props.indicator}</div>
          </div>
          <div className="img-wrapper">
            <img src={props.img} alt={props.locationName} />
          </div>
          <div className="location-name">{props.locationName}</div>
        </div>
      )}
      {!props.isCategory && (
        <div
          className={
            props.isActive
              ? "architecture-card active-card"
              : "architecture-card"
          }
          onClick={props.onClick}
        >
          <img src={props.img} alt={props.alt} />
        </div>
      )}
    </>
    // <div
    //   className={props.isActive ? "card active-card" : "card"}
    //   onClick={props.isActive ? props.onClick : null}
    // >
    //   <div className="indicator">
    //     <div className="indicator-card">{props.indicator}</div>
    //   </div>
    //   <div className="img-wrapper">
    //     <img src={props.img} alt="Príroda" />
    //   </div>
    //   <div className="location-name">{props.locationName}</div>
    // </div>
  );
};

export default Card;
