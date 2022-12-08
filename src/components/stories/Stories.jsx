import React, { useContext } from 'react'
import './Stories.css'
import AddIcon from '@mui/icons-material/Add';
import { AuthContext } from '../context/AuthContextProvider';

function Stories() {
  const {user} = useContext(AuthContext);
  return (
    <div className="stories-wrapper">
        <div className="story">
            <img 
                src={user.userProfile}
                alt="profile-story" 
            />
            <small>{user.userName}</small>
            <AddIcon className="add-story" />
        </div>
        <div className="story">
            <img 
                src="img/post/1.jpeg"
                alt="story" 
            />
            <small className="story-name">rohan jadhav</small>
        </div>
       
        <div className="story">
            <img 
                src="img/post/3.jpeg"
                alt="story" 
            />
            <small className="story-name">vishal jadhav</small>
        </div>
        <div className="story">
            <img 
                src="img/post/4.jpeg"
                alt="story" 
            />
            <small className="story-name">tushar jadhav</small>
        </div>
    </div>
  )
}

export default Stories