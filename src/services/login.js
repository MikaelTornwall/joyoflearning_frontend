import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/users/login'

let token = null

const getToken = () => {
  return token
}

const setToken = (newToken) => {
    token = `bearer ${newToken}`
}

const login = async (credentials) => {
  const res = await axios.post(baseUrl, credentials)
  return res.data
}

export default { login, getToken, setToken }
