import React, { useState }  from "react";
import "./style.css";
import ProgressBar from "@ramonak/react-progress-bar"; //progress bar package imported
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

//button styling
const StyledButton = withStyles({
	root: {
	  background: 'linear-gradient(45deg, #b5179e 10%, #7209b7 90%)',
	  borderRadius: 3,
	  border: 0,
	  color: 'white',
	  height: 60,
	  padding: '10px 50px',
	  margin: '20px',
	  fontFamily: 'Montserrat',
	  fontSize: 20,
	},
	label: {
	  textTransform: 'capitalize',
	},
  })(Button);


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
			setQuizComplete("Quiz Complete!") // replaced the alert with this!
		}	
	}

 
    return (
      <>
        <h3>Select the Correct Answer</h3>
        <div className="answer-selection">
          {questions[currentQuestion].answerOptions.map((answerOptions) => (
            <StyledButton
              onClick={() => handleButtonClick(answerOptions.isCorrect)}
              variant="outlined"
            >
              {answerOptions.answerText}
            </StyledButton>
          ))}
        </div>
        <div className="prog-bar">
          <ProgressBar
            completed={quizProgress}
            width="97%"
            bgColor="#b5179e"
			margin="20px"
          />
          <h3>{quizComplete}</h3>
        </div>
      </>
    );
    
}



export default Quiz