import axios from "axios";
import { useUserContext } from "../../../components/Provider/userProvider";
import {APIHOST} from "../../../app2.json"
import * as React from 'react';
import Box from '@mui/material/Box';
import { useState } from "react";
import { Paper, TextField, Button, Typography, Container } from '@mui/material';


function CambiarContra() {

  const dataUser = useUserContext()
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {

    if(dataUser) {
      const idUsuario = dataUser.data.idUsuarioRegistro
    // Realiza las validaciones aquí
    if(newPassword == '' || confirmPassword == '' ) {
        setError('No hay datos ingresados')
        return;
    }
    if (newPassword !== confirmPassword ) {
      setError('Las contraseñas nuevas no coinciden.');
      return;
    }

    // Realiza la acción si todas las validaciones son exitosas
    // En este ejemplo, simplemente mostramos un mensaje en la consola
    setError('')
    try {
      axios.post(`${APIHOST}usuarios/change-password/${idUsuario}/${newPassword}`)
      .then((response) => {
       alert(response.data.msg)
      })
      .catch((err) => {
        console.log(err)
      })
  } catch (error) {
    console.log(error)
      
  }

    }
  
  };



    return ( 
    
    
    <>
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '80%',
          margin:'0 auto',
          height: '50vh',
        },
      }}
    >
      <Paper style={{display:'flex', flexDirection:'column', justifyContent:'center'}} elevation={4} >
    
      <Paper elevation={0} style={{ padding: '20px', width: '80%', maxWidth: '400px',margin:'0 auto' }}>
        <Typography variant="h5" align="center" gutterBottom>
          Cambiar Contraseña
        </Typography>

      

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Nueva Contraseña"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Confirmar Nueva Contraseña"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={error !== ''}
          helperText={error}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          style={{ marginTop: '20px' }}
        >
          Cambiar Contraseña
        </Button>
      </Paper>
 
      </Paper>
     
    </Box>
    
    </> );
}

export default CambiarContra;