import React from 'react';
import "./button.css";

// can add more style options here 
const Styles = [
    "btn--primary--solid"
];

export const Button = ({
    children, 
    type, 
    onClick, 
    buttonStyle, 
}) => {
    
    const checkStyle = Styles.includes(buttonStyle) 
        ? buttonStyle 
        : Styles[0]


    return (
        <button className={`btn ${checkStyle} `} onClick={onClick} type={type}>
            {children}
        </button>
    )
};