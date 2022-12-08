import React, { useState } from 'react'
import './Like.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Like = () => {
    const totalLike = 33;
    const [like, setLike] = useState(false);
    function clickHandler() {
      setLike(!like);
    }
    return (
      <>
        {
          like
            ? <FavoriteIcon className='like-icon reaction-icons' onClick={clickHandler} />
            : <FavoriteBorderIcon className='not-like-icon reaction-icons' onClick={clickHandler} />
        }
        <small>{like ? totalLike + 1 : totalLike} Likes</small>
      </>
    );
  }

export default React.memo(Like);