import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  align: {
    alignItems: 'center'
  }
}));

export default function ProblemListComponent(props) {
  const classes = useStyles();

  const solveButton = props.isSolved ? "outlined" : "contained";

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className={classes.align}>
        <Grid item xs={12} sm={6}>
          <p className={classes.paper}>{props.name}</p>
        </Grid>
        <Grid item xs={12} sm={1}>
          <p className={classes.paper}>{props.difficulty}</p>
        </Grid>
        <Grid item xs={12} sm={2}>
          <p className={classes.paper}>{props.points}</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant={solveButton} color="primary" className={classes.button}>
            SOLVE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
