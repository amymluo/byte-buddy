import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";

import "./Dashboard.scss";

// Dashboard Container
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      pets: [],
      listings: []
    };
  }

  render() {
    return (
      <div className={"dashboard"}>
        <Navbar activeTab={"dashboard"} />
        <Grid container direction={"column"} className={"content"} spacing={6}>
          <Grid item>
            <h1>Dashboard</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}
