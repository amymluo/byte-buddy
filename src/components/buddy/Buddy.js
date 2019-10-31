import React from "react";
import LevelPoints from "./LevelPoints";
import "./Buddy.scss";

export default class Buddy extends React.Component {
  state = {
    name: "",
    level: 1,
    points: 20,
    background: "assets/bg.png"
  };

  render() {
    const { name, level, points, background } = this.state;
    return (
      <div className="buddy-container">
        <div
          className="buddy-bg"
          style={{ backgroundImage: `url(${background})` }}
        >
          <LevelPoints level={level} points={points} />
        </div>
      </div>
    );
  }
}
