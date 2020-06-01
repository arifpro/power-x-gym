import React from 'react';
import './PriceBody.scss'
import div1img1 from '../../images/Group 80.png'
import div1img2 from '../../images/Group 81.png'
import div1img3 from '../../images/Group 82.png'

const PriceBody = () => {
    return (
        <div>
            <section className="priceFirstDiv container">
                <h2 style={{fontWeight:'bold', textAlign: 'center'}}>
                    <span style={{color:'#fcd842'}}>CHOOSE THE OFFER </span>
                    THAT SUITS YOU
                </h2>
                <p style={{color: 'gray', textAlign: 'center'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quidem suscipit, perferendis, ipsam eveniet enim est .</p>
                
                <br/><br/>
                <div class="card-deck priceFirstDivMedia">
                    <div class="card">
                        <div class="card-body priceCategoryDivAll priceCategoryDiv1">
                            <br/><br/>
                            <h5 style={{fontWeight:'bold', color:'#fcd842'}} class="card-title">BILLED MONTHLY</h5>
                            <h2 style={{fontWeight:'bold'}} class="card-title">ADVANCED PLAN</h2>
                            <h1 style={{fontWeight:'bold', fontSize: '60px', color:'#fcd842'}} class="card-title">$140</h1>
                            <ul>
                                <li>Mobile-Optimized</li>
                                <li>Best Hosting</li>
                                <li>Free Custom</li>
                                <li>Outstanding</li>
                                <li>Happy Customers</li>
                            </ul>
                            <button className="joinUsBtn">
                                <a href="/details">PURCHASE</a>
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body priceCategoryDivAll priceCategoryDiv2">
                        <br/><br/>
                            <h5 style={{fontWeight:'bold', color:'#fcd842'}} class="card-title">BILLED MONTHLY</h5>
                            <h2 style={{fontWeight:'bold'}} class="card-title">BASIC PLAN</h2>
                            <h1 style={{fontWeight:'bold', fontSize: '60px', color:'#fcd842'}} class="card-title">$120</h1>
                            <ul>
                                <li>Mobile-Optimized</li>
                                <li>Best Hosting</li>
                                <li>Free Custom</li>
                                <li>Outstanding</li>
                                <li>Happy Customers</li>
                            </ul>
                            <button className="joinUsBtn">
                                <a href="/details">PURCHASE</a>
                            </button>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body priceCategoryDivAll priceCategoryDiv3">
                        <br/><br/>
                            <h5 style={{fontWeight:'bold', color:'#fcd842'}} class="card-title">BILLED MONTHLY</h5>
                            <h2 style={{fontWeight:'bold'}} class="card-title">BEGINNERS</h2>
                            <h1 style={{fontWeight:'bold', fontSize: '60px', color:'#fcd842'}} class="card-title">$90</h1>
                            <ul>
                                <li>Mobile-Optimized</li>
                                <li>Best Hosting</li>
                                <li>Free Custom</li>
                                <li>Outstanding</li>
                                <li>Happy Customers</li>
                            </ul>
                            <button className="joinUsBtn">
                                <a href="/details">PURCHASE</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PriceBody;
