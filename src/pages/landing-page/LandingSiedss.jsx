import HeaderLanding from "./HaderLanding";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import style from "./headerlanding.module.css"
import DvrIcon from '@mui/icons-material/Dvr';
import { Button } from "@material-ui/core";
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
function Landing() {
  return (
    <>
      <Box>
        <HeaderLanding />
      </Box>

      <Box
        style={{
          width: "80%",
          height: "100vh",
          margin: "0 auto",
          marginTop: "4rem",
        }}
      >
        <Grid container spacing={3}>
          <Grid  xs={12} sm={12} md={6} xl={3}>
            <Paper
              style={{ backgroundColor: "#1CFEBA" }}
              className={style.publicidadImg}
              sx={{}}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto" }}
                container
                spacing={5}
              >
                <Grid xs={10} sm={6} item>
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
              sx={{}}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto" }}
                container
                spacing={5}
              >
                <Grid xs={10} sm={6} item>
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
              style={{ backgroundColor: "#95F2D9" }}
              className={style.publicidadImg}
              sx={{}}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto" }}
                container
                spacing={5}
              >
                <Grid xs={10} sm={6} item>
                  <Paper
                    
                    style={{
                      width:'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor:'transparent',
                      padding:'1rem',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center',
                      alignItems:'center'
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
              style={{ backgroundColor: "#9D8DF1" }}
              className={style.publicidadImg}
              sx={{}}
              elevation={2}
            >
              <Grid
                style={{ width: "90%", margin: "0 auto" }}
                container
                spacing={5}
              >
                <Grid xs={10} sm={6} item>
                  <Paper
                    
                    style={{
                      width:'fit-content',
                      borderRadius: "1.5rem",
                      backgroundColor:'transparent',
                      padding:'1rem',
                      display:'flex',
                      flexDirection:'column',
                      justifyContent:'center',
                      alignItems:'center'
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
        </Grid>
      </Box>
    </>
  );
}

export default Landing;