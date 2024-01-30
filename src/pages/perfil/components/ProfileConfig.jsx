import React, { useState } from 'react';
import {
  Paper,
  Button,
  Avatar,
  Typography,
  TextField,
  IconButton,
  Box,
  Alert,
  Container,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useUserContext } from '../../../components/Provider/userProvider';
import axios from 'axios';
import { APIHOST } from '../../../app2.json';
import { requestWithToken } from '../../../authentication/helper/helper';
import Grid from '@mui/material/Unstable_Grid2';

function UploadImage ()  {
  const idUsuario = useUserContext();

  const [imageFile, setImageFile] = useState(null);
  const [imageFile2, setImageFile2] = useState(null);
  const [mensajeExito, setMensajeExito] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    console.log(file)
  };

  const handleFileChange2 = (e) => {
    const file = e.target.files[0];
    setImageFile2(file);
    console.log(file)
  };

  const uploadImageToServer = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append('fotoPerfilUrl', imageFile)
    formData.append('fotoPortadaUrl', imageFile2)
      
      axios
        .post(`${APIHOST}usuarios/actualizar-foto-perfil/${idUsuario}`, formData)
        .then((response) => {
          if (response.data.exito) {
            // Manejar la respuesta exitosa
            setMensajeExito('Imagen subida correctamente')
           
          } else {
            // Manejar la respuesta fallida
            console.log('Error al subir la imagen:', response.data);
          }
        })
        .catch((error) => {
          console.log('Error al subir la imagen:', error.message);
        });
    
  };

  return (

   

    <Container maxWidth='md'>

      <Grid container>

        <Grid xs={12}>

         

        </Grid>

        <Grid xs={12}>

      </Grid>

      </Grid>

    </Container>
  
  );
};

export default UploadImage;



// <div
// style={{
//   display: 'flex',
//   flexWrap: 'wrap',
//   flexDirection: 'row',
//   width: '80vw',
//   height: 'fit-content',
//   padding: '2rem',
//   margin: '0 auto',
// }}
// >
// {mensajeExito && <Alert severity="success"> {mensajeExito} </Alert>} 

// <form onSubmit={uploadImageToServer}>
//   <input type="file"
//   id='file'

//   onChange={handleFileChange}
  
//   />

// <input type="file"
// id='file2'

// onChange={handleFileChange2}

// />


// <Button type="submit" variant="contained" color="primary">
//   Enviar
// </Button>
// </form>

// </div>