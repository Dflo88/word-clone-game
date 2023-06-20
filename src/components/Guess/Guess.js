import React from "react";
import { range } from "../../utils";

function Guess({word = "", rowGuessFeedback}) {

  let cellClasses =[ "cell", "cell", "cell", "cell", "cell"]
  if(word.length !== 0) {
    for (let i=0; i < word.length; i++) {
      cellClasses[i] = `cell ${rowGuessFeedback[i].status}`;
    }
    
  }

  let rowMarkup = [];
  range(5).map(( row, index) => {
    return rowMarkup.push(
      <span key={index} className={cellClasses[index]} >{word[index]}</span>
    )
  })


  return (
    <>
      <p className="guess">{rowMarkup}</p>
    </>
  )
}

export default Guess;
