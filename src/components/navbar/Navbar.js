import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./Navbar.scss";
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <Grid
        className={"navbar"}
        container
        justify={"space-between"}
        alignItems={"center"}
      >
        <Grid
          className={"left"}
          container
          item
          justify={"flex-start"}
          alignItems={"center"}
          direction={"row"}
          xs={8}
          spacing={10}
        >
          {/* Logo */}
          <Grid item>
            <Link to="/dashboard">
              <img src={"/assets/bb_logo.png"} alt={"logo"} width={180} />
            </Link>
          </Grid>
          <Grid
            item
            className={this.props.activeTab === "dashboard" ? "active" : null}
          >
            <Link to="/dashboard">DASHBOARD</Link>
          </Grid>
          <Grid
            item
            className={this.props.activeTab === "listings" ? "active" : null}
          >
            <Link to="/dashboard">PRACTICE</Link>
          </Grid>
          <Grid
            item
            className={this.props.activeTab === "sitters" ? "active" : null}
          >
            <Link to="/dashboard">PARTS SHOP</Link>
          </Grid>
        </Grid>
        {/* User Profile */}
        <Grid item className={"profile"}>
          <span>Amy Luo</span>
        </Grid>
      </Grid>
    );
  }
}
