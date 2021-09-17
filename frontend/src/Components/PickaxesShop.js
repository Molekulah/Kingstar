import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const PickaxesShop = ({
  show,
  closeModal,
  showModal,
  buyWoodenPickaxe,
  buyStonePickaxe,
  buyGoldPickaxe,
  buyIronPickaxe,
  buyPlatinumPickaxe,
  buyDiamondPickaxe,
  money,
}) => {
  return (
    <div>
      <div>
        <h1 className="principal-h1">Shop</h1> <br />
        <Button variant="success" onClick={showModal}>
          Pickaxe Shop
        </Button>{" "}
        <br />
        <Modal show={show} onHide={closeModal} variant="bg-primary">
          <Modal.Body className="mainModal">
            <h1 className="principal-h1"> Upgrades </h1> <br />
            <span className="principal-span">
              {" "}
              Your money: {money}{" "}
            </span> <br /> <br />
            <span className="principal-span"> Buy Wooden Pickaxe </span> <br />
            <span className="principal-span"> Cost: 50 money </span> <br />
            <Button onClick={buyWoodenPickaxe}> Click to Buy </Button> <br />
            <span className="principal-span"> Buy Stone Pickaxe </span> <br />
            <span className="principal-span"> Cost: 250 money </span> <br />
            <Button onClick={buyStonePickaxe}> Click to Buy </Button> <br />
            <span className="principal-span"> Buy Gold Pickaxe </span> <br />
            <span className="principal-span"> Cost: 1000 money </span> <br />
            <Button onClick={buyGoldPickaxe}> Click to Buy </Button> <br />
            <span className="principal-span"> Buy Iron Pickaxe </span> <br />
            <span className="principal-span"> Cost: 5000 money </span> <br />
            <Button onClick={buyIronPickaxe}> Click to Buy </Button> <br />
            <span className="principal-span"> Buy Platinum Pickaxe </span>{" "}
            <br />
            <span className="principal-span"> Cost: 25000 money </span> <br />
            <Button onClick={buyPlatinumPickaxe}> Click to Buy </Button> <br />
            <span className="principal-span"> Buy Diamond Pickaxe </span> <br />
            <span className="principal-span"> Cost: 100000 money </span> <br />
            <Button onClick={buyDiamondPickaxe}> Click to Buy </Button> <br />
          </Modal.Body>
          <Modal.Footer className="mainModal">
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default PickaxesShop;
