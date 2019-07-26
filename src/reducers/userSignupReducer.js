const userSignupReducer = (state = null, action) => {
  console.log('Reducer state: ', state)
  console.log('Reducer action: ', action)
  switch(action.type) {
    case 'ASSIGN_USER':
      state = action.data
      console.log('New state: ', state)
      return state
    default:
      return state
    }
}

export default { userSignupReducer }
