import React from "react";
import Quiz from "../components/Quiz";
import PlayAudio from "../components/PlayAudio";
import { useState, useEffect } from "react";
import API from "../utils/API";


const Activity = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    useEffect(() => {
        //update to pass the id from activity id  
        const id = "1";
        const getQuestions = async () => {
          try {
            const questionList = await API.getQuestions(id);   
            setQuestions(questionList.data.questions);        
          } catch (error) {
            console.log(error);
          }
        };
        getQuestions();        
      }, 
      []);   

    return (
        <>
        <h5 style={{color: "#072AC8", padding:"25px", fontFamily: 'Playfair Display'}}>Module 1: Activity 1</h5> 
          <p style={{padding:"25px", fontFamily: 'Montserrat', border: "black", backgroundColor: "white", borderRadius: "10px", width:"90%", borderStyle:"solid", borderWidth:".2px", margin:"auto"}}>This training focuses on the difference between /ts/ and /s/, as in つうがく (‘tsuugaku (suru), ’going to school) and すうがく (‘suugaku,’ “math”). English grammar doesn’t allow for words to begin with a /ts/ sound, so English speakers simply ignore the &lt;t&gt;, as in the word “tsunami.” Try the training exercise below to test yourself. With practice, you can improve your listening and speaking at the same time. がんばりましょう！</p>       
          <PlayAudio question={questions[currentQuestion]}/>
          <Quiz questions={questions} question={questions[currentQuestion]} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion}/>
        </>
    )};

export default Activity;