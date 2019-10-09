import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";

import "./Practice.scss";

// Practice Tab Container
export default class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={"practice"}>
        <Navbar activeTab={"practice"} />
        <Grid container direction={"column"} className={"content"} spacing={6}>
          <Grid item>
            <h1>Practice</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}
