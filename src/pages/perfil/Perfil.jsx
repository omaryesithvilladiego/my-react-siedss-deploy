import styles from "./perfil.module.css"
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import UploadImage from "./components/ProfileConfig";
import CambiarContra from "./components/CambiarContra";




function Perfil() {
  let {path, url} = useRouteMatch()
    return ( 
      <Router>
      <div >
      <nav className={styles.navContainer}>
      <a className={styles.navItem} href={`${path}/`}>
        Perfil
      </a>
      <a className={styles.navItem} href={`${path}/change-password`}>
        Cambiar Contraseña
      </a>
    </nav>
       
        <div className="container">
        
          <Switch>
            <Route exact  path={`${path}/`} component={() => {
              return (
                <UploadImage />
              )
            }} />
            <Route  path={`${path}/change-password`} component={() => {
              return (

                <CambiarContra/>
              )
            }} />
          </Switch>
        </div>
      </div>
    </Router>

      



   );
}

export default Perfil;