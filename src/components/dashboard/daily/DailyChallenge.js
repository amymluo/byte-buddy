import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import "./DailyChallenge.scss";
import {
  Card,
  Collapse,
  IconButton,
  CardContent,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button
} from "@material-ui/core";
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
  const [value, setValue] = React.useState("1");

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = event => {
    setValue(event.target.value);
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
          <ExpandMoreIcon fontSize="large" color="secondary" />
        </IconButton>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {/* Todo: populate question */}
        <CardContent>
          <div className="question">
            Irc rm -rf segfault hello world bit try catch kilo boolean wannabee
            fail memory leak sudo. Overflow tunnel in overflow firewall void
            tarball int wombat hexadecimal throw over clock if d00dz port
            terminal private headers packet sniffer. James T. Kirk mailbomb perl
            malloc Linus Torvalds default gobble.
          </div>
          <div className="multiple-choice">
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Answer 1"
              />
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="Answer 2"
              />
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="Answer 3"
              />
              <FormControlLabel
                value="4"
                control={<Radio />}
                label="Answer 4"
              />
            </RadioGroup>
            <Button variant="contained" color="secondary">
              Submit
            </Button>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}
