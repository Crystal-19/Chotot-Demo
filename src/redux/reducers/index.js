import {combineReducers} from 'redux'

import productReducer from './productReducer'
import categoryReducer from './categoryReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'
import signupReducer from './signupReducer'

const rootReducer = combineReducers({
  Category: categoryReducer,
  Product: productReducer,
  Auth: authReducer,
  Profile: profileReducer,
  Signup: signupReducer,
})
export default rootReducer
