import { decode } from "html-entities"
import React from "react"
import { shuffleArray } from "./Utills"
import Answer from "./Answer"

export default function Question({ question }) {
  const [score, setScore] = React.useState(0)
  function handlelick(){
   
    console.log("ul click")
  }
  const answers = shuffleArray([
    question.correct_answer,
    ...question.incorrect_answers,
  ])

  return (
    <div className="card">
      <div className="question">{decode(question.question)}</div>
      <ul>
        <li onClick={handlelick}>
        {answers.map((answer) => (
          <Answer answer={answer} />
        ))}
        </li>
      </ul>
      <hr />
    </div>
  )
}