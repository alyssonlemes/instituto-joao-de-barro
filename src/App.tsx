import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRouter from "./components/PrivateRouter";
import ScrollToTop from "./components/ScrollToTop";

const ToastOptions = {
  style: {
    fontSize: "16px",
  },
  success: {
    duration: 3000,
  },
  error: {
    duration: 3000,
  },
};

// Principais rotas
import LandingPage from "./Screens/PublicScreens/LandingPage";
import DashboardPage from "./Screens/PrivateScreens/Dashboard";

// Telas publicas
import { Main } from "./components/Main";
import { Contact } from "./Screens/PublicScreens/Contact";
import { About } from "./Screens/PublicScreens/About";
import { Voluntarios } from "./Screens/PublicScreens/Voluntarios";
import { Beneficiarios } from "./Screens/PublicScreens/Beneficiarios";
import { Blog } from "./Screens/PublicScreens/Blog";
import { Donation } from "./Screens/PublicScreens/Donation";
import { NotFound } from "./Screens/NotFound";

// Login
import { Login } from "./Screens/Login";

// Telas privadas
import { Home } from "./Screens/PrivateScreens/Home";
import { Noticias } from "./Screens/PrivateScreens/Noticias";
import { Perfil } from "./Screens/PrivateScreens/Perfil";
import { Financeiro } from "./Screens/PrivateScreens/Financeiro";
import { StorageHome } from "./Screens/PrivateScreens/Estoque/StorageHome";
import { BeneficiariosMain } from "./Screens/PrivateScreens/BeneficiariosMain";
import AtualizarInformacoes from "./Screens/PrivateScreens/AtualizarInformacoesBeneficiario";
import Registro from "./Screens/PrivateScreens/RegistroBeneficiario";
import AtualizarInformacoesVisitas from "./Screens/PrivateScreens/atualizarInformacoesVisitas";
import RegistroVisita from "./Screens/PrivateScreens/RegistroVisita";
import { BuildingHome } from "./Screens/PrivateScreens/Obras/BuildingHome";
<<<<<<< HEAD
import { BeneficiarioPerfil } from "./Screens/PrivateScreens/BeneficiarioPerfil";
=======
import { PainelDoEditor } from "./Screens/PrivateScreens/PainelDoEditor";
>>>>>>> upstream/main

function App() {
  return (
    <div className="app-container">
      <Router>
        <Toaster position="top-right" toastOptions={ToastOptions} />
<<<<<<< HEAD
=======
        <ScrollToTop />

>>>>>>> upstream/main
        <div className="content">
          <Routes>
            {/* Rotas Públicas */}
            <Route path="/" element={<LandingPage />}>
              <Route index element={<Main />} />
              <Route path="contatos" element={<Contact />} />
              <Route path="noticias" element={<Blog />} />
              <Route path="sobre" element={<About />} />
              <Route path="voluntarios" element={<Voluntarios />} />
              <Route path="beneficiarios" element={<Beneficiarios />} />
              <Route path="doacoes" element={<Donation />} />
            </Route>

            {/* Rota de Login */}
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />

            {/* Rotas Privadas - Dashboard */}
            <Route element={<PrivateRouter />}>
              <Route path="/dashboard" element={<DashboardPage />}>
                <Route index element={<Home />} />
                <Route path="noticias" element={<Noticias />} />
                <Route path="perfil" element={<Perfil />} />
                <Route path="financeiro" element={<Financeiro />} />
                <Route path="estoque" element={<StorageHome />} />
<<<<<<< HEAD
                <Route path="beneficiarios" element={<BeneficiariosMain />} />
                <Route path="beneficiario/perfil" element={<BeneficiarioPerfil />} />
                <Route path="atualizar/:familiaId" element={<AtualizarInformacoes />} />
                <Route path="registro" element={<Registro />} />
                <Route path="visitas/:id" element={<AtualizarInformacoesVisitas />} /> 
                <Route path="registroVisita" element={<RegistroVisita />} />
                <Route path="obras" element={<BuildingHome />}/>
=======
                <Route path="obras" element={<BuildingHome />} />
                <Route path="editor" element={<PainelDoEditor />} />
>>>>>>> upstream/main
              </Route>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
