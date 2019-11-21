import React, { useState } from "react";
import LevelPoints from "./LevelPoints";
import "./Buddy.scss";
import {
  Grid,
  Fab,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "./Avatar";
import cx from "classnames";

export default function Buddy(props) {
  const { buddyInfo, feedPoints, minimized } = props;
  const [hasNoPoints, setNoPoints] = useState(false);
  const level = Math.floor(buddyInfo.points / 50) + 1;
  const points = buddyInfo.points % 50;

  const feedBuddyPoints = () => {
    const hasPoints = feedPoints();
    if (!hasPoints) {
      setNoPoints(true);
    }
  };

  const handleClose = () => {
    setNoPoints(false);
  };

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
              <Tooltip title="Feed Buddy">
                <IconButton style={{ padding: 0 }} onClick={feedBuddyPoints}>
                  <img src="assets/purple_hex.png" alt="hex" width="48px" />
                </IconButton>
              </Tooltip>
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
      <Dialog
        open={hasNoPoints}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"No Hex Points Available"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have no points to feed your Buddy. Try solving more practice
            problems to earn more points.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
