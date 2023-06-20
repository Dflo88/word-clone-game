import React from "react";

function GameEndBanner({correctAnswerGuessed, numberOfGuesses, answer}) {

  const bannerToDisplay = correctAnswerGuessed ? 
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numberOfGuesses} guess{numberOfGuesses === 1 ? "" : "es"}</strong>.
      </p>
    </div> 
    : 
    <div className="sad banner">
      <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
    </div>

  return (
    bannerToDisplay
  );
}

export default GameEndBanner;
