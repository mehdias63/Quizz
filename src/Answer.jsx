import React from "react";


export default function Answer({ answer}) {
  const [backgroundColor, setBackgroundColor] =React.useState('white')
  const handleClick = () => {
    setBackgroundColor('lime');
    
  }
      
      
    return(
    <div className="radio-button" style={{ backgroundColor }} onClick={handleClick}>
       {answer}
    </div>
    
    
    )

}