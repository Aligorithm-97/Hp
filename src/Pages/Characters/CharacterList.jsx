import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// COMPONENTS
import CharacterItem from "./CharacterItem";
import "./character.css";
const CharacterList = () => {
  const [characters, setCharcters] = useState([]);

  const fetchCharacters = async () => {
    const response = await axios.get(
      "http://hp-api.herokuapp.com/api/characters"
    );
    setCharcters(response.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div
      style={{ marginTop: "0px", backgroundColor: "white" }}
      className="character-list"
    >
      <ul>
        {characters.map((character, idx) => (
          <li>
            {" "}
            <CharacterItem character={character} key={idx} />{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
