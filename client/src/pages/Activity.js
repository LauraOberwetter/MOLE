import React from "react";
import Quiz from "../components/Quiz";
import PlayAudio from "../components/PlayAudio";
import { useState, useEffect } from "react";
import API from "../utils/API";


const Activity = () => {
     //Get Questions for the Activity from API
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    //need to update to pass the id from activity id  
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
  console.log(questions);

    return (
        <>
        <h5>Module 1: Activity 1</h5>
        <PlayAudio />
        <Quiz/>
        </>
    )};

export default Activity;