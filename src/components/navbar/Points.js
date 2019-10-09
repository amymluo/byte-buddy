import React from "react";

import "./Points.scss";

export default class Navbar extends React.Component {
  render() {
    return (
      <div className="nav-points">
        <img src="assets/hex_points.png" alt="points" width={20} />
        {this.props.points}
      </div>
    );
  }
}
