import { decode } from "html-entities"
import React from "react"
import { shuffleArray } from "./Utills"
import Answer from "./Answer"

export default function Question({ question }) {
  const answers = shuffleArray([
    question.correct_answer,
    ...question.incorrect_answers,
  ])

  return (
    <div className="card">
      <p className="question">{decode(question.question)}</p>
        <ul>
        {answers.map((answer) => (
          <Answer answer={answer} />
        ))}
        </ul>
      
      <hr />
    </div>
  )
}