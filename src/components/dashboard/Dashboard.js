import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import DailyChallenge from "./daily/DailyChallenge";

import "./Dashboard.scss";

// Dashboard Container
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={"dashboard"}>
        <Navbar activeTab={"dashboard"} />
        <Grid container direction={"row"} className={"content"} spacing={6}>
          <Grid
            container
            item
            className="dashboard-problems"
            md={7}
            direction="column"
          >
            <Grid item>
              <DailyChallenge />
            </Grid>
          </Grid>
          <Grid item md={5}>
            {/* Todo: Replace with buddy component */}
            <img src="/assets/buddy.png" alt="Byte Buddy" width="100%" />
          </Grid>
        </Grid>
      </div>
    );
  }
}
