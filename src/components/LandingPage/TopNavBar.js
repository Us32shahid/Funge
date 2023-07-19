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
                                    src="./assets/images/logo.svg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </a>
                            <div className="search_sectio">
                                <div className="input-group">
                                    <span className="input-group-text"
                                        id="basic-addon1">
                                        <svg
                                            width="17"
                                            height="17"
                                            viewBox="0 0 17 17"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle
                                                cx="8.33369"
                                                cy="8.33467"
                                                r="6.3669"
                                                stroke="#A1AEB2"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M12.7617 13.0936L15.2579 15.5833"
                                                stroke="#A1AEB2"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Feeds"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                    />
                                </div>
                            </div>

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
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            Explore
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link"
                                            href="#">
                                            Community
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <ProfileLogin btnText={"Sign-In"} />
                                    </li>
                                    {/* <Wallet btnText={"Connect Wallet"} /> */}
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