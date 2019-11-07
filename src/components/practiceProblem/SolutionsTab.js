import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";


import "./HintTab.scss";

import { SOLUTIONS } from "../../constants/problems";

function Hint(props) {
  return(
    <div className={"hint-container"}>{props.hint}</div>
  );
}


// Problem Tab Container
export default class SolutionsTab extends React.Component {

  getPracticeProblem(id) {
    return SOLUTIONS.find((p) => {
    return p.id == id;
    });
  }

  render() {

    const { problemId } = this.props;
    const solution = this.getPracticeProblem(problemId).solutions;
    console.log(solution + problemId);
    console.log(SOLUTIONS)

    let newText = solution[0].split('\n').map((item, i) => {
    return <p key={i}>{item}</p>;
});

    return (
      <div className={"hint-tab"}>
      {newText}
      </div>
    );
  }
}
