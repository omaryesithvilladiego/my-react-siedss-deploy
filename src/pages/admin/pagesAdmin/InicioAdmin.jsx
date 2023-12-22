import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import style from "./inicioadmin.module.css"

function InicioAdmin() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        margin:'0 auto',
        justifyContent:'center',
        '& > :not(style)': {
          m: 1,
          width: 150,
          height: 150,
        },
      }}
    >
      <Paper elevation={3} />
      <Paper />
      <Paper
        
        elevation={3}
      >
        <div className={style.FirstCuadro} >

        </div>
       
      </Paper>
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
      <Paper elevation={3} />
    </Box>
  );
}

export default InicioAdmin;
