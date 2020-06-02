import React from 'react';
import './Details.scss'
import { useParams } from 'react-router-dom';
import gymBg from '../../images/humphrey-muleba-LOA2mTj1vhc-unsplash.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
    const {page} = useParams()
    return (
        <div>
            {/* <h1>Page: {page}</h1> */}
            <section className='detailsDiv container'>
                <div className="row">
                    <div className="col-md-7 classDetails">
                        <img src={gymBg} alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minus sequi quaerat quo consequuntur sed eum fuga, voluptate architecto atque, consequatur doloremque itaque cum eos molestiae reiciendis facilis iusto debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam enim vel culpa voluptas itaque, dolorem amet asperiores repellat vitae possimus cupiditate aliquam assumenda. Esse voluptatum laboriosam aliquid dicta eum.</p>
                        <ul>
                            <li><span><FontAwesomeIcon icon={faCheckSquare}/></span> Having Slimmer Shapely Thighs</li>
                            <li><span><FontAwesomeIcon icon={faCheckSquare}/></span> Getting Stronger Body</li>
                            <li><span><FontAwesomeIcon icon={faCheckSquare}/></span> Increased Metabolism</li>
                            <li><span><FontAwesomeIcon icon={faCheckSquare}/></span> Increased Muscular Endurance</li>
                            <li><span><FontAwesomeIcon icon={faCheckSquare}/></span> Maximum Results in Less Time</li>
                            <li><span><FontAwesomeIcon icon={faCheckSquare}/></span> Firm Hips and Tummy</li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <section className="classSchedule container">
                            <h2 style={{fontWeight:'bold'}}>
                                <span style={{color:'#fcd842'}}>CLASS </span>
                                SCHEDULE
                            </h2>
                            
                            <br/><br/>
                            <div class="card-deck">
                                <div class="card dayAndTimeDiv">
                                    <div class="card-body ">
                                        <h4 style={{fontWeight:'bold'}} class="card-title">Monday</h4>
                                        <p class="card-text">8:00 AM - 9:00 AM</p>
                                    </div>
                                </div>
                                <div class="card dayAndTimeDiv">
                                    <div class="card-body ">
                                        <h4 style={{fontWeight:'bold'}} class="card-title">Tuesday</h4>
                                        <p class="card-text">10:00 AM - 11:00 AM</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-deck">
                                <div class="card dayAndTimeDiv">
                                    <div class="card-body ">
                                        <h4 style={{fontWeight:'bold'}} class="card-title">Wednesday</h4>
                                        <p class="card-text">7:00 AM - 8:00 AM</p>
                                    </div>
                                </div>
                                <div class="card dayAndTimeDiv">
                                    <div class="card-body ">
                                        <h4 style={{fontWeight:'bold'}} class="card-title">Thursday</h4>
                                        <p class="card-text">5:00 PM - 6:00 PM</p>
                                    </div>
                                </div>
                            </div>
                            <div class="card-deck">
                                <div class="card dayAndTimeDiv">
                                    <div class="card-body ">
                                        <h4 style={{fontWeight:'bold'}} class="card-title">Friday</h4>
                                        <p class="card-text">6:00 AM - 7:00 AM</p>
                                    </div>
                                </div>
                                <div class="card dayAndTimeDiv">
                                    <div class="card-body ">
                                        <h4 style={{fontWeight:'bold'}} class="card-title">Saturday</h4>
                                        <p class="card-text">7:00 PM - 8:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div className="joinUsDiv">
                            <button className="joinUsBtn">
                                <a href="/price">JOIN US</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Details;
