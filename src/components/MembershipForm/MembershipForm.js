import React, { useState } from 'react';
import './MembershipForm.scss'
import { Link } from 'react-router-dom';
import img1 from '../../images/credit-cards_mastercard.png'
import img2 from '../../images/credit-cards_visa.png'
import img3 from '../../images/credit-cards_amex.png'
import imgPayPal from '../../images/Bitmap.png'

const MembershipForm = () => {
    const [page, setPage] = useState(false)
    function onHandle(){
        setPage(true)
    }
    return (
        <div>
            {/* visible */}
            {
                !page? 
            <div>
                <div className="paymentStepCount container">
                    <h1 style={{backgroundColor: '#fcd842', border:'1px solid #fcd842'}}>&nbsp;1 </h1>
                    <h2>--------------------</h2>
                    <h1>  2  </h1>
                    <h2>--------------------</h2>
                    <h1> 3&nbsp;</h1>
                    <div>
                        <p style={{color: 'black', display: 'inline', fontWeight: 'bold'}}>Personal Details</p>
                        <p style={{display: 'inline'}}>-------------------------------</p>
                        <p style={{color: 'gray', display: 'inline'}}>Bank Payment</p>
                        <p style={{display: 'inline'}}>----------------------------</p>
                        <p style={{color: 'gray', display: 'inline'}}>Membership Created</p>
                    </div>
                </div>

                <section className="membershipDiv container">
                    <form action='' method=''>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="mobile">Mobile Number</label>
                                <input type="text" className="form-control" id="mobile"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                            <label for="DateOfBirth">Date Of Birth</label>
                            <input type="date" className="form-control" id="DateOfBirth"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="gender">Gender</label>
                                <select id="gender" className="form-control">
                                    {/* <option selected>Choose...</option> */}
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="address">Address Line</label>
                                <input type="text" className="form-control" id="address"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="country">Country/Region</label>
                                <input type="text" className="form-control" id="country"/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="city">City</label>
                                <input type="text" className="form-control" id="city"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label for="postcode">Postcode</label>
                                <input type="text" className="form-control" id="postcode"/>
                            </div>
                        </div>
                        
                        

                        {/* <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div> */}
                        {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
                        <div className="NextDiv">
                            <button type='submit' onClick={onHandle} className="joinUsBtn">NEXT</button>
                        </div>
                    </form>
                </section>
            </div>

            
            :
            
            <div>
                <div className="paymentStepCount container">
                    <h1 style={{backgroundColor: '#fcd842', border:'1px solid #fcd842'}}>&nbsp;1 </h1>
                    <h2>--------------------</h2>
                    <h1 style={{backgroundColor: '#fcd842', border:'1px solid #fcd842'}}>  2  </h1>
                    <h2>--------------------</h2>
                    <h1> 3&nbsp;</h1>
                    <div>
                        <p style={{color: 'black', display: 'inline', fontWeight: 'bold'}}>Personal Details</p>
                        <p style={{display: 'inline'}}>-----------------------------</p>
                        <p style={{color: 'black', display: 'inline', fontWeight: 'bold'}}>Bank Payment</p>
                        <p style={{display: 'inline'}}>----------------------------</p>
                        <p style={{color: 'gray', display: 'inline'}}>Membership Created</p>
                    </div>
                </div>

                <section className="membershipDiv2 container">
                    <form action='' method=''>
                        
                        
                        
                        

                        {/* <div className="form-group">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                            </div>
                        </div> */}


                        <div class="custom-control custom-radio  bankPaymentDiv">
                            <div class="d-flex justify-content-around">
                            <div>
                                <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"/>
                                <label class="custom-control-label" for="customRadioInline1"  style={{fontWeight:'bold'}}>Credit Card</label>
                                <p>Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.</p>
                            </div>
                            <div className="creditCard">
                                <img src={img1} alt=""/>
                                <img src={img2} alt=""/>
                                <img src={img3} alt=""/>
                            </div>
                            </div>
                            <br/>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="cardNumber">CARD NUMBER</label>
                                    <input type="text" className="form-control" id="cardNumber" placeholder="0000 0000 0000 0000"/>
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label for="cardName">NAME OF CARD</label>
                                    <input type="text" className="form-control" id="cardName"/>
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="expiry">EXPIRY DATE</label>
                                    <input type="text" className="form-control" id="expiry" placeholder="MM/YY" />
                                </div>
                                <div className="form-group col-md-3">
                                    <label for="cvv">CVV CODE</label>
                                    <input type="text" className="form-control" id="cvv"/>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div class="custom-control custom-radio bankPaymentDiv">
                            <div class="d-flex justify-content-around">
                            <div>
                            <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"/>
                            <label class="custom-control-label" for="customRadioInline2" style={{fontWeight:'bold'}}>PayPal</label>
                                <p>Safe money transfer using your bank account. Visa, Maestro, Discover, American Express.</p>
                            </div>
                            <div>
                                <img src={imgPayPal} alt=""/>
                            </div>
                            </div>
                        </div>



                        {/* <button type="submit" className="btn btn-primary">Sign in</button> */}
                        <div className="NextDiv">
                            <button type='submit' className="joinUsBtn">NEXT</button>
                        </div>
                    </form>
                </section>
            </div>
            }
        </div>
    );
}

export default MembershipForm;
