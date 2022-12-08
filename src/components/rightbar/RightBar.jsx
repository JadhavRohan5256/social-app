import React from 'react'
import './RightBar.css'


const RightBarTop = (props) => {
  const { profile, name } = props;
  return (
    <div className="suggestion-wrapper">
      <div className="suggestion-left">
        <img
          src={profile}
          alt="profile"
        />
        <p>
          {name}
        </p>
      </div>
      <div className="suggestion-right">
        <button className='follow'>
          follow
        </button>
        <button className='dismiss'>
          dismiss
        </button>
      </div>
    </div>
  );
}

const Activity = (props) => {
  const { profile, name, activity, postTime } = props;
  return (
    <div className="activity-wrapper">
      <div className="activity-left">
        <img
          src={profile}
          alt="profile"
        />
        <div className="activity-left-box">
          <small className='activity-profile-name'>
            {name}
          </small>
          <small className="activity-mess">
            {activity}
          </small>
        </div>
      </div>
      <small className="activity-post-time">
        {postTime}
      </small>
    </div>
  );
}

const OnlineFriend = (props) => {
  const { profile, name } = props;
  return (
    <div className="online-friend-wrapper">
      <img
        src={profile}
        alt="profile"
      />
      <span className="online"></span>
      <small>
        {name}
      </small>
    </div>
  );
}

function RightBar() {
  return (
    <div className='right-bar'>

      {/* SUGGESTION WRAPPER  */}
      <div className="right-bar-wrapper">
        <p className='suggestion-title'>
          Suggestion for you
        </p>
        <div className="right-bar-suggestions">
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          
          
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
          <RightBarTop
            profile="../img/person/1.jpeg"
            name="Amol Nandivale"
          />
        </div>
      </div>

      {/* LATEST ACTIVITIES WRAPPER */}
      <div className="right-bar-wrapper">
        <p>
          Latest Activities
        </p>
        <div className="right-bar-activities">
          <Activity
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
            activity="changed their cover picture"
            postTime="1 min ago"
          />
          <Activity
            profile="../img/person/3.jpeg"
            name="Sagar Jadhav"
            activity="liked a post"
            postTime="3 min ago"
          />
          <Activity
            profile="../img/person/4.jpeg"
            name="Vishal Jadhav"
            activity="posted"
            postTime="5 min ago"
          />
         
         
          <Activity
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
            activity="changed their cover picture"
            postTime="1 min ago"
          />
          <Activity
            profile="../img/person/3.jpeg"
            name="Sagar Jadhav"
            activity="liked a post"
            postTime="3 min ago"
          />
          <Activity
            profile="../img/person/4.jpeg"
            name="Vishal Jadhav"
            activity="posted"
            postTime="5 min ago"
          />
          <Activity
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
            activity="changed their cover picture"
            postTime="1 min ago"
          />
          <Activity
            profile="../img/person/3.jpeg"
            name="Sagar Jadhav"
            activity="liked a post"
            postTime="3 min ago"
          />
          <Activity
            profile="../img/person/4.jpeg"
            name="Vishal Jadhav"
            activity="posted"
            postTime="5 min ago"
          />
          <Activity
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
            activity="changed their cover picture"
            postTime="1 min ago"
          />
          <Activity
            profile="../img/person/3.jpeg"
            name="Sagar Jadhav"
            activity="liked a post"
            postTime="3 min ago"
          />
          <Activity
            profile="../img/person/4.jpeg"
            name="Vishal Jadhav"
            activity="posted"
            postTime="5 min ago"
          />
          <Activity
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
            activity="changed their cover picture"
            postTime="1 min ago"
          />
          <Activity
            profile="../img/person/3.jpeg"
            name="Sagar Jadhav"
            activity="liked a post"
            postTime="3 min ago"
          />
          <Activity
            profile="../img/person/4.jpeg"
            name="Vishal Jadhav"
            activity="posted"
            postTime="5 min ago"
          />
          <Activity
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
            activity="changed their cover picture"
            postTime="1 min ago"
          />
          <Activity
            profile="../img/person/3.jpeg"
            name="Sagar Jadhav"
            activity="liked a post"
            postTime="3 min ago"
          />
          <Activity
            profile="../img/person/4.jpeg"
            name="Vishal Jadhav"
            activity="posted"
            postTime="5 min ago"
          />
          <Activity
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
            activity="changed their cover picture"
            postTime="1 min ago"
          />
          <Activity
            profile="../img/person/3.jpeg"
            name="Sagar Jadhav"
            activity="liked a post"
            postTime="3 min ago"
          />
          <Activity
            profile="../img/person/4.jpeg"
            name="Vishal Jadhav"
            activity="posted"
            postTime="5 min ago"
          />
          <Activity
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
            activity="changed their cover picture"
            postTime="1 min ago"
          />
          <Activity
            profile="../img/person/3.jpeg"
            name="Sagar Jadhav"
            activity="liked a post"
            postTime="3 min ago"
          />
          <Activity
            profile="../img/person/4.jpeg"
            name="Vishal Jadhav"
            activity="posted"
            postTime="5 min ago"
          />
          <Activity
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
            activity="changed their cover picture"
            postTime="1 min ago"
          />
          <Activity
            profile="../img/person/3.jpeg"
            name="Sagar Jadhav"
            activity="liked a post"
            postTime="3 min ago"
          />
          <Activity
            profile="../img/person/4.jpeg"
            name="Vishal Jadhav"
            activity="posted"
            postTime="5 min ago"
          />
        </div>
      </div>

      {/* ONLINE FRIENDS WRAPPER  */}
      <div className="right-bar-wrapper">
        <p>
          Online Friends
        </p>
        <div className="online-friends">
          <OnlineFriend
            profile="../img/person/1.jpeg"
            name="Sagar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Vishal Jadhav"
          />


          <OnlineFriend
            profile="../img/person/1.jpeg"
            name="Sagar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Vishal Jadhav"
          />
          <OnlineFriend
            profile="../img/person/1.jpeg"
            name="Sagar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Vishal Jadhav"
          />
          <OnlineFriend
            profile="../img/person/1.jpeg"
            name="Sagar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Vishal Jadhav"
          />
          <OnlineFriend
            profile="../img/person/1.jpeg"
            name="Sagar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Vishal Jadhav"
          />
          <OnlineFriend
            profile="../img/person/1.jpeg"
            name="Sagar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Vishal Jadhav"
          />
          <OnlineFriend
            profile="../img/person/1.jpeg"
            name="Sagar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Tushar Jadhav"
          />
          <OnlineFriend
            profile="../img/person/2.jpeg"
            name="Vishal Jadhav"
          />
        </div>
      </div>
    </div>
  )
}

export default RightBar