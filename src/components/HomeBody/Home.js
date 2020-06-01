import React from 'react';
import './Home.css'
import topImg from '../../images/Mask Group 1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="customContainer1">
                <div className="">
                    <div className="row">
                        <div className="col-md-4 customDiv1 d-flex align-items-center">
                            <div>
                                <h1>Your New Smile Starts Here</h1>
                                <p className="topDetails">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque earum, quidem dicta quod aut fugiat ducimus totam! Aspernatur sed maiores error. Excepturi perferendis consequatur pariatur iusto ab at? Illum, recusandae?</p>
                                
                                <Link to='/addAppointment'>
                                    <button className="getAppointmentBtn">GET APPOINTMENT</button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-4 customDiv2 ">
                            
                        </div>
                        <div className="col-md-4 customDiv3 d-flex align-items-center">
                            <img src={topImg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="col-md-4 d-flex justify-content-center align-items-center homeTopOptions">
                                <div className="homeIcons"><FontAwesomeIcon icon={faClock} /></div>
                                <div>
                                    <h6 className="homeTopH6">Opening Hours</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center homeTopOptions2">
                                <div className="homeIcons"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                                <div>
                                    <h6 className="homeTopH6">Visit out location</h6>
                                    <p>Brooklyn, NY 10036, United States</p>
                                </div>
                            </div>
                            <div className="col-md-4 d-flex justify-content-center align-items-center homeTopOptions">
                                <div className="homeIcons"><FontAwesomeIcon icon={faPhoneAlt} /></div>
                                <div>
                                    <h6 className="homeTopH6">Contact us now</h6>
                                    <p>+000 123 456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;