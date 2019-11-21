import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { items } from "../../data/items";
import { Paper, Grid, Typography } from "@material-ui/core";

export default function Avatar(props) {
  const useStyles = makeStyles(theme => ({
    paper: {
      width: "268px",
      height: "400px",
      padding: "24px"
    },
    title: {
      marginBottom: "16px"
    },
    item: {
      width: "75px",
      height: "75px",
      border: "solid gray 1px",
      borderRadius: "10px",
      position: "relative"
    },
    itemImg: {
      width: "50px",
      margin: "0",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    },
    itemName: {
      fontSize: "12px"
    }
  }));

  const classes = useStyles();
  const { accessories } = props.buddyInfo;

  return (
    <Paper className={classes.paper}>
      <Typography variant="h4" color="secondary" className={classes.title}>
        Accessories
      </Typography>
      {accessories.length === 0 ? (
        <Typography variant="body1">You have no items</Typography>
      ) : (
        <Grid container spacing={2}>
          {accessories.map(index => {
            return (
              <Grid item key={index}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <div className={classes.item}>
                      <img
                        src={items[index].img}
                        alt={items[index].name}
                        className={classes.itemImg}
                      />
                    </div>
                  </Grid>
                  <Grid item>
                    <div className={classes.itemName}>{items[index].name}</div>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      )}
    </Paper>
  );
}
