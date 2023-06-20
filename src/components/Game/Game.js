import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessList from '../GuessList'
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"
import { checkGuess } from "../../game-helpers"
import GameEndBanner from "../GameEndBanner"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);
  const [correctAnswerGuessed, setCorrectAnswerGuessed] = React.useState(false);
  const [guessFeedback, setGuessFeedback] = React.useState([])
  

  if ((guesses.length === NUM_OF_GUESSES_ALLOWED) || correctAnswerGuessed) {
    if(!gameOver) {
      const updateGameOver = true;
      setGameOver(updateGameOver);
    }
  }

  function handleNewGuess(word) {
    const nextGuesses = [...guesses, word];
    setGuesses(nextGuesses);

    let guessAccuracy = new Set();
    const guessInformation = checkGuess(word, answer)
    const nextGuessInformation = [...guessFeedback, guessInformation];
    setGuessFeedback(nextGuessInformation);
    for (let i=0; i < word.length; i++) {
      // cellClasses[i] = `cell ${guessInformation[i].status}`;
      guessAccuracy.add(guessInformation[i].status);
    }
      
    if(guessAccuracy.size === 1  && guessAccuracy.has("correct")) {
      setCorrectAnswerGuessed(!correctAnswerGuessed);
    }
  }

  return (
    <>
      <GuessList guesses={guesses} guessFeedback={guessFeedback} ></GuessList>
      <GuessInput handleNewGuess={handleNewGuess} gameOver={gameOver}></GuessInput>
      {gameOver && <GameEndBanner correctAnswerGuessed={correctAnswerGuessed} numberOfGuesses={guesses.length} answer={answer}></GameEndBanner>}
    </>
  );
}

export default Game;
