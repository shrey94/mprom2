import logo from "./logo.svg";
import { useState } from "react";
import { Volume2 } from "lucide-react"; // Speaker icon
// import "./App.css";

const Questions = [
  {
    id: 1,
    display: "Are you able to carry a heavy object(over 10 pounds/5kg)?",
  },
  {
    id: 2,
    display: "Are you able to wash your back?",
  },
  {
    id: 3,
    display: "Are you able to put on and take off a coat or jacket?",
  },
  {
    id: 4,
    display: "Are you able to carry a shopping bag or briefcase?",
  },
  {
    id: 5,
    display: "Are you able to lift 10 pounds (5 kg) above your shoulder?",
  },
  {
    id: 6,
    display: "Are you able to change a light bulb overhead?",
  },
  {
    id: 7,
    display:
      "Are you able to pass a 20-pound (10 kg) turkey or ham to other people at the table?",
  },
];

const answerChoices = [
  { text: "Without any difficulty", emoji: "😃" },
  { text: "With a little difficulty", emoji: "🙂" },
  { text: "With some difficulty", emoji: "😐" },
  { text: "With much difficulty", emoji: "😟" },
  { text: "Unable to do", emoji: "😣" },
];

export default function App() {
  //empty object of answers, here we will update it with the questionID as the key and value is selectedanswer
  //Eg: {1:"without any difficulty",2: "with some difficulty"}
  const [answers, setAnswers] = useState({});

  function handleAnswerChange(questionID, answer) {
    setAnswers((prev) => ({
      ...prev,
      [questionID]: answer,
    }));

    console.log(answers);
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <div>
        <Title />
        <QuestionList
          answers={answers}
          handleAnswerChange={handleAnswerChange}
        />
        {/* <Answers /> */}
      </div>
    </div>
  );
}

function Title() {
  return (
    // <div>
    <h1 className="text-2xl font-bold text-teal-600 underline mb-6">
      PROMIS Upper Extremity Form
    </h1>
    // </div>
  );
}

function QuestionList({ answers, handleAnswerChange }) {
  return (
    <div className="w-full max-w-2xl">
      {Questions.map((question) => (
        <div key={question.id} className="mb-8">
          <Question
            question={question}
            handleAnswerChange={handleAnswerChange}
            selectedAnswer={answers[question.id] || ""}
          />
        </div>
      ))}
    </div>
  );
}

function Question({ question, handleAnswerChange, selectedAnswer }) {
  // console.log(question);

  // console.log(selectedAnswer);
  // console.log(onAnswerChange);
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold flex items-center">
        {question.id}. {question.display}
        <Volume2 className="ml-2 text-teal-500" />
      </h3>

      <AnswerOptions
        questionID={question.id}
        selectedAnswer={selectedAnswer}
        onChange={handleAnswerChange}
      />
    </div>
  );
}

function AnswerOptions({ questionID, selectedAnswer, onChange }) {
  console.log(questionID);
  console.log(selectedAnswer);
  return (
    <div className="flex flex-col">
      {answerChoices.map(({ text, emoji }, index) => (
        <label
          key={index}
          className={`flex items-center justify-between rounded-lg p-3 my-1 cursor-pointer transition-all duration-200 border-2 ${
            selectedAnswer === text
              ? "bg-orange-500 text-white border-orange-500"
              : "bg-white border-teal-500 text-black"
          }`}
          onClick={() => onChange(questionID, text)}
        >
          <div className="flex items-center">
            <span className="text-xl mr-2">{emoji}</span>
            {text}
          </div>
          <Volume2
            className={`text-teal-500 ${
              selectedAnswer === text ? "text-white" : ""
            }`}
          />
        </label>
      ))}
    </div>
  );
}
//export default App;
