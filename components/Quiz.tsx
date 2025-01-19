"use client";
import { useState } from "react";

interface QuizProps {
  questions: {
    question: string;
    answers: string[];
    correctAnswer: string;
  }[];
  userId: string | undefined;
}

export default function Quiz({ questions, userId }: QuizProps) {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(
    null
  );
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const currentQuestion = questions[activeQuestion];
  const { question, answers, correctAnswer } = currentQuestion || {};

  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(answer);
    } else {
      setSelectedAnswer("");
    }
  };

  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResults((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 1,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
      fetch("/api/quizResults", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          quizScore: results.score,
          correctAnswers: results.correctAnswers,
          wrongAnswers: results.wrongAnswers,
        }),
      }).then((res) => {
        if (!res.ok) {
          throw new Error("Failed to save quiz results");
        }
        return res.json();
      });
    }
    setChecked(false);
  };

  return (
    <div className="min-h-[500px] w-full">
      <div className="max-w-[1500px] w-full flex justify-center py-10 flex-col">
        {!showResults ? (
          <>
            <div className="flex justify-between mb-10 items-center">
              <div className="bg-primary text-white px-4 rounded-md py-1">
                <h2>
                  Pytanie: {activeQuestion + 1}
                  <span>/{questions.length}</span>
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h3 className="mb-5 text-2xl font-bold bg-primary text-white baloo p-4 rounded-md">
                {question}
              </h3>
              <ul>
                {answers.map((answer: string, idx: number) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={`cursor-pointer mb-5 py-3 rounded-md hover:bg-primary hover:text-white px-3 ${selectedAnswerIndex === idx && "bg-primary text-white"}`}
                  >
                    <span>{answer}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={nextQuestion}
                disabled={!checked}
                className="font-bold text-tetiary baloo text-2xl bg-slate-200 py-4 px-12 rounded-xl"
              >
                {activeQuestion === questions.length - 1
                  ? "Zakończ quiz"
                  : "Następne pytanie"}
              </button>
            </div>
          </>
        ) : (
            <div className="fend w-full flex justify-center items-center flex-col">
              <h3 className="text-3xl uppercase mb-10 baloo text-tetiary bg-[#ffffff9f] rounded-md p-5">
                Powinieneś wybrać kierunek informatyka Front-End Developer
              </h3>
            </div>
        )}
      </div>
    </div>
  );
}
