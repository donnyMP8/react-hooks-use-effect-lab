import React, { useState } from "react";
import Question from "./Question";
import questionData from "../data/questions"; // adjust path if needed

function App() {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const question = questionData[index];

  function handleAnswered(isCorrect) {
    if (isCorrect) {
      setCorrect((prev) => prev + 1);
    } else {
      setIncorrect((prev) => prev + 1);
    }

    const nextIndex = index + 1;
    if (nextIndex < questionData.length) {
      setIndex(nextIndex);
    } else {
      alert("Game over!");
      setIndex(0);
      setCorrect(0);
      setIncorrect(0);
    }
  }

  return (
    <div className="App">
      <h1>Trivia Game</h1>
      <h2>
        Correct: {correct} | Incorrect: {incorrect}
      </h2>
      <Question question={question} onAnswered={handleAnswered} />
    </div>
  );
}

export default App;
