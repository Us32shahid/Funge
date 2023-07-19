import React from 'react';

const NewPost = (props) => {

    return (
        <>
            <div className="card border-radius my-4 border-0">
                <div className="card-body">
                    <div className="container-fluid p-0">
                        <div className="row">
                            <div className="col-md-1 mt-3 my-2">
                                <img src="./assets/images/nft-5.png" className="rounded-circle me-3" alt="Cinque Terre" width="30" height="30" />
                            </div>
                            <div className="col-md-11 my-2 align-self-end">
                                <textarea className="post-text-area" placeholder='Type Text Here'></textarea>
                            </div>
                        </div>
                        <div className="row mb-2 mt-4 px-2">
                            <div className="col-4 d-flex justify-content-between align-self-center newpost-controls">
                                <i className="fas fa-image"></i>
                                <i className="fas fa-user-plus"></i>
                                <i className="far fa-smile"></i>
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="col-8 text-end">
                                <button className="btn btn-primary post-primary-btn">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default NewPost;