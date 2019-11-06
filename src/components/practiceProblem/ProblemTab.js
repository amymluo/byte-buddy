import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

import "./ProblemTab.scss";
import LanguageSelect from "./LanguageSelect";


//Transition for dialog on button click
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


// Problem Tab Container
export default class ProblemTab extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
  }

  toggleModalState = setToBool => {
    this.setState({
      isModalOpen: setToBool
    });
  };

  render() {
 

    const { problem } = this.props;
    return (

      <div className={"problem-tab"}>
        <p>{problem.problemStatement}</p>

        <h2 className="bold">Input Format:</h2>
        <p>{problem.inputFormat}</p>

        <h2 className="bold">Output Format:</h2>
        <p>{problem.outputFormat}</p>

        <h2 className="bold">Sample Input</h2>
        <div className="sample_box">
          <p>{problem.sampleInput}</p>
        </div>

        <h2 className="bold">Sample Output</h2>
        <div className="sample_box">
          <p>{problem.sampleOutput}</p>
        </div>

        <LanguageSelect/>

        <TextField className={"code_box"} multiline={true} rows={10} rowsMax={10}/>

        <div className={"button_box"}>
            <Button variant="contained" onClick={() => this.toggleModalState(true)}>
            Submit
            </Button>
            <Button>Run Code</Button>

        </div>

        <Dialog
          className={"shop-item-dialog"}
          open={this.state.isModalOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={() => this.toggleModalState(false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">Congrats</DialogTitle>
          <DialogContent style={{ width: "300px" }}>
            <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
            <p>You solved the {problem.name} problem</p>
            </Grid>
        
              <Grid item>
                <div className={"item-price"}>
                  <img src={"/assets/purple_hex.png"} alt="hex points" />
                  <Typography varient="body2">{this.props.points}</Typography>
                </div>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.toggleModalState(false)}
              color="primary"
            >
              OK
            </Button>
        
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
