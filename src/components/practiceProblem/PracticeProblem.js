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
import { PROBLEMS } from "../../constants/problems";
import "./PracticeProblem.scss";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Slide from "@material-ui/core/Slide";
import { Redirect } from "react-router-dom";

//Transition for dialog on button click
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
      activeTabIndex: 0,
      isWarningModalOpen: false,
      toPlace: false
    };
  }

  handleLocationChange = () => {
    this.setState({
      toPlace: true
    });
  };

  toggleWarningModalState = setToBool => {
    this.setState({
      isWarningModalOpen: setToBool
    });
  };

  getPracticeProblem(id) {
    return PROBLEMS.find(p => {
      return p.id == id;
    });
  }

  getPracticeProblemDifficult(id, problems) {
    return problems.find(p => {
      return p.id == id;
    });
  }

  handleChange = (event, newValue) => {
    this.setState({ activeTabIndex: newValue });
  };

  render() {
    console.log("here: " + this.props.problemData);
    const problemId = getUrlParameter("problem");
    const category = getUrlParameter("category");
    const problem = this.getPracticeProblem(problemId);
    const problemDifficulty = this.getPracticeProblemDifficult(
      problemId,
      this.props.problemData
    );
    const value = this.state.activeTabIndex;
    const problemTabView = (
      <ProblemTab
        problem={problem}
        problemId={problemId}
        points={problemDifficulty.points}
        addPoints={this.props.addPoints}
        problemData={this.props.problemData}
        setProblemSolved={this.props.setProblemSolved}
      />
    );
    const hintTabView = <HintTab problemId={problemId} />;
    const solutionTabView = <SolutionsTab problemId={problemId} />;

    if (this.state.toPlace === true) {
      let go = "/practiceList?category=" + category;
      return <Redirect to={"/practiceList"} />;
    }
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
            <div
              className="backButton"
              onClick={() => this.toggleWarningModalState(true)}
            >
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
            <TabPanel value={value} index={2} view={solutionTabView} />
          </Grid>
          <Grid item md={4}>
            <Buddy
              buddyInfo={this.props.userInfo.buddy}
              feedPoints={this.props.feedPoints}
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

        <Dialog
          className={"shop-item-dialog"}
          open={this.state.isWarningModalOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.toggleWarningModalState(false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            Are you sure you want to go back?
          </DialogTitle>
          <DialogContent style={{ width: "300px" }}>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <p>If you go back, all of your work won't be saved.</p>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                this.toggleWarningModalState(false);
              }}
              color="primary"
            >
              Cancel
            </Button>

            <Button
              onClick={() => {
                this.handleLocationChange();
              }}
            >
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
