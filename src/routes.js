import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import theme from "./styles/materialTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Dashboard from "./components/dashboard/Dashboard";
import PracticeCategories from "./components/practice/PracticeCategories";
import Practice from "./components/practice/Practice";
import PracticeProblem from "./components/practiceProblem/PracticeProblem";
import PartsShop from "./components/shop/PartsShop";
import { userData } from "./data/user";

const Routes = props => {
  const [userInfo, setUserInfo] = useState(userData);

  const feedPoints = () => {
    const { points, buddy } = userInfo;
    if (points > 0) {
      setUserInfo({
        ...userInfo,
        points: userInfo.points - 1,
        buddy: { ...buddy, points: buddy.points + 1 }
      });
    }
  };

  const canBuy = amount => {
    return amount <= userInfo.points;
  };

  const buyItem = amount => {
    setUserInfo({
      ...userInfo,
      points: userInfo.points - amount
    });
  };

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Dashboard userInfo={userInfo} feedPoints={feedPoints} />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={() => (
              <Dashboard userInfo={userInfo} feedPoints={feedPoints} />
            )}
          />
          <Route
            exact
            path="/practice"
            render={() => (
              <PracticeCategories userInfo={userInfo} feedPoints={feedPoints} />
            )}
          />
          <Route
            exact
            path="/practiceList"
            render={() => (
              <Practice userInfo={userInfo} feedPoints={feedPoints} />
            )}
          />
          <Route
            exact
            path="/shop"
            render={() => (
              <PartsShop
                userInfo={userInfo}
                canBuy={canBuy}
                buyItem={buyItem}
              />
            )}
          />
          <Route
            exact
            path="/problem"
            render={() => <PracticeProblem userInfo={userInfo} />}
          />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default Routes;
