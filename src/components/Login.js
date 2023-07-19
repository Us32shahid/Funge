import React, {state, useState} from 'react';
import Logo from '../images/funge-logo.png';
import { Link } from "react-router-dom";
import FungeLogo from './FungeLogo';

const Login = (Props) => {

    const [state, setState] = useState('enterPhoneNumber')

    const PhoneSignup = (props) => {
        return (
        <>
            <div className="modal-body px-5">
                <h4 className="w-700">Phone Number</h4>
                <p className="text-black-50">
                    Input your phone number to continue
                </p>
                <input type="text" className="login-input mb-4 w-100" placeholder="Phone Number" />
                <button onClick={props.enterOtp} className='btn btn-primary login-btn w-100'>Signup</button>
                <br />
                <br />
                <br />
            </div>
        </>
        )
    }
    const PhoneOtp = (props) => {
        return (
        <>
            <div className="modal-body px-5 text-center">
                <h4 className="w-700">Phone Number</h4>
                <p className="text-black-50">
                    Please enter the code that was sent to
                    <br/>
                    <span className="fw-bold">+2347088635201</span>
                </p>
                <input type='text' className="otp-input login-input mb-4" />
                <input type='text' className="otp-input login-input mb-4" />
                <input type='text' className="otp-input login-input mb-4" />
                <input type='text' className="otp-input login-input mb-4" />
                <button onClick={props.LinkSent} className='btn btn-primary login-btn w-50 mb-3'>Verify</button>
                <p className="text-black-50"><small>I haven't received any mail yet <a className="funge-link">Resend</a></small></p>
                <br />
                <br />
                <br />
            </div>
        </>
        )
    }
    const PhoneLinkSent = () => {
        return (
        <>
            <div className="modal-body px-5 text-center">
                <h1 className="w-700"><i className="fas fa-envelope funge-color"></i></h1>
                <p className="text-black-50">
                    A unique link was sent to 
                    <span className="fw-bold">+2347088635201</span>
                    <br/>
                    Please clickthe link to login.
                    <br/>
                    <br/>
                    
                </p>
                <p className="text-black-50"><small>I haven't received any mail yet <a className="funge-link">Resend</a></small></p>
                <br />
                <br />
                <br />
            </div>
        </>
        )
    }
    return (
        <>
            <div className="container-fluid">
                <div className='row justify-content-center'>
                    <div className='col-md-6 pt-4 px-5'>
                        <FungeLogo />
                    </div>
                    <div className='col-md-6 pt-4 px-5'>
                        <span className="text-black-50 float-end">
                            <i className="fa-solid fa-arrow-right-to-bracket"></i>
                            <Link className='btn text-black-50 mb-1' to="/">Back To Home</Link>
                        </span>
                    </div>
                    <div className='row justify-content-center py-5'>
                        <div className='col-md-5 col-lg-4'>
                            <div className='card border-0'>
                                <div className='card-body text-center'>
                                    <h3 className="w-800 text-start">Login</h3>
                                    <p className="sub-heading text-start">Hey! Welcome Back </p>
                                    <input className="login-input mb-4 w-100" placeholder="Email Address" />
                                    <br />
                                    <button className='btn btn-primary login-btn w-100'>Login</button>
                                    <div className="text-center p-4">
                                        <span className="sub-heading">or continue with</span>
                                    </div>
                                    <button className="phone-button w-100" data-bs-toggle="modal" data-bs-target="#phoneModal"><i className="fa-solid fa-mobile text-black-50 fa-flip-vertical"></i> &nbsp;Phone Number</button>
                                    <div className="text-center p-4">
                                        <span className="text-black-50">I don’t have an account yet, <Link className='funge-link text-decoration-none' to="/signin">Sign Up</Link></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade phoneModal" id="phoneModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <button onClick={() => setState('enterPhoneNumber')} type="button" className="btn-close funge-modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {state === 'enterPhoneNumber' && (
                            <PhoneSignup enterOtp={() => setState('enterOtp') } />
                        )}
                        {state === 'enterOtp' && (
                            <PhoneOtp LinkSent={() => setState('PhoneLinkSent') } />
                        )}

                        {state === 'PhoneLinkSent' && <PhoneLinkSent />}
                        
                    </div>
                </div>
            </div>
        </>
    )
};

export default Login;