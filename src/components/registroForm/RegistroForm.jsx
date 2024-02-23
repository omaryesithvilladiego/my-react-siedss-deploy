import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import { InputAdornment } from '@material-ui/core';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link, useRouteMatch } from "react-router-dom"
import { APIHOST } from "../../app2.json"
import './registro.css'
import styled from 'styled-components';
import Cookies from "universal-cookie";
const cookies = new Cookies()

import { calculaExtreaccionSesion } from '../../authentication/helper/helper';




function RegistroFormulario() {


  //Trasladar Login
  const [trasladarLogin, setTrasladarLogin] = useState(false)

  //Botones que trasladan el login hacia el registro
  function handleBotton() {

    setTrasladarLogin(true)


  }

  function handleBottonreturn() {

    setTrasladarLogin(false)


  }

  //Variables de estado que representan la informacion del estudiante para el registro
  const [nombreEstudiante, setNombreEstudiante] = useState('');
  const [apellidosEstudiante, setApellidosEstudiante] = useState('');
  const [correoInstitucionalEstudiante, setCorreoInstitucionalEstudiante] = useState('');
  const [codigoEstudiante, setCodigoEstudiante] = useState('')
  const [fechaIngresoEstudiante, setFechaIngresoEstudiante] = useState('');
  const [cedulaEstudiante, setCedulaEstudiante] = useState('');
  const [celularEstudiante, setCelularEstudiante] = useState('');
  const [fechaNacimientoEstudiante, setFechaNacimientoEstudiante] = useState(null);
  const [direccionEstudiante, setDireccionEstudiante] = useState('')
  const [direccionNumero, setDireccionNumero] = useState('')
  const [direccionSegundoNumero, setDireccionSegundoNumero] = useState('')
  const [direccionCalle, setDireccionCalle] = useState('')
  const [direccionCarrera, setDireccionCarrera] = useState('')
  const [direccionPrimeraLetra, setdireccionPrimeraLetra] = useState('')
  const [direccionSegundaLetra, setdireccionSegundaLetra] = useState('')
  const [direccionPais, setDireccionPais] = useState('')
  const [direccionBarrio, setDireccionBarrio] = useState('')
  const [direccionCodigoPostal, setDireccionCodigoPostal] = useState('')
  const [campusEstudiante, setCampusEstudiante] = useState('')


  //Variables de estado que representan la informacion de inicio de sesion
  const [userEstudiante, setUserEstudiante] = useState('')
  const [passEstudiante, setPassEstudiante] = useState('')







  const [loaderRegistro, setLoaderRegistro] = useState(false) // Defino las variables para controlar el cargar la ponencia
  const [exito, setExito] = useState(null)

  let { path, url } = useRouteMatch()


  // Estados de error
  const [nombreEstudianteError, setNombreEstudianteError] = useState('');
  const [apellidosEstudianteError, setApellidosEstudianteError] = useState('');
  const [correoInstitucionalError, setCorreoInstitucionalError] = useState('');
  const [codigoEstudianteError, setCodigoEstudianteError] = useState('')
  const [fechaIngresoEstudianteError, setFechaIngresoEstudianteError] = useState('');
  const [cedulaEstudianteError, setCedulaEstudianteError] = useState('');
  const [celularEstudianteError, setCelularEstudianteError] = useState('');
  const [fechaNacimientoEstudianteError, setFechaNacimientoEstudianteError] = useState('');
  const [direccionEstudianteError, setDireccionEstudianteError] = useState('');
  const [ciudadEstudianteError, setCiudadEstudianteError] = useState('');

  function limpiarCamposForm() {
    setNombreEstudiante('')
    setApellidosEstudiante('')
    setCorreoInstitucionalEstudiante('')
    setCodigoEstudiante('')
    setFechaIngresoEstudiante('')
    setCedulaEstudiante('')
    setCelularEstudiante('')
    setFechaNacimientoEstudiante('')
    setDireccionEstudiante('')
    setCampusEstudiante('')
    setdireccionPrimeraLetra('')
    setDireccionCalle('')
    setDireccionBarrio('')
    setDireccionCarrera('')
    setDireccionCodigoPostal('')
    setdireccionSegundaLetra('')
    setDireccionPais('')
    setDireccionNumero('')

  }
  // Estados booleanos de error inicializados en true
  const [nombreEstudianteErrorBoolean, setNombreEstudianteErrorBoolean] = useState(null);
  const [apellidosEstudianteErrorBoolean, setApellidosEstudianteErrorBoolean] = useState(null);
  const [codigoEstudianteErrorBoolean, setCodigoEstudianteErrorBoolean] = useState(null)
  const [correoInstitucionalErrorBoolean, setCorreoInstitucionalErrorBoolean] = useState(null);
  const [fechaIngresoEstudianteErrorBoolean, setFechaIngresoEstudianteErrorBoolean] = useState(null);
  const [cedulaEstudianteErrorBoolean, setCedulaEstudianteErrorBoolean] = useState(null);
  const [celularEstudianteErrorBoolean, setCelularEstudianteErrorBoolean] = useState(null);
  const [fechaNacimientoEstudianteErrorBoolean, setFechaNacimientoEstudianteErrorBoolean] = useState(null);
  const [direccionEstudianteErrorBoolean, setDireccionEstudianteErrorBoolean] = useState(null);
  const [ciudadEstudianteErrorBoolean, setCiudadEstudianteErrorBoolean] = useState(null);



  // Estado para verificar si el formulario es válido
  const [formularioValido, setFormularioValido] = useState(null);

  function limpiarErroresRegistro() {
    setNombreEstudianteErrorBoolean(true);
    setApellidosEstudianteErrorBoolean(true);
    setApellidosEstudianteErrorBoolean(true);
    setFechaIngresoEstudianteErrorBoolean(true);
    setDireccionEstudianteErrorBoolean(true);
    setCedulaEstudianteErrorBoolean(true);
    setCelularEstudianteErrorBoolean(true);
    setCodigoEstudianteErrorBoolean(true);
    setCiudadEstudianteErrorBoolean(true);
    setFechaNacimientoEstudianteErrorBoolean(true);
    setCorreoInstitucionalErrorBoolean(true);
    setFormularioValido(null)
  }

  const [passIncorrecta, setPassIncorrecta] = useState(false)

  const login = (e) => {
    e.preventDefault()


   

    axios.post(`${APIHOST}usuarios/usuario-login`,
      {
        nombreUsuario: userEstudiante,
        contraseñaUsuario: passEstudiante
      }).then((response) => {
        if ((response.data.token) == null) {
          setPassIncorrecta(true)
          setTimeout(() => {
            setPassIncorrecta(false)
          }, 2000);
        } else {

          if(response.data.type === 'root') {
            
            cookies.set('_a', response.data.token, {
              path: '/',
              expires: calculaExtreaccionSesion(),
              secure: true,
            })
            location.reload();
          } else  {
            localStorage.setItem('user', response.data.data.idUsuarioRegistro)
            cookies.set('_m', response.data.token, {
              path: '/',
              expires: calculaExtreaccionSesion(),
              secure: true,
            })
            location.reload();
          }

       
        }

      })
      .catch((err) => {
        console.log(err)
      })

  }


  const handleSubmit = (e) => {



    setFormularioValido(null)

    e.preventDefault();
    setDireccionEstudiante(direccionCalle + direccionPrimeraLetra + '#' + direccionNumero)




    // // Verificar campos vacíos y establecer errores si es necesario
    // if (!nombreEstudiante) {
    //   setNombreEstudianteError('El nombre del estudiante es obligatorio');
    //   setNombreEstudianteErrorBoolean(false);
    // } else {
    //   setNombreEstudianteErrorBoolean(true);
    //   setNombreEstudianteError('');
    // }

    // if (!apellidosEstudiante) {
    //   setApellidosEstudianteError('El apellido del estudiante es obligatorio');
    //   setApellidosEstudianteErrorBoolean(false);
    // } else {
    //   setApellidosEstudianteError('');
    //   setApellidosEstudianteErrorBoolean(true);
    // }

    // if (!fechaIngresoEstudiante) {
    //   setFechaIngresoEstudianteError('La fecha de ingreso del estudiante es obligatoria');
    //   setFechaIngresoEstudianteErrorBoolean(false);
    // } else {
    //   setFechaIngresoEstudianteErrorBoolean(true);
    //   setFechaIngresoEstudianteError('');
    // }

    // if (!direccionEstudiante) {
    //   setDireccionEstudianteError('La direccion del estudiante es obligatoria');
    //   setDireccionEstudianteErrorBoolean(false);
    // } else {
    //   setDireccionEstudianteErrorBoolean(true);
    //   setDireccionEstudianteError('');
    // }

    // if (!cedulaEstudiante) {
    //   setCedulaEstudianteErrorBoolean(false);
    //   setCedulaEstudianteError('La cedula del estudiante es obligatoria');
    // } else {
    //   setCedulaEstudianteError('');
    //   setCedulaEstudianteErrorBoolean(true);
    // }

    // if (!celularEstudiante) {
    //   setCelularEstudianteError('El celular del estudiante es obligatorio');
    //   setCelularEstudianteErrorBoolean(false);
    // } else {
    //   setCelularEstudianteErrorBoolean(true);
    //   setCelularEstudianteError('');
    // }

    // if (!codigoEstudiante) {
    //   setCodigoEstudianteError('El codigo del estudiante es obligatorio');
    //   setCodigoEstudianteErrorBoolean(false);
    // } else {
    //   setCodigoEstudianteErrorBoolean(true);
    //   setCodigoEstudianteError('');
    // }

    // if (!campusEstudiante) {
    //   setCiudadEstudianteError('La ciudad del estudiante es obligatoria');
    //   setCiudadEstudianteErrorBoolean(false);
    // } else {
    //   setCiudadEstudianteErrorBoolean(true);
    //   setCiudadEstudianteError('');
    // }

    // if (!fechaNacimientoEstudiante) {
    //   setFechaNacimientoEstudianteError('La fecha de nacimiento del estudiante es obligatoria');
    //   setFechaNacimientoEstudianteErrorBoolean(false);
    // } else {
    //   setFechaNacimientoEstudianteErrorBoolean(true);
    //   setFechaNacimientoEstudianteError('');
    // }


    if (!correoInstitucionalEstudiante) {
      setCorreoInstitucionalError('El correo del estudiante es obligatorio');
      setCorreoInstitucionalErrorBoolean(false);
    } else {

      //Función para verificar el correo

      var regex = /^[a-zA-Z0-9._%+-]+@campusucc\.edu\.co$/;
      var valido = regex.test(correoInstitucionalEstudiante)
      valido = true
      console.log('Correo: ' + correoInstitucionalEstudiante)
      if (valido) {
        setCorreoInstitucionalErrorBoolean(false);
        setCorreoInstitucionalError('')

        setLoaderRegistro(true)
        axios.post(`${APIHOST}estudiante/create-estudiante`, {
          nombresEstudiante: nombreEstudiante,
          apellidosEstudiante: apellidosEstudiante,
          fechaIngresoEstudiante: fechaIngresoEstudiante,
          direccionEstudiante: {
            calle: direccionCalle,
            numero: direccionNumero,
            pais: direccionPais,
            ciudad: campusEstudiante,
            codigoPostal: direccionCodigoPostal,
            barrio: direccionBarrio
          },
          cedulaEstudiante: cedulaEstudiante,
          celularEstudiante: celularEstudiante,
          codigoEstudiante: codigoEstudiante,
          fechaNacimientoEstudiante: fechaNacimientoEstudiante,
          campusEstudiante: campusEstudiante,
          correoInstitucionalEstudiante: correoInstitucionalEstudiante
        })
          .then((response) => {
            setExito(response.data.exito)
            setLoaderRegistro(false)
            const user = response.data.user
            const passw = response.data.passw
            const idUser = response.data._id
            if(response.data.exito) {
              axios.post(`${APIHOST}usuarios/create-user`,
              {
                nombreUsuario: user,
                contraseñaUsuario: passw,
                idUsuarioRegistro: idUser
              }
            ).then((resp) => {
              alert(resp.data.msg)
            })
              .catch((err) => {
                console.log(err)
              })

            limpiarCamposForm()
            limpiarErroresRegistro()
   
            setTimeout(() => {
              setExito(false)
            }, 4000);
            } else {
              setCorreoInstitucionalError(response.data.msg);
        setCorreoInstitucionalErrorBoolean(false);
            }
           


          })
          .catch((err) => {
            console.log(err)
          })

      } else {
        setCorreoInstitucionalError('Debes usar un correo institucional de la Universidad Cooperativa de Colombia');
        setCorreoInstitucionalErrorBoolean(false);

      }




    }










  };

  return (


    <main style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center'
    }} >
              {passIncorrecta && <Alert  style={{ position: 'absolute', width:'15rem', top:'5rem',zIndex:1000 }} severity='error'>El usuario o la contrasena son incorrectos</Alert>}















      <div className="father">

        {exito && <Alert style={{ position: 'absolute' }} severity='success'>Registro exitoso</Alert>}
        {loaderRegistro &&
          <Box sx={{ display: 'flex', position: 'absolute' }}>
            <CircularProgress />
          </Box>
        }


        <div style={{ overflowY: 'scroll' }} className={trasladarLogin ? "registro showregistro" : "registro"}>

          <div >




            
          </div>

        </div>

        <div className={trasladarLogin ? "login-content trasladar-login" : "login-content"}>


          <div>
            <div>
              <div onClick={() => {
                handleBottonreturn()
              }} className="logo-siedss">

              </div>
            </div>
          </div>
          <div>
            <div>
              <h3 className="">Iniciar Sesión</h3>
          

            </div>
          </div>
          <div>

            <div>

              <form onSubmit={login}>

                <div className="input-content">
                  <div className="inputbox">
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <TextField
                      label="Usuario"
                      variant="outlined"
                      fullWidth
                      required
                      onChange={(e) => setUserEstudiante(e.target.value)}
                    />

                  </div>

                  <div className="inputbox" >
                    <ion-icon name="lock-closed-outline"></ion-icon>

                    <TextField
                      label="Password"
                      variant="outlined"
                      fullWidth
                      type='password'
                      required
                      onChange={(e) => setPassEstudiante(e.target.value)}
                    />


                  </div>

                  <Link to="/olvidaste-contraseña">¿Olvidaste tu contraseña?</Link>
                </div>


              

                <Button fullWidth type="submit" variant="contained" color="primary">
                  <ion-icon name="log-in-outline"></ion-icon>
                  Iniciar Sesión
                </Button>

           
              
                






              </form>
              <Button fullWidth onClick={(e) => {
                e.preventDefault()
                handleBotton()
              }} type="submit" variant="contained" color="primary">
                <ion-icon name="arrow-redo-outline"></ion-icon>
                Registrate
              </Button>

            </div>
          </div>




        </div>
        <Divider />
        <div className={trasladarLogin ? "hide-extra-content  extra-content" : "extra-content"}>

        </div>
      </div>



    </main>

  );
}

export default RegistroFormulario;

const Divider = styled.div`

    height: 35rem;
    width: 0.01rem;
    background-color: #0e748e;
    

`


