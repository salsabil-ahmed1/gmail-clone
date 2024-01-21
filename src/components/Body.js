import React from "react";
import Sidebar from "./Sidebar";
import MailList from "./MailList";
import { Grid } from "@mui/material";

const Body = () => {
    return (
    <Grid>
        <Grid item>
        <Sidebar></Sidebar>
        </Grid>
        <Grid item >
        <MailList></MailList>
        </Grid>
    </Grid>
    );
  };
  
  export default Body;