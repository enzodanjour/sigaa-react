import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import { Noticia } from "./pages/noticia";
import { Principal } from "./pages/principal";
import { Projeto } from "./pages/projeto";

  export function AppRoutes(){
    return (
      <div>
        <Router>
            <Routes>
            <Route path="/noticia" element={<Noticia/>}/>
            <Route path="/" element={<Principal/>}/>   
            <Route path="/projeto" element={<Projeto/>}/> 
            </Routes>
            <AppFooter/>
        </Router>
        
      </div>
        
    )
  }