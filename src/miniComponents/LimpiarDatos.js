import Cookies from 'universal-cookie';

const cookies = new Cookies()
const LimpiarDatos = () => {
    cookies.remove('_m')
    cookies.remove('_a')
     // Vaciar el localStorage
  localStorage.clear()

  // Vaciar la caché
  window.location.reload()
}

export default LimpiarDatos;


