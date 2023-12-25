import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    textAlign: 'center',
  },
  textField: {
    width: '60px',
    margin: theme.spacing(1),
  },
  submitButton: {
    marginTop: theme.spacing(2),
  },
}));

const FourDigitCodeInput = () => {
  const classes = useStyles();
  const [code, setCode] = useState(['', '', '', '']);

  const handleInputChange = (index) => (event) => {
    const newCode = [...code];
    newCode[index] = event.target.value;
    setCode(newCode);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredCode = code.join('');
    console.log('Código ingresado:', enteredCode);
    // Aquí puedes agregar la lógica para manejar el código ingresado
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <Grid container className={classes.inputContainer} spacing={1}>
          {code.map((digit, index) => (
            <Grid item key={index}>
              <TextField
                className={classes.textField}
                variant="outlined"
                size="small"
                type="text"
                value={digit}
                onChange={handleInputChange(index)}
                inputProps={{
                  maxLength: 1,
                  style: { textAlign: 'center' },
                }}
              />
            </Grid>
          ))}
        </Grid>
        <div>
          <Button
            className={classes.submitButton}
            type="submit"
            variant="contained"
            color="primary"
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FourDigitCodeInput;
