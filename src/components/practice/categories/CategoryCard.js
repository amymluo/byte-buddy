import React from "react";

import "./CategoryCard.scss";
import { Card, CardContent, LinearProgress, Fab } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export default class CategoryCard extends React.Component {
  state = {
    title: "Algorithms",
    numCompleted: 12,
    numChallenges: 50
  };

  render() {
    const { title, numChallenges, numCompleted } = this.state;
    const percentCompleted = (numCompleted / numChallenges) * 100;
    return (
      <Card className={"category-card"}>
        <CardContent className={"category-card-content"}>
          <h1 className="cat-title">{title}</h1>
          <div className="progress">
            <LinearProgress
              variant="determinate"
              value={percentCompleted}
              style={{ width: "80%" }}
            />
            <Fab
              color="secondary"
              aria-label="go"
              style={{ marginTop: "-30px" }}
            >
              <ArrowForwardIosIcon />
            </Fab>
          </div>
          <div className="percent-completed">{`${percentCompleted}% complete`}</div>
          <div className="num-challenges">{`${numCompleted}/${numChallenges} challenges solved`}</div>
        </CardContent>
      </Card>
    );
  }
}
