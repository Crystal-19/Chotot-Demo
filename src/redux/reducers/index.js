import {combineReducers} from 'redux'

import productReducer from './productReducer'
import categoryReducer from './categoryReducer'

const rootReducer = combineReducers({
  Category: categoryReducer,
  Product: productReducer,
})
export default rootReducer
