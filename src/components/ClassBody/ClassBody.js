import React from 'react';
import './ClassBody.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import img1 from '../../images/victor-freitas-546919-unsplash.png'
import img2 from '../../images/baylee-gramling-5m4Z14SDL80-unsplash2.jpg'
import img3 from '../../images/humphrey-muleba-LOA2mTj1vhc-unsplash2.jpg'
import img4 from '../../images/alora-griffiths-TuzrzArccvc-unsplash2.jpg'
import img5 from '../../images/john-fornander-FIu48iuo_4g-unsplash2.jpg'
import img6 from '../../images/sven-mieke-Lx_GDv7VA9M-unsplash2.jpg'


const ClassBody = () => {
    return (
        <div>
            <section className="classesListDiv container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={img1} alt=""/>
                        <Link to='/details/psycho'>
                            <button class="classesBtn">
                                PSYCHO TRAINING &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <img src={img2} alt=""/>
                        <Link to='/details/self'>
                            <button class="classesBtn">
                                SELF DEFENSE &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <img src={img3} alt=""/>
                        <Link to='/details/advance'>
                            <button class="classesBtn">
                                ADVANCE GYM &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>


            <section className="classesListDiv container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={img4} alt=""/>
                        <Link to='/details/cardio'>
                            <button class="classesBtn">
                                CARDIO TRAINING &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <img src={img5} alt=""/>
                        <Link to='/details/strength'>
                            <button class="classesBtn">
                                STRENGTH TRAINING &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <img src={img6} alt=""/>
                        <Link to='/details/beginner'>
                            <button class="classesBtn">
                                BEGINNER TRAINING &nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ClassBody;
