import React from "react";

export default function Answer({ answer}) {
        let yellow = '#ffc800';
        const [bgColor, setBgColor] = React.useState(yellow);
         const changeColor =()=>{
            let bgColor = 'red';
            setBgColor({backgroundColor: bgColor});
      }
      
    return(
    
    <lable className="radio-button" >{answer}
    <input type="radio" name="answer" className="radio" checked/>
    </lable>
    
    )

}