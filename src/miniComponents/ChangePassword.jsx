import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { APIHOST } from '../app2.json';
import { makeStyles } from '@mui/styles';
import { Alert, Paper } from '@mui/material';
import { Redirect } from 'react-router-dom';

const useStylesAlert = makeStyles((theme) => ({
  overlay: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 15rem)',
    width: '80%', // Ajusta según sea necesario
    maxWidth: '400px', // Ancho máximo para mejor legibilidad
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  card: {
    maxWidth: 345,
    width: '80%',
    margin: 'auto',
    backgroundColor: 'transparent',
  },
  media: {
    height: 140,
  },
  form: {
    width: '100%', // Ajusta el ancho del formulario
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  textField: {
    width: '100%',
  },
  submitButton: {},
}));

function ChangePassword() {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [CorreoNoExiste, setCorreoNoExiste] = useState('');
  const classesAlert = useStylesAlert();
  const [cambiarPage, setCambiarPage] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    // Verifica si el correo electrónico termina en '@campusucc.edu.co'
    setValidEmail(newEmail.endsWith('@campusucc.edu.co'));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Agrega la lógica de acción que deseas realizar aquí
    if (validEmail) {
      try {
        await axios.post(`${APIHOST}usuarios/recovery-password`, {
          correoElectronico: email,
        }).then((response) => {
          console.log(response);
          if (response.data.status) {
            setCambiarPage(true);
            return;
          }
          if (!response.data.correo) {
            setCorreoNoExiste(response.data.msg);
          }
        });
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('El correo electrónico no es válido.');
    }
  };

  // Redirige a la página /confirmar-code si cambiarPage es true
  if (cambiarPage) {
    return <Redirect to="/confirmar-code" />;
  }

  return (
    <div className={classes.root}>
      <Paper sx={{ backgroundColor: 'transparent' }} elevation={0} className={classes.card}>
        <Paper sx={{ backgroundColor: 'transparent' }} elevation={0}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Typography variant="body1">
              Para cambiar tu contraseña, ingresa tu correo electrónico:
            </Typography>
            <TextField
              className={classes.textField}
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              margin="normal"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
            <Button
              className={classes.submitButton}
              type="submit"
              variant="contained"
              color="primary"
              disabled={!validEmail}
            >
              Enviar
            </Button>

            {CorreoNoExiste && (
              <Alert severity="info" className={classesAlert.overlay}>
                {CorreoNoExiste}
              </Alert>
            )}
          </form>
        </Paper>
      </Paper>
    </div>
  );
}

export default ChangePassword;
