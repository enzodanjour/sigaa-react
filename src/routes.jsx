import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import AppFooter from "./components/AppFooter";
import { Principal } from "./pages/principal";
import { Projeto } from "./pages/projeto";
import { Noticia} from "./pages/noticia";
import {Calendario} from "./pages/calendario";
import {Api} from "./pages/api";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nave from "./Nave";
import 'bootstrap/dist/css/bootstrap.min.css';

  export function AppRoutes(){
    return (
      <div>
        <Router>
          <Nave/>
              <Switch> 
                <Route path="/" element={<Principal/>}/>  
                <Route path= "/noticia" element={<Noticia/>}/>
                <Route path="/projeto" element={<Projeto/>}/> 
                <Route path="/calendario" element={<Calendario/>}/> 
                <Route path="/api" element={<Api/>}/> 
              </Switch>
          <AppFooter/>
        </Router>
        
      </div>
        
    )
  }