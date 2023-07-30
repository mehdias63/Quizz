import React from "react";
import Question from "./Question";

export default function Answer({ answer}) {
  const [backgroundColor, setBackgroundColor] =React.useState('white')
  const handleClick = () => {
    setBackgroundColor('lime');
  }
      
      
    return(
    <div>
    <lable className="radio-button" style={{ backgroundColor }} onClick={handleClick}>{answer}
    <input type="radio" name="answer" className="radio" checked/>
    </lable>
    </div>
    
    )

}