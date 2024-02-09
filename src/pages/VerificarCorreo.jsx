import React, { useEffect, useState } from 'react';
import { Paper, TextField, Button, Typography, Snackbar,Container, CircularProgress, Slide, TextareaAutosize, FormControl, Input, InputLabel } from '@mui/material';
import { MailOutline, CheckCircleOutline, ArrowForward } from '@mui/icons-material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import Alert from '@mui/material/Alert';
import axios from 'axios';
import {APIHOST} from "../app2.json"
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Import Material Icon for the first input
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import Material Icon for the second input
import PublicIcon from '@mui/icons-material/Public'; // Import Material Icon for the third input
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; // Import Material Icon for the fourth input
import AssignmentIcon from '@mui/icons-material/Assignment'; // Import Material Icon for the fifth and sixth inputs
import Textarea from '@mui/joy/Textarea';
const EnviarCorreo = () => {
  const [correoJefeSemillero, setCorreoJefeSemillero] = useState('');
  const [openAlert, setOpenAlert] = useState(false);
  const [openAlertDigits, setOpenAlertDigits] = useState(false)
  const [isSend, setIsSend] = useState(false);
  const [response, setResponse] = useState(false);


  const [alertCorreoRegistrado, setAlertCorreoRegistrado] = useState(false)
  const [textAlertCorreoRegistrado, setTextAliertCorreoRegistrado] = useState('')
  const [correoVerificado, setCorreoVerificado] = useState(false)


  const [openAlertIncorrectDigits, setOpenAlertIncorrecDigits] = useState(false)


  const [showFormSemillero, setShowFormSemillero] = useState(false)



  const [semilleroData, setSemilleroData] = useState({
    nombreSemillero: '',
    ciudadSemillero: '',
    paisSemillero: '',
    jefeSemillero: '',
    identificacionJefeSemillero: 0,
    misionSemillero: '',
    visionSemillero: '',
  });

  const handleChangeSemillero = (e) => {
    const { name, value } = e.target;
    setSemilleroData({
      ...semilleroData,
      [name]: value,
    });
  };

  const handleSubmitSemillero = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la validación y enviar los datos al backend si es necesario
    console.log('Datos del semillero:', semilleroData);
  };
  let  digit2Input, digit3Input, digit4Input;

  const [digit1, setDigit1] = useState('');
  const [digit2, setDigit2] = useState('');
  const [digit3, setDigit3] = useState('');
  const [digit4, setDigit4] = useState('');


  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleChangeCode = (e, setter, nextInput) => {
    const input = e.target.value;
    if (input.length <= 1) {
      setter(input);
      if (input !== '') {
        nextInput.focus();
      }
    }
  };

  const handleSubmitCode = (e) => {
    e.preventDefault();
    const verificationCode = `${digit1}${digit2}${digit3}${digit4}`;
    // Aquí puedes agregar la lógica para verificar el código, por ejemplo, enviándolo a tu backend

    if(!digit1 || !digit2 || !digit3 || !digit4) {

        setOpenAlertDigits(true)
        return
        
    }

    axios.post(`${APIHOST}auth/confirmar-code`, {
        code:verificationCode
    }).then(response => {
        console.log(response)
        if(response.data.status) {
            setShowFormSemillero(true)
            setResponse(false)
            setDigit1('')
            setDigit2('')
            setDigit3('')
            setDigit4('') 
        }
    }).catch((err) => {
        console.log(err)
    })

  };

  const handleContinuar = () => {

    if(correoVerificado) {
      setShowFormSemillero(true)
      setIsSend(false)
      setResponse(true)
      setAlertCorreoRegistrado(false)
    
    } else {
      axios.post(`${APIHOST}auth/reenviar-code`, {
        correoElectronico: correoJefeSemillero
    }).then(response => {
        console.log(response.data)
    }).catch((err) => {console.log(err)})
    setIsSend(false)
    setResponse(true)
    setAlertCorreoRegistrado(false)
    }
   
   
  }

 

  const handleChange = (e) => {
    setCorreoJefeSemillero(e.target.value);

  };

  const handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const handleCloseAlertCorreo = (event, reason) => {
    if(reason == 'clickaway') {
        return;
    }
    setAlertCorreoRegistrado(false)
    setIsSend(false)
  }

  const handleCloseAlertDigits = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlertDigits(false);
  };

  const isValidEmail = (email) => {
    // Utiliza una expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(correoJefeSemillero)) {
      setOpenAlert(true);
      return;
    }

   localStorage.setItem('emailUser', correoJefeSemillero)

    try {
        setIsSend(true);
      axios.post(`${APIHOST}auth/create-auth`, {
        correoElectronico:correoJefeSemillero
      }).then(response => {
        setIsSend(false);
        setResponse(response.data.status);
        setTextAliertCorreoRegistrado(response.data.msg)
        setAlertCorreoRegistrado(response.data.procesoRegistro)
        if(response.data.correoVerificado) {
        setCorreoVerificado(response.data.correoVerificado)
        }
        
        setIsSend(response.data.procesoRegistro)
            console.log(response)
           if(response.data.status) {

           }
      }).catch((err) => console.log(err))
      
    } catch (error) {
      console.error('Error al verificar el correo electrónico', error);
    }
  };

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white', display:'flex', flexDirection:'column', justifyContent:'center'}}>
      {((!response && !isSend && !showFormSemillero) && !alertCorreoRegistrado)  && (
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <Grid xs={12} sm={8} md={6} lg={4}>
              <Paper elevation={0} style={{ padding: '20px', textAlign: 'center', position: 'relative' }}>
                <Typography variant="h5" style={{ marginBottom: '20px' }}>
                  Verifica tu correo electrónico para continuar
                </Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label=""
                    variant="outlined"
                    name="correoJefeSemillero"
                    fullWidth
                    onChange={handleChange}
                    placeholder="Ingresa el correo electrónico del jefe del semillero..."
                    InputProps={{
                      style: { fontSize: '18px', marginBottom: '20px' },
                      startAdornment: <MailOutline style={{ fontSize: '24px', marginRight: '8px', color: '#666' }} />,
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    style={{ padding: '15px', fontSize: '20px', marginTop: '10px' }}
                  >
                    Continuar <ArrowForward style={{ fontSize: '24px', marginLeft: '8px' }} />
                  </Button>
                  <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)' }}>
                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                      Completa el campo y haz clic en "Continuar"
                    </Typography>
                  </div>
                </form>
              </Paper>
            </Grid>
            <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseAlert} severity="error" sx={{ width: '100%' }}>
          Por favor, completa el campo del correo electrónico.
        </Alert>
      </Snackbar>
     
          </Grid>
        </Slide>
      )}


      { alertCorreoRegistrado &&
         <Snackbar
         open={alertCorreoRegistrado}
         onClose={handleCloseAlertCorreo}
         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
       >
         <Alert
           onClose={handleCloseAlertCorreo}
           severity="error"
           sx={{ width: '100%' }}
           action={
             [<Button key='Continuar'  color="inherit" size="small" onClick={handleContinuar}>
               Sí
             </Button>,<Button key='Cancelar' color="inherit" size="small" onClick={handleCloseAlertCorreo}>
               close
             </Button>]
             
           }
         >
          {textAlertCorreoRegistrado}  
         </Alert>
       </Snackbar>
      }

      {isSend && (
    <Box sx={{width:'100vw', height:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
 <CircularProgressWithLabel value={progress} />
    </Box>
      )}

      {response && (
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
            <Grid  xs={12} sm={8} md={6} lg={4}>
              <Paper elevation={0} style={{ padding: '20px', textAlign: 'center' }}>
                <Typography variant="h5" style={{ marginBottom: '20px' }}>
                  Ingresa el código que recibiste en tu correo para continuar
                </Typography>
                <form  onSubmit={handleSubmitCode}>
                    <div style={{display:'flex', gap:'2rem'}}>
                  <TextField
                    label=""
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    value={digit1}
                    onChange={(e) => handleChangeCode(e, setDigit1, digit2Input)}
                  />
                  <TextField
                    label=""
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    value={digit2}
                    inputRef={(input) => (digit2Input = input)}
                    onChange={(e) => handleChangeCode(e, setDigit2, digit3Input)}
                  />
                  <TextField
                    label=""
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    value={digit3}
                    inputRef={(input) => (digit3Input = input)}
                    onChange={(e) => handleChangeCode(e, setDigit3, digit4Input)}
                  />
                  <TextField
                    label=""
                    variant="outlined"
                    inputProps={{ maxLength: 1 }}
                    value={digit4}
                    inputRef={(input) => (digit4Input = input)}
                    onChange={(e) => handleChangeCode(e, setDigit4, digit4Input)}
                  />
                  </div>
                  <Button variant="contained" color="primary" type="submit" fullWidth style={{ marginTop: '20px' }}>
                    Continuar
                  </Button>
                </form>
              </Paper>
            </Grid>
            <Snackbar
        open={openAlertDigits}
        autoHideDuration={6000}
        onClose={handleCloseAlertDigits}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseAlertDigits} severity="error" sx={{ width: '100%' }}>
          Ingresa todos los digitos
        </Alert>
      </Snackbar>

    

          </Grid>
        </Slide>

        
      )}

      { showFormSemillero && (<Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography>Llena los datos del semillero a registrar</Typography>
        <form onSubmit={handleSubmitSemillero}>
          <TextField
            label="Nombre del Semillero"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="nombreSemillero"
            value={semilleroData.nombreSemillero}
            onChange={handleChangeSemillero}
            InputProps={{
              startAdornment: (
                <AccountCircleIcon sx={{ color: 'action.active', mr: 1 }} />
              ),
            }}
          />
          <TextField
            label="Ciudad del Semillero"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="ciudadSemillero"
            value={semilleroData.ciudadSemillero}
            onChange={handleChangeSemillero}
            InputProps={{
              startAdornment: (
                <LocationOnIcon sx={{ color: 'action.active', mr: 1 }} />
              ),
            }}
          />
          <TextField
            label="Pais del Semillero"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="paisSemillero"
            value={semilleroData.paisSemillero}
            onChange={handleChangeSemillero}
            InputProps={{
              startAdornment: (
                <PublicIcon sx={{ color: 'action.active', mr: 1 }} />
              ),
            }}
          />
          <TextField
            label="Jefe del Semillero"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            name="jefeSemillero"
            value={semilleroData.jefeSemillero}
            onChange={handleChangeSemillero}
            InputProps={{
              startAdornment: (
                <SupervisorAccountIcon sx={{ color: 'action.active', mr: 1 }} />
              ),
            }}
          />
            
     
      <FormControl fullWidth margin="normal" variant="outlined" required>
        <InputLabel htmlFor="identificacionJefeSemillero">Identificacion del jefe de semillero</InputLabel>
        <Input
          id="identificacionJefeSemillero"
          type="number"
          onChange={handleChangeSemillero}
          startAdornment={<SupervisorAccountIcon sx={{ color: 'action.active', mr: 1 }} />}
          // Estilos adicionales si es necesario
        />
      </FormControl>
      
    
      <Textarea
        color="neutral"
        onChange={handleChangeSemillero}
        minRows={2}
        size="lg"
        name='misionSemillero'
        variant="soft"
        placeholder='Misión del semillero'
        value={semilleroData.misionSemillero}
      />
      <Textarea
        color="neutral"
        minRows={2}
        onChange={handleChangeSemillero}
        size="lg"
        name='visionSemillero'
        variant="soft"
        value={semilleroData.visionSemillero}
        sx={{ marginTop: '2rem', marginBottom: '2rem' }}
        placeholder='Visión del semillero'
      />
         
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>
        </form>
      </Box>
    </Container>)

      }




    </div>
  );
};

