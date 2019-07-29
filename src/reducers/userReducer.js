const userReducer = (state = [], action) => {
  console.log('Reducer state: ', state)
  console.log('Reducer action: ', action)
  switch(action.type) {
    case 'ASSIGN_USER':
      state = action.user
      console.log('New state: ', state)
      return state
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

export default userReducer
