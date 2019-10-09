import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Navbar from "../navbar/Navbar";

import PracticeList from './PracticeList'

import "./Practice.scss";


const practice = [
  {name: "Time Conversion", difficulty: "easy", points: 5, isSolved: false},
  {name: "Simple Array Sum", difficulty: "hard", points: 10, isSolved: true},

]

// Practice Container
export default class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      pets: [],
      listings: []
    };
  }


  render() {

    return (
      <div className={"dashboard"}>
        <Navbar activeTab={"practice"} />
        <Grid container direction={"column"} className={"content"} spacing={6}>
          <PracticeList problems={practice}/>
        </Grid>
      </div>
    );
  }
}
