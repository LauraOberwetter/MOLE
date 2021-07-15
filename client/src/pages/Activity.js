import React from "react";
import Quiz from "../components/Quiz";
import PlayAudio from "../components/PlayAudio";

//Get The questions & sounds for this Activity; Pass the questions & sounds to the PlayAudio & Quiz Components

const Activity = () => {
    return (
        <>
        <h5>Module 1: Activity 1</h5>
        <PlayAudio />
        <Quiz/>
        </>
    )};

export default Activity;