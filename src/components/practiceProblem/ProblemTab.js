import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import "./ProblemTab.scss";
import LanguageSelect from "./LanguageSelect";

// Problem Tab Container
export default class ProblemTab extends React.Component {
  render() {
    const { problem } = this.props;
    return (
      <div className={"problem-tab"}>
        <p>{problem.problemStatement}</p>

        <h2 className="bold">Input Format:</h2>
        <p>{problem.inputFormat}</p>

        <h2 className="bold">Output Format:</h2>
        <p>{problem.outputFormat}</p>

        <h2 className="bold">Sample Input</h2>
        <div className="sample_box">
          <p>{problem.sampleInput}</p>
        </div>

        <h2 className="bold">Sample Output</h2>
        <div className="sample_box">
          <p>{problem.sampleOutput}</p>
        </div>

        <LanguageSelect />

        <TextField
          className={"code_box"}
          multiline={true}
          rows={10}
          rowsMax={10}
        />

        <div className={"button_box"}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
          <Button>
            <PlayArrowIcon />
            Run Code
          </Button>
        </div>
      </div>
    );
  }
}
