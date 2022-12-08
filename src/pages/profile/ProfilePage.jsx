import React, { useContext } from 'react'
import FacebookIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationIcon from '@mui/icons-material/LocationOn';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';
import MoreIcon from '@mui/icons-material/MoreVert';
import './ProfilePage.css'
import { Link } from 'react-router-dom';
import { PostContext } from '../../App';
import Post from '../../components/post/Post';


function ProfilePage() {
  const postApi = useContext(PostContext);
  return (
    <div className='profile-content'>
      <div className="cover-profile">
        <img src="../img/post/3.jpeg" alt="" />
      </div>
      <div className="profile-wrapper">
        <div className="profile-section">
          <img src="../img/person/1.jpeg" alt="profile" />
          <p>rohan jadhav</p>
        </div>
        <div className="profile-middle">
          <div className="profile-social-icons">
            <Link to="#">
              <FacebookIcon className="social-icons" />
            </Link>
            <Link to="#">
              <InstagramIcon className="social-icons" />
            </Link>
            <Link to="#">
              <LinkedInIcon className="social-icons" />
            </Link>
          </div>
          <div className="profile-location">
            <Link to="#">
              <LocationIcon className="profile-location-icons" />
               <small>location</small>
            </Link>
            <Link to="#">
              <LanguageIcon className="profile-location-icons" />
               <small>languages</small>
            </Link>
          </div>
          <div className="profile-more-about">
            <Link to="#">
               <EmailIcon className="profile-more-icons" />
            </Link>
            <Link to="#">
              <MoreIcon className="profile-more-icons" />
            </Link>
          </div>
        </div>
        <div className="profile-bottom">
          <button className="profile-follow">
            follow
          </button>
        </div>
      </div>
      <div className="posts-wrapper">
        {
          postApi.map(post => {
              return(
                <PostContext.Provider value={post} key={post.postId} >
                  <Post />
                </PostContext.Provider>
              )
          })
        }
      </div>
    </div>
  )
}

export default ProfilePage