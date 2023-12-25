
import axios from "axios";
import Cookies from "universal-cookie";
import app from  '../../app2.json';
const {APIHOST} = app;
const cookies = new Cookies();

export function calculaExtreaccionSesion() {
    const now = new Date().getTime();
    const newDate = now + (60 * 30) * 1000;
    return new Date(newDate);
}

export function getSession() {
    return (cookies.get("_m")) === undefined ? cookies.get("_a") : cookies.get("_m");
}

export const cockieAdmin = cookies.get("_a")

export function getSessionAdmin() {
    return (cookies.get("_a")) === undefined ? false : cookies.get("_a");
}




export function renovarSesion() {
    const sesion = getSession();
    if(!sesion) window.location.href = "/";

    cookies.set("_m", sesion, {
        path:"/",
        expires:calculaExtreaccionSesion()
    });
    return sesion;
}

export function renovarSesionGet() {
    const sesion = getSession();
    if(!sesion) window.location.href = window.location;

    cookies.set("_m", sesion, {
        path:"/",
        expires:calculaExtreaccionSesion()
    });
    return sesion;
}
export const request = {
    get: function (services) {
        let token = renovarSesion();
        return axios.get(`${APIHOST}${services}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};

export const requestWithToken = {
    post: function (service, data) {
        let token = renovarSesion();
        return axios.post(`${APIHOST}${service}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};


export const requestWithTokenHeader = {
    post: function (service, formData) {
      let token = renovarSesion();
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      };
  
      return axios.post(`${APIHOST}${service}`, formData, config);
    },
  };



export const requestWithTokenGet = {
    get: function (service, data) {
        let token = renovarSesionGet();
        return axios.get(`${APIHOST}${service}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
};


export function cerrarSesion() {
    // Elimina las cookies relacionadas con la sesión
    cookies.remove("_m", { path: "/" });
    cookies.remove("_a", { path: "/" });
        // Vaciar el localStorage
  localStorage.clear()

    // Redirige a la página de inicio de sesión o a la página principal
    window.location.href = "/inicio";
}







