import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
const GryffindorItem = ({ gryf }) => {
  var img = " ";
  if (gryf.image !== "") {
    img = gryf.image;
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
          Name : {gryf.name}
          <br></br>
          Spicies : {gryf.species}
          <br></br>
          House : {gryf.house}
          <br></br>
          Patronus : {gryf.patronus}
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
};

export default GryffindorItem;
