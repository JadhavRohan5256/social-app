import React from 'react'
import { Link } from 'react-router-dom'
import './LeftBar.css'
function LeftBar() {
  return (
    <div className="left-bar">
        <div className="left-bar-top">
            {/* <div className="left-box">
              <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="profile png" />
              <Link to="#">Friends</Link>
            </div> */}
            <div className="left-box">
              <img src="../img/assets/1.png" alt="friends png" />
              <Link to="#">Friends</Link>
            </div>
            <div className="left-box">
              <img src="../img/assets/2.png" alt="groups png" />
              <Link to="#">Groups</Link>
            </div>
            <div className="left-box">
              <img src="../img/assets/3.png" alt="marketplace png" />
              <Link to="#">Marketplace</Link>
            </div>
            <div className="left-box">
              <img src="../img/assets/4.png" alt="watch png" />
              <Link to="#">Watch</Link>
            </div>
            <div className="left-box">
              <img src="../img/assets/5.png" alt="memories png" />
              <Link to="#">Memories</Link>
            </div>
        </div>
        <div className="left-bar-middle">
          <div className="left-box">
            <span>Your stories</span>
          </div>
          <div className="left-box">
            <img src="../img/assets/6.png" alt="events png" />
            <Link to="#">Events</Link>
          </div>
          <div className="left-box">
            <img src="../img/assets/7.png" alt="gaming png" />
            <Link to="#">Gaming</Link>
          </div>
          <div className="left-box">
            <img src="../img/assets/8.png" alt="gallery png" />
            <Link to="#">Gallery</Link>
          </div>
          <div className="left-box">
            <img src="../img/assets/9.png" alt="video png" />
            <Link to="#">video</Link>
          </div>
          <div className="left-box">
            <img src="../img/assets/10.png" alt="message png" />
            <Link to="#">Messages</Link>
          </div>
        </div>
        <div className="left-bar-bottom">
          <div className="left-box">
            <span>others</span>
          </div>
          <div className="left-box">
            <img src="../img/assets/13.png" alt="profile png" />
            <Link to="#">Events</Link>
          </div>
          <div className="left-box">
            <img src="../img/assets/11.png" alt="tutorial png" />
            <Link to="#">Tutorial</Link>
          </div>
          <div className="left-box">
            <img src="../img/assets/12.png" alt="courses png" />
            <Link to="#">Courses</Link>
          </div>
        </div>
    </div>
  )
}

export default LeftBar