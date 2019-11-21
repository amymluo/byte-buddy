import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import PracticeList from "./PracticeList";
import FilterBox from "./FilterBox";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";

import "./Practice.scss";
import Buddy from "../buddy/Buddy";

const isSolved = ["Unsolved", "Solved"];
const isSolvedTitle = "Status";
const difficulty = ["Easy", "Medium", "Hard"];
const difficultyTitile = "Difficulty";
const topics = ["Array", "String", "HashTable"];
const topicsTitle = "Topics";

const getUrlParameter = name => {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  let results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

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
  constructor(props) {
    super(props);
    this.state = {
      category: getUrlParameter("category"),
      questions: props.problemData
    };

  }

  myCallback = dataFromChild => {
    this.filterQuestions(dataFromChild);
  };

  filterQuestions(data) {
    const q = this.state.questions;
    let allIsNotShown = true;
    if (data.title === isSolvedTitle) {
      q.forEach(function(e) {
        e.isShown = false;
        if (data.val["Solved"] && e.isSolved) {
          e.isShown = true;
          allIsNotShown = false;
        }
        if (data.val["Unsolved"] && !e.isSolved) {
          e.isShown = true;
          allIsNotShown = false;
        }
        // if (!data.val["Solved"] && !data.val["Unsolved"]) {
        //   e.isShown = true;
        // }
      });
    } else if (data.title == difficultyTitile) {
      q.forEach(function(e) {
        e.isShown = false;
        if (data.val["Easy"] && e.difficulty == "Easy") {
          console.log("here" + e.isSolved + e.name);
          e.isShown = true;
          allIsNotShown = false;
        }
        if (data.val["Medium"] && e.difficulty == "Medium") {
          e.isShown = true;
          allIsNotShown = false;
        }
        if (data.val["Hard"] && e.difficulty == "Hard") {
          e.isShown = true;
          allIsNotShown = false;
        }
        // if (!data.val["Easy"] && !data.val["Medium"] && !data.val["Hard"]) {
        //   e.isShown = true;
        // }
      });
    }

    if (allIsNotShown) {
      q.forEach(function(e) {
        e.isShown = true;
      });
    }

    this.setState({ questions: q });
  }

  render() {
    // const input = InputWithIcon();
    const input = null;
    const { category } = this.state;

    return (
      <div className={"practice"}>
        <Navbar activeTab={"practice"} userInfo={this.props.userInfo} />
        <Grid
        container
        direction={"row"}
        className={"content"}
        spacing={6}
        justify={"space-between"}
      >

        <h1 style={{paddingLeft: "24px", color: "#6d15dc"}}>Practice</h1>
        <Grid
          container
          direction={"row"}
          className={"content"}
          spacing={6}
          style={{ width: "100%" }}
        >
          <Grid item md={8} lg={8}>
            <Grid container direction={"row"} alignItems="center">
              <h3 style={{ marginRight: "50px" }}>{category}</h3>
              {input}
            </Grid>
            <PracticeList category={category} problems={this.state.questions} />
          </Grid>
          <Grid item md={4}>
            <Buddy
              buddyInfo={this.props.userInfo.buddy}
              feedPoints={this.props.feedPoints}
              minimized={true}
            />
            <h2 style={{ marginLeft: "24px" }}>Filter</h2>
            <FilterBox
              values={isSolved}
              title={isSolvedTitle}
              callbackFromParent={this.myCallback}
            />
            <hr />
            <FilterBox
              values={difficulty}
              title={difficultyTitile}
              callbackFromParent={this.myCallback}
            />
            {/* <hr />
            <FilterBox
              values={topics}
              title={topicsTitle}
              callbackFromParent={this.myCallback}
            /> */}
          </Grid>
        </Grid>
        </Grid>
      </div>

    );
  }
}
