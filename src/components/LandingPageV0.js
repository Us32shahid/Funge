import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopNavBarV0 from './LandingPage/TopNavBarV0';
import FooterV0 from './LandingPage/FooterV0';

const LandingPageV0 = () => {

    const navigate = useNavigate();

    return (
        <>
            <TopNavBarV0 />
            <section id="hiro" className='v0'>
                <div className="container">
                    <div className='row'>
                        <div className='col-sm-12 col-md-6 hiro_col_left px-5'>
                            <p className="section_pera v0 mt-5">
                                Your Gateway to the Creative Economy
                            </p>
                            <h2 className="section_heading hiro_heading">
                                Testing Page - Docker - 1
                            </h2>
                            <br />
                            <button className="btn btn-primary w-600 waitlist-btn px-5" data-bs-toggle="modal" data-bs-target="#waitListModal">
                                Join Us Now
                            </button>
                            <div className="modal fade phoneModal" id="waitListModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header border-0">
                                            <button type="button" className="btn-close funge-modal-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body px-5">
                                            <h4 className="w-700">Join Us Now</h4>
                                            <p className="text-black-50">
                                                Enter your Email to continue
                                            </p>
                                            <input type="text" className="login-input mb-4 w-100" placeholder="Email" />
                                            <button className='btn btn-primary w-100'>Subscribe</button>
                                            <br />
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='col-sm-12 col-md-5 hiro_col_right d-none d-md-block'>
                            <p className="section_pera v0 text-center position-relative">
                                <img src='./assets/images/hiro1.png' />
                                <img src='./assets/images/hiro2.png' className='position-absolute' style={{ bottom: 4, right: -60 }} />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='mt-5'>
                <div className='container'>
                    <div className='row justify-content-md-center'>
                        <div className='col-md-10 mt-5'>
                            <p className='unlock-heading p-4 mt-4 text-center'>
                                Funge is an all-in-one solution for the blockchain community, bringing together NFT trading and social media, into one comprehensive platform.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection">
                <div className='container'>
                    <div className='row pt-5 pb-3 justify-content-around'>
                        <div className='col-md-4 sticky-top align-self-start'>
                            <div className='card funge-card mt-5 px-0'>
                                <br />
                                <span className='funge-color w-700'>Collector Spotlight</span>
                                <h2 className="collection_heading w-600 mt-3 mb-4">
                                    Robust Social Features
                                </h2>
                                <p className='sub-heading small'>Use our wide range of social tools to find & connect with users who are passionate about NFTs. Create eye-catching content, keep up with current trends, and mint NFTs all within one social feed built specifically for the blockchain community.
                                    <br />
                                    <div className='my-5'>
                                        <ul className='funge-list'>
                                            <li>Stay up-to-date with trending NFT discussions and topics</li>
                                            <li>Connect with fellow users through built-in direct messaging</li>
                                            <li>Mint verified NFTs from your social feed with ease</li>
                                        </ul>
                                    </div>
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 ps-5 mt-5 section-thumb'>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection">
                <div className='container'>
                    <div className='row pt-5 pb-3 justify-content-around'>
                        <div className='col-md-4 sticky-top align-self-start'>
                            <div className='card funge-card mt-5 px-0'>
                                <br />
                                <span className='funge-color w-700'>Trader Spotlight</span>
                                <h2 className="collection_heading w-600 mt-3 mb-3">
                                    Powerful NFT Tools & Solutions
                                </h2>
                                <p className='sub-heading small'>A complete and comprehensive toolset for all your NFT needs. Explore the limits of Web3 with our feature-packed peer-to-peer trading tools, cross-platform transactions, live NFT analytics, and more.
                                    <br />
                                    <div className='my-5'>
                                        <ul className='funge-list'>
                                            <li>Advanced market insights, analytics, and alerts </li>
                                            <li>Compare floor prices across different platforms</li>
                                            <li>Conduct private sales </li>
                                            <li>Batch buy multiple NFT’s</li>
                                        </ul>
                                    </div>
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 ps-5 mt-5 section-thumb'>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection">
                <div className='container'>
                    <div className='row pt-5 pb-3 justify-content-around'>
                        <div className='col-md-4 sticky-top align-self-start'>
                            <div className='card funge-card mt-5 px-0'>
                                <br />
                                <span className='funge-color w-700'>Reward Spotlight</span>
                                <h2 className="collection_heading w-600 mt-3 mb-3 fs-30px">
                                    Engagement Incentives
                                </h2>
                                <p className='sub-heading small'>Our Tokenomics system turns users into owners by rewarding them for creating valuable content and participating on the platform.
                                    <br />
                                    <div className='my-5'>
                                        <ul className='funge-list'>
                                            <li>Earn tokens when the community engages with your content</li>
                                            <li>Receive $FUNGE rewards for every NFT you trade</li>
                                            <li>Stake $FUNGE tokens and receive up to 445% APY</li>
                                            <li>Earn additional commission for every friend you refer</li>
                                        </ul>
                                    </div>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 ps-5 mt-5 section-thumb'>
                            <div className='card funge-card funge-bggrey my-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                            <div className='card funge-card funge-bggrey mt-4 p-5'>
                                <img className='img-fluid' src='./assets/images/robust_parallax.png' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container py-5'>
                    <div className='row justify-content-center'>
                        <div className='col-10 py-5'>
                            <p className='tools-heading text-center py-5'>
                                Tools designed for the growing wave of forward-thinking creators, innovators, and traders.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id='features-section'>
                <div className='container'>
                    <div className='row' id='community-builder'>
                        <div className='col-12'>
                            <div className='card feature-card'>
                                <div className='card-body'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-md-6 col-sm-12'>
                                                <div className='feature1'>
                                                    <div className='py-5 px-2'>
                                                        <br />
                                                        <br />
                                                        <h2 className='badge rounded-pill funge-bgcolor px-3 py-2 fs-6 w-600'>Coming Soon</h2>
                                                        <h2 className="collection_heading w-600 my-3">
                                                            Commmunity Builder
                                                        </h2>
                                                        <p className='sub-heading'>We're launching a VoIP and instant messaging social
                                                            platform where you can find and share ideas  in private chats or on community
                                                            channels using voice, video calls, text messages and other media.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-md-6 col-sm-12 p-0'>
                                                <div className='container p-0'>
                                                    <div className='row community-feature'>
                                                        <div className='col-md-6 col-sm-12 container px-3 mt-4'>
                                                            <div className='row pb-3 border-bottom mx-1'>
                                                                <div className='col-12'>
                                                                    <table>
                                                                        <tr>
                                                                            <td><img src='./assets/images/user-icon.png' className='img-fluid' /></td>
                                                                            <td><p className='fs-13px fw-bold mb-0 ps-3'>Voice hat rooms</p></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6 col-sm-12 container px-3 mt-4'>
                                                            <div className='row pb-3 border-bottom mx-1'>
                                                                <div className='col-12'>
                                                                    <table>
                                                                        <tr>
                                                                            <td><img src='./assets/images/user-icon.png' className='img-fluid' /></td>
                                                                            <td><p className='fs-13px fw-bold mb-0 ps-3'>Voice hat rooms</p></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row community-feature'>
                                                        <div className='col-md-6 col-sm-12 container px-3 mt-4'>
                                                            <div className='row pb-3 border-bottom mx-1'>
                                                                <div className='col-12'>
                                                                    <table>
                                                                        <tr>
                                                                            <td><img src='./assets/images/livestream-icon.png' className='img-fluid' /></td>
                                                                            <td><p className='fs-13px fw-bold mb-0 ps-3'>Live streaming</p></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6 col-sm-12 container px-3 mt-4'>
                                                            <div className='row pb-3 border-bottom mx-1'>
                                                                <div className='col-12'>
                                                                    <table>
                                                                        <tr>
                                                                            <td><img src='./assets/images/livestream-icon.png' className='img-fluid' /></td>
                                                                            <td><p className='fs-13px fw-bold mb-0 ps-3'>File sharing</p></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row community-feature'>
                                                        <div className='col-md-6 col-sm-12 container px-3 mt-4'>
                                                            <div className='row pb-3 border-bottom mx-1'>
                                                                <div className='col-12'>
                                                                    <table>
                                                                        <tr>
                                                                            <td><img src='./assets/images/configurebot-icon.png' className='img-fluid' /></td>
                                                                            <td><p className='fs-13px fw-bold mb-0 ps-3'>Configurable bots</p></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6 col-sm-12 container px-3 mt-4'>
                                                            <div className='row pb-3 border-bottom mx-1'>
                                                                <div className='col-12'>
                                                                    <table>
                                                                        <tr>
                                                                            <td><img src='./assets/images/configurebot-icon.png' className='img-fluid' /></td>
                                                                            <td><p className='fs-13px fw-bold mb-0 ps-3'>Events Calendar</p></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='row community-feature'>
                                                        <div className='col-md-6 col-sm-12 px-3 my-4'>
                                                            <div className='row mx-1'>
                                                                <div className='col-12'>
                                                                    <table>
                                                                        <tr>
                                                                            <td><img src='./assets/images/pushnoti-icon.png' className='img-fluid' /></td>
                                                                            <td><p className='fs-13px fw-bold mb-0 ps-3'>Push Notifications</p></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6 col-sm-12 px-3 my-4'>
                                                            <div className='row mx-1'>
                                                                <div className='col-12'>
                                                                    <table>
                                                                        <tr>
                                                                            <td><img src='./assets/images/pushnoti-icon.png' /></td>
                                                                            <td><p className='fs-13px fw-bold mb-0 ps-3'>Internal trading &amp; giveaways</p></td>
                                                                        </tr>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card feature-card'>
                                <div className='card-body'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-6 text-center'>
                                                <div className='p-5'>
                                                    <img src='./assets/images/talentGraph.png' className='img-fluid ms-3' />
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-md-6'>

                                                <div className='feature1'>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <div className='p-4'>
                                                        <h2 className="collection_heading w-600 my-3">
                                                            Talent Marketplace
                                                        </h2>
                                                        <p className='sub-heading'>Funge talent marketplace is the fastest and most
                                                            efficient way to source top Web3 talent. Seek and hire experts in smart contract
                                                            development, web design, tokenomics creation, discord management, marketing, and more.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-12'>
                            <div className='card feature-card'>
                                <div className='card-body'>
                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-sm-12 col-md-6'>
                                                <div className='feature1'>
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <br />
                                                    <div className='p-4'>
                                                        <h2 className="collection_heading w-600 my-3">
                                                            In-house Wallet
                                                        </h2>
                                                        <p className='sub-heading'>No need to hold multiple wallets to store
                                                            and manage your tokens. Each user receives a built-in Funge wallet
                                                            that allows them easily monitor, send and receive their crypto assets.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-sm-12 col-md-6 text-center'>
                                                <div className='p-5'>
                                                    <img src='./assets/images/talentGraph.png' className='img-fluid ms-3' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="collection my-5 py-5">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 text-center mb-3'>
                            <h2 className="collection_heading w-800">
                                Our Company Principles
                            </h2>
                        </div>
                        <div className='col-sm-12 col-md-6 text-center'>
                            <p className='sub-heading'>Taking care of our commmunity is at the core of everything we do.
                                <br />
                                <br />
                                <br />
                            </p>
                        </div>
                        <div className='col-md-12 text-center mt-4'>
                            <div className='row'>
                                <div className='col-md-3 ps-0-desktop'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/tag.svg' />
                                            </div>
                                            <p className='fw-bold'>Customer Satisfaction</p>
                                            <p className='sub-heading'>We aim to place endless NFT solutions at the power of your fingertips and provide you with an exceptional user experience.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/security.svg' />
                                            </div>
                                            <p className='fw-bold'>Transparency</p>
                                            <p className='sub-heading'>We take pride in being honest and open about our operations as we prioritize building long-lasting trust with our userbase and partners.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/medal.svg' />
                                            </div>
                                            <p className='fw-bold'>Accessibility</p>
                                            <p className='sub-heading'>We focus on building a simple and intuitive platform, so anyone can get a chance to explore and thrive in the word of NFTs.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3 pe-0-desktop'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/thumb.svg' />
                                            </div>
                                            <p className='fw-bold'>Security</p>
                                            <p className='sub-heading'>We implement state-of-the-art protocols to mitigate security risks and keep the network safe for everyone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="collection my-5 pb-5">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-6 my-4 ps-4'>
                            <br />
                            <br />
                            <br />
                            <h2 className="w-800 mt-3 mb-3">
                                Built on planet earth, <br />for planet earth
                            </h2>
                            <p className='pe-4 max-width-500'>Being earth-conscious and taking responsibility for
                                climate change is at the core of who we are and what
                                we do.
                                <br />
                                <br />
                                That’s why we are 100% carbon neutral,
                                counterbalancing the entirety of our CO2 footprint
                                for a net-zero output.
                            </p>
                            <p className='mt-4'><a href='#' className='funge-link me-4'><u>Our mission</u></a> | <a href='#' className='funge-link ms-4'><u>Our vision</u></a>
                                <br />
                                <br />
                                <img src='./assets/images/climate.png' width={100} />
                            </p>
                        </div>
                        <div className='col-md-6 mt-5 text-center section-thumb'>
                            <img className='img-fluid mt-4' src='./assets/videos/eco_funge_section_low.gif' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='rare mt-5 py-5'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <img src='./assets/videos/token_section.gif' width={1000} className='img-fluid' />
                            <p className='para'>
                                <br />
                                INTRODUCING
                                <h4 className='w-600 mt-2'><span>$</span> FUNGE</h4>
                            </p>
                        </div>
                    </div>
                    <div className='row mt-5 pt-5 justify-content-center'>
                        <div className='col-md-7 col-sm-12 py-5'>
                            <h2 className='w-800 blue-heading'>The Funge community token</h2>
                            <p>
                                We’re putting the future of Funge and the power of
                                the creator economy in the hands of our community.
                                With $FUNGE, you have access to exclusive holder benefits
                                and rewards tailored for you to grow and develop as an
                                artist or innovator. By holding our token, you are more
                                than just a user - you become a part-owner of the platform.
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </section>

            <section className="collection mb-5 py-5 rare">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-12 text-center'>
                            <h2 className="collection_heading w-800 blue-heading">
                                Token Usage
                            </h2>
                        </div>
                        <div className='col-sm-12 col-md-6 text-center'>
                            <p className='sub-heading'>There are multiple ways you can benefit from <br />
                                holding and using the $FUNGE token.
                                <br />
                            </p>
                        </div>
                        <div className='col-md-12 text-center mt-4'>
                            <div className='row justify-content-center'>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/tag.svg' />
                                            </div>
                                            <p className='fw-bold blue-heading'>Staking</p>
                                            <p className='sub-heading'>Stake your $FUNGE to help us validate the blockchain and earn rewards of up to 445% APY.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/security.svg' />
                                            </div>
                                            <p className='fw-bold blue-heading'>In-App Purchases</p>
                                            <p className='sub-heading'>Use your tokens for any purchase on the Funge App.
                                                <br />
                                                <br />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-3'>
                                    <div className='card card-travelya'>
                                        <div className='card-body'>
                                            <div className='travelya-icon my-4'>
                                                <img className='img-fluid' src='./assets/icon/medal.svg' />
                                            </div>
                                            <p className='fw-bold blue-heading'>Trading Rewards</p>
                                            <p className='sub-heading'> $FUNGE token holders are granted access to our  launchpad where they can develop and launch their own NFT projects. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </section>

            <section className='tokenomics py-5' id='tokenomics'>
                <div className='container mt-5'>
                    <h1 className='w-800 text-center my-4 dark-blue-heading'>Tokenomics</h1>
                    <br />
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-md-6 col-sm-12 ps-5'>
                            <h2 className='w-700 fs-30px ps-3 blue-heading'>Funge Token Allocation</h2>
                            <p className='mt-4 w-600 fs-20px ps-3' style={{ color: '#064E3B' }}>Total Supply: 100,000,000</p>
                            <br />
                            <p className='ps-3'>
                                <b>8%</b> Seed Stage 1 (800k) <br />
                                <b>7%</b> Seed Stage 2 (700k) <br />
                                <b>6%</b> Public IDO (600k) <br />
                                <b>5%</b> Market Making (500k) <br />
                                <b>12%</b> Marketing (1.2 Million) <br />
                                <b>12%</b> Artist Incentives (1.2 Million) <br />
                                <b>10%</b> Exchange Listing (1 Million) <br />
                                <b>12%</b> Private Reserve (1.2 Million) <br />
                                <b>12%</b> Team (1.2 Million) <br />
                                <b>3%</b> KOL's (300k) <br />
                                <b>4%</b> Advisors (400k) <br />
                                <b>9%</b> Community Allocation (900k) <br />
                            </p>
                        </div>
                        <div className='col-md-6 col-sm-12 text-center'>
                            <img src='./assets/images/pie_new.png' className='img-fluid pie_img' />
                        </div>
                    </div>
                </div>
            </section>

            <section className='ourteam my-5 py-5'>
                <div className='container'>
                    <h1 className='w-800 text-center mt-2 mb-4 dark-blue-heading'>Meet Our Team</h1>
                    <br />
                    <br />
                    <br />
                    <div className='row justify-content-center'>
                        <div className='col-md-3 col-sm-6 px-0 px-0'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker1.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Claudio Giglieri</h2>
                                    <table>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Co-creator of Skype </td>
                                        </tr>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Investor at Sebo Digital Ventures</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 px-0 px-0'>
                            <br />
                            <br />
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker2.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Elsie Mendoza</h2>
                                    <table>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>VP of BukaDagang</td>
                                        </tr>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Co-founder at Slack</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 px-0'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker3.png' className='img-fluid' />
                                </div>
                                <table>
                                    <tr>
                                        <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                        <td className='ps-3'>CEO at Berkarya</td>
                                    </tr>
                                    <tr>
                                        <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                        <td className='ps-3'>Investor at Sebo Digital Ventures</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 px-0'>
                            <br />
                            <br />
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker4.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Carrie Angela</h2>
                                    <table>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Founder of Nike</td>
                                        </tr>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Investor at BukaDagang</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-3 col-sm-6 px-0'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker1.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Claudio Giglieri</h2>
                                    <table>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Co-creator of Skype </td>
                                        </tr>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Investor at Sebo Digital Ventures</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 px-0'>
                            <br />
                            <br />
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker2.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Elsie Mendoza</h2>
                                    <table>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>VP of BukaDagang</td>
                                        </tr>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Co-founder at Slack</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 px-0'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker3.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Philip Castro</h2>
                                    <table>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>CEO at Berkarya</td>
                                        </tr>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Investor at Sebo Digital Ventures</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3 col-sm-6 px-0'>
                            <br />
                            <br />
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker4.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Carrie Angela</h2>
                                    <table>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Founder of Nike</td>
                                        </tr>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Investor at BukaDagang</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        <div className='col-md-3 col-sm-6 px-0'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker1.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Claudio Giglieri</h2>
                                    <table>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Co-creator of Skype </td>
                                        </tr>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Investor at Sebo Digital Ventures</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-1'>

                        </div>
                        <div className='col-md-3 col-sm-6 px-0'>
                            <div className='card funge-card speaker-card'>
                                <div className='card-image-top'>
                                    <img src='./assets/images/speaker2.png' className='img-fluid' />
                                </div>
                                <div className='card-body p-0'>
                                    <h2 className='w-700'>Elsie Mendoza</h2>
                                    <table>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>VP of BukaDagang</td>
                                        </tr>
                                        <tr>
                                            <td className='align-text-top'><i className="fa fa-check funge-text-success"></i></td>
                                            <td className='ps-3'>Co-founder at Slack</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='ourplan my-5 py-5'>
                <div className='container'>
                    <h1 className='w-800 text-center mb-4 dark-blue-heading'>Our plan for the future</h1>
                    <br />
                    <br />
                    <div className='row'>
                        <div className='col-11 mx-auto'>
                            <div className="accordion mb-3" id="faq-accord1">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Q2 2021
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faq-accord1">
                                        <div className="accordion-body">
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion mb-3" id="faq-accord2">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                            Q2 2021
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faq-accord2">
                                        <div className="accordion-body">
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion mb-3" id="faq-accord3">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            Q2 2021
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faq-accord3">
                                        <div className="accordion-body">
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion mb-3" id="faq-accord4">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                                            Q2 2021
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faq-accord4">
                                        <div className="accordion-body">
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion mb-3" id="faq-accord5">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                                            Q2 2021
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#faq-accord5">
                                        <div className="accordion-body">
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                            You can pay with credit. <br />
                                        </div>
                                    </div>
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
                            <button className="btn btn-primary w-600 waitlist-btn">
                                Sign Up for Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <FooterV0 />
        </>
    )
}

export default LandingPageV0