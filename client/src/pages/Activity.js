import React from "react";
import Quiz from "../components/Quiz";
import PlayAudio from "../components/PlayAudio";
import { useState, useEffect } from "react";
import API from "../utils/API";


const Activity = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [quizScore, setQuizScore] = useState(1);
    // const [quizProgress, setQuizProgress] = useState(0) //starting @ 0
    // const [quizComplete, setQuizComplete] = useState("")

    useEffect(() => {
        //need to update to pass the id from activity id  
        const id = "1";
        const getQuestions = async () => {
          try {
            const questionList = await API.getQuestions(id);   
            setQuestions(questionList.data.questions);
            console.log(questions)
          } catch (error) {
            console.log(error);
          }
        };
        getQuestions();
      }, 
      []);

      

    //previous function used
	// const handleButtonClick = (isCorrect) => {
	// 	if (isCorrect) {	
	// 		setQuizScore(quizScore + 1);
	// 		console.log(quizScore)
	// 	} else {
	// 		console.log("next")
	// 	};
	// 	const nextQuestion = currentQuestion + 1;
	// 	const percentage = 100 / questions.length;
	// 	if (nextQuestion < questions.length) {
	// 		setCurrentQuestion(nextQuestion);
	// 		setQuizProgress(quizProgress + percentage)
	// 	} else {
	// 		setQuizProgress(quizProgress + percentage)
	// 		//alert("you have reached the end of the quiz!") 
	// 		setQuizComplete("Quiz Complete!") // replaced the alert with this!
	// 	}	
	// }

  

    return (
        <>
        <h5>Module 1: Activity 1</h5>        
          <PlayAudio question={questions[currentQuestion]}/>
          <Quiz question={questions[currentQuestion]} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
        </>
    )};

export default Activity;