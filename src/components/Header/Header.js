import React from 'react';
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div>
            <section className="headerSection d-flex align-items-center">
                <div className="container ">
                    <div className="row">
                        {/* <div className="d-flex align-items-center"> */}
                            <div className="col-md-6 cusHeader">
                                <h1>THE BEST FITNESS STUDIO IN TOWN</h1>
                                <br/>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere quo dolorem ex doloribus cumque impedit deleniti voluptate deserunt saepe fugit vitae unde recusandae quidem et aut perferendis at, in eum.</p>
                                <br/>
                                <button className="joinUsBtn">
                                    <a href="/price">JOIN US</a>
                                </button>
                            </div>
                        {/* </div> */}
                        <div className="col-md-6 cusHeader2 d-flex align-items-center justify-content-center">
                            <p>
                                <FontAwesomeIcon icon={faPlayCircle}/>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Header;
