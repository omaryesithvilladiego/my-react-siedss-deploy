
// SemilleroForm.js
import React, { useState } from 'react';
import {
  Grid,
  Paper,
  TextField,
  Button,
  Container,
  Typography,
} from '@mui/material';
import {
  AccountCircle,
  LocationOn,
  Public,
  Person,
  Description,
  Visibility,
} from '@mui/icons-material';
import axios from 'axios';

const SemilleroForm = () => {
  const [semillero, setSemillero] = useState({
    nombreSemillero: '',
    ciudadSemillero: '',
    paisSemillero: '',
    jefeSemillero: '',
    misionSemillero: '',
    visionSemillero: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSemillero({ ...semillero, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('URL_DEL_BACKEND/api/semillero', semillero); // Reemplaza 'URL_DEL_BACKEND' con la URL de tu servidor de backend
      alert('Formulario enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el formulario', error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h4" style={{ marginBottom: '20px' }}>
          Formulario de Semillero
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={15}>
            <Grid item xs={12}>
              <TextField
                label="Nombre del Semillero"
                variant="standard"
                name="nombreSemillero"
                fullWidth
                onChange={handleChange}
                placeholder="Escribe el nombre del semillero..."
                InputProps={{
                  startAdornment: <AccountCircle fontSize="large" />,
                  style: { fontSize: '20px' },
                }}
                style={{ marginBottom: '20px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Ciudad del Semillero"
                variant="standard"
                name="ciudadSemillero"
                fullWidth
                onChange={handleChange}
                placeholder="Escribe la ciudad del semillero..."
                InputProps={{
                  startAdornment: <LocationOn fontSize="large" />,
                  style: { fontSize: '20px' },
                }}
                style={{ marginBottom: '20px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="País del Semillero"
                variant="standard"
                name="paisSemillero"
                fullWidth
                onChange={handleChange}
                placeholder="Escribe el país del semillero..."
                InputProps={{
                  startAdornment: <Public fontSize="large" />,
                  style: { fontSize: '20px' },
                }}
                style={{ marginBottom: '20px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Jefe del Semillero"
                variant="standard"
                name="jefeSemillero"
                fullWidth
                onChange={handleChange}
                placeholder="Escribe el nombre del jefe del semillero..."
                InputProps={{
                  startAdornment: <Person fontSize="large" />,
                  style: { fontSize: '20px' },
                }}
                style={{ marginBottom: '20px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Misión del Semillero"
                variant="standard"
                name="misionSemillero"
                fullWidth
                onChange={handleChange}
                placeholder="Escribe la misión del semillero..."
                InputProps={{
                  startAdornment: <Description fontSize="large" />,
                  style: { fontSize: '20px' },
                }}
                style={{ marginBottom: '20px' }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Visión del Semillero"
                variant="standard"
                name="visionSemillero"
                fullWidth
                onChange={handleChange}
                placeholder="Escribe la visión del semillero..."
                InputProps={{
                  startAdornment: <Visibility fontSize="large" />,
                  style: { fontSize: '20px' },
                }}
                style={{ marginBottom: '20px' }}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            style={{ marginTop: '20px', padding: '15px', fontSize: '20px' }}
          >
            Enviar Formulario
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default SemilleroForm;
