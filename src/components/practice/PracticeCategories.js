import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import PracticeList from "./PracticeList";
import FilterBox from "./FilterBox";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

import "./Practice.scss";
import CategoryCard from "../practice/categories/CategoryCard";
import Buddy from "../buddy/Buddy";

function InputWithIcon() {
  return (
    <div>
      <Grid
        container
        spacing={1}
        alignItems="flex-end"
        alignContent="center"
        className={"search"}
      >
        <Grid item>
          <TextField id="input-with-icon-grid" placeholder="Search" />
          <Search />
        </Grid>
      </Grid>
    </div>
  );
}

// Practice Tab Container
export default class Practice extends React.Component {
  render() {
    const input = InputWithIcon();
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
            direction={"row"}
            alignItems="center"
            spacing={2}
            md={8}
          >
            <Grid item>
              <h1>Practice</h1>
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
