import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  navPoints: {
    width: "80px",
    height: "35px",
    borderRadius: "16px",
    border: "solid 1px white",
    padding: "8px 13px",
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box"
  },
  hex: {
    marginRight: "8px"
  }
}));

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <div className={classes.navPoints}>
      <img
        className={classes.hex}
        src="assets/hex_points.png"
        alt="points"
        width={20}
      />
      {props.points}
    </div>
  );
}
