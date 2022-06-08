import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import HufflepuffItem from "./HufflepuffItem";
const Gryffindor = () => {
  const [huffs, setHuffs] = useState([]);

  const fetchHuffs = async () => {
    const response = await axios.get(
      "http://hp-api.herokuapp.com/api/characters/house/hufflepuff"
    );
    setHuffs(response.data);
  };

  useEffect(() => {
    fetchHuffs();
  }, []);

  return (
    <div className="spell-list">
      <ul>
        {huffs.map((huff, idx) => (
          <li>
            <HufflepuffItem huff={huff} key={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Gryffindor;
