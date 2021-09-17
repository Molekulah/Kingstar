import React, { useState, useEffect } from "react";
import { ModalBody } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import Modal from "react-bootstrap/Modal";

const SellItems = ({
  show,
  closeModal,
  showModal,
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
  setMoney,
  money,
  setTotalMoney,
  totalMoney,
  setWood,
  setExp,
  exp,
  addLevel,
  setGrass,
  setStone,
  setGold,
  setIron,
  setPlatinum,
  setDiamond,
}) => {
  //Sell Quantity

  const [sellOne, setSellOne] = useState(true);
  const [sellFive, setSellFive] = useState(false);
  const [sellTen, setSellTen] = useState(false);
  const [sellOneHundred, setSellOneHundred] = useState(false);
  const [sellOneThousand, setSellOneThousand] = useState(false);
  const [sellMax, setSellMax] = useState(false);

  const setQuantityOne = () => {
    setSellOne(true);
    setSellFive(false);
    setSellTen(false);
    setSellOneHundred(false);
    setSellOneThousand(false);
    setSellMax(false);
  };
  const setQuantityFive = () => {
    setSellOne(false);
    setSellFive(true);
    setSellTen(false);
    setSellOneHundred(false);
    setSellOneThousand(false);
    setSellMax(false);
  };
  const setQuantityTen = () => {
    setSellOne(false);
    setSellFive(false);
    setSellTen(true);
    setSellOneHundred(false);
    setSellOneThousand(false);
    setSellMax(false);
  };
  const setQuantityOneHundred = () => {
    setSellOne(false);
    setSellFive(false);
    setSellTen(false);
    setSellOneHundred(true);
    setSellOneThousand(false);
    setSellMax(false);
  };
  const setQuantityOneThousand = () => {
    setSellOne(false);
    setSellFive(false);
    setSellTen(false);
    setSellOneHundred(false);
    setSellOneThousand(true);
    setSellMax(false);
  };
  const setQuantityMax = () => {
    setSellOne(false);
    setSellFive(false);
    setSellTen(false);
    setSellOneHundred(false);
    setSellOneThousand(false);
    setSellMax(true);
  };

  const sellWoodFull = () => {
    if (sellOne) {
      setMoney(money + 1 * woodCost * moneyGain);
      setTotalMoney(totalMoney + 1 * woodCost * moneyGain);
      setWood(wood - 1);
      setExp(exp + 1);
      addLevel();
    } else if (sellFive && wood >= 5) {
      setMoney(money + 5 * woodCost * moneyGain);
      setTotalMoney(totalMoney + 5 * woodCost * moneyGain);
      setWood(wood - 5);
      setExp(exp + 5);
      addLevel();
    } else if (sellTen && wood >= 10) {
      setMoney(money + 10 * woodCost * moneyGain);
      setTotalMoney(totalMoney + 10 * woodCost * moneyGain);
      setWood(wood - 10);
      setExp(exp + 10);
      addLevel();
    } else if (sellOneHundred && wood >= 100) {
      setMoney(money + 100 * woodCost * moneyGain);
      setTotalMoney(totalMoney + 100 * woodCost * moneyGain);
      setWood(wood - 100);
      setExp(exp + 100);
      addLevel();
    } else if (sellOneThousand && wood >= 1000) {
      setMoney(money + 1000 * woodCost * moneyGain);
      setTotalMoney(totalMoney + 1000 * woodCost * moneyGain);
      setWood(wood - 1000);
      setExp(exp + 1000);
      addLevel();
    } else if (sellMax) {
      setMoney(money + wood * woodCost * moneyGain);
      setTotalMoney(totalMoney + wood * woodCost * moneyGain);
      setWood((wood) => 0);
      setExp(exp + wood);
      addLevel();
    }
  };

  const sellStoneFull = () => {
    if (sellOne) {
      setMoney(money + 1 * stoneCost * moneyGain);
      setTotalMoney(totalMoney + 1 * stoneCost * moneyGain);
      setStone(stone - 1);
      setExp(exp + 1);
      addLevel();
    } else if (sellFive && stone >= 5) {
      setMoney(money + 5 * stoneCost * moneyGain);
      setTotalMoney(totalMoney + 5 * stoneCost * moneyGain);
      setStone(stone - 5);
      setExp(exp + 5);
      addLevel();
    } else if (sellTen && stone >= 10) {
      setMoney(money + 10 * stoneCost * moneyGain);
      setTotalMoney(totalMoney + 10 * stoneCost * moneyGain);
      setStone(stone - 10);
      setExp(exp + 10);
      addLevel();
    } else if (sellOneHundred && stone >= 100) {
      setMoney(money + 100 * stoneCost * moneyGain);
      setTotalMoney(totalMoney + 100 * stoneCost * moneyGain);
      setStone(stone - 100);
      setExp(exp + 100);
      addLevel();
    } else if (sellOneThousand && stone >= 1000) {
      setMoney(money + 1000 * stoneCost * moneyGain);
      setTotalMoney(totalMoney + 1000 * stoneCost * moneyGain);
      setStone(stone - 1000);
      setExp(exp + 1000);
      addLevel();
    } else if (sellMax) {
      setMoney(money + stone * stoneCost * moneyGain);
      setTotalMoney(totalMoney + stone * stoneCost * moneyGain);
      setStone((stone) => 0);
      setExp(exp + stone);
      addLevel();
    }
  };

  const sellGrassFull = () => {
    if (sellOne) {
      setMoney(money + 1 * grassCost * moneyGain);
      setTotalMoney(totalMoney + 1 * grassCost * moneyGain);
      setGrass(grass - 1);
      setExp(exp + 1);
      addLevel();
    } else if (sellFive && grass >= 5) {
      setMoney(money + 5 * grassCost * moneyGain);
      setTotalMoney(totalMoney + 5 * grassCost * moneyGain);
      setGrass(grass - 5);
      setExp(exp + 5);
      addLevel();
    } else if (sellTen && grass >= 10) {
      setMoney(money + 10 * grassCost * moneyGain);
      setTotalMoney(totalMoney + 10 * grassCost * moneyGain);
      setGrass(grass - 10);
      setExp(exp + 10);
      addLevel();
    } else if (sellOneHundred && grass >= 100) {
      setMoney(money + 100 * grassCost * moneyGain);
      setTotalMoney(totalMoney + 100 * grassCost * moneyGain);
      setGrass(grass - 100);
      setExp(exp + 100);
      addLevel();
    } else if (sellOneThousand && grass >= 1000) {
      setMoney(money + 1000 * grassCost * moneyGain);
      setTotalMoney(totalMoney + 1000 * grassCost * moneyGain);
      setGrass(grass - 1000);
      setExp(exp + 1000);
      addLevel();
    } else if (sellMax) {
      setMoney(money + grass * grassCost * moneyGain);
      setTotalMoney(totalMoney + grass * grassCost * moneyGain);
      setGrass((grass) => 0);
      setExp(exp + grass);
      addLevel();
    }
  };

  const sellGoldFull = () => {
    if (sellOne) {
      setMoney(money + 1 * goldCost * moneyGain);
      setTotalMoney(totalMoney + 1 * goldCost * moneyGain);
      setGold(gold - 1);
      setExp(exp + 1);
      addLevel();
    } else if (sellFive && gold >= 5) {
      setMoney(money + 5 * goldCost * moneyGain);
      setTotalMoney(totalMoney + 5 * goldCost * moneyGain);
      setGold(gold - 5);
      setExp(exp + 5);
      addLevel();
    } else if (sellTen && gold >= 10) {
      setMoney(money + 10 * goldCost * moneyGain);
      setTotalMoney(totalMoney + 10 * goldCost * moneyGain);
      setGold(gold - 10);
      setExp(exp + 10);
      addLevel();
    } else if (sellOneHundred && gold >= 100) {
      setMoney(money + 100 * goldCost * moneyGain);
      setTotalMoney(totalMoney + 100 * goldCost * moneyGain);
      setGold(gold - 100);
      setExp(exp + 100);
      addLevel();
    } else if (sellOneThousand && gold >= 1000) {
      setMoney(money + 1000 * goldCost * moneyGain);
      setTotalMoney(totalMoney + 1000 * goldCost * moneyGain);
      setGold(gold - 1000);
      setExp(exp + 1000);
      addLevel();
    } else if (sellMax) {
      setMoney(money + gold * goldCost * moneyGain);
      setTotalMoney(totalMoney + gold * goldCost * moneyGain);
      setGold((gold) => 0);
      setExp(exp + gold);
      addLevel();
    }
  };

  const sellIronFull = () => {
    if (sellOne) {
      setMoney(money + 1 * ironCost * moneyGain);
      setTotalMoney(totalMoney + 1 * ironCost * moneyGain);
      setIron(iron - 1);
      setExp(exp + 1);
      addLevel();
    } else if (sellFive && iron >= 5) {
      setMoney(money + 5 * ironCost * moneyGain);
      setTotalMoney(totalMoney + 5 * ironCost * moneyGain);
      setIron(iron - 5);
      setExp(exp + 5);
      addLevel();
    } else if (sellTen && iron >= 10) {
      setMoney(money + 10 * ironCost * moneyGain);
      setTotalMoney(totalMoney + 10 * ironCost * moneyGain);
      setIron(iron - 10);
      setExp(exp + 10);
      addLevel();
    } else if (sellOneHundred && iron >= 100) {
      setMoney(money + 100 * ironCost * moneyGain);
      setTotalMoney(totalMoney + 100 * ironCost * moneyGain);
      setIron(iron - 100);
      setExp(exp + 100);
      addLevel();
    } else if (sellOneThousand && iron >= 1000) {
      setMoney(money + 1000 * ironCost * moneyGain);
      setTotalMoney(totalMoney + 1000 * ironCost * moneyGain);
      setIron(iron - 1000);
      setExp(exp + 1000);
      addLevel();
    } else if (sellMax) {
      setMoney(money + iron * ironCost * moneyGain);
      setTotalMoney(totalMoney + iron * ironCost * moneyGain);
      setIron((iron) => 0);
      setExp(exp + iron);
      addLevel();
    }
  };

  const sellPlatinumFull = () => {
    if (sellOne) {
      setMoney(money + 1 * platinumCost * moneyGain);
      setTotalMoney(totalMoney + 1 * platinumCost * moneyGain);
      setPlatinum(platinum - 1);
      setExp(exp + 1);
      addLevel();
    } else if (sellFive && platinum >= 5) {
      setMoney(money + 5 * platinumCost * moneyGain);
      setTotalMoney(totalMoney + 5 * platinumCost * moneyGain);
      setPlatinum(platinum - 5);
      setExp(exp + 5);
      addLevel();
    } else if (sellTen && platinum >= 10) {
      setMoney(money + 10 * platinumCost * moneyGain);
      setTotalMoney(totalMoney + 10 * platinumCost * moneyGain);
      setPlatinum(platinum - 10);
      setExp(exp + 10);
      addLevel();
    } else if (sellOneHundred && platinum >= 100) {
      setMoney(money + 100 * platinumCost * moneyGain);
      setTotalMoney(totalMoney + 100 * platinumCost * moneyGain);
      setPlatinum(platinum - 100);
      setExp(exp + 100);
      addLevel();
    } else if (sellOneThousand && platinum >= 1000) {
      setMoney(money + 1000 * platinumCost * moneyGain);
      setTotalMoney(totalMoney + 1000 * platinumCost * moneyGain);
      setPlatinum(platinum - 1000);
      setExp(exp + 1000);
      addLevel();
    } else if (sellMax) {
      setMoney(money + platinum * platinumCost * moneyGain);
      setTotalMoney(totalMoney + platinum * platinumCost * moneyGain);
      setPlatinum((platinum) => 0);
      setExp(exp + platinum);
      addLevel();
    }
  };

  const sellDiamondFull = () => {
    if (sellOne) {
      setMoney(money + 1 * diamondCost * moneyGain);
      setTotalMoney(totalMoney + 1 * diamondCost * moneyGain);
      setDiamond(diamond - 1);
      setExp(exp + 1);
      addLevel();
    } else if (sellFive && diamond >= 5) {
      setMoney(money + 5 * diamondCost * moneyGain);
      setTotalMoney(totalMoney + 5 * diamondCost * moneyGain);
      setDiamond(diamond - 5);
      setExp(exp + 5);
      addLevel();
    } else if (sellTen && diamond >= 10) {
      setMoney(money + 10 * diamondCost * moneyGain);
      setTotalMoney(totalMoney + 10 * diamondCost * moneyGain);
      setDiamond(diamond - 10);
      setExp(exp + 10);
      addLevel();
    } else if (sellOneHundred && diamond >= 100) {
      setMoney(money + 100 * diamondCost * moneyGain);
      setTotalMoney(totalMoney + 100 * diamondCost * moneyGain);
      setDiamond(diamond - 100);
      setExp(exp + 100);
      addLevel();
    } else if (sellOneThousand && diamond >= 1000) {
      setMoney(money + 1000 * diamondCost * moneyGain);
      setTotalMoney(totalMoney + 1000 * diamondCost * moneyGain);
      setDiamond(diamond - 1000);
      setExp(exp + 1000);
      addLevel();
    } else if (sellMax) {
      setMoney(money + diamond * diamondCost * moneyGain);
      setTotalMoney(totalMoney + diamond * diamondCost * moneyGain);
      setDiamond((diamond) => 0);
      setExp(exp + diamond);
      addLevel();
    }
  };

  //Sell

  const sellWood = () => {
    if (wood > 0) {
      sellWoodFull();
    }
  };

  const sellGrass = () => {
    if (grass > 0) {
      sellGoldFull();
    }
  };

  const sellStone = () => {
    if (stone > 0) {
      sellStoneFull();
    }
  };

  const sellGold = () => {
    if (gold > 0) {
      sellGoldFull();
    }
  };

  const sellIron = () => {
    if (iron > 0) {
      sellIronFull();
    }
  };

  const sellPlatinum = () => {
    if (platinum > 0) {
      sellPlatinumFull();
    }
  };

  const sellDiamond = () => {
    if (diamond > 0) {
      sellDiamondFull();
    }
  };

  return (
    <div>
      <h1 className="principal-h1"> Sell Items </h1>
      <br />
      <Button variant="warning" onClick={showModal}>
        Pickaxe Shop
      </Button>{" "}
      <br />
      <Modal show={show} onHide={closeModal} variant="bg-primary">
        <ModalHeader className="mainModal">
          {" "}
          <Button variant="warning" onClick={setQuantityOne}>
            1x
          </Button>{" "}
          <Button variant="warning" onClick={setQuantityFive}>
            5x
          </Button>{" "}
          <Button variant="warning" onClick={setQuantityTen}>
            10x
          </Button>{" "}
          <Button variant="warning" onClick={setQuantityOneHundred}>
            100x
          </Button>{" "}
          <Button variant="warning" onClick={setQuantityOneThousand}>
            1000x
          </Button>{" "}
          <Button variant="warning" onClick={setQuantityMax}>
            max
          </Button>{" "}
        </ModalHeader>
        <ModalBody className="mainModal">
          <h1 className="principal-h1"> Sell </h1>
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
