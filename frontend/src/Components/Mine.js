import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";

const Mine = ({
  show,
  closeModal,
  showModal,
  gold,
  iron,
  platinum,
  diamond,
  addGold,
  addIron,
  addPlatinum,
  addDiamond,
}) => {
  return (
    <div>
      <h1 className="principal-h1"> Mine </h1> <br />
      <Button variant="success" onClick={showModal}>
        Mine
      </Button>{" "}
      <br />
      <Modal show={show} onHide={closeModal} variant="bg-primary">
        <Modal.Body className="mainModal">
          <h1 className="principal-h1"> Mine </h1> <br />
          <span className="principal-span">Gold</span> <br />
          <span className="principal-span">Gold amount: {gold} </span> <br />
          <span className="principal-span">Required level: 5</span> <br />
          <Button onClick={addGold}> Mine Gold </Button> <br />
          <span className="principal-span">Iron</span> <br />
          <span className="principal-span">Iron amount: {iron} </span> <br />
          <span className="principal-span">Required level: 10</span> <br />
          <Button onClick={addIron}> Mine Iron </Button> <br />
          <span className="principal-span">Platinum</span> <br />
          <span className="principal-span">
            Platinum amount: {platinum}{" "}
          </span>{" "}
          <br />
          <span className="principal-span">Required level: 15</span> <br />
          <Button onClick={addPlatinum}> Mine Platinum </Button> <br />
          <span className="principal-span">Diamond</span> <br />
          <span className="principal-span">
            Diamond amount: {diamond}{" "}
          </span>{" "}
          <br />
          <span className="principal-span">Required level: 20</span> <br />
          <Button onClick={addDiamond}> Mine Diamond </Button> <br />
        </Modal.Body>
        <Modal.Footer className="mainModal">
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Mine;
