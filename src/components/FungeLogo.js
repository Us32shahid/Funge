import React from 'react';
import { Link } from 'react-router-dom'

const FungeLogo = () => {
    return (
        <>
            <Link to="/"><img
                src="./assets/images/funge-logo-horizontal.png"
                alt=""
                className="img-fluid"
                width={150}
            /></Link>
        </>
    )
};

export default FungeLogo;