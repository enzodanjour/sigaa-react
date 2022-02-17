import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Principal } from "./pages/principal";
import { Projeto } from "./pages/projeto";
import { Calendario } from "./pages/calendario";
import { Api } from "./pages/api";
import { Nave } from "./components/Nave";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppFooter from "./components/AppFooter";
import { Noticia } from "./pages/noticia";

export function AppRoutes() {
  return (
    <div>
      <Nave />
      <Router>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/noticia" element={<Noticia />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/api" element={<Api />} />


        </Routes>
      </Router>
      <AppFooter />
    </div>

  )
}