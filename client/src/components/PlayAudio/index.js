import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import ReactAudioPlayer from "react-audio-player";
import API from "../../utils/API";


function PlayAudio(props) {   
  return (
    <>
   {props.question &&
    <ReactAudioPlayer
      src={props.question.legacy_id}
      autoPlay
      controls
    />
  }</>
  )
}
export default PlayAudio