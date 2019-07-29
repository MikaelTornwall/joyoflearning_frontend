import { createStore, combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import imageReducer from './reducers/imageReducer'
import messageReducer from './reducers/messageReducer'

const reducer = combineReducers({
  user: userReducer,
  images: imageReducer,
  message: messageReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => console.log(store.getState()))

export default store
