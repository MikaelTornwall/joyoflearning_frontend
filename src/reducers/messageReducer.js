const messageReducer = (state = null, action) => {
  switch(action.type) {
    case 'SET_ERRORMESSAGE':
      return action.message
    case 'SET_MESSAGE':
        return action.message
    default:
      return state
    }
}

export const setErrorMessage = message => {
  return {
    type: 'SET_ERRORMESSAGE',
    message
  }
}

export default messageReducer
