import {combineReducers} from 'redux'

import productReducer from './productReducer'

const rootReducer = combineReducers({
  Product: productReducer
})
export default rootReducer
