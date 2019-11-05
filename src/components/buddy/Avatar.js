import React from "react";
import cx from "classnames";
import { makeStyles } from "@material-ui/core/styles";

const avatarImgs = {
  1: "assets/buddy1.png",
  2: "assets/buddy2.png"
};

export default function Avatar(props) {
  const useStyles = makeStyles(theme => ({
    buddy: {
      backgroundImage: `url(${avatarImgs[props.level]})`,
      width: "250px",
      height: "330px",
      margin: "auto"
    },
    fullSize: {
      marginTop: "75px"
    },
    minimized: {
      marginTop: "-40px"
    }
  }));

  const classes = useStyles();

  return (
    <div
      className={cx(classes.buddy, {
        [classes.minimized]: props.minimized,
        [classes.fullSize]: !props.minimized
      })}
    ></div>
  );
}
