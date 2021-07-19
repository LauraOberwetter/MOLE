import React, { useEffect, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import API from "../../utils/API";
import "./style.css";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//     // cannot get this to work
//     fontFamily: "Montserrat",
//     color: "red",
//   },
// });

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function ModuleList() {
  const classes = useStyles();
  const [modules, setModules] = useState([]);
  const [expanded, setExpanded] = useState("panel1");

  useEffect(() => {
    const getModules = async () => {
      try {
        const moduleList = await API.getModules();
        console.log(moduleList);
        setModules(moduleList.data);
      } catch (error) {
        console.log(error);
      }
    };
    getModules();
    console.log(modules);
  }, []);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {modules.map((item) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                <span>{item.module_name}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {item.activities.length > 0 &&
                item.activities.map((act) => {
                  return (
                    <React.Fragment key={act.id}>
                      <Typography variant="h6">{act.activity_name}</Typography>{" "}
                      <br />
                      <Typography variant="h6">
                        {act.activity_type}
                      </Typography>{" "}
                      <br />
                      <Typography variant="h6">{act.due_date}</Typography>{" "}
                      <br />
                      <Typography variant="h6">{act.status}</Typography> <br />
                    </React.Fragment>
                  );
                })}
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
