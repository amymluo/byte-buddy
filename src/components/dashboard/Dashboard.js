import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import DailyChallenge from "./daily/DailyChallenge";
import CategoryCard from "../practice/categories/CategoryCard";
import Buddy from "../buddy/Buddy";

import "./Dashboard.scss";

// Dashboard Container
export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={"dashboard"}>
        <Navbar activeTab={"dashboard"} />
        <Grid
          container
          direction={"row"}
          className={"content"}
          spacing={6}
          justify={"space-between"}
        >
          <Grid
            container
            item
            className="dashboard-problems"
            sm={7}
            direction="row"
          >
            <Grid item xs={12}>
              <DailyChallenge />
            </Grid>
            <Grid item xs={12}>
              <h2 style={{ marginTop: "36px", marginBottom: "24px" }}>
                CONTINUE PRACTICE
              </h2>
            </Grid>
            <Grid container item spacing={3} direction="row" xs={12}>
              <Grid item>
                <CategoryCard />
              </Grid>
              <Grid item>
                <CategoryCard />
              </Grid>
              <Grid item>
                <CategoryCard />
              </Grid>
              <Grid item>
                <CategoryCard />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={5}>
            {/* Todo: Replace with buddy component */}
            {/* <img src="/assets/buddy.png" alt="Byte Buddy" width="100%" /> */}
            <Buddy />
          </Grid>
        </Grid>
      </div>
    );
  }
}
