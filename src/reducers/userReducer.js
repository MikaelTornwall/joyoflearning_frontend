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

export const assignUser = (user) => {
  return {
    type: 'ASSIGN_USER',
    user
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
