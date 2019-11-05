import React from "react";
import Grid from "@material-ui/core/Grid";
import Navbar from "../navbar/Navbar";
import PracticeList from './PracticeList'
import FilterBox from './FilterBox';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';


import "./Practice.scss";
import CategoryCard from "../practice/categories/CategoryCard";




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

  render() {
    const input = InputWithIcon();
    return (
      <div className={"practice"}>
        <Navbar activeTab={"practice"} />
        <h1>Practice</h1>
        <Grid container direction={"row"} className={"content"} spacing={6}>
          <Grid item md={8} lg={8}> 
            <Grid container direction={"row"} alignItems="center" >
            <h1>Popular Topics</h1>
        
              <Grid container item spacing={3} direction="row" xs={12}>
                <Grid item>
                  <CategoryCard />
                </Grid>
                <Grid item>
                  <CategoryCard />
                </Grid>
                <Grid item>
                  <CategoryCard />
                </Grid>
                <Grid item>
                  <CategoryCard />
                </Grid>
            </Grid>
            </Grid>

          </Grid>
          <Grid item md={4} > 
          {/* Todo: Replace with buddy component */}
          <img src="/assets/buddy.png" alt="Byte Buddy" width="100%" />
        
          </Grid>
        </Grid>
      </div>
    );
  }
}
