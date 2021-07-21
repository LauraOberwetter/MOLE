import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import ReactAudioPlayer from "react-audio-player";
import API from "../../utils/API";


function PlayAudio(props) {   
  return (
    <div id="container">
   {props.question &&
    <ReactAudioPlayer
      className="play-audio"
      style={{backgroundColor: "#FFC600"}}
      src={props.question.legacy_id}
      autoPlay={false} //PREVENTED AUTOPLAY
      controls
    />
  }</div>
  )
}
export default PlayAudio