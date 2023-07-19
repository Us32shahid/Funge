import React from 'react'
import { Link } from 'react-router-dom';
import FungeLogo from '../FungeLogo';

const Footer = () => {

    return (
        <>
            <div className='funge-footer container-fluid'>
                <div className="row icon-row justify-content-center">
                    <div className="col-sm-12 col-md-1">
                        <i className="fa-brands fa-twitter"></i> <span className="logo-text ms-1">Twitter</span>
                    </div>
                    <div className="col-sm-12 col-md-2 text-center">
                        <i className="fa-brands fa-facebook-f"></i> <span className="logo-text ms-1">Facebook</span>
                    </div>
                    <div className="col-sm-12 col-md-2 text-center">
                        <i className="fa-solid fa-envelope"></i> <span className="logo-text ms-1">Gmail</span>
                    </div>
                    <div className="col-sm-12 col-md-2 text-center">
                        <i className="fa-brands fa-slack"></i> <span className="logo-text ms-1">Slack</span>
                    </div>
                    <div className="col-sm-4 col-md-2 text-center">
                        <i className="fa-brands fa-reddit-alien"></i> <span className="logo-text ms-1">Reddit</span>
                    </div>
                    <div className="col-sm-4 col-md-1 text-end">
                        <i className="fa-brands fa-youtube"></i> <span className="logo-text ms-1">Youtube</span>
                    </div>
                </div>
                <div className='row my-5 justify-content-center'>
                    <div className='col-md-5 mt-3'>
                        <p className='w-600 mb-3'>Earn more with Funge Token</p>
                        <p className='sub-heading'>There are many variations of passages of Lorem Ipsum<br></br> available, but the majority believable.
                            <br />
                            <br />
                            <br />
                            <a className='funge-link' href='#'>Learn More</a>
                        </p>
                    </div>
                    <div className='col-md-5 mt-3'>
                        <p className='w-600 mb-3'>Signup for our newsletter</p>
                        <div className="row g-3 align-items-center">
                            <div className="col-auto p-0">
                                <input type="text" className="form-control footer-signup" placeholder='Enter your email here'/>
                            </div>
                            <div className="col-auto">
                            <button type='button' className='btn btn-primary waitlist-btn'>Sign Up</button>
                            </div>
                        </div>


                    </div>
                </div>
                <hr className='footer-seprator' />
                <div className="row justify-content-center p-4">
                    <div className="col-md-2 col-sm-12">
                        <FungeLogo/>
                        <p className="pt-3">There are many variations of passages of Lorem Ipsum available, but the majority believable.</p>
                    </div>
                    <div className='col-md-1'></div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Funge</h5>
                        <div className="d-flex flex-column footer-funge-links">
                            <Link to="/">About Us</Link>
                            <Link to="/">Help Center</Link>
                            <Link to="/">Careers</Link>
                            <Link to="/">Company</Link>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Community</h5>
                        <div className="d-flex flex-column footer-funge-links">
                            <Link to="/">Blog</Link>
                            <Link to="/">Funge Token</Link>
                            <Link to="/">Suggest feature</Link>
                            <Link to="/">Terms and conditions</Link>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Resources</h5>
                        <div className="d-flex flex-column footer-funge-links">
                            <Link to="/">Blog</Link>
                            <Link to="/">Funge Token</Link>
                            <Link to="/">Suggest feature</Link>
                            <Link to="/">Terms and conditions</Link>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-12">
                        <h5>Resources</h5>
                        <div className="d-flex flex-column footer-funge-links">
                            <Link to="/">Blog</Link>
                            <Link to="/">Funge Token</Link>
                            <Link to="/">Suggest feature</Link>
                            <Link to="/">Terms and conditions</Link>
                        </div>
                    </div>
                    <div className='col-md-11'>
                        <small>©2020 Funge. All Rights Reserved</small>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer