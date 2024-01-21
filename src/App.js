import React from 'react';
import Header from './components/Header';
import { Grid } from '@mui/material';
import Body from './components/Body';

function App() {
  return (
    <div>
      <Grid>
        <Grid item xs={12}>
          <Header></Header>
        </Grid>
        <Grid item xs={12}>
          <Body></Body>
        </Grid>

      </Grid>
      
    </div>
  );
}

export default App;