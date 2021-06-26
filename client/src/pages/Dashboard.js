import React from "react";
import { Container } from "@material-ui/core";
import BasicTable from "../components/Table";


const Dashboard = () => {
  return ( 
    <Container fluid>
      <h1>My Learning Dashboard</h1>
    <BasicTable />
    </Container>
  );
};

export default Dashboard;
