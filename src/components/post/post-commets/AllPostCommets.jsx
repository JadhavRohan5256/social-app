import React, { useContext } from 'react'
import './AllPostCommets.css'
import SearchIcon from '@mui/icons-material/Search';
import { AuthContext } from '../../context/AuthContextProvider';
import { PostContext } from '../../../App';

const Commets = (props) => {
    const { commetsDetails } = props;
    return (
        <div className="all-commets-box">
            <div className="all-commets-left">
                <img
                    src={commetsDetails.userProfile}
                    alt="sended commets profile"
                />
            </div>
            <div className="all-commets-right">
                <p className='all-commets-name'>
                    {commetsDetails.userName}
                </p>
                <span className='all-commets-desc'>
                    {commetsDetails.commetsDesc}
                </span>
            </div>
            <div className="all-commets-time">
                <small>
                    {commetsDetails.commetedTime}
                </small>
            </div>
        </div>
    )
}


function AllPostComments() {
    const postDetails = useContext(PostContext);
    const {user} = useContext(AuthContext);
    const commetsApi = postDetails.postCommets;
    return (
        <div className="commets-wrapper">
            <div className="send-commets-wrapper">
                <div className="send-commets-profile">
                    <img
                        src={user.userProfile}
                        alt="post-commets-profile"
                    />
                </div>
                <div className="send-commets-box">
                    <SearchIcon />
                    <input
                        type="text"
                        name='sendCommets'
                        id='sendCommets'
                        placeholder='write commets here...'
                    />
                    <button className='commets-send'>send</button>
                </div>

            </div>

            {/* rendering each commets one by one  */}
            <div className="all-commets-wrapper">
                {
                    commetsApi.map(commets => {
                        return <Commets
                            key={commets.commetsId} commetsDetails={commets}
                        />
                    })
                }
            </div>
        </div>
    );
}

export default React.memo(AllPostComments);