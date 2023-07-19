import React, { state, useState } from 'react';
import TopBar from './TopBar';
import FeedContainer from './Feeds/FeedContainer';
import NewPost from './Feeds/NewPost';
import LeftSidebar from './LeftSidebar';

const Feeds = () => {

  const [isActive, setActive] = useState("home");

  return (
    <>
      <TopBar />
      <LeftSidebar myState='home'/>
      <div className='container-fluid main-div min-vh-100'>
      <div className='row justify-content-between' style={{ marginLeft: 220 }}>
          <div className='col-md-6'>
            <NewPost />
            <FeedContainer />
          </div>
          <div className='col-md-3'>

          </div>
        </div>
      </div>
    </>
  )

}


export default Feeds;