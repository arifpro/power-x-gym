import React from 'react';
import './Footer.scss'
import youtube from '../../images/bxl-youtube.png'
import facebook from '../../images/bxl-facebook.png'
import instagram from '../../images/bxl-instagram.png'
import twitter from '../../images/bxl-twitter.png'
import whatsapp from '../../images/bxl-whatsapp.png'

// import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        
            <div className="cusFooterContainer1">
              
                <div className="container" >
                    <div className="row">
                        <div className="col-md-2" >
                            <a href="/" className="navbar-brand text-uppercase font-weight-bold" style={{paddingTop: '20px'}}>
                                <h4 style={{color: 'white', fontWeight:'bold'}}>POWER 
                                    <span style={{color: 'yellow'}}> X</span>
                                </h4>
                            </a> 
                        </div>
                        <div className="col-md-10">
                            <div className="container cusFooter">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h5>Need Help?</h5>
                                        <h6>Help Center</h6>
                                        <h6>Email Support</h6>
                                        <h6>Live Chat</h6>
                                        <h6>Gift Certificates</h6>
                                        <h6>Send Us Feedback</h6>
                                    </div>
                                    <div className="col-md-3">
                                        <h5>Digital Resources</h5>
                                        <h6>Articles</h6>
                                        <h6>E-books</h6>
                                    </div>
                                    <div className="col-md-3">
                                        <h5>Connect with Us</h5>
                                        <p className="footerIcon">
                                            <img src={youtube} alt=""/>
                                            <img src={facebook} alt=""/>
                                            <img src={instagram} alt=""/>
                                            <img src={twitter} alt=""/>
                                            <img src={whatsapp} alt=""/>
                                        </p>
                                        
                                        <h6>Forum</h6>
                                    </div>
                                    <div className="col-md-3">
                                        <h5>Join Our Newsletter</h5>
                                        <h6>Get exclusive news, features, and updates from The Shredder Weight Loss Academy.</h6>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <br/><br/>
                <footer className="text-center">Copyright @2020 All Right Reserved</footer>
                </div>
                
                
            
            </div>
        
    );
};

export default Footer;