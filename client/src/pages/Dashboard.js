import React from "react";
import { Container } from "@material-ui/core";
import ModuleTable from "../components/ModulesList";

//Get The Modules for this user; Pass the Modules to the ModuleTable component

const Dashboard = () => {
  return ( 
    <Container fluid>
      <h1 style={{color: "#072AC8", padding:"25px", fontFamily: 'Playfair Display'}}>My Learning Dashboard</h1>
    <ModuleTable />
    </Container>
  );
};

export default Dashboard;
