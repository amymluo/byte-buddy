import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { borderColor } from '@material-ui/system';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "10px"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: 'black',
  },
  align: {
    alignItems: 'center',
    border: "1px solid #c3c3c3",
  },
  iconHolder: {
    display: 'flex'
  },
  alignSelf: {
    alignSelf: 'center'
  },
  buttonSolved: {
    backgroundColor: "white",
    color: "#ff663e",
    borderColor: "#ff663e"
  },
  buttonUnsolved: {
    backgroundColor: "#ff663e",
    color: "white"
  }
}));

export default function ProblemListComponent(props) {
  const classes = useStyles();

  const solveButton = props.isSolved ? "outlined" : "contained";
  const solveButtonClass = props.isSolved ? classes.buttonSolved : classes.buttonUnsolved;

  const isShown = props.isShown;
  

  return (


    <div className={classes.root}>
        { isShown &&
      <Grid container spacing={1} className={classes.align}>
        <Grid item xs={12} sm={5}>
          <p className={classes.paper} color={'black'}>{props.name}</p>
        </Grid>
        <Grid item xs={12} sm={3}>
          <p className={classes.paper} style={{color: 'grey'}}>{props.difficulty}</p>
        </Grid>
        <Grid item xs={12} sm={2}>
        <div className={classes.iconHolder}>
          <img className={classes.alignSelf} src="assets/purple_hex.png" alt="points" width={20} />
          <p className={classes.paper} color={'black'}>{props.points}</p>
        </div>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button variant={solveButton} color="primary" className={solveButtonClass}>
            SOLVE
          </Button>
        </Grid>
      </Grid>
        }
    </div>

  );
}
