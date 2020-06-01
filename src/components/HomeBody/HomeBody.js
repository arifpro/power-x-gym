import React from 'react';
import './HomeBody.scss'
import div1img1 from '../../images/Group 80.png'
import div1img2 from '../../images/Group 81.png'
import div1img3 from '../../images/Group 82.png'
import aboutImg from '../../images/wells-chan-H-vAxuWxmi8-unsplash2.jpg'
import chooseUseImg1 from '../../images/Group 87.png'
import chooseUseImg2 from '../../images/Group 88.png'
import chooseUseImg3 from '../../images/gift-2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const HomeBody = () => {
    return (
        <div>
            {/* <br/><br/> */}
            <section className="homeFirstDiv container">
                <div class="card-deck homeFirstDivMedia">
                    <div class="card">
                        <div class="card-body homeCategoryDivAll homeCategoryDiv1">
                            <br/><br/>
                            <img src={div1img1} alt="" width='15%' />
                            <br/>
                            <br/>
                            <h3 style={{fontWeight:'bold'}} class="card-title">PROGRESSION</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body homeCategoryDivAll homeCategoryDiv2">
                            <br/><br/><br/><br/>
                            <img src={div1img2} alt="" width='20%'/>
                            <br/>
                            <br/>
                            <h3 style={{fontWeight:'bold', color:'#fcd842'}} class="card-title">WORKOUT</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body homeCategoryDivAll homeCategoryDiv3">
                            <br/><br/>
                            <img src={div1img3} alt="" width='15%' />
                            <br/>
                            <br/>
                            <h3 style={{fontWeight:'bold'}} class="card-title">NUTRITION</h3>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </section>



            <section className="homeSecondDiv container">
                <div className="row">
                    <div className="col-md-6 homeAboutUsDiv">
                        {/* <div class="card">
                            <div class="card-body homeAboutUsDiv">
                                
                            </div>
                        </div> */}
                        <img src={aboutImg} alt=""/>
                    </div>
                    <div className="col-md-6 homeAboutUsDiv2">
                        <h1 style={{color:'#f4f4f5', fontWeight:'bold'}}>ABOUT US</h1>
                        <h2 style={{color:'#fcd842', fontWeight:'bold'}}>WE ARE HERE TO DREAM!</h2>
                        <h2 style={{fontWeight:'bold'}}>OUR TEAM IS HERE SURV YOU.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus amet numquam cum voluptates cumque molestiae sunt maxime inventore facere ex dolores repellat, in natus labore soluta. Deserunt nam quidem quasi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo hic fugit asperiores delectus omnis. Facere nemo quisquam iusto explicabo est dolores id. Nostrum incidunt quis cum beatae, ad itaque doloremque?</p>
                        {/* <hr/>
                        <hr/> */}
                    </div>
                </div>
            </section>



            <section className="homeThirdDiv container">
                <h2 style={{fontWeight:'bold', textAlign: 'center'}}>TRAINING
                    <span style={{color:'#fcd842'}}> PROGRAMS</span>
                </h2>
                
                <br/><br/>
                <div class="card-deck">
                    <div class="card">
                        <div class="card-body homeTraining homeTrainingDiv1"  style={{textAlign: 'left', padding: '0px'}}>
                            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                            <button class="card-title trainingBtn" style={{marginBottom: '40px'}}>YOGA TRAINING SESSION    	
                            <FontAwesomeIcon icon={faArrowRight}/>
                            </button>
                            <br/>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body homeTraining homeTrainingDiv2" style={{textAlign: 'left', padding: '0px'}}>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <button class="card-title trainingBtn" style={{marginBottom: '40px'}}>CARDIO TRAINING SESSION    	<FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                        {/* <br/> */}
                        </div>
                    </div>
                </div>
            </section>


            <section className="homeLastDiv container">
                <h2 style={{fontWeight:'bold', textAlign: 'center'}}>
                    <span style={{color:'#fcd842'}}>WHY </span>
                    CHOOSE US
                </h2>
                
                <br/><br/>
                <div class="card-deck">
                    <div class="card">
                        <div class="card-body homeChooseDivAll">
                            <br/>
                            <img src={chooseUseImg1} alt="" width='15%' />
                            <br/>
                            <br/>
                            <br/>
                            <h5 style={{fontWeight:'bold'}} class="card-title">FREE FITNESS TRAINING</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body homeChooseDivAll">
                            <br/>
                            <img src={chooseUseImg2} alt="" width='15%'/>
                            <br/>
                            <br/>
                            <br/>
                            <h5 style={{fontWeight:'bold'}} class="card-title">TONS OF CARDIO &#38; STRENGTH</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body homeChooseDivAll">
                            <br/>
                            <img src={chooseUseImg3} alt="" width='15%' />
                            <br/>
                            <br/>
                            <br/>
                            <h5 style={{fontWeight:'bold'}} class="card-title">NO COMMITMENT MEMBERSHIPS</h5>
                            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeBody;
