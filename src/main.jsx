import ReactDOM from 'react-dom';
import React from 'react';
import {
  BrowserRouter, 
  Routes,
  Route,
} from "react-router-dom";
import './css/principal.css'
import { Api } from "./pages/api";
import { Calendario } from "./pages/calendario";
import { Noticia } from "./pages/noticia";
import { Principal } from "./pages/principal";
import { Projeto } from "./pages/projeto";

const rootElement = document.getElementById("root");

ReactDOM.render(
  < React.StrictMode>
  <BrowserRouter basename='/sigaa-react'>
    <Routes>
      <Route path="" element={<Principal />} />
      <Route path="/noticia" element={<Noticia />} />
      <Route path="/projeto" element={<Projeto />} />
      <Route path="/calendario" element={<Calendario />} />
      <Route path="/api" element={<Api />} />
    </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  rootElement
);