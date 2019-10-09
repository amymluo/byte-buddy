import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import theme from "./styles/materialTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Dashboard from "./components/dashboard/Dashboard";
import Practice from "./components/practice/Practice";
import PartsShop from "./components/shop/PartsShop";

const Routes = props => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Dashboard />} />
          <Route exact path="/dashboard" render={() => <Dashboard />} />
          <Route exact path="/practice" render={() => <Practice />} />
          <Route exact path="/shop" render={() => <PartsShop />} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default Routes;
