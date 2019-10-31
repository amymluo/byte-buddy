import React from "react";
import LevelPoints from "./LevelPoints";
import "./Buddy.scss";
import { Grid, Fab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "./Avatar";

export default class Buddy extends React.Component {
  state = {
    name: "Bits",
    level: 1,
    points: 20,
    background: "assets/bg.png"
  };

  render() {
    const { name, level, points, background } = this.state;
    return (
      <div className="buddy-container">
        <div
          className="buddy-bg"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Grid
            container
            justify="space-between"
            alignItems="flex-start"
            className="buddy-info"
          >
            <Grid item>
              <LevelPoints level={level} points={points} />
              <h2 className="buddy-name">{name}</h2>
            </Grid>
            <Grid
              item
              container
              direction="row"
              spacing={2}
              xs={5}
              justify="flex-end"
            >
              <Grid item>
                <IconButton style={{ padding: 0 }}>
                  <img src="assets/purple_hex.png" alt="hex" width="48px" />
                </IconButton>
              </Grid>
              <Grid item>
                <Fab color="secondary" aria-label="menu">
                  <MenuIcon />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
          <Avatar level={level} />
        </div>
      </div>
    );
  }
}
