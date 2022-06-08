import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import "./character.css";
const CharacterItem = ({ character }) => {
  var img = " ";
  if (character.image !== "") {
    img = character.image;
  } else {
    img =
      "https://www.freepnglogos.com/uploads/hogwarts-logo-png/hhogwarts-logo-ome-hufflepuff-house-homepage-crest-building-4.png";
  }
  return (
    <Card
      style={{ borderRadius: "1rem", backgroundColor: "black" }}
      className="single-character"
    >
      <CardActionArea>
        <CardMedia style={{ height: "25rem" }} image={img} />
        <CardContent style={{ color: "yellow" }}>
          Name : {character.name}
          <br></br>
          Spicies : {character.species}
          <br></br>
          House : {character.house}
          <br></br>
          Patronus : {character.patronus}
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default CharacterItem;
