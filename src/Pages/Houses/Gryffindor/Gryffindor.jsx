import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GryffindorItem from "./GryffindorItem";
const Gryffindor = () => {
  const [gryfs, setGryfs] = useState([]);

  const fetchGryfs = async () => {
    const response = await axios.get(
      "http://hp-api.herokuapp.com/api/characters/house/gryffindor"
    );
    setGryfs(response.data);
  };

  useEffect(() => {
    fetchGryfs();
  }, []);

  return (
    <div className="spell-list">
      <ul>
        {gryfs.map((gryf, idx) => (
          <li>
            <GryffindorItem gryf={gryf} key={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Gryffindor;
