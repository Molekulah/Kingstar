import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AxesShop = ({
  show,
  closeModal,
  showModal,
  buyWoodenAxe,
  buyStoneAxe,
  buyGoldAxe,
}) => {
  return (
    <div>
      <Button variant="success" onClick={showModal}>
        Axe Shop
      </Button>{" "}
      <br />
      <Modal show={show} onHide={closeModal} variant="bg-primary">
        <Modal.Body className="mainModal">
          <h1 className="principal-h1"> Upgrades </h1> <br />
          <span className="principal-span"> Buy Wooden Axe </span> <br />
          <span className="principal-span"> Cost: 100 money </span> <br />
          <Button onClick={buyWoodenAxe}> Click to Buy </Button> <br />
          <span className="principal-span"> Buy Stone Axe </span> <br />
          <span className="principal-span"> Cost: 500 money </span> <br />
          <Button onClick={buyStoneAxe}> Click to Buy </Button> <br />
          <span className="principal-span"> Buy Gold Axe </span> <br />
          <span className="principal-span"> Cost: 2500 money </span> <br />
          <Button onClick={buyGoldAxe}> Click to Buy </Button> <br />
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

export default AxesShop;
