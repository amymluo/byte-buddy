import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import PartsItem from "./PartsItem/PartsItem";
import { items } from "../../data/items";

import "./PartsShop.scss";
import Buddy from "../buddy/Buddy";

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
    const { canBuy, buyItem } = this.props;
    return (
      <div className={"parts-shop"}>
        <Navbar activeTab={"shop"} userInfo={this.props.userInfo} />
        <Grid
          container
          direction={"row"}
          className={"content"}
          spacing={6}
          style={{ width: "100%", margin: "0" }}
        >
          <Grid
            container
            item
            direction={"row"}
            alignItems="center"
            spacing={2}
            md={8}
          >
            <Grid item>
              <h1 style={{ color: "#6D15DC" }}>Parts Shop</h1>
            </Grid>
            <Grid
              item
              container
              direction={"row"}
              className={"listing"}
              spacing={4}
            >
              {items.map(item => {
                return (
                  <Grid item>
                    <PartsItem
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      canBuy={canBuy}
                      buyItem={buyItem}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Buddy
              buddyInfo={this.props.userInfo.buddy}
              feedPoints={this.props.feedPoints}
              minimized={true}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
