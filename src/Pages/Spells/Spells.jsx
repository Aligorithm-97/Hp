import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SpellsItem from "./SpellsItem";

import "./spell.css";
const Spells = () => {
  const [spells, setSpells] = useState([]);

  const fetchSpells = async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/bukinoshita/harry-potter-spells/master/spells.json"
    );
    setSpells(response.data);
  };
  useEffect(() => {
    fetchSpells();
  }, []);
  <input type="text" pla />;
  return (
    <div className="spell-list">
      <ul>
        {spells.map((spell, idx) => (
          <li>
            <SpellsItem spell={spell} key={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Spells;
