import HeaderLanding from "./HaderLanding";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import style from "./headerlanding.module.css"

function Landing() {
  return (


    <>

      <Box>
        <HeaderLanding />
      </Box>

      <Box style={{



        width: '80%',
        height: '100vh',
        margin: '0 auto',
        marginTop: '4rem'

      }}>

        <Grid container spacing={3}>

          <Grid xs={12} sm={6} md={6}>

            <Paper className={style.publicidadImg} sx={{
              borderRadius: '1rem'
            }} elevation={2}>


              <Grid container spacing={5}>
                <Grid xs={10} sm={6} item>

                  <Paper className={style.capturaFirst} style={{ width: '100%', height: '15rem', borderRadius: '1.5rem' }} elevation={1}>

                  </Paper>


                </Grid>

                <Grid xs={12} md={12} sm={6} item>

                  <Paper style={{ width: '100%', borderRadius: '1.5rem' }} elevation={0} >


                    <div>

                      <h4 style={{ fontSize: '25px' }}>¡Optimiza tu Semillero con Nuestro Dashboard Intuitivo!</h4>
                      <p>Añadir y gestionar actividades nunca fue tan fácil. Responde rápidamente y organiza tareas con nuestra interfaz amigable. ¡Simplifica tu vida semillero con cada clic!</p>

                    </div>


                  </Paper>


                </Grid>
              </Grid>









            </Paper>


          </Grid>

          <Grid item xs={12} sm={6} >

            <Paper className={style.publicidadImg} sx={{
              borderRadius: '1rem'
            }} elevation={2}>


              <Grid container spacing={5}>


                <Grid xs={10} sm={6} item>

                  <Paper className={style.capturaFirst} style={{ width: '100%', height: '15rem', borderRadius: '1.5rem' }} elevation={1}>

                  </Paper>


                </Grid>

                <Grid xs={12} md={12} sm={6} item>

                  <Paper style={{ width: '100%', borderRadius: '1.5rem' }} elevation={0} >


                    <div>

                      <h4 style={{ fontSize: '25px' }}>¡Optimiza tu Semillero con Nuestro Dashboard Intuitivo!</h4>
                      <p>Añadir y gestionar actividades nunca fue tan fácil. Responde rápidamente y organiza tareas con nuestra interfaz amigable. ¡Simplifica tu vida semillero con cada clic!</p>

                    </div>


                  </Paper>


                </Grid>


              </Grid>









            </Paper>




          </Grid>

          <Grid item xs={12} sm={6} >

<Paper className={style.publicidadImg} sx={{
  borderRadius: '1rem'
}} elevation={2}>


  <Grid container spacing={5}>

    
    <Grid xs={10} sm={6} item>

      <Paper className={style.capturaFirst} style={{ width: '100%', height: '15rem', borderRadius: '1.5rem' }} elevation={1}>

      </Paper>


    </Grid>

    <Grid xs={12} md={12} sm={6} item>

      <Paper style={{ width: '100%', borderRadius: '1.5rem' }} elevation={0} >


        <div>

          <h4 style={{ fontSize: '25px' }}>¡Optimiza tu Semillero con Nuestro Dashboard Intuitivo!</h4>
          <p>Añadir y gestionar actividades nunca fue tan fácil. Responde rápidamente y organiza tareas con nuestra interfaz amigable. ¡Simplifica tu vida semillero con cada clic!</p>

        </div>


      </Paper>


    </Grid>


  </Grid>









</Paper>




</Grid>

<Grid item xs={12} sm={6} >

<Paper className={style.publicidadImg} sx={{
  borderRadius: '1rem'
}} elevation={2}>


  <Grid container spacing={5}>

    
    <Grid xs={10} sm={6} item>

      <Paper className={style.capturaFirst} style={{ width: '100%', height: '15rem', borderRadius: '1.5rem' }} elevation={1}>

      </Paper>


    </Grid>

    <Grid xs={12} md={12} sm={6} item>

      <Paper style={{ width: '100%', borderRadius: '1.5rem' }} elevation={0} >


        <div>

          <h4 style={{ fontSize: '25px' }}>¡Optimiza tu Semillero con Nuestro Dashboard Intuitivo!</h4>
          <p>Añadir y gestionar actividades nunca fue tan fácil. Responde rápidamente y organiza tareas con nuestra interfaz amigable. ¡Simplifica tu vida semillero con cada clic!</p>

        </div>


      </Paper>


    </Grid>


  </Grid>









</Paper>




</Grid>


        </Grid>




      </Box>

    </>

  );
}

export default Landing;