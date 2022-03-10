import {combineReducers} from 'redux'

import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
  Category: categoryReducer,
  Product: productReducer,
  Auth: authReducer,
  Profile: profileReducer,
})
export default rootReducer
