import React from "react";

// import the Contact component
import ProblemListComponent from "./ProblemListComponent";


function PracticeList(props) {
  return (
    <div style={{marginTop: "20px"}}>
      {props.problems.map(p => <ProblemListComponent name={p.name} difficulty={p.difficulty} points={p.points} isSolved={p.isSolved} isShown={p.isShown}/>)}
     </div> 
  ); 
} 

export default PracticeList;