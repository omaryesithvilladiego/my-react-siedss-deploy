import { useEffect } from "react";
import PrimarySearchAppBar from "../../components/navbar/NavBar";
import {Switch, Route, useRouteMatch} from "react-router-dom"
import Ponencia from "../eventos/Ponencia";
import Perfil from "../perfil/Perfil";
import { UserProvider } from "../../components/Provider/userProvider";

function Inicio() {

    let {path, url} = useRouteMatch()
   
    return ( 
    
    <UserProvider>
    
    <PrimarySearchAppBar />

    <Switch>
        <Route path={`${path}/mis-ponencias`} component={Ponencia} />
        <Route path={`${path}/mi-perfil`} component={Perfil} />

    </Switch>
    
    </UserProvider> );
}

export default Inicio;