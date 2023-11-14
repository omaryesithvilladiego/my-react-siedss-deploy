import React, { useContext, useState, useEffect } from "react";

const userContext = React.createContext()

export function useUserContext() {
  return useContext(userContext)
}




export function UserProvider({ children }) {
    const [datosLocalStorage, setDatosLocalStorage] = useState('');


    useEffect(() => {
        // Recuperar datos del localStorage
        const datosGuardados = localStorage.getItem('user');
    
        // Actualizar el estado con los datos recuperados
        if (datosGuardados) {
          setDatosLocalStorage(datosGuardados);
        }
      }, []);


    return ( 
    <userContext.Provider value={datosLocalStorage}>
    {children}
    </userContext.Provider> );
}

