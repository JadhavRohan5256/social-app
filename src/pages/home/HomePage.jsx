import React, { useContext } from 'react'
import { PostContext } from '../../App'
import Post from '../../components/post/Post'
import Stories from '../../components/stories/Stories'
import './HomePage.css'


function HomePage() {
  const postApi = useContext(PostContext);
  return (
    <div className='home-content'>
      <Stories />
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

export default HomePage