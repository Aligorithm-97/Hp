import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
const HufflepuffItem = ({ huff }) => {
  var img = " ";
  if (huff.image !== "") {
    img = huff.image;
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
          Name : {huff.name}
          <br></br>
          Spicies : {huff.species}
          <br></br>
          House : {huff.house}
          <br></br>
          Patronus : {huff.patronus}
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default HufflepuffItem;
