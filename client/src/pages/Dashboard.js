import React from "react";
import { Container } from "@material-ui/core";
import ModuleList from "../components/ModulesList";

//Get The Modules for this user; Pass the Modules to the ModuleTable component

const Dashboard = () => {
  return (
    <Container fluid>

      <h1
        style={{
          color: "#072AC8",
          paddingTop: "35px",
          paddingBottom: "35px",
          fontFamily: "Playfair Display",
        }}
      >
        My Learning Dashboard
      </h1>
      <ModuleList />

    </Container>
  );
};

export default Dashboard;
