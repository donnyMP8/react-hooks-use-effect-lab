import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);
      setTimeRemaining(10);
      return;
    }

    const timeoutId = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    // Cleanup
    return () => clearTimeout(timeoutId);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer}>
            <button onClick={() => onAnswered(answer === question.correct)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
      {/* 👇 Must match test string exactly */}
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
