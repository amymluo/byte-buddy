import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";

import "./PartsShop.scss";

// Parts Shop Container
export default class PartsShop extends React.Component {
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
      <div className={"parts-shop"}>
        <Navbar activeTab={"shop"} />
        <Grid container direction={"column"} className={"content"} spacing={6}>
          <Grid item>
            <h1>Parts Shop</h1>
          </Grid>
        </Grid>
      </div>
    );
  }
}
