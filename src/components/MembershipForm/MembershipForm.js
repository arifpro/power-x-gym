import React from 'react';
import './MembershipForm.scss'
import { Link } from 'react-router-dom';

const MembershipForm = () => {
    return (
        <div>
            {/* visible */}
            
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
                            <button type='submit' className="joinUsBtn">NEXT</button>
                        </div>
                    </form>
                </section>
            </div>

            {/* hide */}
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
                            <button type='submit' className="joinUsBtn">NEXT</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default MembershipForm;
