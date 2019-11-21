import React from "react";

// import the Contact component
import ProblemListComponent from "./ProblemListComponent";


function PracticeList(props) {
  props.problems.map(p => console.log(p.id + p.name + p.isSolved));
  return (
    <div style={{marginTop: "20px"}}>
      {props.problems.map(p => <ProblemListComponent category={props.category} id={p.id} name={p.name} difficulty={p.difficulty} points={p.points} isSolved={p.isSolved} isShown={p.isShown}/>)}
     </div> 
  ); 
} 

export default PracticeList;