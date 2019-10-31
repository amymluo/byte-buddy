import React from "react";

const avatarImgs = {
  1: "assets/buddy1.png",
  2: "assets/buddy2.png"
};

export default function Avatar(props) {
  return (
    <div
      className="buddy-avatar"
      style={{
        backgroundImage: `url(${avatarImgs[props.level]})`,
        width: "250px",
        height: "330px",
        margin: "auto",
        marginTop: "75px"
      }}
    ></div>
  );
}
