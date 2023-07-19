import React from 'react'
import FungeLogo from './FungeLogo'

const TopBar = () => {

    return (
        <>
            <div className="header">
                <div className="my_nav position-relative"  style={{ zIndex: 999 }}>
                    <nav className="navbar container-fluid navbar-expand-lg bg-white shadow-sm navbar-light">
                        <div className="container-fluid">
                            <FungeLogo/>
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
                                        placeholder="Search NFT,Creator,Collections"
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
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                                    <li className="nav-item">
                                        <div class="btn-group">
                                            <button class="btn btn-sm dropdown-toggle lang-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="fas fa-globe funge-color p-2 bg-white"></i> English
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li className="dropdown-item">English 1</li>
                                                <li className="dropdown-item">English 2</li>
                                                <li className="dropdown-item">English 3</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <i className="fas fa-envelope funge-color"></i>
                                    </li>
                                    <li className="nav-item">
                                        <i className="fas fa-bell funge-color"></i>
                                    </li>
                                    <li className="nav-item">
                                        <i className="fas fa-cog funge-color"></i>
                                    </li>
                                    <li className="nav-item">
                                        <i className="fas fa-wallet funge-color border-end"></i>
                                    </li>
                                    <span className="funge-color mx-3">|</span>
                                    <li className="nav-item">
                                        <i className="fas fa-shopping-cart funge-color"></i>
                                    </li>

                                    <li className="nav-item">
                                        <img src="./assets/images/nft-5.png" className="rounded-circle me-3" alt="Cinque Terre" width="25" height="25" />
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

export default TopBar