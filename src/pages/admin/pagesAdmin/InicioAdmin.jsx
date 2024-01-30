import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import style from "./inicioadmin.module.css"
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

function InicioAdmin() {
  return (
    <Container sx={{paddingTop:'2rem'}} maxWidth='lg'>
      
      <Grid spacing={2} container>

        <Grid xs={12} sm={12} md={6}>

          <Paper elevation={0}>

            <Container >
            <Typography variant='h4'>Nombre del Semillero</Typography>
            <Typography variant='h5' component='p'>Docente asignado</Typography>

            <Container sx={{height:'4rem'}} maxWidth='sm'>
              

            </Container>

            </Container>

           

          </Paper>

        </Grid>

        <Grid xs={12} sm={12} md={6}>

          <Paper elevation={0}>

            <Container >
            <Typography variant='h4'>Nombre del Semillero</Typography>
            <Typography variant='h5' component='p'>Docente asignado</Typography>

            </Container>

           

          </Paper>

        </Grid>

      </Grid>

    </Container>
  );
}

export default InicioAdmin;
