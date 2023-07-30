import React from "react";


export default function Answer({ answer ,  questionId }) {
  const [backgroundColor, setBackgroundColor] =React.useState('white')
  const handleClick = () => {
    setBackgroundColor('lime');
    
  }
      
      
    return(
   <ul className="donate-now">
      <li>
    <label htmlFor={answer}>
      <input id={answer} type="radio" name={`question-${questionId}`} />
       {answer}
    </label>
    </li>
    </ul>
    
    
    )

}