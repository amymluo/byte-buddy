import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import PracticeList from './PracticeList'
import FilterBox from './FilterBox';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';


import "./Practice.scss";


const isSolved = ['Unsolved', 'Solved']
const isSolvedTitle = "Status";
const difficulty = ['Easy', 'Medium', 'Hard']
const difficultyTitile = "Difficulty";
const topics = ['Array', 'String', 'HashTable']
const topicsTitle = "Topics";


function InputWithIcon() {

  return (
      <div >
        <Grid container spacing={1} alignItems="flex-end" alignContent="center" className={"search"}>
          <Grid item>
            <TextField id="input-with-icon-grid" placeholder="Search" />
            <Search />
          </Grid>
        </Grid>
      </div>

  );
}

// Practice Tab Container
export default class Practice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {name: "Time Conversion", difficulty: "Easy", points: 5, isSolved: false, isShown: true},
        {name: "Reverse Integer", difficulty: "Medium", points: 5, isSolved: true, isShown: true},
        {name: "Forming a Magic Square", difficulty: "Easy", points: 7, isSolved: false, isShown: true},
        {name: "Simple Array Sum", difficulty: "Hard", points: 10, isSolved: true, isShown: true},
      ],
    };
  }

  myCallback = (dataFromChild) => {
    this.filterQuestions(dataFromChild);
  }

  filterQuestions(data) {
    const q = this.state.questions;
    if (data.title === isSolvedTitle) {
      q.forEach(function(e) {
        e.isShown = false;
        if (data.val["Solved"] && e.isSolved) {
          e.isShown = true;
        }
        if (data.val["Unsolved"] && !e.isSolved) {
          e.isShown = true;
        }
        // if (!data.val["Solved"] && !data.val["Unsolved"]) {
        //   e.isShown = true;
        // }
      });

    }

    else if (data.title == difficultyTitile) {
      q.forEach(function(e) {
        e.isShown = false;
        if (data.val["Easy"] && e.difficulty == 'Easy') {
          console.log("here" + e.isSolved + e.name)
          e.isShown = true;
        }
        if (data.val["Medium"] && e.difficulty == 'Medium') {
          e.isShown = true;
        }
        if (data.val["Hard"] && e.difficulty == 'Hard') {
          e.isShown = true;
        }
        // if (!data.val["Easy"] && !data.val["Medium"] && !data.val["Hard"]) {
        //   e.isShown = true;
        // }
      });
    }

    else {

    }

    this.setState({questions: q});

  }




  render() {
    const input = InputWithIcon();
    return (
      <div className={"practice"}>
        <Navbar activeTab={"practice"} />
        <h1>Practice</h1>
        <Grid container direction={"row"} className={"content"} spacing={6}>
          <Grid item md={8} lg={8}> 
            <Grid container direction={"row"} alignItems="center" >
              <h3 style={{marginRight: "50px"}}>Algorithms</h3>
              {input}
            </Grid>
            <PracticeList problems={this.state.questions}/>
          </Grid>
          <Grid item md={4} > 
          {/* Todo: Replace with buddy component */}
          <img src="/assets/buddy.png" alt="Byte Buddy" width="100%" />
          <h2 style={{marginLeft: '24px'}}>Filter</h2>
            <FilterBox values={isSolved} title={isSolvedTitle} callbackFromParent={this.myCallback}/>
            <hr/>
            <FilterBox values={difficulty} title={difficultyTitile} callbackFromParent={this.myCallback}/>
            <hr/>
            <FilterBox values={topics} title={topicsTitle} callbackFromParent={this.myCallback}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}
