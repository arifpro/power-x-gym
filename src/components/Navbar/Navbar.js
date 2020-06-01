import React from 'react';
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-lg  py-3" >   {/* fixed-top */}
                    <div className="container">
                        
                        <a href="/" className="navbar-brand text-uppercase font-weight-bold" style={{paddingTop: '20px'}}>
                            <h4 style={{color: 'white', fontWeight:'bold'}}>POWER 
                                <span style={{color: 'yellow'}}> X</span>
                            </h4>
                        </a>
                       
                        <button type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" 
                            aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation" 
                            className="navbar-toggler navbar-toggler-right"
                        >
                            <FontAwesomeIcon icon={faBars}/>
                            {/* <i className="fa fa-bars"></i> */}
                        </button>

                        <div id="navbarSupportedContent" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto customUl1">
                                <li className="nav-item active">
                                    <a href="/" className="nav-link">
                                        <span>Home</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#/" className="nav-link">
                                        <span>Services</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/class" className="nav-link">
                                        <span>Our Classes</span>
                                    </a>
                                </li>
                                
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <span>About us</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <span>Blog</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/price" className="nav-link">
                                        <span>pricing</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <span>Contact Us</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
             </nav>
            </header>
        </div>
    );
};

export default Navbar;