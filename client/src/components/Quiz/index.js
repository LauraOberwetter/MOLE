import React, { useEffect, useState }  from "react";
import "./style.css";
import ProgressBar from "@ramonak/react-progress-bar"; //progress bar package imported
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PlayAudio from "../PlayAudio";
import API from "../../utils/API";

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

function Quiz(props) {	
  function isCorrect(e) {
    console.log(e.target.dataset.id)
    if (e.target.dataset.id === props.question.correct_choice_id) {
      console.log("correct")
    } else {
      console.log("incorrect")
    }
    props.setCurrentQuestion(props.currentQuestion + 2);
  }    

 
    return (
      <>
        <h3>Select the Correct Answer</h3>
       
        {props.question &&<div className="answer-selection">         
            <StyledButton data-id={props.question.choice1_id} onClick={isCorrect}>{props.question.choices[0].japanese_label} </StyledButton>
            <StyledButton data-id={props.question.choice2_id} onClick={isCorrect}>{props.question.choices[1].japanese_label} </StyledButton>
        </div>}

        {/* <div className="prog-bar">
          <ProgressBar
            completed={quizProgress}
            width="97%"
            bgColor="#b5179e"
			margin="20px"
          />
          <h3>{quizComplete}</h3>
        </div> */}
      </>
    );
    
}



export default Quiz