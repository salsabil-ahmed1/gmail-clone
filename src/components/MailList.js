import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const MailList = () => {
  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h5" component="div">
        Mail List
      </Typography>
      {/* Add your mail list content here */}
    </Paper>
  );
};

export default MailList;