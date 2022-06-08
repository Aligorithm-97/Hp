import { Button, colors } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router-dom";

const Houses = () => {
  let navigate = useNavigate();
  const routeChange1 = () => {
    let path = `Gryffindor`;
    navigate(path);
  };
  const routeChange2 = () => {
    let path = `Hufflepuff`;
    navigate(path);
  };
  const routeChange3 = () => {
    let path = `Ravenclaw`;
    navigate(path);
  };
  const routeChange4 = () => {
    let path = `Slytherin`;
    navigate(path);
  };
  return (
    <div style={{ backgroundColor: "black", height: "855px" }}>
      <button
        name="Gryffindor"
        onClick={routeChange1}
        style={{
          marginTop: "2rem",
          height: "25rem",
          width: "25rem",
          backgroundColor: "black",
          color: "yellow",
          fontSize: "75px",
          textAlign: "center",
          marginLeft: "35rem",
        }}
      >
        Gryffindor
      </button>
      <button
        onClick={routeChange2}
        name="Hufflepuff"
        style={{
          height: "25rem",
          width: "25rem",
          backgroundColor: "black",
          color: "yellow",
          fontSize: "75px",
        }}
      >
        Hufflepuff
      </button>
      <br />
      <button
        onClick={routeChange3}
        name="Ravenclaw"
        style={{
          height: "25rem",
          width: "25rem",
          backgroundColor: "black",
          color: "yellow",
          fontSize: "75px",
          marginLeft: "35rem",
        }}
      >
        Ravenclaw
      </button>
      <button
        onClick={routeChange4}
        name="Slytherin"
        style={{
          height: "25rem",
          width: "25rem",
          backgroundColor: "black",
          color: "yellow",
          fontSize: "75px",
        }}
      >
        Slytherin
      </button>
    </div>
  );
};

export default Houses;
