import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import { Noticia } from "./pages/noticia";
import { Principal } from "./pages/principal";
import { Projeto } from "./pages/projeto";

  export function AppRoutes(){
    return (
        <Router>
            <Routes>
            <Route path="/noticia" element={<Noticia/>}/>
            <Route path="/" element={<Principal/>}/>   
            <Route path="/projeto" element={<Projeto/>}/> 
            </Routes>
            
            
           
        </Router>
    )
  }