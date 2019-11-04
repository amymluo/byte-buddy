import React from "react";
import Grid from "@material-ui/core/Grid";

import "./Navbar.scss";
import { Link } from "react-router-dom";
import Points from "./Points";
import { userInfo } from "../../data/user";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Navbar(props) {
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
          className={props.activeTab === "dashboard" ? "active" : null}
        >
          <Link to="/dashboard">DASHBOARD</Link>
        </Grid>
        <Grid item className={props.activeTab === "practice" ? "active" : null}>
          <Link to="/practice">PRACTICE</Link>
        </Grid>
        <Grid item className={props.activeTab === "shop" ? "active" : null}>
          <Link to="/shop">PARTS SHOP</Link>
        </Grid>
      </Grid>
      {/* User Profile */}
      <Grid
        className={"profile"}
        container
        item
        justify={"flex-end"}
        alignItems={"center"}
        direction={"row"}
        spacing={2}
      >
        <Grid item>
          <Points points={userInfo.points} />
        </Grid>
        <Grid item style={{ paddingRight: "0" }}>
          <AccountCircleIcon fontSize="large" />
        </Grid>
        <Grid item>
          <span>{userInfo.name}</span>
        </Grid>
      </Grid>
    </Grid>
  );
}
