import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer/index'

let storeInstance

export default function configureStore (initialState) {
  storeInstance = storeInstance || createStore(reducer, applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    initialState
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducer/index', () => {
      // const nextRootReducer = require('./reducer');
      storeInstance.replaceReducer(reducer)
    })
  }

  return storeInstance
}
