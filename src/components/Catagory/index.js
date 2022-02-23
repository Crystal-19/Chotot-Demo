import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {Image} from 'semantic-ui-react'
import * as categoryActions from 'redux/actions/categoryActions'

import './styles.scss'

const Catalog = () => {
  const categories = useSelector(state => state.Category.category)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(categoryActions.loadCategory())
  }, [dispatch])

  return (
    <div className="general-container container">
      <h3>Explore categories</h3>
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
    </div>
  )
}
export default Catalog
