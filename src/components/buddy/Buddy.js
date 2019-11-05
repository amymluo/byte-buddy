import React from "react";
import LevelPoints from "./LevelPoints";
import "./Buddy.scss";
import { Grid, Fab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "./Avatar";

import { userInfo } from "../../data/user";

export default class Buddy extends React.Component {
  state = {
    level: 0,
    points: 0
  };

  componentDidMount() {
    const { points } = userInfo.buddy;
    this.setState({
      level: Math.floor(points / 50) + 1,
      points: points % 50
    });
  }

  feedPoints = () => {
    const { points, buddy } = userInfo;
    if (points > 0) {
      userInfo.points--;
      buddy.points++;

      this.setState({
        level: Math.floor(buddy.points / 50) + 1,
        points: buddy.points % 50
      });
    }
  };

  render() {
    const { level, points } = this.state;
    const { background, name } = userInfo.buddy;
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
                <IconButton style={{ padding: 0 }} onClick={this.feedPoints}>
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
