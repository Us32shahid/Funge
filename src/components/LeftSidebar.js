import React,{state, useState} from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = (props) => {

  const [isActive,setActive] = useState(props.myState);

  return (
    <>
      <div className="position-absolute flex-shrink-0 p-3 bg-white pt-5 min-vh-100 h-100" style={{ maxWidth: 280 }}>
            <ul className="list-unstyled ps-0">
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                  <i className="fas fa-align-left me-3 funge-color"></i>Feeds <i className="fas fa-angle-up float-end"></i>
                </button>
                <div className="collapse show" id="home-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><Link to="/feeds" className={` ${isActive === "home" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Home</Link></li>
                    <li><Link to="/notifications" className={` ${isActive === "notifications" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Notifications</Link></li>
                    <li><Link to="/messages" className={` ${isActive === "messages" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Messages</Link></li>
                    <li><Link to="/saved" className={` ${isActive === "saved" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Saved</Link></li>
                    <li><Link to="/profile" className={` ${isActive === "profile" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Profile</Link></li>
                  </ul>
                </div>
              </li>
              <li className="mb-2">
                <button className="btn btn-toggle align-items-center rounded collapsed w-100 text-start" data-bs-toggle="collapse" data-bs-target="#explore-collapse" aria-expanded="true">
                <i className="fas fa-store me-3 funge-color"></i> Explore <i className="fas fa-angle-down float-end"></i>                
                </button>
                <div className="collapse" id="explore-collapse">
                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                    <li><a href="#" className={` ${isActive === "home1" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Home</a></li>
                    <li><a href="#" className={` ${isActive === "notifications1" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Notifications</a></li>
                    <li><a href="#" className={` ${isActive === "messages1" ? 'link-dark rounded active-link' : 'link-dark rounded'}`}>Messages</a></li>
                  </ul>
                </div>
              </li> 
              <li className="mb-2">
                <Link to="/wallet">
                <button className={`btn btn-toggle align-items-center rounded collapsed w-100 text-start ${isActive === "wallet" ? 'funge-color' : ''}`}>
                <i className="fas fa-chart-pie me-3 funge-color"></i> Wallet
                </button>
                </Link>
              </li>
              <li className="mb-2">
                <button className={`btn btn-toggle align-items-center rounded collapsed w-100 text-start ${isActive === "analytics" ? 'funge-color' : ''}`}>
                <i className="fa fa-folder-open me-3 funge-color"></i>Analytics
                </button>
              </li>
              <li className="mb-2">
                <button className={`btn btn-toggle align-items-center rounded collapsed w-100 text-start ${isActive === "media" ? 'funge-color' : ''}`}>
                <i className="fa fa-briefcase me-3 funge-color"></i> Media
                </button>
              </li>
              <li className="mb-2">
                <button className={`btn btn-toggle align-items-center rounded collapsed w-100 text-start ${isActive === "refer" ? 'funge-color' : ''}`}>
                <i className="fa fa-briefcase me-3 funge-color"></i> Refer and Earn
                </button>
              </li>
              <li className="mb-2">
                <button className={`btn btn-toggle align-items-center rounded collapsed w-100 text-start ${isActive === "hire" ? 'funge-color' : ''}`}>
                <i className="fa fa-briefcase me-3 funge-color"></i> Hire
                </button>
              </li>
              <li className="mb-2">
                <button className={`btn btn-toggle align-items-center rounded collapsed w-100 text-start ${isActive === "rewards" ? 'funge-color' : ''}`}>
                <i className="fa fa-briefcase me-3 funge-color"></i> Rewards
                </button>
              </li>
            </ul>
          </div>
    </>
  )

}


export default LeftSidebar;