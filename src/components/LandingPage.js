import React from 'react';
import {useNavigate} from 'react-router-dom';
import { TopCollectionsModel } from './topcollection/top-collection-model';
import TopCollectionsView from './topcollection/top-collection-view';
import { DataGrid } from '@mui/x-data-grid';
import CoinMarket from './LandingPage/CoinMarket';
import ProfileLogin from './ProfileLogin';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import env from 'react-dotenv'
import TopNavBar from './LandingPage/TopNavBar';
import Footer from './LandingPage/Footer';

const LandingPage = () => {

    const navigate = useNavigate();

    return (
        <>
            <TopNavBar />
            <section id="hiro">
                <div className="container">
                    <div className='row'>
                        <div className='col-sm-12 col-md-5 hiro_col_left'>
                            <h2 className="section_heading hiro_heading text-left">
                                Create, Earn, and Connect with the world with your NFTs
                            </h2>
                            <p className="section_pera">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                            </p>
                            <button className="btn btn-primary w-600 get-started-btn" onClick={() => {navigate('/signin')}}>
                                Get Started
                            </button>

                        </div>
                        <div className='col-sm-12 col-md-7'>
                            <img className='px-5 pt-5 pb-3 img-fluid' src='./assets/images/hero.png' />
                        </div>
                    </div>
                </div>
            </section>
            <section className="collection my-5 py-5">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <h2 className="collection_heading d-flex align-items-center w-800">
                                Top collections over
                                <span className="nav-link dropdown-toggle funge-color"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    in 7days <i className="bi bi-chevron-down funge-color"></i>
                                </span>
                                <ul className="dropdown-menu"
                                    aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" >1 Day</a></li>
                                    <li><a className="dropdown-item" >7 Day </a></li>
                                    <li><a className="dropdown-item" >1 Week</a></li>
                                </ul>
                            </h2>
                        </div>
                        <div className='col-md-6 text-end'>
                            <div className="dropdown">
                                <button type="button" className="btn btn-primary filter-dropdown dropdown-toggle px-3" data-bs-toggle="dropdown">
                                    <span className='text-dark'>Filter By </span> Collection &nbsp; <i className="fas fa-angle-down"></i>
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Collection 1</a></li>
                                    <li><a className="dropdown-item" href="#">Collection 2</a></li>
                                    <li><a className="dropdown-item" href="#">Collection 3</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="tab-content mt-4"
                                id="pills-tabContent">
                                <div className='coin-market'>
                                    <CoinMarket />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="collection my-5 py-5">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className="collection_heading w-800">
                                Benefit for User
                            </h2>
                        </div>
                        <div className='col-sm-12 col-md-6 text-center'>
                            <p className='sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                        </div>
                        <div className='col-md-12 text-center mt-4'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/tag.svg' />
                                            </div>
                                            <p className='fw-bold'>Cheap than Other</p>
                                            <p className='sub-heading'>Travelya is cheaper than other<br />
                                                travel agency.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/security.svg' />
                                            </div>
                                            <p className='fw-bold'>Secure Payment</p>
                                            <p className='sub-heading'>You can pay your book without<br />doubt again.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/medal.svg' />
                                            </div>
                                            <p className='fw-bold'>Best Offersr</p>
                                            <p className='sub-heading'>Inform you about all best offers<br /> for all destination</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/thumb.svg' />
                                            </div>
                                            <p className='fw-bold'>Easy Book</p>
                                            <p className='sub-heading'>Follow flow, Clickm, Pay, Wait,<br /> Just wait e-ticket</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection my-5 section-4">
                <div className='container-fluid'>
                    <div className='row justify-content-end'>
                        <div className='col-md-5 my-5'>
                            <br />
                            <br />
                            <br />
                            <h2 className="collection_heading w-800 mt-5 mb-3">
                                Built with the planet in mind
                            </h2>
                            <p>Funge is 100% carbon neutral</p>
                            <p className='mt-5'><a href='#' className='funge-link me-4'><u>Our mission</u> > </a> | <a href='#' className='funge-link ms-4'><u>Our vision</u> > </a>
                                <br />
                                <br />
                                <img src='./assets/images/climate.png' width={100} />
                            </p>
                        </div>
                        <div className='col-md-6 p-0 text-end section-thumb'>
                            <img className='img-fluid' src='./assets/images/call-to-action.png' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection section-5">
                <div className='container'>
                    <div className='row pt-5 pb-3'>
                        <div className='col-md-6 my-5'>
                            <br />
                            <br />
                            <br />
                            <h2 className="collection_heading w-600 mt-5 mb-3">
                                Measure Impressions
                                <br />
                                and Reach Post
                            </h2>
                            <p className='sub-heading'>Graphs displaying your performance for metrics like follower evolution,<br /> average engagement rate per post and reach and impressions to give<br /> you the insights.
                                <br />
                                <br />
                                <br />
                                <a href='#' className='funge-link'>Learn More</a>
                            </p>
                        </div>
                        <div className='col-md-6 ps-5 text-end section-thumb'>
                            <img className='img-fluid ps-5' src='./assets/images/impression.png' />
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection section-6">
                <div className='container'>
                    <div className='row justify-content-between py-5'>
                        <div className='col-md-6 pe-5 text-end section-thumb'>
                            <img className='img-fluid py-5 pe-5' src='./assets/images/schedule.png' />
                        </div>
                        <div className='col-md-5 ps-5 py-5'>
                            <br />
                            <br />
                            <br />
                            <h2 className="collection_heading w-600 mt-5 mb-3">
                                Schedule Your Post
                                <br />
                                Whenever You Want
                            </h2>
                            <p className='sub-heading'>Publish your content automatically. Built-in features, such as Best Time to Post, Geolocation, User Tag, and more, ensure that your content reaches the right people.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection my-5 section-7">
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-md-5 my-5'>
                            <br />
                            <br />
                            <br />
                            <h2 className="collection_heading w-800 mt-5 mb-3">
                                Earn up to 70.95% APY<br />
                                with FUNGE
                            </h2>
                            <p>Stake Funge tokens to earn a share of daily<br /> trading fees in WETH, in addition to even more<br />FUNGE</p>
                            <br />
                            <button className='btn btn-primary get-started-btn'>Start Learning</button>
                        </div>
                        <div className='col-md-4 p-5 text-end section-thumb'>
                            <img src='./assets/images/falling_coins.png'className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="footer_top">
                    <div className="text-center">
                        <h2>Endless Possibilities with Funge</h2>
                        <p className='sub-heading'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br /> amet, consectetur
                            adipiscing elit, sed do eiusmod tempor</p>
                        <br />
                        <div className="container-fluid">
                            <div className="row d-flex justify-content-center">
                                <div className="col-md-3">
                                    <div className="card post-card shadow">
                                        <img className="card-img-top" src="./assets/images/rect.png" alt="Card image" />
                                        <div className="card-body">
                                            <div className="top_resources">
                                                <div className="post_box text-start m-0">
                                                    <h2>Tons of rewards from Funge
                                                        this year.
                                                    </h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                                        believable.</p>
                                                    <div className="d-flex align-items-center">
                                                        <figure className="m-0">
                                                            <img src="./assets/images/eth_media.svg"
                                                                alt=""
                                                                className="img-fluid nft_img" />
                                                        </figure>
                                                        <div className="info">
                                                            <h3>Alec Kleinman</h3>
                                                            <h4>Feb 14, 2022 • 4 min read</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card post-card shadow">
                                        <img className="card-img-top" src="./assets/images/rect.png" alt="Card image" />
                                        <div className="card-body">
                                            <div className="top_resources">
                                                <div className="post_box text-start m-0">
                                                    <h2>Tons of rewards from Funge
                                                        this year.
                                                    </h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                                        believable.</p>
                                                    <div className="d-flex align-items-center ">
                                                        <figure className="m-0">
                                                            <img src="./assets/images/eth_media.svg"
                                                                alt=""
                                                                className="img-fluid nft_img " />
                                                        </figure>
                                                        <div className="info">
                                                            <h3>Alec Kleinman</h3>
                                                            <h4>Feb 14, 2022 • 4 min read</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card post-card shadow">
                                        <img className="card-img-top" src="./assets/images/rect.png" alt="Card image" />
                                        <div className="card-body">
                                            <div className="top_resources">
                                                <div className="post_box text-start m-0">
                                                    <h2>Tons of rewards from Funge
                                                        this year.
                                                    </h2>
                                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                                        believable.</p>
                                                    <div className="d-flex align-items-center ">
                                                        <figure className="m-0">
                                                            <img src="./assets/images/eth_media.svg"
                                                                alt=""
                                                                className="img-fluid nft_img " />
                                                        </figure>
                                                        <div className="info">
                                                            <h3>Alec Kleinman</h3>
                                                            <h4>Feb 14, 2022 • 4 min read</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 text-center my-5">
                                    <a href="" className="btn btn-secondary">
                                        View more articles
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className='free-trial'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h2 className='w-600'>Grow your brand<br />
                                presence on social media.</h2>
                            <p className='sub-heading mt-3'>Try Ehya free for 14 days. No credit card required.</p>
                            <br />
                            <button className="btn btn-primary w-600 get-started-btn">
                                Sign Up for Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default LandingPage