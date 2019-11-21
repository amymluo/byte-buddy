import React from "react";

import "./HintTab.scss";

import { HINTS } from "../../constants/problems";

function Hint(props) {
  return <div className={"hint-container"}>{props.hint}</div>;
}

// Problem Tab Container
export default class HintTab extends React.Component {
  getPracticeProblem(id) {
    return HINTS.find(p => {
      return p.id == id;
    });
  }

  render() {
    const { problemId } = this.props;
    const problemHints = this.getPracticeProblem(problemId).hints;

    return (
      <div className={"hint-tab"}>
        {problemHints.map(hint => (
          <Hint hint={hint} />
        ))}
      </div>
    );
  }
}
