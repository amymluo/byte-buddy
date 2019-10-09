import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import "./DailyChallenge.scss";
import { Card, Collapse, IconButton, CardContent } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
}));
export default function DailyChallenge() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={"daily-challenge"} width="450px">
      <CardContent className={"daily-challenge-content"}>
        <h1>Daily Challenge!</h1>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* Todo: populate question */}
        <CardContent>this is where the daily challenge goes</CardContent>
      </Collapse>
    </Card>
  );
}
