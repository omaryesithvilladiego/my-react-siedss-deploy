import axios from 'axios';
import { useEffect, useState } from 'react';
import {Link, useRouteMatch} from 'react-router-dom'
const {APIHOST} = "../../../app2.json"
import { requestWithTokenGet } from "../../../authentication/helper/helper";
import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import InterpreterModeIcon from '@mui/icons-material/InterpreterMode';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Paper } from '@mui/material';


function EstadosPonencia({path}) {
    const [data, setData] = useState([])




    const getDatos = () => {
        requestWithTokenGet.get(`ponencia/obtener-ponencias`)
        .then((response) => {
          
          
         const datos = response.data
         setData(datos)
         console.log(data)
        })
        .catch((err) => {
          console.log(err);
        
        });
      }

      useEffect(() => {
        getDatos()
      }, []);
    



    
  

         data.forEach((object) => {
             
             if(object.estadoPonencia == 'Aprobada') {
                 
             } else if(object.estadoPonencia == 'Denegada') {
                
             } else if(object.estadoPonencia == 'Pendiente') {
                 
             }

         })

    
   
         




    return ( <>
    <div style={{display:'flex', flexDirection:'column', gap:'1.5rem'}}>
       

        <Stack sx={{ width: '100%' }} spacing={2}>
      
      <Alert severity="info" icon={<InterpreterModeIcon/>}> <p><strong>Usted Tiene {data.length} Ponencia </strong>  </p></Alert>
     
      <Alert severity="info" > <p> <strong>Las ponencias que no esten aprobadas no aparecen en su curriculum</strong>  </p></Alert>
     
    </Stack>

    <Stack>


        <Paper elevation={2} style={{padding:'1rem', backgroundColor:'#dbf2f2'}} severity='info'>
    <div style={{display:'flex', gap:'2rem', width:'100%', height:'20rem', flexDirection:'column', overflowY:'scroll'}}>
        
     {data.map(object => {
            return (
                
               
                 
                <div style={{width:'60%', height:'100%', borderBottom:'3px solid white',padding:'2rem'}} key={object._id}>

                 
                   
                    <div style={{display:'flex', gap:'.3rem', alignItems:'center'}}>
                        <div style={{width:'.8rem', height:'5rem', backgroundColor:object.colorEstadoPonencia }}></div>
                        <div style={{}}>
                        <h2> {object.nombreEventoPonencia} </h2>
                    <span>Fecha de Transaccion: <strong> {object.fechaPeticion} </strong></span>
                    <p>Estado: <span><strong> {object.estadoPonencia} </strong></span></p>
                        </div>
                    
                    </div>
                    
                </div>

                
               
               
            )
        })} 
         </div>
         </Paper>

         </Stack>

         <Stack sx={{ width: '30%' }} spacing={2}>
      
    <Link to={`${path}`}>  <Alert severity="info" icon={< ArrowBackIosIcon/>}>  Volver<br /></Alert></Link> 
     
    </Stack>
   

    </div>
    
    
    
                
    </> );
}

export default EstadosPonencia;