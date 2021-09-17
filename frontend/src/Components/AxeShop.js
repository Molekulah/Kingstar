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
  buyIronAxe,
  buyPlatinumAxe,
  buyDiamondAxe,
  money,
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
          <span className="principal-span">
            {" "}
            Your money: {money}{" "}
          </span> <br /> <br />
          <span className="principal-span"> Buy Wooden Axe </span> <br />
          <span className="principal-span"> Cost: 100 money </span> <br />
          <Button onClick={buyWoodenAxe}> Click to Buy </Button> <br />
          <span className="principal-span"> Buy Stone Axe </span> <br />
          <span className="principal-span"> Cost: 500 money </span> <br />
          <Button onClick={buyStoneAxe}> Click to Buy </Button> <br />
          <span className="principal-span"> Buy Gold Axe </span> <br />
          <span className="principal-span"> Cost: 2500 money </span> <br />
          <Button onClick={buyGoldAxe}> Click to Buy </Button> <br />
          <span className="principal-span"> Buy Iron Axe </span> <br />
          <span className="principal-span"> Cost: 10000 money </span> <br />
          <Button onClick={buyIronAxe}> Click to Buy </Button> <br />
          <span className="principal-span"> Buy Platinum Axe </span> <br />
          <span className="principal-span"> Cost: 50000 money </span> <br />
          <Button onClick={buyPlatinumAxe}> Click to Buy </Button> <br />
          <span className="principal-span"> Buy Diamond Axe </span> <br />
          <span className="principal-span"> Cost: 2500000 money </span> <br />
          <Button onClick={buyDiamondAxe}> Click to Buy </Button> <br />
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
