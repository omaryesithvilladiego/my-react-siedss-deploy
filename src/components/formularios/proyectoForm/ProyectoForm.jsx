import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import IconButton from '@mui/material/IconButton';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import UploadIcon from '@mui/icons-material/Upload';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import styles from "../ponenciaForm/ponenciaform.module.css"
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {Link, useRouteMatch} from "react-router-dom"
import {requestWithTokenHeader} from '../../../authentication/helper/helper'

import { APIHOST } from "../../../app2.json"

const Modos = ['Virtual', 'Presencial', 'Mixta'];

function PonenciaFormulario() {


  //Proyecto Data
  const [certificadoResultadoPremioUrl, setCertificadoResultadoPremioUrl] = useState(null)
  const [actaTrabajoGradoUrl, setActaTrabajoGradoUrl] = useState(null)
  const [actaInvestigacionUrl, setActaInvestigacionUrl] = useState(null)


  const [exito, setExito] = useState(null)

  const [loaderProyecto, setLoaderProyecto] = useState(false)



  

  // Estado para verificar si el formulario es válido
  const [formularioValido, setFormularioValido] = useState(true);

  const handleFile1Change = (e) => {
    const file = e.target.files[0];
    setCertificadoResultadoPremioUrl(file);
  };

  const handleFile2Change = (e) => {
    const file = e.target.files[0]
    setActaTrabajoGradoUrl(file)
  }

  const handleFile3Change = (e) => {
    const file = e.target.files[0]
    setActaInvestigacionUrl(file)
  }


 

  const handleSubmit = (e) => {
    e.preventDefault();
  

    // // Verificar si hay errores en el formulario
    // if (!nombrePonencia || !modalidad || !pais || !ciudad || !fechaPonencia) {
    //   setFormularioValido(false);
    //   return; // No envíes la solicitud si hay errores
    // }

    let formData = new FormData()
    formData.append('certificadoResultadoPremioUrl', certificadoResultadoPremioUrl)
    formData.append('actaTrabajoGradoUrl', actaTrabajoGradoUrl)
    formData.append('actaInvestigacionUrl', actaInvestigacionUrl)



    console.log(certificadoResultadoPremioUrl)
   
    
    
    setLoaderProyecto(true)
    
    requestWithTokenHeader.post(`proyecto/create-proyecto`, formData)
.then((response) => {
        console.log(response)
        setExito(response.data.exito)
        setLoaderProyecto(false)

        // Limpiar los campos después del envío exitoso
      

        setTimeout(() => {
          setExito(false)
        }, 4000);
      })
      .catch((err) => {
        console.log(err)
      })

  };

  return (
    <form className={styles.formulario} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', height: '40rem', overflow: 'scroll' }} onSubmit={handleSubmit}>



      {exito && <Alert style={{ position: 'absolute' }} severity='success'>El poyecto se guardó correctamente</Alert>}
      {loaderProyecto &&
        <Box sx={{ display: 'flex', position: 'absolute' }}>
          <CircularProgress />
        </Box>
      }

     
      <CoPresentIcon /> <h2>Agregar Proyecto</h2>
   
     
      <div className="content-input-certificado">
        <input
          type="file"
          onChange={handleFile1Change}
          id="fileInput"
          style={{ display: 'none' }}
        />
        <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} htmlFor="fileInput">
          <IconButton component="span">
            <CloudUploadIcon />
          </IconButton>
          Subir Certificado
        </label>

        
        {certificadoResultadoPremioUrl && <p>Archivo seleccionado: {certificadoResultadoPremioUrl.name}</p>}
      </div>

      <div className="content-input-certificado">
        <input
          type="file"
          onChange={handleFile2Change}
          id="fileInput2"
          style={{ display: 'none' }}
        />
        <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} htmlFor="fileInput2">
          <IconButton component="span">
            <CloudUploadIcon />
          </IconButton>
          Subir Acta
        </label>
        {actaTrabajoGradoUrl && <p>Archivo seleccionado: {actaTrabajoGradoUrl.name}</p>}
      </div>



      <div className="content-input-certificado">
        <input
          type="file"
          onChange={handleFile3Change}
          id="fileInput3"
          style={{ display: 'none' }}
        />
        <label style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} htmlFor="fileInput3">
          <IconButton component="span">
            <CloudUploadIcon />
          </IconButton>
          Subir Acta
        </label>
        {actaInvestigacionUrl && <p>Archivo seleccionado: {actaInvestigacionUrl.name}</p>}
      </div>


      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default PonenciaFormulario;
