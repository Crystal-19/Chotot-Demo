import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'

const configureStore = () => {
  let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
  return store
}
export default configureStore
