import React from "react";
import Sidebar from "./Sidebar";
import MailList from "./MailList";
import { Grid } from "@mui/material";

const Body = () => {
    return (
    <Grid container>
        <Grid item xs={2}>
            <Sidebar></Sidebar>
        </Grid>
        <Grid item xs={10}>
            Hello
        </Grid>
        {
            /**
             * <Grid item >
             * <MailList></MailList>
             * </Grid>
             */
        }
    </Grid>
    );
  };
  
  export default Body;