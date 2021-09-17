import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Button from "react-bootstrap/Button";
import TopBar from "./Components/TopBar";
import Resources from "./Components/Resources";
import PickaxesShop from "./Components/PickaxesShop";
import AxesShop from "./Components/AxeShop";
import Statistics from "./Components/Statistics";
import SellItems from "./Components/SellItems";
import Mine from "./Components/Mine";

export default function App() {
  //Modal

  const [showPickaxeShop, setShow] = useState(false);
  const handleClosePickaxeShop = () => setShow(false);
  const handleShowPickaxeShop = () => setShow(true);

  const [showAxeShop, setShowAxeShop] = useState(false);
  const handleCloseAxeShop = () => setShowAxeShop(false);
  const handleShowAxeShop = () => setShowAxeShop(true);

  const [showMine, setShowMine] = useState(false);
  const handleCloseMine = () => setShowMine(false);
  const handleShowMine = () => setShowMine(true);

  const [showSellItems, setShowSellItems] = useState(false);
  const handleCloseSellItems = () => setShowSellItems(false);
  const handleShowSellItems = () => setShowSellItems(true);

  //Total Resources

  const [totalWood, setTotalWood] = useState(0);
  const [totalStone, setTotalStone] = useState(0);
  const [totalGrass, setTotalGrass] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  //Resources

  const [wood, setWood] = useState(0);
  const [stone, setStone] = useState(0);
  const [grass, setGrass] = useState(0);

  //Resource Cost

  const [grassCost, setGrassCost] = useState(0.25);
  const [woodCost, setWoodCost] = useState(0.5);
  const [stoneCost, setStoneCost] = useState(1);
  const [goldCost, setGoldCost] = useState(2);
  const [ironCost, setIronCost] = useState(4);
  const [platinumCost, setPlatinumCost] = useState(8);
  const [diamondCost, setDiamondCost] = useState(16);

  //Ores

  const [gold, setGold] = useState(0);
  const [iron, setIron] = useState(0);
  const [platinum, setPlatinum] = useState(0);
  const [diamond, setDiamond] = useState(0);

  //Total Ores

  const [totalGold, setTotalGold] = useState(0);
  const [totalIron, setTotalIron] = useState(0);
  const [totalPlatinum, setTotalPlatinum] = useState(0);
  const [totalDiamond, setTotalDiamond] = useState(0);

  //Level/Exp

  const [level, setLevel] = useState(0);
  const [exp, setExp] = useState(0);
  const [expNeeded, setExpNeeded] = useState(100);

  //Pickaxes

  const [pickaxe, setPickaxe] = useState(false);
  const [woodenPickaxe, setWoodenPickaxe] = useState(false);
  const [stonePickaxe, setStonePickaxe] = useState(false);
  const [goldPickaxe, setGoldPickaxe] = useState(false);
  const [ironPickaxe, setIronPickaxe] = useState(false);
  const [platinumPickaxe, setPlatinumPickaxe] = useState(false);
  const [diamondPickaxe, setDiamondPickaxe] = useState(false);

  //Axes

  const [axe, setAxe] = useState(false);
  const [woodenAxe, setWoodenAxe] = useState(false);
  const [stoneAxe, setStoneAxe] = useState(false);
  const [goldAxe, setGoldAxe] = useState(false);

  //Money

  const [money, setMoney] = useState(0);
  const [moneyGain, setMoneyGain] = useState(1);

  useEffect(() => {
    const saveInterval = setInterval(() => {
      const savedGame = JSON.parse(localStorage.getItem("gameSave"));
    }, 1000);
    const savedGame = JSON.parse(localStorage.getItem("gameSave"));

    //Resources

    setWood(savedGame?.wood || 0);
    setStone(savedGame?.stone || 0);
    setGrass(savedGame?.grass || 0);

    //Ores

    setGold(savedGame?.gold || 0);
    setIron(savedGame?.iron || 0);
    setPlatinum(savedGame?.platinum || 0);
    setDiamond(savedGame?.diamond || 0);

    //Total Ores

    setTotalGold(savedGame?.totalGold || 0);
    setTotalIron(savedGame?.totalIron || 0);
    setTotalPlatinum(savedGame?.totalPlatinum || 0);
    setTotalDiamond(savedGame?.totalDiamond || 0);

    //Pickaxes

    setPickaxe(savedGame?.pickaxe || 0);
    setWoodenPickaxe(savedGame?.woodenPickaxe || 0);
    setStonePickaxe(savedGame?.stonePickaxe || 0);
    setGoldPickaxe(savedGame?.goldPickaxe || 0);
    setIronPickaxe(savedGame?.ironPickaxe || 0);
    setPlatinumPickaxe(savedGame?.platinumPickaxe || 0);
    setDiamondPickaxe(savedGame?.diamondPickaxe || 0);

    //Axes

    setAxe(savedGame?.axe || false);
    setWoodenAxe(savedGame?.woodenAxe || false);
    setStoneAxe(savedGame?.stoneAxe || false);
    setGoldAxe(savedGame?.goldAxe || false);

    //Exp and Levels

    setExp(savedGame?.exp || 0);
    setExpNeeded(savedGame?.expNeeded || 100);
    setLevel(savedGame?.level || 0);

    //Money

    setMoney(savedGame?.money || 0);
    setMoneyGain(savedGame?.moneyGain || 1);

    //Total Resources

    setTotalWood(savedGame?.totalWood || 0);
    setTotalGrass(savedGame?.totalGrass || 0);
    setTotalStone(savedGame?.totalStone || 0);
    setTotalMoney(savedGame?.totalMoney || 0);

    return () => {
      clearInterval(saveInterval);
    };
  }, []);

  useEffect(() => {
    const saveGame = () => {
      const gameSave = {
        //Resources

        wood,
        stone,
        grass,

        //Ores

        gold,
        iron,
        platinum,
        diamond,

        //Total Ores

        totalGold,
        totalIron,
        totalPlatinum,
        totalDiamond,

        //Pickaxes

        pickaxe,
        woodenPickaxe,
        stonePickaxe,
        goldPickaxe,
        ironPickaxe,
        platinumPickaxe,
        diamondPickaxe,

        //Axes

        axe,
        woodenAxe,
        stoneAxe,
        goldAxe,

        //Exp and Levels

        exp,
        expNeeded,
        level,

        //Money

        money,
        moneyGain,

        //Total Resources

        totalWood,
        totalGrass,
        totalStone,
        totalMoney,
      };

      localStorage.setItem("gameSave", JSON.stringify(gameSave));
    };

    saveGame();
  }, [
    //Resources

    wood,
    stone,
    grass,

    //Ores

    gold,
    iron,
    platinum,
    diamond,

    //Total Ores

    totalGold,
    totalIron,
    totalPlatinum,
    totalDiamond,

    //Pickaxes

    pickaxe,
    woodenPickaxe,
    stonePickaxe,
    goldPickaxe,
    ironPickaxe,
    platinumPickaxe,
    diamondPickaxe,

    //Axes

    axe,
    woodenAxe,
    stoneAxe,
    goldAxe,

    //Exp and Levels

    exp,
    expNeeded,
    level,

    //Money

    money,
    moneyGain,

    //Total Resources

    totalWood,
    totalGrass,
    totalStone,
    totalMoney,
  ]);

  //Pickaxes

  const buyWoodenPickaxe = () => {
    if (money >= 50) {
      setMoney(money - 50);
      setPickaxe(true);
      setWoodenPickaxe(true);
    }
  };

  const buyStonePickaxe = () => {
    if (money >= 250 && woodenPickaxe === true) {
      setMoney(money - 250);
      setWoodenPickaxe(false);
      setStonePickaxe(true);
    }
  };

  const buyGoldPickaxe = () => {
    if (money >= 1000 && stonePickaxe === true) {
      setMoney(money - 1000);
      setStonePickaxe(false);
      setGoldPickaxe(true);
    }
  };

  const buyIronPickaxe = () => {
    if (money >= 5000 && goldPickaxe === true) {
      setMoney(money - 5000);
      setGoldPickaxe(false);
      setIronPickaxe(true);
    }
  };

  const buyPlatinumPickaxe = () => {
    if (money >= 25000 && ironPickaxe === true) {
      setMoney(money - 25000);
      setIronPickaxe(false);
      setPlatinumPickaxe(true);
    }
  };

  const buyDiamondPickaxe = () => {
    if (money >= 100000 && platinumPickaxe === true) {
      setMoney(money - 100000);
      setPlatinumPickaxe(false);
      setDiamondPickaxe(true);
    }
  };

  //Axes

  const buyWoodenAxe = () => {
    if (money >= 100) {
      setMoney(money - 100);
      setAxe(true);
      setWoodenAxe(true);
    }
  };

  const buyStoneAxe = () => {
    if (money >= 500 && woodenAxe === true) {
      setMoney(money - 500);
      setWoodenAxe(false);
      setStoneAxe(true);
    }
  };

  const buyGoldAxe = () => {
    if (money >= 2500 && stoneAxe === true) {
      setMoney(money - 1000);
      setStoneAxe(false);
      setGoldAxe(true);
    }
  };

  //Level

  const addLevel = () => {
    if (exp >= expNeeded) {
      setExp(exp * 0);
      setExpNeeded(Math.round(expNeeded * 1.5));
      setLevel(level + 1);
      setMoneyGain(moneyGain * 2);
      const expRemain = exp - expNeeded;
      if (exp < expNeeded) {
        setExp(exp + expRemain);
      }
    }
  };

  const checkLevel = setInterval(function () {
    if (exp >= expNeeded) {
      addLevel();
      clearInterval(checkLevel);
    } else {
      return;
    }

    return () => {
      clearInterval(checkLevel);
    };
  }, 100);

  //Resources

  const addWood = () => {
    if (axe === false) {
      setWood(wood + 1);
      setTotalWood(totalWood + 1);
      setExp(exp + 1);
      addLevel();
      console.log("ta complicado");
    } else if (axe) {
      if (woodenAxe) {
        setWood(wood + 3);
        setTotalWood(totalWood + 3);
        setExp(exp + 2);
        addLevel();
      } else if (stoneAxe) {
        setWood(wood + 6);
        setTotalWood(totalWood + 6);
        setExp(exp + 3);
        addLevel();
      } else if (goldAxe) {
        setWood(wood + 10);
        setTotalWood(totalWood + 10);
        setExp(exp + 4);
        addLevel();
      }
    }
  };

  const addStone = () => {
    if (pickaxe) {
      if (woodenPickaxe) {
        setStone(stone + 1);
        setTotalStone(totalStone + 1);
        setExp(exp + 1);
        addLevel();
      } else if (stonePickaxe) {
        setStone(stone + 3);
        setTotalStone(totalStone + 3);
        setExp(exp + 2);
        addLevel();
      } else if (goldPickaxe) {
        setStone(stone + 6);
        setTotalStone(totalStone + 6);
        setExp(exp + 3);
        addLevel();
      } else if (ironPickaxe) {
        setStone(stone + 10);
        setTotalStone(totalStone + 10);
        setExp(exp + 4);
        addLevel();
      } else if (platinumPickaxe) {
        setStone(stone + 15);
        setTotalStone(totalStone + 15);
        setExp(exp + 5);
        addLevel();
      } else if (diamondPickaxe) {
        setStone(stone + 21);
        setTotalStone(totalStone + 21);
        setExp(exp + 6);
        addLevel();
      }
    } else {
      alert("You dont have a pickaxe");
    }
  };

  const addGrass = () => {
    setGrass(grass + 1);
    setTotalGrass(totalGrass + 1);
    setExp(exp + 1);
    addLevel();
  };

  //Ores

  const addGold = () => {
    if (level >= 5) {
      if (stonePickaxe) {
        setGold(gold + 1);
        setTotalGold(totalGold + 1);
        setExp(exp + 2);
        addLevel();
      } else if (goldPickaxe) {
        setGold(gold + 3);
        setTotalGold(totalGold + 3);
        setExp(exp + 3);
        addLevel();
      } else if (ironPickaxe) {
        setGold(gold + 6);
        setTotalGold(totalGold + 6);
        setExp(exp + 4);
        addLevel();
      } else if (platinumPickaxe) {
        setGold(gold + 10);
        setTotalGold(totalGold + 10);
        setExp(exp + 5);
        addLevel();
      } else if (diamondPickaxe) {
        setGold(gold + 15);
        setTotalGold(totalGold + 15);
        setExp(exp + 6);
        addLevel();
      }
    }
  };

  const addIron = () => {
    if (level >= 10) {
      if (goldPickaxe) {
        setIron(iron + 1);
        setTotalIron(totalIron + 1);
        setExp(exp + 3);
        addLevel();
      } else if (ironPickaxe) {
        setIron(iron + 3);
        setTotalIron(totalIron + 3);
        setExp(exp + 4);
        addLevel();
      } else if (platinumPickaxe) {
        setIron(iron + 6);
        setTotalIron(totalIron + 6);
        setExp(exp + 5);
        addLevel();
      } else if (diamondPickaxe) {
        setIron(iron + 10);
        setTotalIron(totalIron + 10);
        setExp(exp + 6);
        addLevel();
      }
    }
  };

  const addPlatinum = () => {
    if (level >= 15) {
      if (ironPickaxe) {
        setPlatinum(platinum + 1);
        setTotalPlatinum(totalPlatinum + 1);
        setExp(exp + 4);
        addLevel();
      } else if (platinumPickaxe) {
        setPlatinum(platinum + 3);
        setTotalPlatinum(totalPlatinum + 3);
        setExp(exp + 5);
        addLevel();
      } else if (diamondPickaxe) {
        setPlatinum(platinum + 6);
        setTotalPlatinum(totalPlatinum + 6);
        setExp(exp + 6);
        addLevel();
      }
    }
  };

  const addDiamond = () => {
    if (platinumPickaxe) {
      setDiamond(diamond + 1);
      setTotalDiamond(totalDiamond + 1);
      setExp(exp + 5);
      addLevel();
    } else if (diamondPickaxe) {
      setDiamond(diamond + 3);
      setTotalDiamond(totalDiamond + 3);
      setExp(exp + 6);
      addLevel();
    }
  };

  //Configurations

  const resetButton = () => {
    //Total Resources

    setTotalWood((totalWood) => 0);
    setTotalGrass((totalGrass) => 0);
    setTotalStone((totalStone) => 0);
    setTotalMoney((totalMoney) => 0);

    //Resources

    setWood((wood) => 0);
    setStone((stone) => 0);
    setGrass((grass) => 0);
    setWoodCost((woodCost) => 0.5);
    setGrassCost((grassCost) => 0.25);
    setStoneCost((stoneCost) => 1);

    //Ores

    setGold((gold) => 0);
    setIron((iron) => 0);
    setPlatinum((platinum) => 0);
    setDiamond((diamond) => 0);

    //Ores

    setTotalGold((totalGold) => 0);
    setTotalIron((totalIron) => 0);
    setTotalPlatinum((totalPlatinum) => 0);
    setTotalDiamond((totalDiamond) => 0);

    //Level/Exp

    setLevel((level) => 0);
    setExp((exp) => 0);
    setExpNeeded((expNeeded) => 100);

    //Pickaxes

    setPickaxe((pickaxe) => false);
    setWoodenPickaxe((woodenPickaxe) => false);
    setStonePickaxe((stonePickaxe) => false);
    setGoldPickaxe((goldPickaxe) => false);
    setIronPickaxe((ironPickaxe) => false);
    setPlatinumPickaxe((platinumPickaxe) => false);
    setDiamondPickaxe((diamondPickaxe) => false);

    //Axes

    setAxe((axe) => false);
    setWoodenAxe((woodenAxe) => false);
    setStoneAxe((stoneAxe) => false);
    setGoldAxe((goldAxe) => false);

    //Money

    setMoney((money) => 0);
    setMoneyGain((moneyGain) => 1);
  };

  return (
    <div>
      <meta charset="utf-8" />
      <link
        rel="icon"
        href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png"
        type="image/x-icon"
      />
      <title>Kingstar</title>
      <TopBar />
      <div className="mainPaper">
        <div className="flexbox">
          <div>
            <Resources
              wood={wood}
              stone={stone}
              grass={grass}
              addWood={addWood}
              addStone={addStone}
              addGrass={addGrass}
              addLevel={addLevel}
            />
            <Mine
              className=""
              show={showMine}
              closeModal={handleCloseMine}
              showModal={handleShowMine}
              gold={gold}
              iron={iron}
              platinum={platinum}
              diamond={diamond}
              addGold={addGold}
              addIron={addIron}
              addPlatinum={addPlatinum}
              addDiamond={addDiamond}
              addLevel={addLevel}
            />
          </div>
          <Statistics
            level={level}
            exp={exp}
            expNeeded={expNeeded}
            addLevel={addLevel}
            money={money}
            totalWood={totalWood}
            totalGrass={totalGrass}
            totalStone={totalStone}
            totalMoney={totalMoney}
            totalGold={totalGold}
            totalIron={totalIron}
            totalPlatinum={totalPlatinum}
            totalDiamond={totalDiamond}
          />
          <div>
            <PickaxesShop
              show={showPickaxeShop}
              closeModal={handleClosePickaxeShop}
              showModal={handleShowPickaxeShop}
              buyWoodenPickaxe={buyWoodenPickaxe}
              buyStonePickaxe={buyStonePickaxe}
              buyGoldPickaxe={buyGoldPickaxe}
              buyIronPickaxe={buyIronPickaxe}
              buyPlatinumPickaxe={buyPlatinumPickaxe}
              buyDiamondPickaxe={buyDiamondPickaxe}
            />
            <AxesShop
              show={showAxeShop}
              closeModal={handleCloseAxeShop}
              showModal={handleShowAxeShop}
              buyWoodenAxe={buyWoodenAxe}
              buyStoneAxe={buyStoneAxe}
              buyGoldAxe={buyGoldAxe}
            />
            <SellItems
              show={showSellItems}
              closeModal={handleCloseSellItems}
              showModal={handleShowSellItems}
              grass={grass}
              wood={wood}
              stone={stone}
              gold={gold}
              iron={iron}
              platinum={platinum}
              diamond={diamond}
              grassCost={grassCost}
              woodCost={woodCost}
              stoneCost={stoneCost}
              goldCost={goldCost}
              ironCost={ironCost}
              platinumCost={platinumCost}
              diamondCost={diamondCost}
              moneyGain={moneyGain}
              setMoney={setMoney}
              money={money}
              setTotalMoney={setTotalMoney}
              totalMoney={totalMoney}
              setWood={setWood}
              setExp={setExp}
              exp={exp}
              addLevel={addLevel}
              setGrass={setGrass}
              setStone={setStone}
              setGold={setGold}
              setIron={setIron}
              setPlatinum={setPlatinum}
              setDiamond={setDiamond}
            />
          </div>
          <div>
            <h1 className="principal-h1"> Configurations </h1> <br />
            <Button variant="secondary" onClick={resetButton}>
              {" "}
              Reset Game{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
