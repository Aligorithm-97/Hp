import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import { useContext, useEffect } from "react";
import AppLevelContext from "./Context/AppLevelContext";
//Components
import CharacterList from "./Pages/Characters/CharacterList";
import Spells from "./Pages/Spells/Spells";
import Homepage from "./Pages/Homepage";
import Houses from "./Pages/Houses/Houses";
//Houses
import Gryffindor from "./Pages/Houses/Gryffindor/Gryffindor";
import Hufflepuff from "./Pages/Houses/Hufflepuff/Hufflepuff";
import Ravenclaw from "./Pages/Houses/Ravenclaw/Ravenclaw";
import Slytherin from "./Pages/Houses/Slytherin/Slytherin";
import SpellContent from "./Pages/Spells/SpellContent";
import Error from "./Pages/Error";
import Player from "./Components/Player";
function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Houses" element={<Houses />} />
        <Route path="/Houses/Gryffindor" element={<Gryffindor />} />
        <Route path="/Houses/Hufflepuff" element={<Hufflepuff />} />
        <Route path="/Houses/Ravenclaw" element={<Ravenclaw />} />
        <Route path="/Houses/Slytherin" element={<Slytherin />} />
        <Route path="/Spells" element={<Spells />} />
        <Route path="/Player" element={<Player />} />

        <Route path="/Spells/SpellContent" element={<SpellContent />} />

        <Route path="/CharacterList" element={<CharacterList />} />
        <Route path="/AppLevelContext" element={<AppLevelContext />} />
        <Route path="*" exact={true} component={<Error />} />
      </Routes>
    </Router>
  );
}
export default App;
