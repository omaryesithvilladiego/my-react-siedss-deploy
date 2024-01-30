import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import Paper from '@mui/material/Paper';
import styles from './admin.module.css'
import { Button,  Container,  Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import EstudiantesPageAdmin from './pagesAdmin/Estudiantes';
import Actividades from './pagesAdmin/Actividades';
import EstudiantesAsistencia from './pagesAdmin/Asistencia';
import InicioAdmin from './pagesAdmin/InicioAdmin';
import { cerrarSesion } from '../../authentication/helper/helper';
import HomeIcon from '@mui/icons-material/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h3 = {
  color:'black',
  fontSize: '0.8rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  
  },
};

const dataMenu = [
  {
    id:0,
    text: <ThemeProvider theme={theme}>
        <Typography variant="h3" component='p'>Inicio</Typography>
         </ThemeProvider>
  },
  {
    id:1,
    text:<ThemeProvider theme={theme}>
    <Typography variant="h3" component='p'>Estudiantes</Typography>
     </ThemeProvider>
  },
  {
    id:2,
    text:<ThemeProvider theme={theme}>
    <Typography variant="h3" component='p'>Actividades</Typography>
     </ThemeProvider>
  },
  {
    id:3,
    text:<ThemeProvider theme={theme}>
    <Typography variant="h3" component='p'>Asistencia</Typography>
     </ThemeProvider>
  }
  
]

export default function UnstyledTabsIntroduction() {
  return (
    <div >
         <Paper elevation={0} style={{width:'100%', height:'6rem',display:'flex',  justifyContent:'space-around',fontSize:'.9rem', fontWeight:'bold', justifyContents:'center', alignItems:'center', backgroundColor:'#f9e9ff74', borderRadius:'0px'}} >




    <Container maxWidth='xl'>

    <Grid container spacing={2}>


      <Grid xs={12} sm={6}>

        <Paper sx={{width:'50%', height:'fit-content'}} elevation={0}>

          <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} maxWidth='md'>

        

          <Typography variant='h6' component='h2'>
            
            SAS

          </Typography>
          
         

          

          </Container>

        </Paper>

      
       
     
       
      </Grid>

      <Grid xs={12} sm={6}>

      <Grid container>
        <Grid xs={12}>

          {/* <Container sx={{display:'flex', justifyContent:'flex-end', alignItems:'flex-end'}} maxWidth='md'>
          <Button onClick={cerrarSesion} type='outline' >Cerrar Sesión</Button>
          </Container> */}
         

          </Grid>
        

        </Grid>
 
      </Grid>

    
    </Grid>

    </Container>


</Paper >

    <Tabs style={{ backgroundColor:'#f9e9ff74', height:'100vh'}}  className={styles.containerPages} defaultValue={0}>
   
     

      <TabsList sx={{width:'70%', margin:'0 auto',  backgroundColor:'#DAFFEF', borderRadius:'50px'}} >

      {dataMenu.map((item) => {
        return (
        <Tab sx={{height:'3rem', display:'flex', alignItems:'center'}} value={item.id} key={item.id}>
          {item.text}
        </Tab>)
      })}
      </TabsList>

      <TabPanel value={0}> <InicioAdmin /> </TabPanel>
      <TabPanel value={1}><EstudiantesPageAdmin /></TabPanel>
      <TabPanel value={2}> <Actividades /> </TabPanel>
      <TabPanel value={3}> <EstudiantesAsistencia /> </TabPanel>

    </Tabs>
    </div>
  );
}

const blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#80BFFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Tab = styled(BaseTab)`
  font-family: 'IBM Plex Sans', sans-serif;
  color: black;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 200;
  background-color: transparent;
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${grey[400]};
  }

  &:focus {
    color: #fff;

  }

  &.${tabClasses.selected} {
    background-color: ${grey[400]};
    color: #fff;
  }

  &.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(BaseTabPanel)(
  ({ theme }) => `
  width: 90vw;
  margin:0 auto;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  border:none;
  opacity: 0.6;
  `,
);

const TabsList = styled(BaseTabsList)(
  ({ theme }) => `
  min-width: 400px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
  `,
);