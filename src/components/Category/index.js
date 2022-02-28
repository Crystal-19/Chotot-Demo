import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'

import {Image, Placeholder} from 'semantic-ui-react'
import * as categoryActions from 'redux/actions/categoryActions'

import './styles.scss'

const Catalog = ({dispatch}) => {
  const categories = useSelector(state => state.Category.category)
  const isLoading = useSelector(state => state.Category.isLoading)

  useEffect(() => {
    dispatch(categoryActions.loadCategory())
  }, [dispatch])

  const renderPlaceHolder = () => {
    return <Placeholder className="catalog-img" />
  }

  const renderPlaceholderList = () => {
    const placeholderList = Array.from({length: 7})
    return (
      <div className="scroll-container">
        <div className="catalog-container scroll-container">
          {placeholderList.map((_, index) => (
            <div key={index} className="items-container">
              {renderPlaceHolder()}
            </div>
          ))}
        </div>
      </div>
    )
  }

  const renderCategoryItems = () => {
    return (
      <div className="scroll-container">
        <div className="catalog-container scroll-container">
          {categories.map(item => (
            <div key={item._id} className="items-container">
              <Image className="catalog-img" src={item.imageUrl} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="general-container container">
      <h3>Explore categories</h3>
      {isLoading && renderPlaceholderList()}
      {renderCategoryItems()}
    </div>
  )
}
export default Catalog
