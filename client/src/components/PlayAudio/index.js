import React, { Component } from "react";
import "./style.css";


export default class extends Component {
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <button onClick={this.playAudio}>
          <span>Play Audio</span>
        </button>
        <audio className="audio-element">
          <source src="https://hvpt-portal-files.s3.us-east-2.amazonaws.com/JA_01XM3.wav"></source>
        </audio>
      </div>
    )
  }
}