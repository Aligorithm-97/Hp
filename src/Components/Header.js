import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  app: {
    backgroundColor: "black",
  },
  link: {
    textDecoration: "none",
    color: "yellow",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "white",
      borderBottom: "1px solid white",
    },
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.app} position="static">
      <CssBaseline />
      <Toolbar>
        <Link to="/" className={classes.link}>
          <Typography variant="h4">🗲 Hp Wiki 🗲</Typography>
        </Link>
        <div className={classes.navlinks}>
          <Link to="/Houses" className={classes.link}>
            🗲Houses🗲
          </Link>
          <Link to="/CharacterList" className={classes.link}>
            🗲Characters🗲
          </Link>
          <Link to="/Spells" className={classes.link}>
            🗲Spells🗲
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
