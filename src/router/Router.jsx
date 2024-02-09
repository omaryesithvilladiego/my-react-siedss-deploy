import { Switch, Route, BrowserRouter } from "react-router-dom";
import Inicio from "../pages/inicio/Inicio"
import RegistroFormulario from "../components/registroForm/RegistroForm";
import PrivateRouter from "../authentication/auth/privateRouter";
import LoginPrivado from "../authentication/auth/loginPrivado";
import Admin from "../pages/admin/Admin";
import { UserProvider } from '../components/Provider/userProvider'
import Curriculum from "../pages/curriculum/Curriculum";
import AdminAuth from "../authentication/auth/adminAuth";
import LandingSiedss from "../pages/landing-page/LandingSiedss";
import Landing from "../pages/landing-page/LandingSiedss";
import ChangePassword from "../miniComponents/ChangePassword";
import FourDigitCodeInput from "../miniComponents/ConfirmCode";
import HorizontalNonLinearStepper from "../components/registroForm/pruebaRegistro";
import LeadershipForm from "../components/formularios/RegistroSemilleroForm";
import LandingPage from "../pages/alternative-landing/LandingPageAlt";
import SemilleroForm from "../pages/CreateSemillero";
import EnviarCorreo from "../pages/VerificarCorreo";
import VerificationForm from "../pages/CodigoConfirmacionSemillero";

function Router() {
    return (

        <BrowserRouter>

            <Switch>

                <Route exact path='/landing-student' component={LandingSiedss} />
                <Route exact path='/olvidaste-contraseña' component={ChangePassword} />
                <Route exact path='/confirmar-code' component={FourDigitCodeInput} />
                <Route exact path='/verificar-correo' component={EnviarCorreo} />
                <Route exact path='/codigo-confirmacion-usuario' component={VerificationForm} />
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/create-semillero' component={SemilleroForm} />
                <PrivateRouter path="/inicio" component={Inicio} />
                <Route path="/formulario-semillero" component={LeadershipForm} ></Route>
                <PrivateRouter path="/curriculum" component={Curriculum} />
                <LoginPrivado path="/login" component={RegistroFormulario} />
                <AdminAuth path="/admin" component={Admin} />


            </Switch>



        </BrowserRouter>

    );
}

export default Router;