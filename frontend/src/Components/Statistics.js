import React from "react";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";

const Statistics = ({
  level,
  exp,
  expNeeded,
  money,
  totalWood,
  totalGrass,
  totalStone,
  totalMoney,
  totalGold,
  totalIron,
  totalPlatinum,
  totalDiamond,
}) => {
  const now = Math.round((exp / expNeeded) * 100);

  return (
    <div>
      <h1 className="principal-h1"> Statistics </h1>
      <span className="principal-span">Your progress to level up: </span>
      <ProgressBar animated now={(exp / expNeeded) * 100} label={`${now}%`} />
      <Table responsive="xl">
        <thead>
          <tr>
            <th>
              <span className="principal-span"> Your Level: </span>
            </th>
            <th>
              <span className="principal-span"> Your Exp: </span>
            </th>
            <th>
              <span className="principal-span"> Exp you need: </span>
            </th>
            <th>
              <span className="principal-span"> Your Money: </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="principal-span"> {level} </span>
            </td>
            <td>
              <span className="principal-span"> {exp} </span>
            </td>
            <td>
              <span className="principal-span"> {expNeeded} </span>
            </td>
            <td>
              <span className="principal-span"> {money} </span>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>
              <span className="principal-span"> Total Wood: </span>
            </th>
            <th>
              <span className="principal-span"> Total Grass: </span>
            </th>
            <th>
              <span className="principal-span"> Total Stone: </span>
            </th>
            <th>
              <span className="principal-span"> Total Money: </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="principal-span"> {totalWood} </span>
            </td>
            <td>
              <span className="principal-span"> {totalGrass} </span>
            </td>
            <td>
              <span className="principal-span"> {totalStone} </span>
            </td>
            <td>
              <span className="principal-span"> {totalMoney} </span>
            </td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th>
              <span className="principal-span"> Total Gold: </span>
            </th>
            <th>
              <span className="principal-span"> Total Iron: </span>
            </th>
            <th>
              <span className="principal-span"> Total Platinum: </span>
            </th>
            <th>
              <span className="principal-span"> Total Diamond: </span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span className="principal-span"> {totalGold} </span>
            </td>
            <td>
              <span className="principal-span"> {totalIron} </span>
            </td>
            <td>
              <span className="principal-span"> {totalPlatinum} </span>
            </td>
            <td>
              <span className="principal-span"> {totalDiamond} </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Statistics;
