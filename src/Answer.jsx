import React from "react";


export default function Answer({ answer ,  questionId }) {
  return(
      <ul className="donate-now">
      <li >
      <input id={answer} type="radio" name={`question-${questionId}`} />
      <label htmlFor={answer} className="lable">{answer}</label>
      </li>
      </ul>
    
    
    
    )

}