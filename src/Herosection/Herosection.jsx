import React, { useEffect, useState } from 'react';
// import Header from '../Header/Header';
import './Herosection.css';
import "@fontsource/open-sans"; // Defaults to weight 400.
import Handshake from '../img/Hero2.png';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';

export default function Herosection() {
    
    const [Name, setName] = useState("UI/UX Design");
    const [Lists, setLists] = useState("List1,List2");
    const listuiux = () => {
        setName("UI/UX Design");
    };
    
    const listweb = () => {
        setName("Website Development");
        setLists("Lists2,Lists3");
    };

    const listecom = () => {
        setName("E-commerce Development");
        setLists("List5,List6");
    };

    const listmobapp = () => {
        setName("Mobile App Development");
        setLists("List7,List8");

    };

    // TAB MENU
    const [justifyActive, setJustifyActive] = useState('tab1');

    const handleJustifyClick = (value: string) => {
      if (value === justifyActive) {
        return;
      }
  
      setJustifyActive(value);
    };
  
  return (
    <>
        <div className="container-fluid">
            <div className="row main-hero">
                    <div className="bg-image d-flex justify-content-center align-items-center text-white">
                        <h1 className="mb-3 h2 mainhead">We Are Your Trusted Partner For<br></br>Creative Digital Transformation </h1>
                    </div>
                </div>
        </div>

        {/* Why We Do What We Do? */}
        
        <div className="container-fluid">
            <div className="row mx-auto">
                <div className="col-6 mt-1 mb-1 p-5">
                    <h3 className="headcss pb-4"> Why We Do What We Do </h3>
                    <div>
                        <img src={Handshake} class="handshake" alt="Why We Do What We Do"/>
                    </div>
                </div>

                <div className="col-6 align-self-center p-5">
                    <p>Humans Softtech is a leading custom website, mobile app, ecommerce, mobile game, software, product design & development, cloud computing, staff augmentation, dedicated development team, technologies consulting services and business solutions providing company. We transform businesses by generating ideas, building products, and accelerating growth.</p>
                </div>
            </div>
        </div>

        {/* OUR AREAS OF EXPERTISE */}
        <div className="container-fluid custombg">

            <div className="row">
                <div className="col-6">
                    <h3 className="m-5 headcss">Our Areas Of Expertise</h3>
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <button type="button" class="m-5 btn btn-primary btn-lg viewservices"> View All Services </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <button type="button" class="ms-5 btn btn-grad btn-lg btn-block" onClick={listuiux}>UI/UX Design</button>
                    <button type="button" class="mt-3 ms-5 btn btn-grad btn-lg btn-block" onClick={listweb}>Website Development</button>
                    <button type="button" class="mt-3 ms-5 btn btn-grad btn-lg btn-block" onClick={listecom}>E-commerce Development</button>
                    <button type="button" class="mt-3 ms-5 btn btn-grad btn-lg btn-block" onClick={listmobapp}>Mobile App Development</button>
                </div>
                
                <div className="col-6">
                    <div className="d-flex justify-content-start">
                        <div className="contentblock">
                            <h3 className="servhead">{Name}</h3>
                            <p>{Lists}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* TECHNOLOGIES WE WORK WITH */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-6">
                    <h3 className="m-5 headcss">Technologies We Work With</h3>
                </div>
                <div className="col-6">
                    <div className="d-flex justify-content-end">
                        <button type="button" class="m-5 btn btn-primary btn-lg viewtech"> View All Technologies </button>
                    </div>
                </div>
            </div>

            {/* <div className="row techbg">
                <div className="col-12">
                    <div class="m-5 btn-group">
                        <button class="parallax">UI/UX</button>
                        <button class="">Website</button>
                        <button class="">Ecommerce</button>
                        <button class="">Mobile App</button>
                        <button class="">Mobile Game</button>
                        <button class="">Frontend</button>
                        <button class="">Backend</button>
                    </div>
                </div>
            </div> */}



        <MDBTabs justify className='mb-3'>
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            UI/UX
            </MDBTabsLink>
        </MDBTabsItem>

        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Website
            </MDBTabsLink>
        </MDBTabsItem>
       
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
            Ecommerce
            </MDBTabsLink>
        </MDBTabsItem>
       
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab4')} active={justifyActive === 'tab4'}>
            Mobile App
            </MDBTabsLink>
        </MDBTabsItem>
       
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab5')} active={justifyActive === 'tab5'}>
            Mobile Game
            </MDBTabsLink>
        </MDBTabsItem>

        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab6')} active={justifyActive === 'tab6'}>
            Frontend
            </MDBTabsLink>
        </MDBTabsItem>
        
        <MDBTabsItem>
            <MDBTabsLink onClick={() => handleJustifyClick('tab7')} active={justifyActive === 'tab7'}>
            Backend
              </MDBTabsLink>
        </MDBTabsItem>

        </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
            <h1>Welcome to UI/UX Design</h1>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab2'}>
            <h1>Welcome to Website Development</h1>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab3'}>
            <h1>Welcome to Ecommerce Development</h1>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab4'}>
            <h1>Welcome to Mobile App Development</h1>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab5'}>
            <h1>Welcome to Mobile Game Development</h1>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab6'}>
            <h1>Welcome to Frontend Development</h1>
        </MDBTabsPane>
        <MDBTabsPane show={justifyActive === 'tab7'}>
            <h1>Welcome to Backend Development</h1>
        </MDBTabsPane>
      </MDBTabsContent>


        </div>
    </>
   )
 }