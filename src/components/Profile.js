import React, { state, useState } from 'react';
import TopBar from './TopBar';
import FeedContainer from './Feeds/FeedContainer';
import NewPost from './Feeds/NewPost';
import LeftSidebar from './LeftSidebar';

const Profile = () => {

    const [isActive, setActive] = useState("home");

    return (
        <>
            <TopBar />
            <LeftSidebar myState='profile' />
            <div className='container-fluid main-div min-vh-100'>
                <div className='row justify-content-center' style={{ marginLeft: 220 }}>
                    <div className='col-md-12 m-3 ps-0'>
                        <div className='card profile-card px-4 pt-4 border-0'>
                            <div className='cover-profile'>
                                <img src='./assets/images/profile_pic1.png' className='profile-pic rounded-circle' />
                            </div>
                            <div class="card-body profile-card-body">
                                <div className='container-fluid'>
                                    <div className='row justify-content-end'>
                                        <div className='col-6'>
                                            <table>
                                                <tr>
                                                    <td><h5 class="card-title w-800 d-inline-block">Joe Chris <br /><small className='funge-color'>@Joe Chris</small></h5> </td>
                                                    <td className='align-top'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" class="btn btn-primary edit-profile-btn px-3">Edit Profile</a></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2} className="pt-2"><p class="card-text">Joined November 2021 | Floor <b>3.75</b> | Volume <b>3.75</b> </p></td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div className='col-6'>
                                            <p className='pt-5'>
                                                <a href="#" class="btn btn-secondary"><b>1,400</b> Follower</a> &nbsp; <a href="#" class="btn btn-secondary"><b>1,400</b> Following</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 px-0'>
                        <div className='card funge-card social-card'>
                            <div className='card-body'>
                                <h6 className='w-600'>Wallet Address</h6>
                                <div class="input-group input-wallet mb-3">
                                    <span class="input-group-text icon"><img src='./assets/images/fox.png' /></span>
                                    <input type={'text'} placeholder={'1F1tAassdadsd...GNn4xqXw6'} className='form-control border-0' />
                                    <span class="input-group-text bg-transparent border-0 fa-rotate-270"><i class="fas fa-clone"></i></span>
                                </div>
                                <hr />
                                <h6 className='w-600'>Bio</h6>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </p>
                                <hr />
                                <h6 className='w-600'>Social Media</h6>
                                <div className='container-fluid p-0'>
                                    <div className='row p-0'>
                                        <div className='col-sm-12 col-md-6 px-1'>
                                            <div class="d-grid gap-3">
                                                <button class="btn btn-secondary" type="button"><img src='./assets/images/fb.png' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joechris</button>
                                                <button class="btn btn-secondary" type="button"><img src='./assets/images/insta.png' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joechris</button>
                                            </div>
                                        </div>
                                        <div className='col-sm-12 col-md-6 px-1'>
                                            <div class="d-grid gap-3">
                                                <button class="btn btn-secondary" type="button"><img className='float-start' src='./assets/images/twitter.png' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joechris</button>
                                                <button class="btn btn-secondary" type="button"><img src='./assets/images/discord.png' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Joechris</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8 col-sm-12'>
                        <div className='card funge-card'>
                            <ul class="nav nav-pills profile-pills mt-4 mx-4">
                                <li class="nav-item">
                                    <a class="nav-link active" data-bs-toggle="pill" href="#socialPosts">Social Posts</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="pill" href="#collections">Collections</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="pill" href="#creations">Creations</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="pill" href="#savedPosts">Saved posts</a>
                                </li>
                            </ul>

                            <div class="tab-content">
                                <div class="tab-pane container active" id="socialPosts">
                                    <FeedContainer />
                                </div>
                                <div class="tab-pane container fade" id="collections">
                                    <h1 className='text-center m-5'>Collections</h1>
                                </div>
                                <div class="tab-pane container fade" id="creations">
                                    <h1 className='text-center m-5'>Creations</h1>
                                </div>
                                <div class="tab-pane container fade" id="savedPosts">
                                    <h1 className='text-center m-5'>Saved Posts</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}


export default Profile;