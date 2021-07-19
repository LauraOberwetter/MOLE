import React from "react";
import ActivityTable from "../components/ActivitesList";

//Get The Activities for the for this Module; Pass the Activities to the ActivityTable component


const Module = () => {
    return (
        <>
        <h1 style={{color: "#072AC8", padding:"25px", fontFamily: 'Playfair Display'}}>Module things here !</h1>
        <ActivityTable/>
        </>
    )};

export default Module;