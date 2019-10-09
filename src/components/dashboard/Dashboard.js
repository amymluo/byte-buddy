import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
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
          hello world
        </Grid>
      </div>
    );
  }
}
