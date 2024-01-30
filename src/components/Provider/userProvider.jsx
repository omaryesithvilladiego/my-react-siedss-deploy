import React, { useContext, useState, useEffect } from "react";
import { APIHOST } from '../../app2.json';
import axios from "axios";

const userContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function UserProvider({ children }) {
  const [datosLocalStorage, setDatosLocalStorage] = useState(null);

  useEffect(() => {
    // Recuperar datos del localStorage
    const datosGuardados = localStorage.getItem('user');

    async function obtenerDatos() {
      try {
        await axios.post(`${APIHOST}usuarios/obtener-foto-perfil/${datosGuardados}`)
        .then((response) => {
          setDatosLocalStorage(response.data); // Asegúrate de acceder a la propiedad 'data' de la respuesta
        })
        .catch(err => console.log(err))
      } catch (error) {
        console.error(error);
      }
    }

    // Actualizar el estado con los datos recuperados
    if (datosGuardados) {
      return(() => {
        obtenerDatos();
      })
      
    }
  }, []); // Solo ejecuta el useEffect en el montaje inicial

  // Renderiza el componente hijo con el contexto proporcionando datosLocalStorage
  return (
    <userContext.Provider value={datosLocalStorage}>
      {children}
    </userContext.Provider>
  );
}
