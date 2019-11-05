import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Navbar from "../navbar/Navbar";
import PartsItem from "./PartsItem/PartsItem";

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
          <Grid
            item
            container
            direction={"row"}
            className={"listing"}
            spacing={4}
          >
            <Grid item xs={3}>
              <PartsItem
                img={"/assets/shop/bbcap.png"}
                name={"Baseball Cap"}
                price={10}
              />
            </Grid>
            <Grid item xs={3}>
              <PartsItem
                img={"/assets/shop/cowboyhat.png"}
                name={"Cowboy Hat"}
                price={`testprice`}
              />
            </Grid>
            <Grid item xs={3}>
              <PartsItem
                img={"/assets/shop/crown.png"}
                name={"Crown"}
                price={10}
              />
            </Grid>

            <Grid item xs={3}>
              <PartsItem
                img={"/assets/shop/knithat.png"}
                name={"Knit Hat"}
                price={15}
              />
            </Grid>

            <Grid item xs={3}>
              <PartsItem
                img={"/assets/shop/orangescarf.png"}
                name={"Orange Scarf"}
                price={20}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
