import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Navbar from "../navbar/Navbar";
import ProblemTab from "./ProblemTab";
import HintTab from "./HintTab";
import SolutionsTab from "./SolutionsTab";
import Buddy from "../buddy/Buddy";
import { PROBLEMS, PROBLEM_INFO } from "../../constants/problems";
import "./PracticeProblem.scss";

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const getUrlParameter = name => {
  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
  let regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  let results = regex.exec(window.location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
};

function TabPanel(props) {
  const { value, index, view } = props;
  if (value !== index) {
    return <div></div>;
  } else {
    return <div>{view}</div>;
  }
}

// Parts Problem Container
export default class PracticeProblem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0
    };
  }

  getPracticeProblem(id) {
    return PROBLEMS.find(p => {
      return p.id == id;
    });
  }

  getPracticeProblemDifficult(id) {
    return PROBLEM_INFO.find(p => {
      return p.id == id;
    });
  }

  handleChange = (event, newValue) => {
    this.setState({ activeTabIndex: newValue });
  };

  render() {
    const problemId = getUrlParameter("problem");
    const category = getUrlParameter("category");
    const problem = this.getPracticeProblem(problemId);
    const problemDifficulty = this.getPracticeProblemDifficult(problemId);
    const value = this.state.activeTabIndex;
    const problemTabView = <ProblemTab problem={problem} points={problemDifficulty.points}/>;
    const hintTabView = <HintTab problemId={problemId} />;
    const solutionTabView = <SolutionsTab problemId={problemId}/>;

    return (
      <div className={"practice-problem"}>
        <Navbar activeTab={"practice"} userInfo={this.props.userInfo} />


                  <Grid
        container
        direction={"row"}
        className={"content"}
        spacing={6}
        justify={"space-between"}
      >

          <Grid item md={8} lg={8}>
          <div className="backButton" onClick={() => {
        window.location.href = "/practiceList?category=" + category ;
    }}>
          <ArrowBackIosIcon /> Back
    </div>
                    <h1 className={"header-style"}>{problem.name}</h1>

          <Paper square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Problem" />
              <Tab label="Hints" />
              <Tab label="Solution" />
            </Tabs>
          </Paper>
          <TabPanel value={value} index={0} view={problemTabView} />
          <TabPanel value={value} index={1} view={hintTabView} />
          <TabPanel value={value} index={2} view={solutionTabView}/>
          </Grid>
          <Grid item md={4}>
            <Buddy
              buddyInfo={this.props.userInfo.buddy}
              feedPoints={problemDifficulty.points}
              minimized={true}
            />
            <div className="info-box">
              <p className={"info-box-header"}>DIFFICULTY</p>
              <p>{problemDifficulty.difficulty}</p>
            </div>
            <div className="info-box">
              <p className={"info-box-header"}>POINTS</p>
              <p>{problemDifficulty.points}</p>
            </div>
            <div className="info-box">
              <p className={"info-box-header"}>TOPIC</p>
              <p>{problemDifficulty.topic}</p>
            </div>
          </Grid>

        </Grid>
      </div>
    );
  }
}
