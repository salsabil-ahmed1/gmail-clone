import React from 'react';
import Header from './components/Header';
import { Grid } from '@mui/material';
import Body from './components/Body';

function App() {
  return (
    <div>
      {/* <div style={{ display: 'flex' }}>
        /* <Sidebar />
        <MailList />
      </div> */} 
      <Grid container>
        <Grid item>
          <Header /> 
        </Grid>
        <Grid item>
          <Body />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;