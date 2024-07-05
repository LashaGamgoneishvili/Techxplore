"use client";
import { useState } from "react";
import { quiz } from "../data.js";

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  // Select and check answer
  const onAnswerSelected = (answer, idx) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
      console.log("true");
    } else {
      setSelectedAnswer(false);
      console.log("false");
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className="container mx-auto p-4 bg-white min-h-screen text-black">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Quiz Page
      </h1>
      <div className="text-center mb-4">
        <h2 className="text-2xl">
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div className="text-black">
        {!showResult ? (
          <div className="quiz-container bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              {questions[activeQuestion].question}
            </h3>

            <ul className="space-y-2">
              {answers.map((answer, idx) => (
                // <li
                //   key={idx}
                //   onClick={() => onAnswerSelected(answer, idx)}
                //   className={`p-2 border rounded cursor-pointer ${
                //     selectedAnswerIndex === idx
                //       ? "bg-blue-500 text-black"
                //       : "hover:bg-gray-100"
                //   }`}
                // >

                <div
                  key={idx}
                  onClick={() => onAnswerSelected(answer, idx)}
                  class="flex items-center gap-4 rounded-xl border border-solid border-[#dce1e5] p-[15px]"
                >
                  <input
                    type="radio"
                    // onChange={() => setChecked(true)}
                    class="h-5 w-5 border-2 border-[#dce1e5] bg-transparent text-transparent checked:border-[#111517] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#111517]"
                    name="9a105435-e9f4-492c-9264-f9a7c8f81a55"
                    // checked={true}
                  />
                  <div class="flex grow flex-col">
                    <p class="text-[#111517] text-sm font-medium leading-normal">
                      {answer}
                    </p>
                  </div>
                </div>

                //   <span>{answer}</span>
                // </li>
              ))}
            </ul>
            {checked ? (
              <button
                onClick={nextQuestion}
                className="mt-4 p-2 bg-blue-500 text-white rounded px-4 duration-150 hover:bg-blue-700"
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled
                className="mt-4 p-2 bg-gray-300 text-gray-700 rounded cursor-not-allowed"
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Results</h3>
            <h3 className="text-lg mb-4">
              Overall: {(result.score / (questions.length * 5)) * 100}%
            </h3>
            <p className="mb-2">
              Total Questions: <span>{questions.length}</span>
            </p>
            <p className="mb-2">
              Total Score: <span>{result.score}</span>
            </p>
            <p className="mb-2">
              Correct Answers: <span>{result.correctAnswers}</span>
            </p>
            <p className="mb-4">
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Restart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
