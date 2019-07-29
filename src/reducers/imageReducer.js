import imageService from '../services/images'

const imageReducer = (state = [], action) => {
  switch(action.type) {
    case 'SET_IMAGES':
      return action.images
    default:
      return state
  }
}

export const initImages = () => {
  return async dispatch => {
    const images = await imageService.getAll()
    dispatch({
      type: 'SET_IMAGES',
      images
    })
  }
}

export default imageReducer
