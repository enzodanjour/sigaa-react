import React from 'react'
import logo from '../images/Tads.png';

export function Nave() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <img src={logo} width="30" height="24" class="d-inline-block align-text-top"/>
        <a className="navbar-brand" href="/">Tads</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Principal</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/noticia">Noticia</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projeto">Projeto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/calendario">Calendário</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/api">Clima macaíba</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

