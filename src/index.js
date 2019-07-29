import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import userReducer, { assignUser } from './reducers/userReducer'
import imageReducer, { initImages } from './reducers/imageReducer'
import imageService from './services/images'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import store from './store'



const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)
