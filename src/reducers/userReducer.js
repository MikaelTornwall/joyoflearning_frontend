import courseService from '../services/courses'
import userService from '../services/users'

const userReducer = (state = null, action) => {
  switch(action.type) {
    case 'ASSIGN_USER':
      return action.user
    case 'LOGOUT':
      return action.user
    default:
      return state
    }
}

export const assignUser = id => {
  return async dispatch => {
    const user = await userService.getUser(id)
    window.localStorage.setItem('loggedUser', JSON.stringify(user))
    dispatch({
      type: 'ASSIGN_USER',
      user
    })
  }
}

export const removeCourse = (id, userId) => {
  return async dispatch => {
    await courseService.remove(id)
    const user = await userService.getUser(userId)
    window.localStorage.setItem('loggedUser', JSON.stringify(user))
    dispatch({
      type: 'ASSIGN_USER',
      user
    })
  }
}

export const logout = () => {
  console.log("IT'S WORKING!")
  window.localStorage.removeItem('loggedUser')
  return {
    type: 'LOGOUT',
    user: null
  }
}

export default userReducer
