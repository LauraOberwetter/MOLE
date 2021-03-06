import React from "react";
import {Button} from "../Button/Button.jsx";

// NOT NEEDED, DELETE BEFORE PUBLISHING
//import Button from "react-bootstrap/Button";
//import React, { useState } from "react";
//import "./consent.css";

// should be able to import register component?
//import Register from "../Register";

export default ({setActionTakenOnConsent}) => {  
  return (
    <div>
      <h1 className="consentHead">Training Participant Consent Form</h1>
      <div className="consent-copyAndButtons">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
          augue lacus viverra vitae congue. Rhoncus mattis rhoncus urna neque
          viverra justo. Nam at lectus urna duis. Morbi tincidunt augue interdum
          velit euismod in pellentesque massa. Cras semper auctor neque vitae
          tempus quam pellentesque nec nam. Pellentesque adipiscing commodo elit
          at imperdiet dui accumsan sit. Vitae tortor condimentum lacinia quis
          vel eros donec ac odio. Pellentesque nec nam aliquam sem et tortor
          consequat id porta. Viverra nibh cras pulvinar mattis nunc. Nunc sed
          augue lacus viverra vitae congue. Dapibus ultrices in iaculis nunc sed
          augue lacus viverra. Sit amet massa vitae tortor condimentum lacinia
          quis vel eros. Commodo sed egestas egestas fringilla phasellus
          faucibus scelerisque eleifend. Massa vitae tortor condimentum lacinia
          quis vel eros. Cursus metus aliquam eleifend mi in nulla posuere.
          Placerat in egestas erat imperdiet. Sapien eget mi proin sed libero
          enim sed faucibus. Turpis massa sed elementum tempus egestas. Sit amet
          purus gravida quis blandit turpis cursus in hac. Lectus quam id leo in
          vitae turpis massa. Risus nec feugiat in fermentum posuere urna. Purus
          semper eget duis at. Purus gravida quis blandit turpis cursus in hac
          habitasse platea. Elit duis tristique sollicitudin nibh sit amet.
          Vitae auctor eu augue ut lectus arcu. Malesuada pellentesque elit eget
          gravida. Mi proin sed libero enim sed. Pharetra pharetra massa massa
          ultricies mi quis hendrerit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Nunc sed augue lacus viverra vitae congue. Rhoncus
          mattis rhoncus urna neque viverra justo. Nam at lectus urna duis.
          Morbi tincidunt augue interdum velit euismod in pellentesque massa.
          Cras semper auctor neque vitae tempus quam pellentesque nec nam.
          Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit.
          Vitae tortor condimentum lacinia quis vel eros donec ac odio.
          Pellentesque nec nam aliquam sem et tortor consequat id porta. Viverra
          nibh cras pulvinar mattis nunc. Nunc sed augue lacus viverra vitae
          congue. Dapibus ultrices in iaculis nunc sed augue lacus viverra. Sit
          amet massa vitae tortor condimentum lacinia quis vel eros. Commodo sed
          egestas egestas fringilla phasellus faucibus scelerisque eleifend.
          Massa vitae tortor condimentum lacinia quis vel eros. Cursus metus
          aliquam eleifend mi in nulla posuere. Placerat in egestas erat
          imperdiet. Sapien eget mi proin sed libero enim sed faucibus. Turpis
          massa sed elementum tempus egestas. Sit amet purus gravida quis
          blandit turpis cursus in hac. Lectus quam id leo in vitae turpis
          massa. Risus nec feugiat in fermentum posuere urna. Purus semper eget
          duis at. Purus gravida quis blandit turpis cursus in hac habitasse
          platea. Elit duis tristique sollicitudin nibh sit amet. Vitae auctor
          eu augue ut lectus arcu. Malesuada pellentesque elit eget gravida. Mi
          proin sed libero enim sed. Pharetra pharetra massa massa ultricies mi
          quis hendrerit.
        </p>
        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setActionTakenOnConsent(true);
            //window.location.href = "https://ling.towson.edu/";
          }}>
            AGREE</Button>

        <Button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setActionTakenOnConsent(true);
            //window.location.href = "https://ling.towson.edu/";
          }}buttonStyle="btn--primary--solid">
          DISAGREE</Button>

        {/* endless loading when Register component is imported here */}
        {/* <Register /> */}
      </div>
    </div>
  );
}
