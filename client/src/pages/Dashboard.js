import React from "react";
import { Container } from "@material-ui/core";
import ModuleTable from "../components/ModulesList";

//Get The Modules for this user; Pass the Modules to the ModuleTable component

const Dashboard = () => {
  return ( 
    <Container fluid>
      <h1>My Learning Dashboard</h1>
    <ModuleTable />
    </Container>
  );
};

export default Dashboard;
