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
    <div className="card" >
      <div className="question">{decode(question.question)}</div>
        <ul style={{ listStyle: "none" }}>
        {answers.map((answer) => (
          <Answer
           answer={answer}
           questionId={question.id}
           />
        ))}
        </ul>
      
      <hr />
    </div>
  )
}