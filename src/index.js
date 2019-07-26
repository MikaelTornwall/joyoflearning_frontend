import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import userReducer from './reducers/userSignupReducer'
import { createStore } from 'redux'

const store = createStore(userReducer.userSignupReducer)

store.dispatch({
  type: 'ASSIGN_USER',
  data: {
    username: 'Testi',
    id: "123",
    role: 'Admin'
  }
})

const renderApp = () => {
  ReactDOM.render(
    <div>
    {store.getState().username}
    <App />
    </div>,
    document.getElementById('root')
  )
}

renderApp()
store.subscribe(renderApp)
