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




  const [nombrePonencia, setNombrePonencia] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [pais, setPais] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [archivoPdf1, setArchivoPdf1] = useState(null);
  const [imagen, setImagen] = useState(null);
  const [archivoPdf2, setArchivoPdf2] = useState(null);
  const [fechaPonencia, setFechaPonencia] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const [selectedFile3, setSelectedFile3] = useState(null);
  const [selectedFile4, setSelectedFile4] = useState(null);
  const [idUsuarioPonencia, setIdUsuarioPonencia] = useState(12345698575545525);
  const [loaderPonencia, setLoaderPonencia] = useState(false) // Defino las variables para controlar el cargar la ponencia
  const [exito, setExito] = useState(null)

  let {path, url} = useRouteMatch()


  // Agregar estados de error
  const [nombreError, setNombreError] = useState('');
  const [nombreErrorBoolean, setNombreErrorBoolean] = useState(true);

  const [modalidadError, setModalidadError] = useState('');
  const [modalidadErrorBoolean, setModalidadErrorBoolean] = useState(true);

  const [paisError, setPaisError] = useState('');
  const [paisErrorBoolean, setPaisErrorBoolean] = useState(true);

  const [ciudadError, setCiudadError] = useState('');
  const [ciudadErrorBoolean, setCiudadErrorBoolean] = useState(true);

  const [fechaError, setFechaError] = useState('');
  const [fechaErrorBoolean, setFechaErrorBoolean] = useState(true);

  const [file1Error, setFile1Error] = useState('');
  const [file1ErrorBoolean, setFile1ErrorBoolean] = useState(true);

  const [file2Error, setFile2Error] = useState('');
  const [file2ErrorBoolean, setFile2ErrorBoolean] = useState(true);

  const [file3Error, setFile3Error] = useState('');
  const [file3ErrorBoolean, setFile3ErrorBoolean] = useState(true);

  const [file4Error, setFile4Error] = useState('');
  const [file4ErrorBoolean, setFile4ErrorBoolean] = useState(true);

  // Estado para verificar si el formulario es válido
  const [formularioValido, setFormularioValido] = useState(true);

  const handleFile1Change = (e) => {
    const file = e.target.files[0];
    setCertificadoResultadoPremioUrl(file);
  };

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar campos vacíos y establecer errores si es necesario
    if (!nombrePonencia) {
      setNombreError('El nombre de la ponencia es obligatorio');
      setNombreErrorBoolean(false);
    } else {
      setNombreErrorBoolean(true);
      setNombreError('');
    }

    if (!modalidad) {
      setModalidadError('La modalidad de la ponencia es obligatoria');
      setModalidadErrorBoolean(false);
    } else {
      setModalidadError('');
      setModalidadErrorBoolean(true);
    }

    if (!pais) {
      setPaisError('El país de la ponencia es obligatorio');
      setPaisErrorBoolean(false);
    } else {
      setPaisErrorBoolean(true);
      setPaisError('');
    }

    if (!ciudad) {
      setCiudadError('La ciudad de la ponencia es obligatoria');
      setCiudadErrorBoolean(false);
    } else {
      setCiudadErrorBoolean(true);
      setCiudadError('');
    }

    if (!fechaPonencia) {
      setFechaErrorBoolean(false);
      setFechaError('La fecha de la ponencia es obligatoria');
    } else {
      setFechaError('');
      setFechaErrorBoolean(true);
    }

    if (!selectedFile) {
      setFile1Error('El certificado de la ponencia es obligatorio');
      setFile1ErrorBoolean(false);
    } else {
      setFile1ErrorBoolean(true);
      setFile1Error('');
    }

    if (!selectedFile2) {
      setFile2Error('El certificado de la ponencia es obligatorio');
      setFile2ErrorBoolean(false);
    } else {
      setFile2ErrorBoolean(true);
      setFile2Error('');
    }

    if (!selectedFile3) {
      setFile3Error('La presentación del evento es obligatoria');
      setFile3ErrorBoolean(false);
    } else {
      setFile3ErrorBoolean(true);
      setFile3Error('');
    }

    if (!selectedFile4) {
      setFile4Error('La imagen memorias es obligatoria');
      setFile4ErrorBoolean(false);
    } else {
      setFile4ErrorBoolean(true);
      setFile4Error('');
    }

    // // Verificar si hay errores en el formulario
    // if (!nombrePonencia || !modalidad || !pais || !ciudad || !fechaPonencia) {
    //   setFormularioValido(false);
    //   return; // No envíes la solicitud si hay errores
    // }

    const formData = new FormData()

    console.log(certificadoResultadoPremioUrl)
   
    formData.append('files', [certificadoResultadoPremioUrl])
    
    setLoaderPonencia(true)
    
    requestWithTokenHeader.post("proyecto/create-proyecto", formData)
      .then((response) => {
        console.log(response)
        setExito(response.data.exito)
        setLoaderPonencia(false)

        // Limpiar los campos después del envío exitoso
        setNombrePonencia('');
        setModalidad('');
        setPais('');
        setCiudad('');
        setFechaPonencia(null);
        setSelectedFile(null);
        setSelectedFile2(null);
        setSelectedFile3(null);
        setSelectedFile4(null);

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
      {loaderPonencia &&
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


      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
    </form>
  );
}

export default PonenciaFormulario;
