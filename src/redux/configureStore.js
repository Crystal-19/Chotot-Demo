import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Profile'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk)),
  )
  let persistor = persistStore(store)
  return {store, persistor}
}
export default configureStore
