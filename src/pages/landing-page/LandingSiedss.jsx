import HeaderLanding from "./HaderLanding";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import style from "./headerlanding.module.css"
import DvrIcon from '@mui/icons-material/Dvr';
import { Button } from "@material-ui/core";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import HubIcon from '@mui/icons-material/Hub';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import MedalIcon from "./vectores/vectoresLanding.jsx";
import ProfessionalInvitationIcon from "./vectores/InvitationCard.jsx";
import ProfessionalBadgeIcon from "./vectores/caballo.jsx";


const dataLogros = [
  
  {
  id:0,
  icon:  <MedalIcon />

,
  descripcion: 'Tercer lugar con la idea de Negocio TransdigitalCoop - Premio Rymel Serrano 2020'
  },
  {
    id:1,
    icon:   <ProfessionalInvitationIcon />,
    descripcion: 'Invitación a Digital Bank en Bogotá, 2018'
  },
  {
    id:2,
    icon:   <ProfessionalBadgeIcon  />,
    descripcion: 'Truequeando obtiene tercer lugar en el Premio Rymel Serrano 2017'
  },
  {
    id:3,
    icon:   <DvrIcon style={{ fontSize: '4rem' }} />,
    descripcion: 'Naturims segundo lugar en el premio Rymel Serrano 2018 '
  },
  {
    id:4,
    icon:   <DvrIcon style={{ fontSize: '4rem' }} />,
    descripcion: '3 Stand para participar en la Feria FET por su participación en Hackáthones, 2018'
  },
  {
    id:5,
    icon:   <DvrIcon style={{ fontSize: '4rem' }} />,
    descripcion: '3 Stand para participar en la Feria FET por su participación en Hackáthones, 2018'
  },
  {
    id:6,
    icon:   <DvrIcon style={{ fontSize: '4rem' }} />,
    descripcion: '3 Stand para participar en la Feria FET por su participación en Hackáthones, 2018'
  },
  {
    id:7,
    icon:   <DvrIcon style={{ fontSize: '4rem' }} />,
    descripcion: '3 Stand para participar en la Feria FET por su participación en Hackáthones, 2018'
  },
 
  


]


