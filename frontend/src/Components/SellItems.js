import React, { useState, useEffect } from "react";
import { ModalBody } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Modal from "react-bootstrap/Modal";

const SellItems = ({
  show,
  closeModal,
  showModal,
  sellGrass,
  sellWood,
  sellStone,
  sellGold,
  sellIron,
  sellPlatinum,
  sellDiamond,
  grass,
  wood,
  stone,
  gold,
  iron,
  platinum,
  diamond,
  grassCost,
  woodCost,
  stoneCost,
  goldCost,
  ironCost,
  platinumCost,
  diamondCost,
  moneyGain,
}) => {
  return (
    <div>
      <h1 className="principal-h1"> Sell Items </h1>
      <br />
      <Button variant="success" onClick={showModal}>
        Pickaxe Shop
      </Button>{" "}
      <br />
      <Modal show={show} onHide={closeModal} variant="bg-primary">
        <ModalBody className="mainPaper">
          <span className="principal-span">
            {" "}
            Grass value: {grassCost * moneyGain} <br />
            You'll get: {grass * grassCost * moneyGain} money{" "}
          </span>{" "}
          <br />
          <Button variant="warning" onClick={sellGrass}>
            {" "}
            Sell Grass{" "}
          </Button>{" "}
          <br />
          <span className="principal-span">
            {" "}
            Wood value: {woodCost * moneyGain}
            <br />
            You'll get: {wood * woodCost * moneyGain} money{" "}
          </span>{" "}
          <br />
          <Button variant="warning" onClick={sellWood}>
            {" "}
            Sell Wood{" "}
          </Button>{" "}
          <br />
          <span className="principal-span">
            {" "}
            Stone value: {stoneCost * moneyGain} <br />
            You'll get: {stone * stoneCost * moneyGain} money{" "}
          </span>{" "}
          <br />
          <Button variant="warning" onClick={sellStone}>
            {" "}
            Sell Stone{" "}
          </Button>
          <br />
          <span className="principal-span">
            {" "}
            Gold value: {goldCost * moneyGain} <br />
            You'll get: {gold * goldCost * moneyGain} money{" "}
          </span>{" "}
          <br />
          <Button variant="warning" onClick={sellGold}>
            {" "}
            Sell Gold{" "}
          </Button>
          <br />
          <span className="principal-span">
            {" "}
            Iron value: {ironCost * moneyGain} <br />
            You'll get: {iron * ironCost * moneyGain} money{" "}
          </span>{" "}
          <br />
          <Button variant="warning" onClick={sellIron}>
            {" "}
            Sell Iron{" "}
          </Button>
          <br />
          <span className="principal-span">
            {" "}
            Platinum value: {platinumCost * moneyGain} <br />
            You'll get: {platinum * platinumCost * moneyGain} money{" "}
          </span>{" "}
          <br />
          <Button variant="warning" onClick={sellPlatinum}>
            {" "}
            Sell Platinum{" "}
          </Button>
          <br />
          <span className="principal-span">
            {" "}
            Diamond value: {diamondCost * moneyGain} <br />
            You'll get: {diamond * diamondCost * moneyGain} money{" "}
          </span>{" "}
          <br />
          <Button variant="warning" onClick={sellDiamond}>
            {" "}
            Sell Diamond{" "}
          </Button>
          <br />
        </ModalBody>
        <Modal.Footer className="mainModal">
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default SellItems;
