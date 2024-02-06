import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import style from "./inicioadmin.module.css"
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { BarChart } from '@mui/x-charts/BarChart';


const dataRanking = [
  {
    id: 0,
    nombre: 'Juanito Gonzales',
    ranking: 123
  },
  {
    id: 1,
    nombre: 'Ana Marcela',
    ranking: 123
  },
  {
    id: 2,
    nombre: 'Melissa Andrea',
    ranking: 123
  }
]




function InicioAdmin() {
  return (
    <Container maxWidth='xl'>

      <Grid spacing={2} container>

      <Grid xs={12} >

<Paper  sx={{  borderRadius: '19px', height: '10rem' }} elevation={2}>

  <Container maxWidth='xl' sx={{ border: '1px solid #E6AF2E', borderRadius: '19px', height: '10rem', backgroundColor: '#54C6EB' }}  >



  </Container>



</Paper>

</Grid>

        <Grid xs={12} sm={12} md={6}>

          <Paper sx={{ height:'100%', borderRadius: '19px' }} elevation={0}>

            <Container maxWidth='md' >

              <Grid spacing={2} container>

                {dataRanking.map(dato => {
                  return (
                    <Grid  key={dato.id} xs={12} sm={6}>

                    <Paper sx={{height:'7rem', marginTop:'1rem', border:'1px solid #E6AF2E', borderRadius:'19px', paddingTop:'1rem'}}>
                      <Container maxWidth='md'>
                      <h1> {dato.nombre} </h1>
                      <p> {dato.ranking} </p>
                      </Container>
              
                    </Paper>
                     

                    </Grid>
                  )
                })}

              </Grid>


             



            </Container>



          </Paper>

        </Grid>

        <Grid xs={12} sm={12} md={6}>

          <Paper elevation={0}>

            <Container sx={{ border: '1px solid #E6AF2E', borderRadius: '19px', height: '25rem', backgroundColor: '#B288C0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}  >
              <BarChart
                series={[
                  { data: [10, 25, 15, 23] }
                ]}
                height={320}
                xAxis={[{ data: ['Ponencias', 'Cursos', 'Premios', 'Proyectos'], scaleType: 'band' }]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}

              />

            </Container>



          </Paper>

        </Grid>

       

      </Grid>

    </Container>
  );
}

export default InicioAdmin;
