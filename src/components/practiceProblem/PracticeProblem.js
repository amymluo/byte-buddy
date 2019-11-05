import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Navbar from "../navbar/Navbar";
import ProblemTab from "./ProblemTab";
import HintTab from "./HintTab";
import { PROBLEMS } from "../../constants/problems";

import {useParams} from "react-router-dom";

import "./PracticeProblem.scss";

const getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    let results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function TabPanel(props) {
  const { children, value, index, view, ...other } = props;
  if (value !== index) {
    return (<div></div>);
  }
  else {
    return (
      <div>
      {view}
      </div>
    );
  }

}


// Parts Problem Container
export default class PracticeProblem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0,
    }

  }

  getPracticeProblem(id) {
    return PROBLEMS.find((p) => {
    return p.id == id;
    });
  }

  handleChange = (event, newValue) => {
    this.setState({ activeTabIndex: newValue });
  };

  render() {
    const problemId = getUrlParameter("problem");
    const problem = this.getPracticeProblem(problemId);
    const value = this.state.activeTabIndex;
    const problemTabView = <ProblemTab problem={problem}/>;
    const hintTabView = <HintTab problemId={problemId}/>;



    return (
      <div className={"parts-shop"}>
        <Navbar activeTab={"practice"} />
        <Grid
          container
          direction={"column"}
          className={"content"}
          spacing={6}
        >

      <h1>{problem.name}</h1>

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
          <TabPanel value={value} index={0} view={problemTabView}/>
            <TabPanel value={value} index={1} view={hintTabView}/>
            <TabPanel value={value} index={2}/>

        
        </Grid>
      </div>
    );
  }
}
