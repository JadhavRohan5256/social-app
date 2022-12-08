import React, { useContext, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import './Post.css'
import Like from '../like/Like';

import AllPostCommets from './post-commets/AllPostCommets';
import { PostContext } from '../../App';




function Post() {
  const [isOpenCommets, setIsOpenCommets] = useState(false);
  const postDetails = useContext(PostContext);
  
  return (
    <div className="post-section">
      <div className="post-top">
        <div className="post-top-left">
          <img
            src={postDetails.userProfile}
            alt="post-profile"
          />
          <div className="post-details">
            <p className='post-profile-name'>
              {postDetails.userName}
            </p>
            <small className='posted-time'>
              {postDetails.postedTime}
            </small>
          </div>
        </div>
        <div className="post-top-right">
          <MoreVertIcon />
        </div>
      </div>
      <div className="post-desc">
        <p>
          {postDetails.postDesc}
        </p>
      </div>
      <div className="post-file">
        <img
          src={postDetails.postedFile}
          alt="post"
        />
      </div>
      <div className="post-reaction">
        <div className="post-reaction-box">
          <Like />
        </div>
        <div className="post-reaction-box" onClick={() => setIsOpenCommets(!isOpenCommets)}>
          <CommentIcon className='comments-icon reaction-icons'  />
          <small >comments</small>
        </div>
        <div className="post-reaction-box">
          <ShareIcon className='share-icon reaction-icons' />
          <small>share</small>
        </div>
      </div>

      {
        isOpenCommets &&
        <AllPostCommets />
      }
    </div>
  )
}

export default Post