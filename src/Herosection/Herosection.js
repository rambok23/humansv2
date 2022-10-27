import React from 'react';
// import Header from '../Header/Header';
import './Herosection.css';
import "@fontsource/open-sans"; // Defaults to weight 400.


export default function Herosection() {
  return (
    <>
        <div class="container-fluid">
            <div class="row">
                    <div className="col-lg-2 bg-dark"></div>
                        <div class="col-lg-8 col-sm-12 text-wrap bg-dark text-white text-center">
                            <h1 className="mainhead">We Are Your Trusted Partner For Creative Digital Transformation </h1>
                        </div>
                    <div class="col-lg-2 bg-dark"></div>
                </div>
        </div>
    </>
   )
 }