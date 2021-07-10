import React, { useState }  from "react";
import ProgressBar from "@ramonak/react-progress-bar"; //progress bar package imported

function Quiz() {
	const questions = [
		{
			questionNumber: 1,
			answerOptions: [
				{answerText: 'tener', isCorrect: false},
				{answerText: 'atender', isCorrect: true}
			]
		},
		{
			questionNumber: 2,
			answerOptions: [
				{answerText: 'escribe', isCorrect: false},
				{answerText: 'describe', isCorrect: true}
			] 
		},
		{
			questionNumber: 3,
			answerOptions: [
				{answerText: 'lluvia', isCorrect: true},
				{answerText: 'llave', isCorrect: false}
			] 
		},
		{
			questionNumber: 4,
			answerOptions: [
				{answerText: 'hielo', isCorrect: true},
				{answerText: 'nieve', isCorrect: false}
			] 
		}
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [quizScore, setQuizScore] = useState(1);
	const [quizProgress, setQuizProgress] = useState(0) //starting @ 0
	const [quizComplete, setQuizComplete] = useState("")



	const handleButtonClick = (isCorrect) => {
		if (isCorrect) {	
			setQuizScore(quizScore + 1);
			console.log(quizScore)
		} else {
			console.log("next")
		};
		const nextQuestion = currentQuestion + 1;
		const percentage = 100 / questions.length;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			setQuizProgress(quizProgress + percentage)
		} else {
			setQuizProgress(quizProgress + percentage)
			//alert("you have reached the end of the quiz!") 
			setQuizComplete("quiz complete") // replaced the alert with this!
		}	
	}

 
    return (
		<>
		<h2>Select the Correct Answer</h2>
		<div className="answer-selection">
			{questions[currentQuestion].answerOptions.map((answerOptions)=> (
				<button onClick={() => handleButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>)
			)}			
		</div>
		<ProgressBar completed={quizProgress} />
		<p>{quizComplete}</p>
		</>
		
        
    );
    
}



export default Quiz