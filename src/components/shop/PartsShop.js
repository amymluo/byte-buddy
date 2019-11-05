import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import PartsItem from "./PartsItem/PartsItem";
import { items } from "../../data/items";

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
    const { canBuy, buyItem } = this.props;
    return (
      <div className={"parts-shop"}>
        <Navbar activeTab={"shop"} userInfo={this.props.userInfo} />
        <Grid
          container
          direction={"column"}
          className={"content"}
          spacing={6}
          style={{ width: "100%" }}
        >
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
            {items.map(item => {
              return (
                <Grid item xs={3}>
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
      </div>
    );
  }
}
