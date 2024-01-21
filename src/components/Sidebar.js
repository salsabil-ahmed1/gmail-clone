import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Sidebar = () => {
  return (
    <div style={{backgroundColor:"#F9F9F9", minHeight:"100vh", paddingTop:"1vw"}}>
      <div style={{marginLeft:"1vw", display:"flex", alignItems:"center", borderRadius:"20px", backgroundColor:"#BEE0FF"}}>
        <h4 style={{marginLeft:"1.6vw", fontWeight:"400", fontSize:"1vw"}}>Compose</h4>
      </div>
      <div style={{marginLeft:"1vw", display:"flex", alignItems:"center"}}>
        <h4 style={{marginLeft:"1.6vw", fontWeight:"400", fontSize:"1.3vw"}}>Inbox</h4>
      </div>
      <div style={{marginLeft:"1vw", display:"flex", alignItems:"center"}}>
        <h4 style={{marginLeft:"1.6vw", fontWeight:"400", fontSize:"1.3vw"}}>Sent</h4>
      </div>
      <div style={{marginLeft:"1vw", display:"flex", alignItems:"center"}}>
        <h4 style={{marginLeft:"1.6vw", fontWeight:"400", fontSize:"1.3vw"}}>Drafts</h4>
      </div>
    </div>
  );
};

export default Sidebar;