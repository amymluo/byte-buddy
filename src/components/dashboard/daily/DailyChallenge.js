import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import stamp from "./img/stamp.png";
import unfilledStamp from "./img/stamp_empty.png";
import completeStamp from "./img/stamp_complete.gif";
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
  Button,
  Modal
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
  const [modalOpened, setModalState] = React.useState(false);
  const [userHasCompleted, setCompleted] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleUserCompletion = () => {
    setCompleted(true);
  };

  const handleModalState = () => {
    /* TODO: prevent user from submitting again after refreshing/reentering the page */
    setModalState(!modalOpened);
    handleUserCompletion();
  };

  const isCorrectAnswer = () => {
    // console.log(value);
    // return false;
    return value === "2";
  };
  return (
    <Card className={"daily-challenge"} width="450px">
      <CardContent
        className={"daily-challenge-content"}
        onClick={handleExpandClick}
      >
        <h1>Daily Challenge!</h1>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
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
          <div className={`multiple-choice ${userHasCompleted ? 'mc--completed' : '' }`}>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
              disabled={userHasCompleted}
                value="1"
                control={<Radio />}
                label="Answer 1"
              />
              <FormControlLabel
              disabled={userHasCompleted}
                value="2"
                control={<Radio />}
                label="Answer 2"
              />
              <FormControlLabel
              disabled={userHasCompleted}
                value="3"
                control={<Radio />}
                label="Answer 3"
              />
              <FormControlLabel
              disabled={userHasCompleted}
                value="4"
                control={<Radio />}
                label="Answer 4"
              />
            </RadioGroup>
            </div>

            <Button
              disabled={userHasCompleted}
              variant="contained"
              color="secondary"
              onClick={handleModalState}
            >
              {userHasCompleted ? "Challenge Completed" : "Submit" }
            </Button>

            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={modalOpened}
              onClose={handleModalState}
            >
              <div className="popup">
                <h2 id="simple-modal-title">
                  {isCorrectAnswer()
                    ? "Great work!"
                    : "Good try, but not quite..."}
                </h2>
                <p id="simple-modal-description">
                  {/* Pull an explanation of answer here */}
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
                <div className="popup_stamps">
                  <img src={stamp} />
                  <img src={stamp} />
                  <img src={stamp} />
                  <img src={completeStamp} />
                  <img src={unfilledStamp} />
                  <img src={unfilledStamp} />
                </div>

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleModalState}
                >
                  Close
                </Button>
              </div>
            </Modal>
        </CardContent>
      </Collapse>
    </Card>
  );
}