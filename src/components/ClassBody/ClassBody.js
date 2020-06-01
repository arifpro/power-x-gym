import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ClassBody = () => {
    return (
        <div>
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
        </div>
    );
}

export default ClassBody;
