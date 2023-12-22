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


function EstadoGlobal({path, tipo}) {
    const [data, setData] = useState([{}])




    const getDatos = () => {
       
        const tipoLower = tipo.toLowerCase()
        requestWithTokenGet.get(`${tipoLower}/obtener-${tipoLower}`)
        .then((response) => {
          
          
         const datos = response.data
         console.log(response.data)
         if(response.data.length > 0) {
            setData(datos)
            console.log(data)
         }
        
        })
        .catch((err) => {
          console.log(err);
        
        });
      }

      useEffect(() => {
        console.log(tipo)
         getDatos()
      }, []);
    



    
  

   
         




    return ( <>
    <div style={{display:'flex', flexDirection:'column', gap:'1.5rem'}}>
       

        <Stack sx={{ width: '100%' }} spacing={2}>
      
      <Alert severity="info" icon={<InterpreterModeIcon/>}> <p><strong>Usted Tiene {data.length} {tipo} </strong>  </p></Alert>
     
      <Alert severity="info" > <p> <strong>{tipo} en estado pendiente no aparece en su curriculum</strong>  </p></Alert>
     
    </Stack>

    <Stack>


        <Paper elevation={2} style={{padding:'1rem', backgroundColor:'#dbf2f2'}} severity='info'>
    <div style={{display:'flex', gap:'2rem', width:'100%', height:'20rem', flexDirection:'column', overflowY:'scroll'}}>
        
     {data.map(object => {
            return (
                
               
                 
                <div style={{width:'60%', height:'100%', borderBottom:'3px solid white',padding:'2rem'}} key={object._id}>

                 
                   
                    <div style={{display:'flex', gap:'.3rem', alignItems:'center'}}>
                        <div style={{width:'.8rem', height:'5rem', backgroundColor:object[`colorEstado${tipo}`] }}></div>
                        <div style={{}}>

                        <h2> {object[`nombreEvento${tipo}`]} </h2>
                    <span>Fecha de Transaccion: <strong> {object.fechaPeticion} </strong></span>
                    <p>Estado: <span><strong> {object[`estado${tipo}`]} </strong></span></p>
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

export default EstadoGlobal;