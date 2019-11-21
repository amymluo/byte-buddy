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
import { completedDailyChallenge } from "./data/dailyChallenge";
import { PROBLEM_INFO } from './constants/problems';

const Routes = props => {
  const [userInfo, setUserInfo] = useState(userData);
  const [isCompleted, setIsCompleted] = useState(completedDailyChallenge);
  const [problemData, setProblemData] = useState(PROBLEM_INFO);

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

  const setProblemSolved = id => {
    const prob = problemData.find(p => {
      return p.id == id;
    });
    prob.isSolved = true;
    setProblemData(
      problemData
    )
    
  }

  const canBuy = amount => {
    return amount <= userInfo.points;
  };

  const buyItem = amount => {
    setUserInfo({
      ...userInfo,
      points: userInfo.points - amount
    });
  };

  const addPoints = amount => {
    setUserInfo({
      ...userInfo,
      points: userInfo.points + amount
    });
  };

  const setTutorialComplete = () => {
    setUserInfo({
      ...userInfo,
      isNew: false
    });
  };

  const completeChallenge = isCompletedValue => {
    setIsCompleted({
      isCompleted: isCompletedValue
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
              <Dashboard
                userInfo={userInfo}
                feedPoints={feedPoints}
                completeChallenge={completeChallenge}
                isCompleted={isCompleted}
                addPoints={addPoints}
                setTutorialComplete={setTutorialComplete}
              />
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={() => (
              <Dashboard
                userInfo={userInfo}
                feedPoints={feedPoints}
                completeChallenge={completeChallenge}
                isCompleted={isCompleted}
                addPoints={addPoints}
                setTutorialComplete={setTutorialComplete}
              />
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
              <Practice userInfo={userInfo} feedPoints={feedPoints} problemData={problemData} />
            )}
          />
          <Route
            exact
            path="/shop"
            render={() => (
              <PartsShop
                userInfo={userInfo}
                canBuy={canBuy}
                feedPoints={feedPoints}
                buyItem={buyItem}
              />
            )}
          />
          <Route
            exact
            path="/problem"
            render={() => (
              <PracticeProblem
                userInfo={userInfo}
                addPoints={addPoints}
                feedPoints={feedPoints}
                problemData={problemData}
                setProblemSolved={setProblemSolved}
              />
            )}
          />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default Routes;
