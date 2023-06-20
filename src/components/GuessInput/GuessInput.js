import React from "react";

function GuessInput({ handleNewGuess, gameOver }) {
  const [userGuess, setUserGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    handleNewGuess(userGuess)
    setUserGuess("");
  }

  return (
    <form 
    className="guess-input-wrapper"
    onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
      disabled={gameOver === true}
      id="guess-input"
      required
      minLength={5}
      maxLength={5}
      pattern="[a-zA-Z]{5}"
      title="5 letter word"
      type="text" 
      value={userGuess}
      onChange={ event => {
        setUserGuess(event.target.value.toUpperCase());
      }}
      />
    </form>
  )
  
}

export default GuessInput;
