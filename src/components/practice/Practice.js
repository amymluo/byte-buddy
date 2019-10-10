import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import PracticeList from './PracticeList'


import "./Practice.scss";


const practice = [
  {name: "Time Conversion", difficulty: "easy", points: 5, isSolved: false},
  {name: "Simple Array Sum", difficulty: "hard", points: 10, isSolved: true},

]

// Practice Tab Container
export default class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={"practice"}>
        <Navbar activeTab={"practice"} />
        <Grid container direction={"column"} className={"content"} spacing={6}>
          <Grid item>
            <h1>Practice</h1>
            <PracticeList problems={practice}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
