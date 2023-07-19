import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row vh-100">
                    <div className="col-md-4 p-0 siginin-left-box">
                        <div className='row justify-content-end'>
                            <div className='col-md-11 pt-4 ps-5'>
                                <br />
                                <a class="" href="#"><img width="140" src='./assets/images/funge-logo.png' /></a>
                            </div>
                            <div className='col-md-11 pt-4 ps-5'>
                                <br />
                                <br />
                                <br />
                                <h2 className="pe-2 w-800">Endless Possibilities<br />
                                    with Funge</h2>
                                <p className="pe-3 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <div className="mt-5">
                                    <img className="float-end img-fluid" src="./assets/images/login_img.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 p-0">
                        <div className="d-flex justify-content-end mt-5 me-5">
                            <span className="text-black-50">
                                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                <Link className='btn text-black-50 mb-1' to="/">Back To Home</Link></span>
                        </div>
                        <div className="justify-content-center mt-5">
                            <div className='col-md-12 d-flex justify-content-center'>
                                <div className='col-md-6 col-sm-12 mx-2 p-4'>
                                    <div className='card signin-card'>
                                    <div className='card-body p-4'>
                                        <h2 className='w-800'>Sign in</h2>
                                        <p className='sub-heading'>
                                            Hey! Welcome to Funge. Choose one of available wallet providers or create a new wallet. <a href='#' className='funge-link'>What is a wallet?</a>
                                        </p>
                                        <ul className="nav nav-tabs" id="logintab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="ethereum-tab" data-bs-toggle="tab" data-bs-target="#ethereum" type="button" role="tab" aria-controls="ethereum" aria-selected="true"><i className="fab fa-ethereum"></i> Ethereum</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="polygon-tab" data-bs-toggle="tab" data-bs-target="#polygon" type="button" role="tab" aria-controls="polygon" aria-selected="false"><img src="./assets/images/poligon-2.png" /> Polygon</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <br />
                                            <div className="tab-pane fade show active" id="ethereum" role="tabpanel" aria-labelledby="ethereum-tab">
                                                <button className="signin-btn-adv sigin-card-btn">
                                                    <span className="btn-icon float-start">
                                                        <img className='p-1' src="./assets/images/fox-trans.png" />
                                                    </span>
                                                    Metamask</button>
                                                <button className="signin-btn-adv sigin-card-btn">
                                                    <span className="btn-icon float-start">
                                                        <img src="./assets/images/wallet-connect-trans.png" />
                                                    </span>
                                                    Wallet Connect</button>
                                            </div>
                                            <div className="tab-pane fade" id="polygon" role="tabpanel" aria-labelledby="polygon-tab">
                                            <button className="signin-btn-adv sigin-card-btn">
                                                    <span className="btn-icon float-start">
                                                        <img className='p-1' src="./assets/images/fox-trans.png" />
                                                    </span>
                                                    - Metamask -</button>
                                                <button className="signin-btn-adv sigin-card-btn">
                                                    <span className="btn-icon float-start">
                                                        <img src="./assets/images/wallet-connect-trans.png" />
                                                    </span>
                                                    - Wallet Connect -</button>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    </div>
                                    
                                    <div className='row'>
                                        <div className='col-12 mt-5'>
                                            <p className='sub-heading text-center'>
                                                Or sign up with email or mobile number
                                            </p>
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <button className="signin-btn-adv footer-btn mt-3">
                                                <span className="btn-icon float-start">
                                                    <svg width="35" height="16" viewBox="0 0 20 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                                            d="M19.5423 1.40662C19.0117 0.56167 18.0714 0 17 0H3L2.8007 0.00651457C1.8126 0.0713204 0.955084 0.614524 0.45759 1.40673C0.32495 1.61793 0.41154 1.88824 0.62359 2.0195L9.4735 7.498L9.58392 7.55717C9.88555 7.69523 10.2395 7.67551 10.5262 7.498L19.3764 2.01941L19.4423 1.97078C19.6049 1.8288 19.6603 1.59435 19.5423 1.40662ZM19.9936 4.80161C19.9391 4.45942 19.5461 4.26652 19.2368 4.45799L11.579 9.1986L11.3947 9.30387C10.4595 9.79516 9.32783 9.76007 8.4208 9.1986L0.76318 4.45812L0.690509 4.42065C0.370834 4.28692 0 4.51948 0 4.88326V13L0.00509271 13.1763C0.0963394 14.7511 1.40232 16 3 16H17L17.1763 15.9949C18.7511 15.9037 20 14.5977 20 13V4.88312L19.9936 4.80161Z"
                                                            fill="#71AFAC" />
                                                    </svg>
                                                </span>
                                                Email Address</button>
                                        </div>
                                        <div className='col-md-6 col-sm-12'>
                                            <button className="signin-btn-adv footer-btn mt-3">
                                                <span className="btn-icon float-start">
                                                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.5353 1.20698C4.59919 0.568646 5.97417 0.845671 6.70786 1.84617L8.33564 4.06586C9.02846 5.01062 9.13465 6.26354 8.61071 7.31142L8.18391 8.16501C8.06036 8.41212 8.04082 8.69796 8.16721 8.94362C8.39746 9.39119 8.88779 10.1844 9.83237 11.1289C10.7769 12.0735 11.5701 12.5638 12.0177 12.7941C12.2633 12.9205 12.5492 12.9009 12.7963 12.7774L13.6499 12.3506C14.6978 11.8267 15.9507 11.9328 16.8954 12.6257L19.1151 14.2534C20.1156 14.9871 20.3927 16.3621 19.7543 17.426C18.4285 19.6357 15.883 20.7953 13.5766 19.646C11.6327 18.6774 9.14866 17.0743 6.51781 14.4435C3.88696 11.8126 2.28388 9.32862 1.31526 7.38474C0.165965 5.07828 1.32559 2.5328 3.5353 1.20698Z" fill="#71AFAC" />
                                                    </svg>

                                                </span>
                                                 &nbsp; Phone Number</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Signin;