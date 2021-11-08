import React from "react";

//Packages
import { Modal } from "react-bootstrap";

const AddCategoryModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} centered>
      <Modal.Body className="pridat-content">
        <div className="pridat-header">
          <h5 className="modal-title pridat-header" id="exampleModalLabel">
            Pridať kategóriu
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={props.handleClose}
          ></button>
        </div>
        <div className="textOnInput">
          <label for="inputText">Názov kategórie *</label>
          <input className="form-control" type="text" />
        </div>
        <div className="pridat-btn" onClick={props.handleClose}>
          Pridať
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddCategoryModal;
