import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";

import "./Practice.scss";
import CategoryCard from "../practice/categories/CategoryCard";
import Buddy from "../buddy/Buddy";

// Practice Tab Container
export default class Practice extends React.Component {
  render() {
    return (
      <div className={"practice"}>
        <Navbar activeTab={"practice"} userInfo={this.props.userInfo} />
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
            alignItems="flex-start"
            spacing={2}
            md={7}
          >
            <Grid container item spacing={2}>
              <Grid item>
                <h1 style={{ color: "#6D15DC" }}>Practice</h1>
              </Grid>

              <Grid item xs={12}>
                <h2 className="header">POPULAR TOPICS</h2>
              </Grid>
              <Grid container item spacing={3} direction="row" xs={12}>
                <Grid item>
                  <CategoryCard />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={5}>
            <Buddy
              buddyInfo={this.props.userInfo.buddy}
              feedPoints={this.props.feedPoints}
              minimized={false}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
