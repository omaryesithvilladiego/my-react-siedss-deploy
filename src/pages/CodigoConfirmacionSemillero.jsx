import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';

const VerificationForm = () => {
  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');

  const handleChange = (e, setter, nextInput) => {
    const input = e.target.value;
    if (input.length <= 1) {
      setter(input);
      if (input !== '') {
        nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = `${digit1}${digit2}${digit3}${digit4}`;
    // Aquí puedes agregar la lógica para verificar el código, por ejemplo, enviándolo a tu backend
    console.log('Código ingresado:', verificationCode);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h5" style={{ marginBottom: '20px' }}>
            Ingresa el código que recibiste en tu correo para continuar
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label=""
              variant="outlined"
              inputProps={{ maxLength: 1 }}
              value={digit1}
              onChange={(e) => handleChange(e, setDigit1, digit2Input)}
            />
            <TextField
              label=""
              variant="outlined"
              inputProps={{ maxLength: 1 }}
              value={digit2}
              inputRef={(input) => (digit2Input = input)}
              onChange={(e) => handleChange(e, setDigit2, digit3Input)}
            />
            <TextField
              label=""
              variant="outlined"
              inputProps={{ maxLength: 1 }}
              value={digit3}
              inputRef={(input) => (digit3Input = input)}
              onChange={(e) => handleChange(e, setDigit3, digit4Input)}
            />
            <TextField
              label=""
              variant="outlined"
              inputProps={{ maxLength: 1 }}
              value={digit4}
              inputRef={(input) => (digit4Input = input)}
              onChange={(e) => handleChange(e, setDigit4, digit4Input)}
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Continuar
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default VerificationForm;
