import { useEffect } from "react";
import PrimarySearchAppBar from "../../components/navbar/NavBar";
import {Switch, Route, useRouteMatch} from "react-router-dom"
import Ponencia from "../eventos/Ponencia";
import Perfil from "../perfil/Perfil";
import { UserProvider } from "../../components/Provider/userProvider";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useUserContext } from "../../components/Provider/userProvider";
import Principal from "../perfil/components/Principal";

function Inicio() {
   
    


    let {path, url} = useRouteMatch()
   
    return ( 
    
    <UserProvider>
    
    <PrimarySearchAppBar />

    <Switch>
        <Route  path={`${path}/mis-ponencias`} component={Ponencia} />
        <Route path={`${path}/mi-perfil`} component={Perfil} />
        <Route path={`${path}/principal`} component={Principal} />
    </Switch>

  
    
    </UserProvider> );
}

export default Inicio;