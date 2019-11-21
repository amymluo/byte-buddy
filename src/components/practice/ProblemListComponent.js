import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { borderColor } from "@material-ui/system";
import { Redirect } from 'react-router-dom';

import "./ProblemListComponent.scss";


export default class ProblemListComponent extends React.Component {

  state = {
    toPlace: false
  };

  handleChange = () => {
    this.setState({
      toPlace: true
    })
  }


  render() {
  
    
  const solveButton = this.props.isSolved ? "outlined" : "contained";
  const solveButtonClass = this.props.isSolved
    ? "buttonSolved"
    : "classes.buttonUnsolved";

  const buttonMessage = this.props.isSolved ? "Solved" : "Solve";

  const isShown = this.props.isShown;

  if (this.state.toPlace === true) {
    let go = "/problem?problem=" + this.props.id + "&category=" + this.props.category;
      return(<Redirect to={go}/>);
  }

  



  return (
    <div className={"root"}>
      {isShown && (
        <Grid container spacing={1} className={"align"}>
          <Grid item xs={12} sm={5}>
            <p className={"paper"} color={"black"}>
              {this.props.name}
            </p>
          </Grid>
          <Grid item xs={12} sm={3}>
            <p className={"paper"} style={{ color: "grey" }}>
              {this.props.difficulty}
            </p>
          </Grid>
          <Grid item xs={12} sm={2}>
            <div className={"iconHolder"}>
              <img
                className={"alignSelf"}
                src="assets/purple_hex.png"
                alt="points"
                width={20}
              />
              <p className={"paper"} color={"black"}>
                {this.props.points}
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={2} className={"buttonHolder"}>
            <Button
              variant={solveButton}
              color="primary"
              className={solveButtonClass}
              onClick={() => {
        this.handleChange();
    }}
            >
              {buttonMessage}
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
}
