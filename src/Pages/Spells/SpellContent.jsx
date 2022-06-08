import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./spell.css";
const SpellContent = ({ spell }) => {
  return (
    <Card
      className="single-spell"
      style={{ width: "20rem", backgroundColor: "black" }}
    >
      <CardActionArea>
        <CardContent style={{ fontSize: "25px", color: "yellow" }}>
          {spell.name}
          {spell.type}
          {spell.effect}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default SpellContent;
