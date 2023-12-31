import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';
import Paper from '@mui/material/Paper';
import styles from './admin.module.css'
import { Button, Typography } from '@mui/material';
import EstudiantesPageAdmin from './pagesAdmin/Estudiantes';
import Actividades from './pagesAdmin/Actividades';
import EstudiantesAsistencia from './pagesAdmin/Asistencia';
import InicioAdmin from './pagesAdmin/InicioAdmin';
import { cerrarSesion } from '../../authentication/helper/helper';

export default function UnstyledTabsIntroduction() {
  return (
    <div >
         <Paper style={{width:'100vw', height:'4rem',display:'flex',  justifyContent:'space-around', alignItems:'center', fontSize:'.9rem', fontWeight:'bold', backgroundColor:'black', color:'white'}} >

        <Typography style={{padding:'.5rem'}} variant='h6'>
        Bienvenida Profesora Edna Regino
        </Typography>

        <Button onClick={cerrarSesion} type='outline' >Cerrar Sesión</Button>
           



</Paper >

    <Tabs  className={styles.containerPages} defaultValue={0}>
            
      <TabsList >
        <Tab value={0}>Inicio</Tab>
        <Tab value={1}>Estudiantes</Tab>
        <Tab value={2}>Actividades</Tab>
        <Tab value={3}>Asistencia</Tab>

       

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
  font-weight: 600;
  background-color: ${grey[200]};
  width: 100%;
  padding: 10px 12px;
  margin: 6px;
  border: none;
  border-radius: 7px;
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
  width: 90vColumnGroupingTablew;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
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
  box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
  `,
);