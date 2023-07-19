import React, { state, useState } from 'react';
import TopBar from './TopBar';
import LeftSidebar from './LeftSidebar';

const Wallet = () => {

    const [isActive, setActive] = useState("wallet");

    return (
        <>
            <TopBar />
            <LeftSidebar myState='wallet' />
            <div className='container-fluid main-div min-vh-100'>
                <div className='row justify-content-center' style={{ marginLeft: 220 }}>
                    <div className='col-md-12 m-3 ps-0'>
                        <h3 className='m-3 w-800'>Wallet</h3>
                    </div>
                    <div className='col-md-12 col-sm-12 ps-0'>
                        <div className='card funge-card'>
                            <div className='card-body'>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col">
                                            <h6>Current Balance</h6>
                                            <h2 className='w-600'>$58,072.24</h2>
                                            <small><span className='text-success'>+17.82%</span> | 24 hrs</small>
                                        </div>
                                        <div className="col d-flex justify-content-end">
                                            <div className='align-self-end'>
                                                <button className='btn btn-primary'>Deposit</button>
                                                &nbsp;&nbsp;&nbsp;&nbsp;
                                                <button className='btn btn-secondary'>Withdraw</button>
                                            </div>
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

}


export default Wallet;