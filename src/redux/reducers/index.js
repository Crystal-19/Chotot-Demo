import {combineReducers} from 'redux'

import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  Category: categoryReducer,
  Product: productReducer,
  Auth: authReducer,
})
export default rootReducer
