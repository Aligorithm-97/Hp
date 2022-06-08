import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const AppLevelContext = React.createContext();
const API = "http://hp-api.herokuapp.com/api";

export const AppLevelProvider = ({ children }) => {
  const [characters, SetCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await axios.get(`${API}/characters`);
    SetCharacters(response.data);
    for (var i = 0; i < characters.length; i++) {
      console.log(characters[i].name);
    }
  };

  return (
    <AppLevelContext.Provider
      value={{
        characters,
        SetCharacters,
        fetchCharacters,
      }}
    >
      {children}
    </AppLevelContext.Provider>
  );
};

export default AppLevelContext;
