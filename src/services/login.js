import axios from 'axios'
import imageService from '../services/images'
import userService from '../services/users'

const baseUrl = 'http://localhost:3001/api/users/login'

const login = async (credentials) => {
  const res = await axios.post(baseUrl, credentials)
  const user = await userService.getUser(res.data.id)
  user.token = res.data.token

  return user
}

export default { login }
