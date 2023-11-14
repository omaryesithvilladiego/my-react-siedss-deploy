import { Switch, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio"
import RegistroFormulario from "../components/registroForm/RegistroForm";
import PrivateRouter from "../authentication/auth/privateRouter";
import LoginPrivado from "../authentication/auth/loginPrivado";
import Admin from "../pages/admin/Admin";
import  {UserProvider} from '../components/Provider/userProvider'
import Curriculum from "../pages/curriculum/Curriculum";


function Router() {
    return ( 
    
    <BrowserRouter>

    <Switch>

    <PrivateRouter  path="/inicio" component={Inicio} />
    <PrivateRouter  path="/curriculum" component={Curriculum} />

       

         
<LoginPrivado path="/login" component={RegistroFormulario} />


<Route  path="/admin" component={Admin} /> 

        
    </Switch>



    </BrowserRouter> );
}

export default Router;