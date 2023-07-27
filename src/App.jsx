import React from "react";
import data from "./data";
import Question from "./Question"

export default function App(){
    const[quizzState ,setQuizzState]=React.useState("not started")
    function startQuizz(){
        setQuizzState("started")
    }
    function checkAnswers() {
        setQuizzState("finished")
      }
    
      function playAgain() {
        setQuizzState("not started")
      }
    
      return (
        <div className="wrapper">
                 
          {quizzState === "not started" ? (
            <div className="container">
              <img src="../images/upper.png" alt="test" className="upper"/>
             <h1>Quizzical </h1>
             <p className="desc">Some description if needed</p>
            <button className="start-btn" onClick={startQuizz}>Start Quiz</button>
            <img src="../images/lower.png" alt="test" className="lower"/>
            </div>
          ) : (
            <div>
              
              
              {data.results.map((question) => (
                <Question question={question} />
              ))}
              {quizzState === "started" && (
                <button onClick={checkAnswers}>Check Answers</button>
              )}
              {quizzState === "finished" && (
                <div>
                  <h3>You Scored x/{data.results.length} correct answers</h3>
                  <button onClick={playAgain}>Play Again</button>
                </div>
              )}
            </div>
          )}
        </div>
      )
    }
    