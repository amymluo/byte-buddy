import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import DailyChallenge from "./daily/DailyChallenge";
import CategoryCard from "../practice/categories/CategoryCard";
import { makeStyles } from "@material-ui/core/styles";
import Buddy from "../buddy/Buddy";
const useStyles = makeStyles(theme => ({
  content: {
    padding: "24px 8px",
    width: "100%",
    margin: "0"
  },
  header: {
    marginTop: "48px",
    marginBottom: "24px",
    color: "gray",
    fontSize: "18px"
  }
}));

// Dashboard Container
export default function Dashboard(props) {
  const classes = useStyles();

  return (
    <div className={"dashboard"}>
      <Navbar activeTab={"dashboard"} userInfo={props.userInfo} />
      <Grid
        container
        direction={"row"}
        className={classes.content}
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
            <DailyChallenge addPoints={props.addPoints} completeChallenge={props.completeChallenge} isCompleted={props.isCompleted}/>
          </Grid>
          <Grid item xs={12}>
            <h2 className={classes.header}>CONTINUE PRACTICE</h2>
          </Grid>
          <Grid container item spacing={3} direction="row" xs={12}>
            <Grid item>
              <CategoryCard />
            </Grid>
            {/* <Grid item>
              <CategoryCard />
            </Grid>
            <Grid item>
              <CategoryCard />
            </Grid>
            <Grid item>
              <CategoryCard />
            </Grid> */}
          </Grid>
        </Grid>
        <Grid item sm={5}>
          <Buddy
            buddyInfo={props.userInfo.buddy}
            feedPoints={props.feedPoints}
          />
        </Grid>
      </Grid>
    </div>
  );
}
