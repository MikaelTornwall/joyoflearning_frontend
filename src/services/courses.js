import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/courses'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const getCourse = async (id) => {
  const res = await axios.get(`${baseUrl}/${id}`)
  console.log('I found this: ', res.data)
  return res.data
}

const create = async (courseObject, token) => {
  const res = await axios.post(baseUrl, courseObject)
  return res.data
}

module.exports = { getAll, getCourse, create }
