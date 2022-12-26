import React from 'react'
import Logo from '../assets/images/logo.png'
import iInstagram from '../assets/images/icon-instagram.png'
import iFacebook from '../assets/images/icon-facebook.png'
import iTwtitter from '../assets/images/icon-twitter.png'

export default function Header() {
  return (
    <>
       <div className="footer">
        <div className="container">
            <div className="footer-content">
                <div className="left">
                    <a className="navbar-brand" >
                        <img src={Logo} alt=""/>
                    </a>
                </div>
                <div className="middle">
                    <div className="social-media">
                        <a >
                            <img src={iTwtitter} alt=""/>
                        </a>
                        <a >
                            <img src={iFacebook} alt=""/>
                        </a>
                        <a >
                            <img src={iInstagram} alt=""/>
                        </a>
                    </div>
                </div>
                <div className="right">
                    <span className="copyr">Copyright 2021 neyesem.com</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}