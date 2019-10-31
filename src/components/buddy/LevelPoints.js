import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const BorderLinearProgress = withStyles({
  root: {
    height: 20,
    borderRadius: 20,
    border: "5px solid black"
  },
  bar: {}
})(LinearProgress);

export default class LevelPoints extends React.Component {
  render() {
    const { points, level } = this.props;
    return (
      <div className="level-points" style={{ width: "200px", padding: "8px" }}>
        <Grid container direction="column">
          <Grid item container xs={12} justify="space-between">
            <Grid item>
              <Typography variant="caption" color="white">
                Lvl {level}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption"> {points} / 50</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <BorderLinearProgress
              variant="determinate"
              color="secondary"
              value={points * 2}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
