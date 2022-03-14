import React from 'react'

import {Divider} from 'semantic-ui-react'
import {ReactComponent as PostImage} from 'assets/images/post.svg'

const MyPost = () => {
  const renderPosts = (title, news, content, buttonContent) => {
    return (
      <div className="posts-container">
        <div className="post-title">
          <h3>Posting</h3>
          <span>news - 0 news</span>
        </div>
        <Divider section />
        <div className="post-content">
          <PostImage />
          <p>
            You don&#8217;t have any personal listings for sale, try posting
            them now.
          </p>
          <button>POST</button>
        </div>
      </div>
    )
  }

  return renderPosts()
}
export default MyPost
