import App from './App'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import configureStore from './store'
import 'antd/dist/antd.css';
import './css/common.css'
const store = configureStore()

render(
  <Provider store={store}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
  module.hot.dispose((data) => {
    data.store = store
  })
}
