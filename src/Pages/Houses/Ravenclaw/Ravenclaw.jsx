import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RavenclawItem from "./RavenclawItem";
const Ravenclaw = () => {
  const [ravens, setRavens] = useState([]);

  const fetchRavens = async () => {
    const response = await axios.get(
      "http://hp-api.herokuapp.com/api/characters/house/ravenclaw"
    );
    setRavens(response.data);
  };

  useEffect(() => {
    fetchRavens();
  }, []);

  return (
    <div className="spell-list">
      <ul>
        {ravens.map((raven, idx) => (
          <li>
            <RavenclawItem raven={raven} key={idx} />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Ravenclaw;
