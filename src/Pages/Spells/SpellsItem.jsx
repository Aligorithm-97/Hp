import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./spell.css";
import { Link, useNavigate } from "react-router-dom";
import SpellContent from "./SpellContent";
const SpellsItem = ({ spell }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    <Link to={`/SpellContent/${spell.name}`}></Link>;
  };
  <SpellContent spell={spell}></SpellContent>;
  return (
    <Card
      onClick={routeChange}
      className="single-spell"
      style={{ height: "10rem", width: "20rem", backgroundColor: "black" }}
    >
      <CardActionArea>
        <CardContent style={{ fontSize: "25px", color: "yellow" }}>
          Name : {spell.name}
          <br />
          Type : {spell.type}
          <br />
          Effect : {spell.effect}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SpellsItem;
