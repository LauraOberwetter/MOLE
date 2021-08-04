import React, { Component } from "react";
import { Experiment } from "jspsych-react";
import { visualOddball } from "jspsych-react";
// import {
//   callbackHTMLDisplay,
//   callbackImageDisplay,
// } from "../../../node_modules/jspsych-react/examples/plugins";

export default class JSPsych extends Component {
  render() {
    return (
      <div>
        <Experiment
          settings={{ timeline: visualOddball }}
          plugins={
            {
              // "callback-html-display": callbackHTMLDisplay,
              // "callback-image-display": callbackImageDisplay,
            }
          }
        />
      </div>
    );
  }
}

// import React from "react";
// import { Experiment } from "jspsych-react";
// {
//   /* <script src="jspsych-6.2.0/plugins/jspsych-fullscreen.js"></script>
//     <script src="jspsych-6.2.0/plugins/jspsych-html-button-response.js"></script>
//     <script src="jspsych-6.2.0/plugins/jspsych-html-keyboard-response.js"></script>
//     <script src="jspsych-6.2.0/plugins/jspsych-survey-text.js"></script>
//     <script src="jspsych-6.2.0/plugins/jspsych-audio-button-response.js"></script> */
// }
// import { jspsychFullscreen } from "./plugins";
// import "./css/jspsych.css";

// const timeline = {
//   type: "fullscreen",
//   fullscreen_mode: true,
//   message: "Fullscreen Mode ",
//   button_label: "Activate",
// };

// const JSPsych = () => {
//   return (
//     <div>
//       <Experiment
//         settings={{ timeline: timeline }}
//         plugins={{ "jspsych-fullscreen": jspsychFullscreen }}
//       />
//     </div>
//   );
// };

// export default JSPsych;
