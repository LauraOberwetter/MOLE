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
  const [choices, setChoices] = useState([]);
	useEffect (() => {
		const getChoices = async () => {
			try {
        //update this to take in dynamic ID
        const choicesList = await API.getChoices(1);
				setChoices(choicesList.data.choices)
			} catch (error) {
        console.log(error);
			}
		}
    getChoices();
	},
  []);  
  console.log(choices)
    
    

 
    return (
      <>
        <h3>Select the Correct Answer</h3>
       
        <div className="answer-selection">
          {choices.map((choiceBtns) => (
            <StyledButton>{choiceBtns.japanese_label} </StyledButton>
          ))}
        </div>
        
        {/* <div className="answer-selection">
          {questions[currentQuestion].answerOptions.map((answerOptions) => (
            <StyledButton
              onClick={() => handleButtonClick(answerOptions.isCorrect)}
              variant="outlined"
            >
              {answerOptions.answerText}
            </StyledButton>
          ))}
        </div> */}

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