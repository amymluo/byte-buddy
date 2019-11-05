import React from "react";
import LevelPoints from "./LevelPoints";
import "./Buddy.scss";
import { Grid, Fab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "./Avatar";
import cx from "classnames";

export default function Buddy(props) {
  const { buddyInfo, feedPoints, minimized } = props;
  const level = Math.floor(buddyInfo.points / 50) + 1;
  const points = buddyInfo.points % 50;

  return (
    <div className={cx("buddy-container", { minimized })}>
      <div
        className="buddy-bg"
        style={{ backgroundImage: `url(${buddyInfo.background})` }}
      >
        <Grid
          container
          justify="space-between"
          alignItems="flex-start"
          className="buddy-info"
        >
          <Grid item>
            <LevelPoints level={level} points={points} />
            <h2 className="buddy-name">{buddyInfo.name}</h2>
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
              <IconButton style={{ padding: 0 }} onClick={feedPoints}>
                <img src="assets/purple_hex.png" alt="hex" width="48px" />
              </IconButton>
            </Grid>
            <Grid item className={cx({ "no-menu": minimized })}>
              <Fab color="secondary" aria-label="menu">
                <MenuIcon />
              </Fab>
            </Grid>
          </Grid>
        </Grid>
        <Avatar level={level} minimized={minimized} />
      </div>
    </div>
  );
}
