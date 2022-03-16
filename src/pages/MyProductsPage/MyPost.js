import React, {useEffect} from 'react'

import {Divider} from 'semantic-ui-react'
import {ReactComponent as PostImage} from 'assets/images/post.svg'
import {useSelector, useDispatch} from 'react-redux'
import * as productActions from 'redux/actions/productActions'
import ProductCard from 'components/ProductCard'

const MyPost = () => {
  const dispatch = useDispatch()
  const productPosted = useSelector(state => state.Product.productPosted.data)

  useEffect(() => {
    dispatch(productActions.loadProductPosted())
  }, [dispatch])

  const renderProductPosted = () => {
    return (
      <div className="products-container">
        {productPosted.map(pd => (
          <ProductCard key={pd._id} product={pd} />
        ))}
      </div>
    )
  }

  const renderProductEmpty = () => {
    return (
      <div className="post-content">
        <PostImage />
        <p>
          You don&#8217;t have any personal listings for sale, try posting them
          now.
        </p>
        <button>POST</button>
      </div>
    )
  }

  const renderPosts = (title, news, content, buttonContent) => {
    return (
      <div className="posts-container">
        <div className="post-title">
          <h3>Posting</h3>
          <span>news - {productPosted.length} news</span>
        </div>
        <Divider section />
        {Array.isArray(productPosted) && productPosted.length === 0
          ? renderProductEmpty()
          : renderProductPosted()}
      </div>
    )
  }

  return renderPosts()
}
export default MyPost
