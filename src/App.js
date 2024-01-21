import React from 'react';
import Header from './components/Header';
import { Grid } from '@mui/material';
import Body from './components/Body';

function App() {
  return (
    <div>
      <Header></Header>
      {/** 
      <Grid container>
        <Grid item xs={6}>
          <Header /> 
        </Grid>
        <Grid item xs={6}>
          <Body />
        </Grid>
      </Grid>
      */
      }
    </div>
  );
}

export default App;