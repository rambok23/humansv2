import React from 'react';
import logo from '../img/Humans.png';
import './Header.css';

export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top" role="navigation">

    <div className="container-fluid">

        <a className="navbar-brand" href="#">
            <img src={logo} height="150px" width="100px" className="img-fluid d-inline-block align-top" alt=""/>
        </a>

        <button type="button" className="navbar-toggler"  data-bs-toggle="collapse" data-bs-target="#navbarRightAlignExample" aria-controls="navbarRightAlignExample" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarRightAlignExample">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li> 

                <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Technologies</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Projects</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Careers</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>

    </nav>
    </>
   )
 }