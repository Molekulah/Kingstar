import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";

const Resources = ({
  wood,
  stone,
  grass,
  addWood,
  addStone,
  addGrass,
  addLevel,
}) => {
  return (
    <div>
      <h1 className="principal-h1">Get Resources</h1>
      <br />
      <span className="principal-span"> Grass </span> <br />
      <span className="principal-span"> Grass amount: {grass} </span> <br />
      <Button variant="primary" onClick={addGrass}>
        Collect grass
      </Button>
      <br />
      <span className="principal-span"> Wood </span> <br />
      <span className="principal-span"> Wood amount: {wood} </span> <br />
      <Button variant="primary" onClick={addWood}>
        Punch a tree
      </Button>
      <br />
      <span className="principal-span"> Stone </span> <br />
      <span className="principal-span"> Stone amount: {stone} </span> <br />
      <Button variant="primary" onClick={addStone}>
        Break a stone
      </Button>
    </div>
  );
};

export default Resources;
