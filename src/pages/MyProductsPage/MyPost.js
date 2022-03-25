import React, {useEffect} from 'react'

import {Divider, Placeholder, Icon} from 'semantic-ui-react'
import {ReactComponent as PostImage} from 'assets/images/post.svg'
import {useSelector, useDispatch} from 'react-redux'
import * as productActions from 'redux/actions/productActions'
import ProductCard from 'components/ProductCard'

const MyPost = () => {
  const dispatch = useDispatch()
  const productPosted = useSelector(state => state.Product.productPosted.data)
  const isLoading = useSelector(state => state.Product.isLoading)
  const {page, totalPages} = useSelector(
    state => state.Product.productPosted.pagination,
  )

  useEffect(() => {
    dispatch(productActions.loadProductPosted(1))
  }, [dispatch])

  const onShowMore = () => {
    dispatch(productActions.loadProductPosted(page + 1))
  }

  const renderPlaceholder = () => {
    return (
      <Placeholder>
        <Placeholder.Line length="very long" />
        <Placeholder.Line length="medium" />
      </Placeholder>
    )
  }

  const renderProductPlaceholder = () => {
    const productPlaceholder = Array.from({length: 5})
    return (
      <div className="products-container">
        {productPlaceholder.map((_, index) => (
          <div className="product-container" key={index}>
            {renderPlaceholder()}
          </div>
        ))}
      </div>
    )
  }

  const renderProductPosted = () => {
    return (
      <div className="products-container">
        {productPosted.map(pd => (
          <ProductCard key={pd._id} product={pd} visibleDropdown={true} />
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

  const renderMyProductPosted = () => {
    const checkProductPosted =
      Array.isArray(productPosted) && productPosted.length === 0
    return checkProductPosted ? renderProductEmpty() : renderProductPosted()
  }

  const renderPosts = () => {
    return (
      <div className="posts-container">
        <div className="title-container">
          <div className="post-title">
            <h3>Posting</h3>
            <span>
              Total products - {productPosted.length}{' '}
              {productPosted.length === 1 ? 'product' : 'products'}
            </span>
          </div>
        </div>
        <Divider section />
        {renderMyProductPosted()}
        {isLoading && renderProductPlaceholder()}
        <div
          onClick={onShowMore}
          className={page < totalPages ? 'see-more' : 'hide-see-more'}>
          <p>See more</p>
          <Icon name="angle down" />
        </div>
      </div>
    )
  }

  return renderPosts()
}
export default MyPost