function Landing() {


  const [display, setDisplay] = React.useState('')






  return (
    <>
      <Box>
        <HeaderLanding />
      </Box>

      {/* <Box
        style={{
          width: "80%",
          height: "fit-content",
          margin: "0 auto",
          marginTop: "4rem",
          display: 'flex'
        }}
      >
        <Grid style={{ height: 'fit-content', borderRadius: '0px' }} container spacing={3}>


          <Grid xs={12} sm={12} md={6} xl={3}>
            <Paper
              style={{ backgroundColor: "#1CFEBA" }}
              className={style.publicidadImg}
              sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto", justifyContent: 'center' }}
                container
                spacing={5}
              >
                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item>
                  <Paper

                    style={{
                      width: 'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor: 'transparent',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white'
                    }}
                    elevation={1}
                  >


                    <DvrIcon style={{ fontSize: '4rem' }} />
                  </Paper>
                </Grid>

                <Grid xs={12} md={12} sm={6} item>
                  <Paper
                    style={{ width: "100%", borderRadius: "1.5rem", backgroundColor: 'transparent' }}
                    elevation={0}
                  >
                    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', alignItems: 'left' }}>
                      <h4 style={{ fontSize: "35px", }}>
                        ¡Gestión Integral para tus actividades del semillero!
                      </h4>
                      <p>
                        Añadir y gestionar actividades nunca fue tan fácil.
                        Responde rápidamente y organiza tareas con nuestra
                        interfaz amigable. ¡Simplifica tu vida semillero con
                        cada clic!
                      </p>

                      <Button variant="outlined" style={{ width: 'fit-content' }}>Más Información</Button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid xs={12} sm={12} md={6} xl={3}>


            <Paper
              style={{ backgroundColor: "#B8CDF8" }}
              className={style.publicidadImg}
              sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto", justifyContent: 'center' }}
                container
                spacing={5}
              >


                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item>

                  <Paper

                    style={{
                      width: 'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor: 'transparent',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'black'
                    }}
                    elevation={1}
                  >


                    <LibraryBooksIcon style={{ fontSize: '4rem', color: 'white' }} />
                  </Paper>

                </Grid>

                <Grid xs={12} md={12} sm={6} item>
                  <Paper
                    style={{ width: "100%", borderRadius: "1.5rem", backgroundColor: 'transparent' }}
                    elevation={0}
                  >
                    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', alignItems: 'left' }}>
                      <h4 style={{ fontSize: "35px", }}>
                        Currículum Impecable: <br /> Registra Logros en el Semillero
                      </h4>
                      <p>
                        Añade y organiza tus actividades del semillero con eficiencia, y observa cómo tu currículum cobra vida. Desde ponencias destacadas hasta proyectos innovadores
                      </p>

                      <Button variant="outlined" style={{ width: 'fit-content' }}>Más Información</Button>
                    </div>
                  </Paper>
                </Grid>


              </Grid>
            </Paper>



          </Grid>

          <Grid xs={12} sm={12} md={6} xl={3}>


            <Paper
              style={{ backgroundColor: "#BFDBF7" }}
              className={style.publicidadImg}
              sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto", justifyContent: 'center' }}
                container
                spacing={5}
              >


                <Grid sx={{ display: 'flex', justifyContent: 'center' }} item>

                  <Paper

                    style={{
                      width: 'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor: 'transparent',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'black'
                    }}
                    elevation={1}
                  >


                    <ModeEditIcon style={{ fontSize: '4rem', color: 'white' }} />
                  </Paper>

                </Grid>

                <Grid xs={12} md={12} sm={6} item>
                  <Paper
                    style={{ width: "100%", borderRadius: "1.5rem", backgroundColor: 'transparent' }}
                    elevation={0}
                  >
                    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', alignItems: 'left' }}>
                      <h4 style={{ fontSize: "35px", }}>
                        Seguimiento personalizado: <br /> Aprobación de Actividades
                      </h4>
                      <p>
                        Tus Logros: Destácate en el Semillero con actividades Revisadas y Aprobadas Personalmente por el jefe del semillero, luego tus actividades se agregaran a tu curriculum
                      </p>

                      <Button variant="outlined" style={{ width: 'fit-content' }}>Más Información</Button>
                    </div>
                  </Paper>
                </Grid>


              </Grid>
            </Paper>



          </Grid>

          <Grid xs={12} sm={12} md={6} xl={3}>


            <Paper
              style={{ backgroundColor: "#022B3A" }}
              className={style.publicidadImg}
              sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto", justifyContent: 'center' }}
                container
                spacing={5}
              >


                <Grid sx={{ display: 'flex' }} item>

                  <Paper

                    style={{
                      width: 'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor: 'transparent',
                      padding: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'black'
                    }}
                    elevation={1}
                  >


                    < HubIcon style={{ fontSize: '4rem', color: 'white' }} />
                  </Paper>

                </Grid>

                <Grid xs={12} md={12} sm={6} item>
                  <Paper
                    style={{ width: "100%", borderRadius: "1.5rem", backgroundColor: 'transparent', color: 'white' }}
                    elevation={0}
                  >
                    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', alignItems: 'left' }}>
                      <h4 style={{ fontSize: "35px", }}>
                        Centraliza tu Éxito: Un Espacio Único para tus Logros
                      </h4>
                      <p>
                        Todo lo que necesitas para destacar en el Semillero ahora está centralizado! Desde tus ponencias más destacadas hasta esos proyectos innovadores que te definen, todo está aquí.
                      </p>

                      <Button variant="outlined" style={{ width: 'fit-content', color: 'white', border: '1px solid white' }}>Más Información</Button>
                    </div>
                  </Paper>
                </Grid>


              </Grid>
            </Paper>



          </Grid>
        </Grid>





      </Box>



      <Box sx={{width:'fit-content', height:'fit-content', backgroundColor:'#bedaf0', marginTop:'4rem', paddingBottom:'4rem'}}>

      <React.Fragment>
      <Container maxWidth="md">
        <Box sx={{  height: '50vh' }} />
      </Container>
    </React.Fragment>




      <Box
        style={{
          width: "80%",
          height: "fit-content",
          margin: "0 auto",
          marginTop: "4rem",
          display: 'flex'
        }}
      >
        <Grid style={{ height: 'fit-content', borderRadius: '0px', display:'flex', justifyContent:'center', alignItems:'center', textAlign:'center' }} container spacing={10}>




          {
            
            
            dataLogros.map((item) => <Grid sx={{display:'flex', textAlign:'center', alignItems:'center', justifyContent:'center'}} item xs={12} sm={12} md={6} xl={4}  key={item.id}>
<Paper
              style={{ backgroundColor: "transparent" }}
              sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width:'fit-content', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'1rem', textAlign:'center' }}
              elevation={0}
            >
             {item.icon}
             <h2>{item.descripcion}</h2>

               


            </Paper>


            </Grid>)

          }
            

  
          



        </Grid>





      </Box>



      </Box>

    */}


   



    
    </>
  );
}

export default Landing;