import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SlytherinItem from "./SlytherinItem";
const Slytherin = () => {
  const [slys, setSlys] = useState([]);

  const fetchSlys = async () => {
    const response = await axios.get(
      "http://hp-api.herokuapp.com/api/characters/house/slytherin"
    );
    setSlys(response.data);
  };

  useEffect(() => {
    fetchSlys();
  }, []);

  return (
    <div className="spell-list">
      <ul>
        {slys.map((sly, idx) => (
          <li>
            <SlytherinItem sly={sly} key={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Slytherin;
