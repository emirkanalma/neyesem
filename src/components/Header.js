import React from 'react'
import Logo from '../assets/images/logo.png'

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" >
            <img src={Logo} alt="Neyesem Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" >Hemen Başla</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Nasıl Çalışır?</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >SSS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" >Hakkımızda</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </>
  )
}