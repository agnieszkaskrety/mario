import { useState } from "react";
import { init } from "@noriginmedia/norigin-spatial-navigation";
import "./App.css";
import ColorName from "./components/ColorName";
import Grid from "./components/Grid";
import Form from "./components/Form";

init();

function App() {
  const [character, setCharacter] = useState({
    name: "",
    color: "#ffffff",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="mainContainer">
      {/*  Left side - Form */}
      <div>
        <Form handleCharacterChange={handleChange} character={character} />

        {character.color ? <ColorName color={character.color} /> : null}
      </div>

      {/*  Right side - Grid */}
      <div>
        <p className="name" style={{ color: character.color }}>
          {character.name}
        </p>
        <div className="gridContainer">
          <Grid character={character} />
        </div>
      </div>
    </div>
  );
}

export default App;
