import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { borderColor } from "@material-ui/system";
import { Redirect } from 'react-router-dom';

import "./ProblemListComponent.scss";


export default function ProblemListComponent(props) {
  const solveButton = props.isSolved ? "outlined" : "contained";
  const solveButtonClass = props.isSolved
    ? "buttonSolved"
    : "classes.buttonUnsolved";

  const isShown = props.isShown;



  return (
    <div className={"root"}>
      {isShown && (
        <Grid container spacing={1} className={"align"}>
          <Grid item xs={12} sm={5}>
            <p className={"paper"} color={"black"}>
              {props.name}
            </p>
          </Grid>
          <Grid item xs={12} sm={3}>
            <p className={"paper"} style={{ color: "grey" }}>
              {props.difficulty}
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
                {props.points}
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={2} className={"buttonHolder"}>
            <Button
              variant={solveButton}
              color="primary"
              className={solveButtonClass}
              onClick={() => {
        window.location.href = "/problem?problem=" + props.id + "&category=" + props.category ;
    }}
            >
              SOLVE
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
}
