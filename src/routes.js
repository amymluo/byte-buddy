import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import theme from "./styles/materialTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Dashboard from "./components/dashboard/Dashboard";
import PracticeCategories from "./components/practice/PracticeCategories";
import Practice from "./components/practice/Practice";
import PracticeProblem from "./components/practiceProblem/PracticeProblem";
import PartsShop from "./components/shop/PartsShop";

const Routes = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/practice" render={() => <PracticeCategories />} />
          <Route exact path="/practiceList" render={() => <Practice />} />
          <Route exact path="/shop" render={() => <PartsShop />} />
          <Route exact path="/problem" render={() => <PracticeProblem />} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default Routes;
