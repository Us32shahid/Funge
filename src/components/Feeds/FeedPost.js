import React from 'react';

const FeedPost = (props) => {

    const PostOffer = (props) => {

        if (props.offer) {
            return <>

            </>;
        }
    }

    const PostImage = (props) => {

        if (props.imagePath) {
            return <>
                <div className="row mb-2">
                    <div className="col-md-12">
                        <img src={props.imagePath} className="img-fluid border-radius w-100" alt="Post Image" />
                    </div>
                </div>
            </>;
        }
    }

    return (
        <>

            <div className="card border-radius my-4 border-0">
                <div className="card-body">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-md-12 mt-3 my-2">
                                <img src="./assets/images/nft-5.png" className="rounded-circle me-3" alt="Cinque Terre" width="30" height="30" />
                                <span className="fw-bold">Dotdot</span>
                                <span className="float-end "><i className="fa fa-ellipsis-h fw-bold "></i></span>
                            </div>
                            <div className="col-md-12 my-2">
                                {props.text}
                            </div>
                        </div>
                        <PostImage imagePath={props.image} />
                        <div className="row mb-2 mt-4 px-2">
                            <div className="col-12 d-flex justify-content-between feedpost-controls">
                                <i className="fa fa-heart"></i>
                                <i className="fa fa-commenting">&nbsp; 128</i>
                                <i className="fa fa-share"></i>
                                <i className="fa fa-retweet"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default FeedPost;