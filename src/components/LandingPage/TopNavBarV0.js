import React from 'react'
import env from 'react-dotenv'
import ProfileLogin from '../ProfileLogin'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';


const TopNavBar = () => {
    const {loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

    return (
        <>
        <div className="header">
                <div className="my_nav">
                    <nav className="navbar container-fluid navbar-expand-lg bg-white shadow-sm navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand"
                                href="#">
                                <img
                                    src="./assets/images/funge-logo-horizontal.png"
                                    alt=""
                                    className="img-fluid"
                                    width={130}
                                />
                            </a>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon">
                                    <img
                                        src="./assets/icon/menu_icon.svg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </span>
                            </button>
                            <div
                                className="collapse align-items-center navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            HOME
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            FEATURES
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            SUSTAINBILITY
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            TOKENOMICS
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            TEAM
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            ROADMAP
                                        </a>
                                    </li>
                                </ul>
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <button className='btn btn-primary waitlist-btn'>Beta Trial</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default TopNavBar