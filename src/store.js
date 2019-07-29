import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer, { assignUser } from './reducers/userReducer'
import imageReducer, { initImages } from './reducers/imageReducer'

const reducer = combineReducers({
  user: userReducer,
  images: imageReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => console.log(store.getState()))

const user = {
  username: "Testimies",
  id: "12345",
  role: "Admin"
}

store.dispatch(assignUser(user))

export default store
