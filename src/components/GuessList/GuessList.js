import React from "react";
import Guess from "../Guess"
import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessList( { guesses, guessFeedback } ) {
  
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map( (item, index) => {
      return (
      <Guess key={index} word={guesses[index]} rowGuessFeedback={guessFeedback[index]} ></Guess>
      )
    })} 
    </div>
  )
}

export default GuessList;
