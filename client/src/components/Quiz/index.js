import React, { useState }  from "react";

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

	const handleButtonClick = (isCorrect) => {
		if (isCorrect) {	
			setQuizScore(quizScore + 1);
			console.log(quizScore)
		} else {
			console.log("next")
		};
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			alert("you have reached the end of the quiz!")
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
		</>
        
    );
    
}

export default Quiz