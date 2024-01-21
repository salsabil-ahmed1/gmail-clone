import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Grid } from '@mui/material';
import gmail from '../images/GmailLogo.png';
import searchIcon from '../images/search-icon.png';

export default function Header() {
  return (
    <Grid container>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar elevation="0" position="static" sx={{backgroundColor:"#F9F9F9", minHeight:"5vw", minWidth:"100vw", paddingTop:"7px", paddingRight:"30px"}}>
            <Toolbar variant="dense">
                <Grid item xs={2} sx={{display:"flex", alignItems:"center"}}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2, color: "#3C3C3C" }}>
                    <MenuIcon sx={{width:"2vw"}}/>
                    </IconButton>
                    <img src={gmail} style={{width:"2vw"}}/>
                    <Typography variant="h6" color="inherit" component="div" 
                            sx={{color: "#3C3C3C", marginLeft:"3vw", fontSize:"2vw"}}>
                    Gmail
                    </Typography>
                </Grid>
                <Grid item xs={9}>
                    <div style={{display:"flex", alignItems:"center", borderRadius:"40px", backgroundColor:"#E4EFFA"}}>
                        <img src={searchIcon} style={{width:"1.5vw", height:"1.5vw", alignItems:"center", marginLeft:"15px"}}/>
                        <input placeholder='Search mail' style={{height:"3vw", width:"45vw", backgroundColor:"#E4EFFA", border:"none"}}/>
                    </div>
                </Grid>
                <Grid item xs={1}>
                    <Avatar sx={{marginLeft:"7vw", width:"3vw", height:"3vw"}}/>
                </Grid>
            </Toolbar>
            </AppBar>
        </Box>
    </Grid>
  );
}