export default EnviarCorreo;


EnviarCorreo.propTypes = {
    /**
     * The value of the progress indicator for the determinate variant.
     * Value between 0 and 100.
     * @default 0
     */
   
    value: PropTypes.number,
    
  
  };
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AndroidIcon from '@mui/icons-material/Android';
import CableIcon from '@mui/icons-material/Cable';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import ElectricMopedIcon from '@mui/icons-material/ElectricMoped';
import { NumberInput } from '@mui/base/Unstable_NumberInput/NumberInput';



function CircularProgressWithLabel(props) {
 
    return (
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
       
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize:'2.5rem'
          }}
        >

            {(Math.round(props.value)  == 10) && (
                 <AirplanemodeActiveIcon />
            )}

{(Math.round(props.value)  == 20) && (
                 <ArchitectureIcon  />
            )}
              {(Math.round(props.value)  == 30) && (
                 <AirportShuttleIcon />
            )}

{(Math.round(props.value)  == 40) && (
                 <AndroidIcon />
            )}
              {(Math.round(props.value)  == 50) && (
                 <CableIcon />
            )}

{(Math.round(props.value)  == 60) && (
                 <DinnerDiningIcon />
            )}
              {(Math.round(props.value)  == 70) && (
                 <ElectricMopedIcon />
            )}

{(Math.round(props.value)  == 80) && (
                 <ArchitectureIcon />
            )}
              {(Math.round(props.value)  == 90) && (
                 <AirplanemodeActiveIcon />
            )}

{(Math.round(props.value)  == 100) && (
                 <ArchitectureIcon />
            )}
             
         
        </Box>
      </Box>
    );
  }