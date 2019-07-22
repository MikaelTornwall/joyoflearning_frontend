import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/courses'
let token = null

const setToken = (newToken) => {
  token = `bearer ${newToken}`
  console.log('New token is: ', token)
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const getCourse = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  console.log('I found this: ', res.data)
  return res.data
}

const create = async (courseObject) => {
  const config = {
    headers: { 'Authorization': token }
  }
  console.log('token: ', token)
  const res = await axios.post(baseUrl, courseObject, config)
  return res.data
}

module.exports = { getAll, getCourse, create, setToken }
