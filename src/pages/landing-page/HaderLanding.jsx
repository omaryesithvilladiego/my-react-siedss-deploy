import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import style from "./headerlanding.module.css"
import LoginIcon from '@mui/icons-material/Login';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function HeaderLanding() {
    return (<Box

    >

        <Box sx={{

            backgroundColor: '#0A2463',
            color: 'white',
            maxWidth: '100%',
            height: 'fit-content',
            margin: '0',

        }}>

            

            <Box sx={{


                color: 'white',
                width: '100%',
                height: '10vh',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',

            }}>

                <Stack spacing={2} direction="row" style={{ color: 'white' }}>
                    <h1>SIEDSS</h1>
                </Stack>


                <Box className={style.menuBar}  style={{ color: 'white' }}>
                    <Button style={{ color: 'white' }} variant="text"> <Link to='/login'>Iniciar Sesión</Link> </Button>
                    <Button style={{ color: 'white', border: '1px solid white' }} variant="outlined">Crear Cuenta</Button>
                </Box>

                <Box className={style.menuBarMovil}   >
                    <Link to='/login'>  <LoginIcon /> </Link> 
                </Box>

            </Box>





            <Stack spacing={2} direction="row" style={{ color: 'white', width: '96%', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', gap: '2rem', maxWidth:'80vw'}}>


                <Paper className={style.containerTituloPrincipal} elevation={0} style={{ width: '72vw', height: '40rem', backgroundColor: 'transparent', color: 'white'}} >

                    <h2 className={style.tittle} style={{ textJustify: '1rem', display: 'flex', gap: '1rem', flexDirection: 'column' }}> <span > ¡Gestiona tu Éxito Académico!</span> <br />  Administra Ponencias, Cursos y Más con la Potente Aplicación del Semillero de Investigación 🌱💡</h2>
                    <Button style={{ width: 'fit-content', fontSize: '1.4rem' }} variant='contained'>Empieza Gratis 👌</Button>


                </Paper>




                <Paper className={style.information} elevation={0} style={{ width: '50vw', height: '20rem', backgroundColor:'transparent'}} >

                    <Box sx={{ flexGrow: 1, padding:'1rem', flexWrap:'wrap', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'transparent'}}>
                        <Grid sx={{  flexGrow: 1, flexWrap:'wrap'}} container spacing={2}>
                            <Grid xs={6}>
                                <Item>Aplica tus conocimientos</Item>
                            </Grid>
                            <Grid xs={6}>
                            <Item>Ponencias alrededor del mundo</Item>
                            </Grid>

                            <Grid xs={2}>
                                <Item>Cursos</Item> 
                            </Grid>

                            <Grid xs={3}>
                                <Item>Ponencias</Item> 
                            </Grid>

                            <Grid xs={3}>
                                <Item>Proyectos</Item> 
                            </Grid>

                            
                            <Grid xs={4}>
                                <Item>Premios</Item> 
                            </Grid>

                            <Grid xs={4}>
                                <Item>Actividades extracurriculares</Item> 
                            </Grid>

                            <Grid xs={5}>
                                <Item>Oportunidades de negocios</Item> 
                            </Grid>

                            <Grid xs={5}>
                                <Item>Metodologías Activas</Item> 
                            </Grid>

                            
                           
                          
                          
                          
                          
                        </Grid>
                    </Box>



                </Paper>





            </Stack>





        </Box>






    </Box>);
}

export default HeaderLanding;