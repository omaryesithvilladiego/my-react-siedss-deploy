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
function Landing() {


  const [display, setDisplay] = React.useState('')






  return (
    <>
      <Box>
        <HeaderLanding />
      </Box>

      <Box
        style={{
          width: "80%",
          height: "fit-content",
          margin: "0 auto",
          marginTop: "4rem",
          display:'flex'
        }}
      >
        <Grid style={{height:'fit-content', borderRadius:'6px'}} container spacing={3}>


          <Grid  xs={12} sm={12} md={6} xl={3}>
            <Paper
              style={{ backgroundColor: "#1CFEBA" }}
              className={style.publicidadImg}
              sx={{display:'flex', justifyContent:'center',  flexDirection:'column'}}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto",justifyContent:'center'}}
                container
                spacing={5}
              >
                <Grid sx={{ display:'flex', justifyContent:'center'}} item>
                  <Paper
                    
                    style={{
                      width:'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor:'transparent',
                      padding:'1rem',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center',
                      alignItems:'center',
                      backgroundColor:'white'
                    }}
                    elevation={1}
                  >


                    <DvrIcon style={{fontSize:'4rem'}} />
                  </Paper>
                </Grid>

                <Grid xs={12} md={12} sm={6} item>
                  <Paper
                    style={{ width: "100%", borderRadius: "1.5rem", backgroundColor:'transparent' }}
                    elevation={0}
                  >
                    <div style={{display:'flex', gap:'2rem', flexDirection:'column', alignItems:'left'}}>
                      <h4 style={{ fontSize: "35px",  }}>
                      ¡Gestión Integral para tus actividades del semillero!
                      </h4>
                      <p>
                        Añadir y gestionar actividades nunca fue tan fácil.
                        Responde rápidamente y organiza tareas con nuestra
                        interfaz amigable. ¡Simplifica tu vida semillero con
                        cada clic!
                      </p>

                    <Button variant="outlined" style={{width:'fit-content'}}>Más Información</Button>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid  xs={12} sm={12} md={6} xl={3}>


            <Paper
              style={{ backgroundColor: "#B8CDF8" }}
              className={style.publicidadImg}
              sx={{display:'flex', justifyContent:'center',  flexDirection:'column'}}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto",justifyContent:'center'}}
                container
                spacing={5}
              >


                <Grid  sx={{ display:'flex', justifyContent:'center'}} item>

                  <Paper
                    
                    style={{
                      width:'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor:'transparent',
                      padding:'1rem',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center',
                      alignItems:'center',
                      backgroundColor:'black'
                    }}
                    elevation={1}
                  >


                    <LibraryBooksIcon style={{fontSize:'4rem', color:'white'}} />
                  </Paper>

                </Grid>

                <Grid xs={12} md={12} sm={6} item>
                  <Paper
                    style={{ width: "100%", borderRadius: "1.5rem", backgroundColor:'transparent' }}
                    elevation={0}
                  >
                    <div style={{display:'flex', gap:'2rem', flexDirection:'column', alignItems:'left'}}>
                      <h4 style={{ fontSize: "35px",  }}>
                      Currículum Impecable: <br /> Registra Logros en el Semillero
                      </h4>
                      <p>
                      Añade y organiza tus actividades del semillero con eficiencia, y observa cómo tu currículum cobra vida. Desde ponencias destacadas hasta proyectos innovadores
                      </p>

                    <Button variant="outlined" style={{width:'fit-content'}}>Más Información</Button>
                    </div>
                  </Paper>
                </Grid>


              </Grid>
            </Paper>



          </Grid>

          <Grid  xs={12} sm={12} md={6} xl={3}>


            <Paper
              style={{ backgroundColor: "#BFDBF7" }}
              className={style.publicidadImg}
              sx={{display:'flex', justifyContent:'center',  flexDirection:'column'}}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto",justifyContent:'center'}}
                container
                spacing={5}
              >


                <Grid  sx={{ display:'flex', justifyContent:'center'}} item>

                  <Paper
                    
                    style={{
                      width:'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor:'transparent',
                      padding:'1rem',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center',
                      alignItems:'center',
                      backgroundColor:'black'
                    }}
                    elevation={1}
                  >


                    <ModeEditIcon  style={{fontSize:'4rem', color:'white'}} />
                  </Paper>

                </Grid>

                <Grid xs={12} md={12} sm={6} item>
                  <Paper
                    style={{ width: "100%", borderRadius: "1.5rem", backgroundColor:'transparent' }}
                    elevation={0}
                  >
                    <div style={{display:'flex', gap:'2rem', flexDirection:'column', alignItems:'left'}}>
                      <h4 style={{ fontSize: "35px",  }}>
                      Seguimiento personalizado: <br /> Aprobación de Actividades
                      </h4>
                      <p>
                      Tus Logros: Destácate en el Semillero con actividades Revisadas y Aprobadas Personalmente por el jefe del semillero, luego tus actividades se agregaran a tu curriculum
                      </p>

                    <Button variant="outlined" style={{width:'fit-content'}}>Más Información</Button>
                    </div>
                  </Paper>
                </Grid>


              </Grid>
            </Paper>



          </Grid>

          <Grid  xs={12} sm={12} md={6} xl={3}>


            <Paper
              style={{ backgroundColor: "#022B3A" }}
              className={style.publicidadImg}
              sx={{display:'flex', justifyContent:'center',  flexDirection:'column'}}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto",justifyContent:'center'}}
                container
                spacing={5}
              >


                <Grid  sx={{ display:'flex'}} item>

                  <Paper
                    
                    style={{
                      width:'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor:'transparent',
                      padding:'1rem',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center',
                      alignItems:'center',
                      backgroundColor:'black'
                    }}
                    elevation={1}
                  >


                    < HubIcon style={{fontSize:'4rem', color:'white'}} />
                  </Paper>

                </Grid>

                <Grid xs={12} md={12} sm={6} item>
                  <Paper
                    style={{ width: "100%", borderRadius: "1.5rem", backgroundColor:'transparent', color:'white' }}
                    elevation={0}
                  >
                    <div style={{display:'flex', gap:'2rem', flexDirection:'column', alignItems:'left'}}>
                      <h4 style={{ fontSize: "35px",  }}>
                      Centraliza tu Éxito: Un Espacio Único para tus Logros
                      </h4>
                      <p>
                      Todo lo que necesitas para destacar en el Semillero ahora está centralizado! Desde tus ponencias más destacadas hasta esos proyectos innovadores que te definen, todo está aquí. 
                      </p>

                    <Button variant="outlined" style={{width:'fit-content', color:'white', border:'1px solid white'}}>Más Información</Button>
                    </div>
                  </Paper>
                </Grid>


              </Grid>
            </Paper>



          </Grid>
        </Grid>


      </Box>


          <Grid container sx={{width:'100%', height:'100vh'}}>


          
            <Grid xs={12} md={6}  sx={{display:'flex', flexDirection:'column', justifyContent:'center'}} >

             

              <Paper sx={{width:'80%', margin:'0 auto', height:'80%',}} elevation={10}>

              </Paper>

              
            </Grid>

            <Grid sx={{ display:'flex', flexDirection:'column', justifyContent:'center'}}  xs={12} md={6} >

            <Paper sx={{width:'80%', margin:'0 auto', height:'80%',}} elevation={10}>

</Paper>


              
            </Grid>





          </Grid>
    </>
  );
}

export default Landing;